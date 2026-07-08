import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  isLoading = false, 
  disabled, 
  children, 
  type = "button",
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-accent-primary text-white hover:bg-accent-hover border border-transparent shadow-sm",
    secondary: "bg-surface-secondary text-text-primary hover:bg-border border border-border shadow-sm",
    ghost: "bg-transparent text-text-primary hover:bg-surface-secondary border border-transparent",
    outline: "bg-transparent text-text-primary border border-border hover:bg-surface-secondary"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-small rounded-sm",
    md: "px-4 py-2 text-body rounded-md",
    lg: "px-6 py-3 text-body-large rounded-lg"
  };

  const isDisabled = disabled || isLoading;

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
});

Button.displayName = "Button";
