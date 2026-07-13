import { cn } from "../../utils/cn";

export const Section = ({ 
  children, 
  className = "", 
  id, 
  'aria-labelledby': ariaLabelledby,
  variant = "default",
  spacing = "default"
}) => {
  const variants = {
    default: "bg-bg",
    surface: "bg-surface",
    secondary: "bg-surface-secondary",
    glass: "glass-panel"
  };

  const spacings = {
    none: "py-0",
    sm: "py-8 md:py-12",
    default: "py-12 md:py-16 lg:py-24",
    lg: "py-20 md:py-24 lg:py-32"
  };

  return (
    <section 
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "scroll-mt-[57px] md:scroll-mt-[69px] lg:scroll-mt-[61px]",
        variants[variant],
        spacings[spacing],
        className
      )}
    >
      {children}
    </section>
  );
};
