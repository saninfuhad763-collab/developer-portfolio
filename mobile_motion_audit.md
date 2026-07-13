# Mobile Motion Compatibility Audit (Release Engineering Pack 010.2)

## 1. Root Cause
The failure of section reveal animations on real mobile devices is caused by a combination of three distinct factors specific to mobile browsers and responsive layouts:

1. **Sub-pixel Rounding / Floating-Point Imprecision (The Silent Failure):**
   Real mobile devices (especially iPhones with WebKit) use sub-pixel rendering for high-DPI displays (`devicePixelRatio` of 2 or 3). When the `IntersectionObserver` detects that an element has crossed the `0.2` threshold, it fires the callback. However, due to floating-point math, Safari frequently reports the `intersectionRatio` as slightly below the threshold (e.g., `0.199998`). 
   Because our logic strictly checks `entry.intersectionRatio >= targetThreshold`, this condition evaluates to `false`. The event is swallowed, and since observers only fire on *crossing* the threshold, it never fires again, leaving the element permanently invisible (`opacity-0`).

2. **The Tall Container Mathematical Impossibility (Viewport Constraint):**
   On mobile, responsive layouts stack vertically (e.g., `grid-cols-1`). For large wrapped containers like the `Footer` grid or the `About` text column, the element's total height can exceed 1500px. 
   If a mobile viewport is only 600px tall, the maximum possible `intersectionRatio` for a 1500px element is `0.4`. If the element is 3500px tall, the maximum ratio is `0.17`. If the max ratio is `0.17`, it is mathematically impossible to ever reach the `0.2` threshold. The observer will never fire for `0.2`, meaning the section will never animate in.

3. **iOS Low Power Mode (Accessibility Interference):**
   When an iPhone drops below 20% battery or is placed in Low Power Mode, iOS automatically enables the `prefers-reduced-motion` flag at the OS level. Our `useReveal` hook correctly detects this and disables animations to respect user accessibility. Testers often misinterpret this intended battery-saving feature as a "broken animation" bug on real devices.

## 2. Evidence
**File:** `src/hooks/useReveal.js`
```javascript
// Issue 1: Strict floating-point comparison fails on WebKit sub-pixel rounding
if (entry.isIntersecting && entry.intersectionRatio >= targetThreshold) 
```
**File:** `src/components/layout/Footer.jsx`
```javascript
// Issue 2: Wraps a massive grid that stacks vertically on mobile, making the 0.2 ratio impossible to reach
<Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16 md:mb-4">
```

## 3. Risk Assessment
- **Desktop / Tablet:** Low/No Risk. Elements are arranged horizontally (shorter height) and desktop browsers typically handle floating-point boundaries more cleanly.
- **Mobile:** **CRITICAL RISK**. Content remains stuck at `opacity: 0`, completely hiding portfolio sections from employers viewing on mobile.
- **Performance / SEO / Accessibility:** Unaffected. The content exists in the DOM, so SEO and screen readers still parse it.

## 4. Recommended Fix
The safest, most robust production fix is to abandon ratio-based `threshold` triggering in favor of **`rootMargin` offset triggering**.

By using `threshold: 0` and applying a negative `rootMargin` (e.g., `-50px 0px`), the browser shrinks the intersection boundary by 50px. The observer fires exactly when the element enters 50px into the viewport, **regardless of how tall the element is or what floating-point ratio it yields**.

```javascript
// Safest Implementation for useReveal.js
export const useReveal = ({ rootMargin = '-50px 0px', triggerOnce = false } = {}) => {
  // ... state initialization
  useEffect(() => {
    // ... setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce) observer.disconnect();
        } else {
          if (!triggerOnce) setIsRevealed(false);
        }
      },
      { threshold: 0, rootMargin }
    );
    // ...
```

## 5. Alternative Fixes
**Alternative 1: Floating-Point Epsilon Tolerance**
Keep `threshold: 0.2`, but add a mathematical tolerance.
`if (entry.isIntersecting && entry.intersectionRatio >= targetThreshold - 0.05)`
*Why not?* It fixes the Safari rounding bug, but it does NOT fix the Tall Container issue. A 5000px element still won't animate.

**Alternative 2: Fallback to Intersection Rect Height**
Check if the element fully covers the viewport.
`if (entry.intersectionRatio >= 0.2 || entry.intersectionRect.height >= entry.rootBounds.height)`
*Why not?* It works, but extremely tall elements will only reveal when they hit the very top of the screen, creating a delayed, jarring pop-in effect.

## 6. Production Recommendation
**Proceed with the Recommended Fix (`rootMargin` offset triggering).**
It is computationally cheaper, fundamentally immune to the tall-element mathematical impossibility, sidesteps all WebKit floating-point bugs, and behaves identically across desktop, tablet, and mobile.
