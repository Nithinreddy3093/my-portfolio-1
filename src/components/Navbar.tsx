import { Menu, X, Download } from "lucide-react";
import { useState } from "react";

const RESUME_URL = "https://drive.google.com/file/d/1P0jKrPKl5ZYryeUdlgRpngKbVKeRjAuK/view?usp=drive_link";

const navLinks = ["Projects", "Skills", "About", "Experience", "Education"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-[120px] py-5 flex items-center justify-between bg-background/60 backdrop-blur-md">
      <button onClick={() => scrollTo("hero")} className="text-foreground text-xl font-semibold tracking-tight">
        NITHIN
      </button>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-[30px]">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="flex items-center gap-[14px] text-foreground text-sm font-medium hover:text-foreground/80 transition-colors"
          >
            {link}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {/* Resume */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-5 py-[11px] text-sm font-medium text-foreground hover:border-foreground/40 transition-colors"
        >
          <Download size={14} />
          Resume
        </a>

        {/* CTA */}
        <a
          href="mailto:marthalanithinreddy3093@gmail.com"
          className="relative rounded-full border border-foreground/60 glow-top"
          style={{ borderWidth: "0.6px" }}
        >
          <span className="block rounded-full bg-background px-[29px] py-[11px] text-sm font-medium text-foreground">
            Get in Touch
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-foreground text-base font-medium text-left"
            >
              {link}
            </button>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-foreground text-base font-medium"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
