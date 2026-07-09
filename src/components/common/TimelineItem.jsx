import { cn } from "../../utils/cn";

export const TimelineItem = ({ title, description, isLast, className }) => {
  return (
    <div className={cn("relative pl-10 sm:pl-12 pb-12 group", className)}>
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border group-hover:bg-accent-primary/40 transition-colors duration-500" />
      )}
      
      {/* Circular Marker */}
      <div className="absolute left-0 top-1.5 w-6 h-6 bg-bg rounded-full border-2 border-border group-hover:border-accent-primary transition-colors duration-500 flex items-center justify-center z-10 shadow-sm">
        <div className="w-2 h-2 bg-transparent group-hover:bg-accent-primary rounded-full transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="pt-1 transform transition-transform duration-500 group-hover:translate-x-1">
        <h3 className="text-h3 text-text-primary mb-3 font-semibold group-hover:text-accent-primary transition-colors duration-500">
          {title}
        </h3>
        <p className="text-body-large text-text-secondary max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
