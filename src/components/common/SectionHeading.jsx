import { cn } from "../../utils/cn";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
  className
}) => {
  return (
    <div className={cn(
      "flex flex-col gap-5",
      centered ? "text-center items-center" : "text-left items-start",
      className
    )}>
      {eyebrow && (
        <span className="text-accent-primary font-semibold text-small tracking-wider uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-h2">
        {title}
      </h2>
      {description && (
        <p className="text-body-large text-text-secondary max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
