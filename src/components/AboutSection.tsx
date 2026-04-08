import profileImage from "@/assets/profile.png";
import { Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const RESUME_URL = "https://drive.google.com/file/d/1P0jKrPKl5ZYryeUdlgRpngKbVKeRjAuK/view?usp=drive_link";

const AboutSection = () => (
  <section id="about" className="py-24 px-6 md:px-[120px]">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-medium text-center text-foreground mb-16">About Me</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border flex-shrink-0">
            <img src={profileImage} alt="Nithin" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-foreground/80 text-base leading-relaxed">
              Hi, I'm <span className="text-foreground font-medium">Nithin Marthala</span> — a passionate
              full-stack developer who thrives on building impactful digital experiences. I believe in writing
              clean, efficient code and creating products that genuinely solve problems.
            </p>
            <p className="text-foreground/80 text-base leading-relaxed">
              I'm always exploring new technologies, contributing to open-source, and pushing the boundaries
              of what's possible on the web. When I'm not coding, you'll find me diving into system design,
              experimenting with new frameworks, or sharpening my problem-solving skills.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Download size={14} />
                Download Resume
              </a>
              <a
                href="https://github.com/Nithinreddy3093"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full text-sm font-medium border border-border text-foreground hover:border-foreground/40 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nithin-marthala/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full text-sm font-medium border border-border text-foreground hover:border-foreground/40 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
