import { cn } from "../../utils/cn";
import { Badge } from "../ui/Badge";

export const SkillCard = ({ title, description, icon, skills, className }) => {
  return (
    <div 
      className={cn(
        "p-6 bg-surface border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-secondary border border-border text-text-primary shadow-sm">
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

      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="default" 
            className="px-3 py-1 bg-surface-secondary hover:bg-border transition-colors cursor-default"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};
