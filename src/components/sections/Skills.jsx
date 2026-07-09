import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { SectionHeading } from "../common/SectionHeading";
import { SkillCard } from "../common/SkillCard";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>,
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>,
      skills: ["Node.js", "Express.js", "Python", "Django", "REST APIs"]
    },
    {
      title: "Databases",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools & Workflow",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm"]
    },
    {
      title: "AI & Modern Development",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>,
      skills: ["AI-powered Web Applications", "AI-Assisted Software Development", "LLM Integration", "API Integration"]
    }
  ];

  return (
    <Section id="skills" variant="default">
      <Container>
        <div className="flex flex-col gap-12">
          
          <div className="max-w-3xl animate-fade-in-up">
            <SectionHeading 
              eyebrow="TECHNICAL SKILLS"
              title="Modern technologies for building scalable full-stack applications."
              description="I use a modern development stack to build responsive frontend interfaces, reliable backend services, production-ready databases, and AI-powered web applications. My focus is on selecting the right tools to create maintainable, high-quality software."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                className={`animate-fade-in-up delay-${Math.min((index + 1) * 100, 400)}`}
              />
            ))}
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
