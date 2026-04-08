import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = ["Projects", "Skills", "About", "Experience"];

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

      <div className="flex items-center gap-4">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
