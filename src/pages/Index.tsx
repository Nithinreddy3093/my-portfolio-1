import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <AboutSection />
    <ContactSection />
  </div>
);

export default Index;
