# Real Device Navigation & Theme Audit (Release Engineering Pack 010.4)

## Issue 1: Real Mobile Anchor Navigation Gap

### Root Cause
The root cause is a **layout shift caused by dynamic viewport height recalculation**. 
On real mobile devices (both Android Chrome and iPhone Safari), the browser address bar dynamically hides when a user scrolls down. The `Hero` section is styled with `min-h-screen` (which resolves to `100vh`). When the address bar collapses, the browser recalculates `100vh` to a larger physical pixel value, increasing the height of the `Hero` section mid-scroll.
When you click an anchor link, the browser calculates the target Y-coordinate based on the *current* layout and begins smooth-scrolling. Halfway through the scroll, the `Hero` section expands, pushing all subsequent sections (About, Skills, etc.) further down the page. The scroll finishes at the originally calculated Y-coordinate, which is now physically above the target section, leaving a gap that reveals the bottom of the previous section.

### Determination Checklist
1. **Is the current scroll-margin value incorrect only on real devices?** No, `57px` is mathematically correct. The issue is the target element physically moving down during the scroll.
2. **Does the browser UI affect the viewport calculation?** Yes, the collapsing address bar triggers a `100vh` recalculation.
3. **Would CSS variables based on measured navbar height be more robust?** No, the height calculation of the navbar is not the problem.
4. **Would scroll-padding-top be more appropriate?** No, this behaves identically to `scroll-margin-top` and does not prevent layout shifts.
5. **Does safe-area-inset-top influence the final scroll position?** While present on iOS, it is not the cause of the gap.
6. **Is this a browser implementation difference?** Yes, desktop browsers and DevTools emulators maintain a static `100vh`. Real mobile browsers dynamically change `100vh` when scrolling.

### Risk Assessment
- **Medium**. It creates a disjointed UX on mobile navigation but does not break functionality or accessibility.

### Recommended Fix
Replace `min-h-screen` in `Hero.jsx` with `min-h-[100svh]` (Small Viewport Height). 
`100svh` represents the viewport height *when the address bar is visible* and remains completely static even when the address bar hides. This prevents the `Hero` section from expanding mid-scroll, completely eliminating the layout shift.

---

## Issue 2: Theme Initialization Persistence

### Root Cause
In `ThemeProvider.jsx`, the `useState` initializer determines the initial theme. If no theme is found in `localStorage` (i.e., the first visit), it calls `window.matchMedia('(prefers-color-scheme: dark)')` to resolve the OS theme immediately to either `'dark'` or `'light'`. 
The `useEffect` then immediately writes this resolved value (e.g., `'light'`) into `localStorage`. On all subsequent visits, the app reads `'light'` from `localStorage` and applies it. The OS theme does not override the app after the first load; rather, the OS theme dictated the *first load's* value, which was then permanently locked in.

### Determination Checklist
1. **Where is the default theme chosen?** In `src/theme/ThemeProvider.jsx` inside the `useState` initializer callback.
2. **Why does system preference override the portfolio?** Because the fallback for a missing `localStorage` key is a direct OS preference check, which is then immediately saved to `localStorage`.
3. **Can the default safely become Dark without affecting persistence?** Yes, by changing the fallback in the `useState` initializer from the `matchMedia` check to a hardcoded `'dark'` string.
4. **Will this affect hydration?** No, the app is a client-side React SPA (Vite) without SSR. However, without a blocking script in `index.html`, changing the default to dark might cause a brief Flash of Unstyled Content (FOUC) where the page renders light before React mounts.
5. **Will this affect Lighthouse?** A FOUC could cause minor layout shifts or paint delays, but Lighthouse is mostly theme-agnostic.

### Risk Assessment
- **Low**. Changing the default theme is safe, but FOUC prevention must be handled to maintain a premium feel.

### Recommended Fix
1. Update `ThemeProvider.jsx` `useState` initializer to strictly fallback to `'dark'`:
   ```javascript
   const stored = localStorage.getItem('theme');
   if (stored) return stored;
   return 'dark'; // Always default to dark
   ```
2. **(FOUC Prevention)** Inject a small, render-blocking `<script>` into the `<head>` of `index.html` to synchronously read `localStorage` and apply the `.dark` class to `<html>` before React loads:
   ```html
   <script>
     const theme = localStorage.getItem('theme');
     if (theme === 'dark' || !theme) {
       document.documentElement.classList.add('dark');
     }
   </script>
   ```

### Production Recommendation
Both recommended fixes (`100svh` and Dark Theme Default + Blocking Script) are highly robust, industry-standard solutions that perfectly resolve the described issues without altering the visual design or component architecture.
