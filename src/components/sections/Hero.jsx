import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export const Hero = () => {
  return (
    <Section 
      id="home" 
      className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden" 
      spacing="none"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start max-w-2xl">
            
            {/* Eyebrow */}
            <div className="animate-fade-in-up">
              <span className="text-accent-primary font-semibold text-small tracking-widest uppercase">
                FULL STACK DEVELOPER • AI WEB APPLICATIONS
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-display mt-6 animate-fade-in-up delay-100">
              Hi, I'm Fuhad Saneen.<br />
              <span className="text-text-secondary">
                I build modern full-stack and AI-powered web applications.
              </span>
            </h1>

            {/* Description */}
            <p className="text-body-large mt-6 text-text-muted animate-fade-in-up delay-200">
              I'm a Full Stack Developer specializing in React, Node.js, and modern web technologies. I enjoy building production-ready AI-powered web applications with clean architecture and thoughtful user experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8 animate-fade-in-up delay-300">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 animate-fade-in-up delay-400 w-full">
              <p className="text-small font-medium text-text-muted mb-4 uppercase tracking-wider">
                Expertise & Background
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1.5 text-small bg-surface">BCA Graduate</Badge>
                <Badge variant="outline" className="px-3 py-1.5 text-small bg-surface">MERN Stack</Badge>
                <Badge variant="outline" className="px-3 py-1.5 text-small bg-surface">Python Full Stack Certified</Badge>
                <Badge variant="outline" className="px-3 py-1.5 text-small bg-surface">Web Development Internship</Badge>
              </div>
            </div>

          </div>

          {/* Right Column: Photo Placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-200">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-surface-secondary border-2 border-dashed border-divider flex flex-col items-center justify-center text-center p-8 group">
              <div className="w-20 h-20 mb-4 rounded-full bg-surface flex items-center justify-center border border-border text-text-muted shadow-sm group-hover:scale-105 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 className="text-h4 text-text-secondary mb-2">Professional Photo</h3>
              <p className="text-small text-text-muted">
                Placeholder for a high-quality, professional headshot or profile image.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
