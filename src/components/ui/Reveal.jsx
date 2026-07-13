import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../utils/cn';

export const Reveal = ({ 
  children, 
  className,
  delay = 0, // Delay in seconds (e.g. 0.05 for stagger)
  rootMargin = '-50px 0px',
  as: Component = "div"
}) => {
  const { ref, isRevealed } = useReveal({ rootMargin });

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={cn(
        // Base transition properties
        "transition-all duration-[600ms] ease-out",
        // Fallback for reduced motion: instantly reveal, no transition
        "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
        // Animation states
        isRevealed 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4", // 16px
        className
      )}
    >
      {children}
    </Component>
  );
};
