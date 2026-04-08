import { Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const resources = [
  { label: "GitHub", href: "https://github.com/Nithinreddy3093" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nithin-marthala/" },
  { label: "Resume", href: "#" },
];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border px-6 md:px-[120px] py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <button onClick={() => scrollTo("hero")} className="text-foreground text-xl font-semibold tracking-tight mb-3 block">
            NITHIN
          </button>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Full-stack developer building modern web experiences.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://github.com/Nithinreddy3093" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/nithin-marthala/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="mailto:marthalanithinreddy3093@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollTo(link.id)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Resources</h4>
          <ul className="space-y-2">
            {resources.map((r) => (
              <li key={r.label}>
                <a href={r.href} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Contact</h4>
          <p className="text-sm text-muted-foreground">marthalanithinreddy3093@gmail.com</p>
          <p className="text-sm text-muted-foreground mt-1">India</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-border text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Nithin Marthala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
