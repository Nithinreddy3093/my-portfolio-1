import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

const FEATURED_PROJECTS: Project[] = [
  {
    name: "CrackIT",
    description:
      "A modern web app to help users prepare for technical interviews with organized resources and a clean interface.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/Nithinreddy3093/crackit-prep-rocket-5d9bfd07",
    live: "https://crackit-knowit.netlify.app/",
  },
  {
    name: "CodeMate AI",
    description:
      "An AI-powered coding assistant that helps developers write, debug and understand code faster.",
    tech: ["Python", "React", "AI/ML"],
    github: "https://github.com/Nithinreddy3093/codemate-ai",
    live: "https://codemate-ai-five.vercel.app",
  },
  {
    name: "Resume Matcher",
    description:
      "Smart resume matching tool that analyzes and scores resumes against job descriptions using AI.",
    tech: ["JavaScript", "React", "NLP"],
    github: "https://github.com/Nithinreddy3093/Resume-matcher",
    live: "https://resume-matcher-one.vercel.app",
  },
  {
    name: "Pulsegen.io",
    description:
      "Frontend application for Pulsegen — a modern company platform with sleek UI and responsive design.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/Nithinreddy3093/Pulsegen.io",
    live: "https://pulse-io-six.vercel.app",
  },
  {
    name: "Heart Disease Predictor",
    description:
      "Machine learning model that predicts heart disease risk based on patient health parameters.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/Nithinreddy3093/heartPredictML",
  },
  {
    name: "GoQuant",
    description:
      "Quantitative trading application with real-time market data analysis and algorithmic strategies.",
    tech: ["TypeScript", "React", "Finance"],
    github: "https://github.com/Nithinreddy3093/GoQuant",
  },
];

const ProjectsSection = () => {
  return (
    <AnimatedSection>
      <section id="projects" className="py-24 px-6 md:px-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            A curated selection of projects showcasing my skills in full-stack
            development, AI/ML, and modern web technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.name}
                className="group rounded-xl border border-border bg-card p-6 flex flex-col justify-between card-hover overflow-hidden"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-foreground font-semibold text-lg">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/Nithinreddy3093?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300 text-sm font-medium"
            >
              View All Projects <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProjectsSection;
