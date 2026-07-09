import { cn } from "../../utils/cn";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export const ProjectCard = ({
  title,
  tagline,
  status,
  description,
  techStack,
  githubUrl,
  className
}) => {
  const getStatusVariant = (status) => {
    if (status.toLowerCase().includes('in progress')) return 'warning';
    return 'default';
  };

  return (
    <div 
      className={cn(
        "flex flex-col h-full p-6 bg-surface border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <Badge variant={getStatusVariant(status)} className="self-start mb-4">
        {status}
      </Badge>
      
      <h3 className="text-h3 text-text-primary mb-2">{title}</h3>
      <p className="text-body font-medium text-text-primary mb-3">{tagline}</p>
      
      <p className="text-body text-text-secondary mb-6 flex-grow">{description}</p>
      
      <div className="flex flex-col gap-6 mt-auto">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="px-2.5 py-1 text-caption bg-bg">
              {tech}
            </Badge>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          className="w-full justify-center group/btn"
          onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
        >
          <svg className="w-5 h-5 mr-2 group-hover/btn:text-text-primary transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1-5-2.5-5-2.5"/></svg>
          View Source
        </Button>
      </div>
    </div>
  );
};
