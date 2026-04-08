import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface Education {
  period: string;
  degree: string;
  institution: string;
  description: string;
  highlights: string[];
}

const educations: Education[] = [
  {
    period: "2022 - 2026",
    degree: "B.Tech in Computer Science",
    institution: "University",
    description:
      "Pursuing a Bachelor's in Computer Science with a focus on software engineering, data structures, and modern web technologies.",
    highlights: [
      "Strong foundation in algorithms and data structures",
      "Coursework in AI/ML, databases, and cloud computing",
      "Active participant in coding competitions and hackathons",
    ],
  },
  {
    period: "2020 - 2022",
    degree: "Intermediate (MPC)",
    institution: "Junior College",
    description:
      "Completed intermediate education with a focus on Mathematics, Physics, and Chemistry.",
    highlights: [
      "Strong analytical and problem-solving skills",
      "Foundation in mathematical concepts applied to CS",
    ],
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6 md:px-[120px]">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-medium text-foreground text-center mb-4"
      >
        Education
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-muted-foreground text-center mb-16 max-w-md mx-auto"
      >
        My academic background and qualifications.
      </motion.p>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="flex flex-col gap-12">
          {educations.map((edu, i) => {
            const isLeft = i % 2 === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground/60 border-2 border-background z-10" />

                <div
                  className={`w-full md:w-[calc(50%-32px)] ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <GraduationCap size={14} />
                      <span>{edu.institution}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                    <ul className="space-y-2">
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
