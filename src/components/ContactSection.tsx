import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: Github, href: "https://github.com/Nithinreddy3093", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nithin-marthala/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:marthalanithinreddy3093@gmail.com", label: "Email" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Nithin!%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/917093569420?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-[120px] border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground text-center mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
          I'm always open to new opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Mail size={18} className="text-muted-foreground" />
                <a href="mailto:marthalanithinreddy3093@gmail.com" className="text-sm hover:text-foreground/80 transition-colors">
                  marthalanithinreddy3093@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin size={18} className="text-muted-foreground" />
                <span className="text-sm">India</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex items-center gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
