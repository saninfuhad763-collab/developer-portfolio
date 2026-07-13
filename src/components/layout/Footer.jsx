import { Container } from "./Container";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", target: "hero", orderClass: "md:order-1" },
    { name: "About", target: "about", orderClass: "md:order-3" },
    { name: "Skills", target: "skills", orderClass: "md:order-5" },
    { name: "Projects", target: "projects", orderClass: "md:order-2" },
    { name: "Experience", target: "experience", orderClass: "md:order-4" },
    { name: "Education", target: "education", orderClass: "md:order-6" },
    { name: "Contact", target: "contact", orderClass: "md:order-7" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/saninfuhad763-collab",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1-5-2.5-5-2.5"/></svg>
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fuhad-saneen-4ba478377/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    },
    {
      name: "Email",
      href: "mailto:saninfuhad763@gmail.com",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    }
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-surface-secondary border-t border-border pt-16 md:pt-8 pb-8 md:pb-3 mt-auto animate-fade-in-up">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16 md:mb-4">
          
          {/* Left: Branding & Tagline */}
          <div className="md:col-span-2 flex flex-col items-start gap-4 md:gap-2 pr-0 lg:pr-8">
            <div>
              <h2 className="text-h4 font-bold text-text-primary tracking-wide">Fuhad Saneen</h2>
              <p className="text-small font-semibold text-accent-primary uppercase tracking-widest mt-1">Full Stack Developer</p>
            </div>
            <p className="text-body text-text-secondary leading-relaxed max-w-sm">
              Building production-quality full-stack and AI-powered web applications.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="md:col-span-1 flex flex-col items-start lg:items-center">
            <div className="flex flex-col gap-3 md:gap-2">
              <h3 className="text-small font-semibold text-text-primary uppercase tracking-widest mb-2">Quick Links</h3>
              <nav className="flex flex-col md:grid md:grid-cols-2 gap-2.5 md:gap-x-6 md:gap-y-1.5 w-full">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.target}`}
                    onClick={(e) => handleScroll(e, link.target)}
                    className={`text-body text-text-secondary hover:text-accent-primary hover:underline underline-offset-4 transition-all duration-300 w-fit ${link.orderClass || ''}`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right: Professional Links */}
          <div className="md:col-span-1 flex flex-col items-start md:items-end">
            <div className="flex flex-col gap-3">
              <h3 className="text-small font-semibold text-text-primary uppercase tracking-widest mb-2">Connect</h3>
              <div className="flex flex-col gap-4 md:gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name === 'Email' ? "_self" : "_blank"}
                    rel={link.name === 'Email' ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-3 text-body text-text-secondary hover:text-accent-primary transition-colors duration-300"
                  >
                    <div className="text-text-muted group-hover:text-accent-primary transition-colors duration-300">
                      {link.icon}
                    </div>
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom: Copyright & Tech */}
        <div className="border-t border-border/60 pt-8 md:pt-3 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-small text-text-muted">
            &copy; 2026 Fuhad Saneen.
          </p>
          <p className="text-small text-text-muted max-w-md md:max-w-none">
            Designed & Developed using React, Tailwind CSS, and modern software engineering practices.
          </p>
        </div>
      </Container>
    </footer>
  );
};
