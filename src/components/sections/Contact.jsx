import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { ContactCard } from "../common/ContactCard";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "saninfuhad763@gmail.com",
      href: "mailto:saninfuhad763@gmail.com",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/fuhad-saneen-4ba478377",
      href: "https://www.linkedin.com/in/fuhad-saneen-4ba478377/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    },
    {
      label: "GitHub",
      value: "github.com/saninfuhad763-collab",
      href: "https://github.com/saninfuhad763-collab",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1-5-2.5-5-2.5"/></svg>
    },
    {
      label: "Resume",
      value: "Full_Stack_Developer_Resume.pdf",
      href: "/assets/Full_Stack_Developer_Resume.pdf",
      download: true,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
    }
  ];

  const availableFor = [
    "Full-Time Opportunities",
    "Part-Time Opportunities",
    "Remote Roles",
    "Onsite Roles",
    "Hybrid Roles",
    "Full Stack Development",
    "AI-Powered Web Application Development",
    "Freelance Projects"
  ];

  return (
    <Section id="contact" variant="default">
      <Container>
        <div className="flex flex-col gap-12 lg:gap-16">
          
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex flex-col items-start gap-4 mb-5">
              <span className="text-accent-primary font-semibold text-small tracking-wider uppercase">
                GET IN TOUCH
              </span>
              <Badge variant="success" className="px-3 py-1 bg-success/10 text-success border border-success/20">
                <span className="w-1.5 h-1.5 rounded-full bg-success mr-2 animate-pulse" />
                Available for Opportunities
              </Badge>
            </div>
            
            <h2 className="text-h2 text-text-primary mb-6">
              Let's build something meaningful together.
            </h2>
            <p className="text-body-large text-text-secondary leading-relaxed">
              I'm currently seeking opportunities as a Full Stack Developer and enjoy building production-quality AI-powered web applications. Whether you're hiring, looking for a collaborator, or have an exciting project in mind, I'd be happy to connect and discuss how I can contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-fade-in-up delay-200">
            
            {/* Left Column: Direct Links */}
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <ContactCard key={link.label} {...link} />
              ))}
            </div>

            {/* Right Column: Available For Panel */}
            <div className="p-8 bg-surface border border-border rounded-2xl shadow-sm h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-accent-primary/10 rounded-lg text-accent-primary shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <h3 className="text-h3 font-bold text-text-primary">Available For</h3>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-body text-text-secondary">
                {availableFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-in-up delay-300">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => window.location.href = "mailto:saninfuhad763@gmail.com"}
            >
              Send Email
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/Full_Stack_Developer_Resume.pdf';
                link.download = 'Full_Stack_Developer_Resume.pdf';
                link.click();
              }}
            >
              Download Resume
            </Button>
          </div>

        </div>
      </Container>
    </Section>
  );
};
