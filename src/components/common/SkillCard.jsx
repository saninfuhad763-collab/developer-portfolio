import { cn } from "../../utils/cn";
import { Badge } from "../ui/Badge";

export const SkillCard = ({ title, description, icon, skills, className }) => {
  return (
    <div 
      className={cn(
        "px-7 py-6 bg-surface border border-border/60 rounded-2xl shadow-sm hover:shadow-md hover:border-border transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5 h-full",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {icon && (
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shadow-sm shrink-0">
            {icon}
          </div>
        )}
        <h3 className="text-h4 text-text-primary font-semibold">{title}</h3>
      </div>
      
      {description && (
        <p className="text-small text-text-secondary">
          {description}
        </p>
      )}

      <div className="flex flex-wrap gap-x-2.5 gap-y-2 mt-auto pt-2">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="default" 
            className="px-3 py-1.5 bg-surface text-small text-text-secondary border border-border/60 rounded-lg hover:border-border hover:bg-surface-secondary hover:text-text-primary hover:shadow-sm transition-all duration-200 cursor-default"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};
