import { cn } from "../../utils/cn";

export const ContactCard = ({ icon, label, value, href, download, className }) => {
  return (
    <a 
      href={href}
      target={href.startsWith('mailto:') || download ? "_self" : "_blank"}
      rel={href.startsWith('mailto:') || download ? undefined : "noopener noreferrer"}
      download={download}
      className={cn(
        "group flex items-center gap-4 p-4 bg-surface border border-border rounded-xl shadow-sm hover:shadow-md hover:border-accent-primary/50 transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-secondary border border-border text-text-secondary group-hover:text-accent-primary group-hover:border-accent-primary/50 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-small font-semibold text-text-primary uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-body text-text-secondary group-hover:text-text-primary transition-colors duration-300">{value}</p>
      </div>
    </a>
  );
};
