import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Nithinreddy3093", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nithin-marthala/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nithinreddy3093@gmail.com", label: "Email" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 md:px-[120px] border-t border-border">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">Get in Touch</h2>
      <p className="text-muted-foreground mb-10 max-w-md mx-auto">
        I'm always open to new opportunities, collaborations, or just a friendly chat.
      </p>
      <div className="flex items-center justify-center gap-6 mb-10">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors card-hover"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <a
        href="mailto:nithinreddy3093@gmail.com"
        className="inline-block rounded-full bg-foreground text-background px-8 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
      >
        Say Hello
      </a>
    </div>
    <div className="text-center mt-16 text-muted-foreground text-sm">
      © {new Date().getFullYear()} Nithin Marthala. All rights reserved.
    </div>
  </section>
);

export default ContactSection;
