import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { SectionHeading } from "../common/SectionHeading";
import { TimelineItem } from "../common/TimelineItem";

export const ProfessionalJourney = () => {
  const journeyItems = [
    {
      title: "Python Full-Stack Development",
      description: "Built a strong backend foundation through structured Python Full Stack training using Django. Developed applications involving authentication, database management, and server-side development while strengthening core programming and software engineering fundamentals."
    },
    {
      title: "Web Development Training (MERN Stack)",
      description: "Completed structured web development training focused on the MERN stack, expanding my frontend expertise, REST API development, responsive UI design, and modern JavaScript application architecture in preparation for professional project work."
    },
    {
      title: "Web Development Internship",
      description: "Applied my technical knowledge in a professional internship environment by collaborating on real-world projects, following structured development workflows, participating in iterative code reviews, and delivering production-oriented web applications."
    },
    {
      title: "AI-Powered Full-Stack Development",
      description: "Built AI-powered web applications by integrating modern frontend technologies, backend services, Retrieval-Augmented Generation (RAG), document processing, and Large Language Models (LLMs) into practical software solutions such as CareerForge Pro and OpsMind AI."
    },
    {
      title: "Production-Focused Engineering",
      description: "Applied professional engineering practices including modular architecture, reusable components, accessibility, documentation-first development, responsive design, disciplined reviews, and AI-assisted software development workflows while building production-quality applications."
    },
    {
      title: "Continuous Learning",
      description: "Continuously expanding my knowledge through hands-on projects, engineering feedback, emerging technologies, and modern software engineering practices to build reliable, scalable, and maintainable applications."
    }
  ];

  return (
    <Section id="experience" variant="default">
      <Container>
        <div className="flex flex-col gap-12 lg:gap-16">
          
          <div className="max-w-3xl animate-fade-in-up">
            <SectionHeading 
              eyebrow="PROFESSIONAL JOURNEY"
              title="A journey of continuous learning, full-stack development, and AI-powered software engineering."
            />
            <p className="mt-6 text-body-large text-text-secondary leading-relaxed">
              My professional journey has been driven by hands-on development, structured learning, real-world projects, and continuous improvement. From building my foundation during a web development internship to creating AI-powered full-stack applications, each step has strengthened both my technical expertise and engineering mindset.
            </p>
          </div>

          <div className="max-w-4xl pt-4">
            <div className="flex flex-col">
              {journeyItems.map((item, index) => (
                <TimelineItem 
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  isLast={index === journeyItems.length - 1}
                  className={`animate-fade-in-up delay-${Math.min((index + 1) * 100, 400)}`}
                />
              ))}
            </div>

            {/* Current Focus Panel */}
            <div className="mt-8 ml-0 sm:ml-6 p-6 sm:p-8 bg-surface border border-accent-primary/30 rounded-2xl flex flex-col sm:flex-row items-start gap-5 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up delay-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-primary" />
              <div className="p-3 bg-accent-primary/10 rounded-xl text-accent-primary shrink-0 border border-accent-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <h3 className="text-h4 font-bold text-text-primary mb-2">Current Focus</h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  Building production-quality AI-powered full-stack applications, improving software architecture, and continuously expanding expertise in scalable web development and modern software engineering practices.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
};
