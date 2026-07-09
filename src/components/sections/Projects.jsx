import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { SectionHeading } from "../common/SectionHeading";
import { FeaturedProjectCard } from "../common/FeaturedProjectCard";
import { ProjectCard } from "../common/ProjectCard";

export const Projects = () => {
  const featuredProjects = [
    {
      title: "CareerForge Pro",
      status: "Featured Project",
      tagline: "AI-powered Resume Builder and ATS Optimization Platform",
      problem: "Recruiters receive resumes that often fail Applicant Tracking Systems (ATS), while job seekers struggle to tailor resumes efficiently for different roles.",
      solution: "CareerForge Pro helps users create professional resumes, analyze job descriptions, optimize ATS compatibility, and generate AI-assisted resume improvements through an integrated full-stack platform.",
      engineeringFocus: "Production-ready architecture, AI integration, ATS optimization, and scalable React component design.",
      keyFeatures: [
        "AI-powered resume generation",
        "ATS keyword analysis",
        "Resume builder with live preview",
        "PDF export",
        "Authentication",
        "Responsive UI"
      ],
      techStack: [
        "React", "Vite", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Puppeteer", "AI API Integration", "GitHub"
      ],
      githubUrl: "https://github.com/saninfuhad763-collab/CareerForge-Pro"
    },
    {
      title: "OpsMind AI",
      status: "Featured Project",
      tagline: "AI-powered SOP Assistant using Retrieval-Augmented Generation (RAG)",
      problem: "Organizations often struggle to search and retrieve information efficiently from lengthy SOP documents.",
      solution: "OpsMind AI enables users to upload SOP PDFs, process them into searchable knowledge, and interact with the documents through an AI-powered chat interface.",
      engineeringFocus: "Retrieval-Augmented Generation (RAG), document processing, semantic search, and AI-powered knowledge retrieval.",
      keyFeatures: [
        "PDF ingestion",
        "Intelligent chunking",
        "Vector search",
        "AI chat",
        "MongoDB storage"
      ],
      techStack: [
        "React", "Node.js", "Express.js", "MongoDB", "AI APIs", "PDF Processing", "GitHub"
      ],
      githubUrl: "https://github.com/saninfuhad763-collab/OpsMind-AI"
    }
  ];

  const compactProjects = [
    {
      title: "Extensio.ai",
      status: "In Progress",
      tagline: "AI-powered Chrome Extension Generator",
      description: "A platform that generates Chrome extension boilerplate and project structure using AI-assisted workflows. Current implementation demonstrates architecture and foundational engineering while remaining under active development.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "GitHub"],
      githubUrl: "https://github.com/saninfuhad763-collab/extensio-ai"
    },
    {
      title: "Fitness Enhancer",
      status: "Learning Project",
      tagline: "Fitness Tracking Web Application",
      description: "An early full-stack project focused on backend fundamentals including authentication, user profiles, and workout tracking.",
      techStack: ["Python", "Django", "HTML", "CSS", "GitHub"],
      githubUrl: "https://github.com/saninfuhad763-collab/fitness-enhancer"
    }
  ];

  return (
    <Section id="projects" variant="secondary">
      <Container>
        <div className="flex flex-col gap-16">
          
          <div className="max-w-3xl animate-fade-in-up">
            <SectionHeading 
              eyebrow="FEATURED PROJECTS"
              title="Selected work demonstrating full-stack engineering and AI-powered application development."
              description="These projects reflect my experience building complete web applications—from planning and architecture to frontend development, backend services, AI integration, and production-focused engineering practices."
            />
          </div>

          <div className="flex flex-col gap-12">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard 
                key={project.title}
                {...project}
                className={`animate-fade-in-up delay-${Math.min((index + 1) * 100, 400)}`}
              />
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 animate-fade-in-up delay-300">
              {compactProjects.map((project) => (
                <ProjectCard 
                  key={project.title}
                  {...project}
                />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
