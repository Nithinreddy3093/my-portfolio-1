import { Calendar, Briefcase } from "lucide-react";

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    period: "2023 - Present",
    title: "Full Stack Developer",
    company: "Tech Projects",
    description:
      "Building scalable web applications using React, Node.js, and modern cloud technologies. Focused on creating high-performance, user-centric solutions.",
    achievements: [
      "Developed multiple full-stack applications with React and FastAPI",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Integrated AI/ML features using OpenAI and custom models",
    ],
  },
  {
    period: "2022 - Present",
    title: "Software Engineer",
    company: "Open Source Contributions",
    description:
      "Active contributor to open-source projects, focusing on web development, automation, and developer tools.",
    achievements: [
      "Contributed to 20+ open source repositories",
      "Built tools used by the developer community",
      "Mentored junior developers in coding best practices",
    ],
  },
  {
    period: "2021 - 2023",
    title: "Frontend Developer",
    company: "Freelance",
    description:
      "Designed and developed responsive web applications for clients across various industries.",
    achievements: [
      "Delivered 10+ client projects on time and within budget",
      "Improved site performance scores by an average of 40%",
      "Built reusable component libraries for rapid development",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6 md:px-[120px]">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-medium text-foreground text-center mb-4">
        Experience
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
        My professional journey and key accomplishments.
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 1;
            return (
              <div key={i} className="relative flex flex-col md:flex-row items-center">
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground/60 border-2 border-background z-10" />

                {/* Card */}
                <div
                  className={`w-full md:w-[calc(50%-32px)] ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
