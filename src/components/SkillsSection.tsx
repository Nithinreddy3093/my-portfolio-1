const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS", "JavaScript"] },
  { category: "Backend", items: ["Node.js", "Python", "Express", "REST APIs", "PostgreSQL", "MongoDB"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Vite"] },
  { category: "Other", items: ["Data Structures", "Algorithms", "System Design", "Agile", "CI/CD"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 md:px-[120px]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-medium text-center text-foreground mb-4">Skills</h2>
      <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
        Technologies and tools I work with to bring ideas to life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((group) => (
          <div key={group.category} className="rounded-xl border border-border bg-card p-6 card-hover">
            <h3 className="text-foreground font-medium text-lg mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
