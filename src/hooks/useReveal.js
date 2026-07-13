import { useEffect, useRef, useState } from 'react';

export const useReveal = ({ rootMargin = '-50px 0px', triggerOnce = false } = {}) => {
  const ref = useRef(null);
  const [prefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  
  const [isRevealed, setIsRevealed] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentRef = ref.current;
    if (!currentRef) return;

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

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, triggerOnce, prefersReducedMotion]);

  return { ref, isRevealed };
};
