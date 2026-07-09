import { cn } from "../../utils/cn";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export const FeaturedProjectCard = ({ 
  title, 
  tagline, 
  status, 
  problem, 
  solution, 
  engineeringFocus,
  keyFeatures,
  techStack,
  githubUrl,
  className 
}) => {
  return (
    <div 
      className={cn(
        "group flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 lg:p-10 bg-surface border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
    >
      {/* Left side: Image Placeholder */}
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <div className="relative w-full aspect-video rounded-xl bg-surface-secondary border-2 border-dashed border-divider overflow-hidden flex flex-col items-center justify-center text-center p-6 group-hover:border-accent-primary/50 transition-colors duration-300">
          <div className="w-16 h-16 mb-4 rounded-full bg-surface flex items-center justify-center border border-border text-text-muted shadow-sm transition-transform duration-300 group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
          </div>
          <h4 className="text-h4 text-text-secondary mb-2">Project Screenshot</h4>
          <p className="text-small text-text-muted max-w-xs">Placeholder for high-quality application screenshot.</p>
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
        <Badge variant="primary" className="mb-4">
          {status}
        </Badge>
        
        <h3 className="text-h2 text-text-primary mb-2">{title}</h3>
        <p className="text-body-large font-medium text-text-secondary mb-6">{tagline}</p>

        <div className="flex flex-col gap-4 mb-8">
          <div>
            <h4 className="text-small font-bold text-text-primary uppercase tracking-wider mb-1">Problem</h4>
            <p className="text-body text-text-secondary">{problem}</p>
          </div>
          <div>
            <h4 className="text-small font-bold text-text-primary uppercase tracking-wider mb-1">Solution</h4>
            <p className="text-body text-text-secondary">{solution}</p>
          </div>
          <div>
            <h4 className="text-small font-bold text-text-primary uppercase tracking-wider mb-1">Engineering Focus</h4>
            <p className="text-body text-text-secondary">{engineeringFocus}</p>
          </div>
        </div>

        {keyFeatures && (
          <div className="mb-8">
            <h4 className="text-small font-bold text-text-primary uppercase tracking-wider mb-2">Key Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {keyFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-body text-text-secondary">
                  <svg className="w-4 h-4 text-accent-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto flex flex-col sm:flex-row gap-6 w-full items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="px-2.5 py-1 text-caption bg-bg">
                {tech}
              </Badge>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="shrink-0 group/btn"
            onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
          >
            <svg className="w-5 h-5 mr-2 group-hover/btn:text-text-primary transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1-5-2.5-5-2.5"/></svg>
            View Source
          </Button>
        </div>
      </div>
    </div>
  );
};
