import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export const Badge = forwardRef(({
  className,
  variant = "default",
  children,
  ...props
}, ref) => {
  const variants = {
    default: "bg-surface-secondary text-text-primary",
    primary: "bg-accent-primary/10 text-accent-primary dark:bg-accent-primary/20",
    success: "bg-success/10 text-success dark:bg-success/20",
    warning: "bg-warning/10 text-warning dark:bg-warning/20",
    outline: "bg-transparent text-text-primary border border-border"
  };

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center px-2.5 py-px rounded-full text-caption font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";
