import useTypingEffect from "@/hooks/useTypingEffect";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4";

const typingWords = ["NITHIN", "Building the Future, One Line at a Time", "Welcome to My Space"];

const HeroSection = () => {
  const typedText = useTypingEffect(typingWords, 80, 50, 2000);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-[200px] md:pt-[280px] pb-[102px] text-center gap-10">
        {/* Badge */}
        <div className="flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 px-4 py-2">
          <span className="w-1 h-1 rounded-full bg-foreground" />
          <span className="text-[13px] font-medium text-foreground/60">
            Open to opportunities from
          </span>
          <span className="text-[13px] font-medium text-foreground">May 2026</span>
        </div>

        {/* Typing text */}
        <div className="h-8 md:h-10">
          <span className="text-lg md:text-2xl font-medium text-foreground/80 typing-cursor">
            {typedText}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-gradient-hero text-4xl md:text-[56px] font-medium leading-[1.28] max-w-[613px]">
          Building the Future, One Line at a Time
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] font-normal text-foreground/70 max-w-[680px] leading-relaxed">
          Full-stack developer passionate about crafting elegant solutions. I specialize in 
          modern web technologies, creating seamless user experiences with clean, 
          efficient code that makes a difference.
        </p>

        {/* CTA */}
        <button
          onClick={scrollToProjects}
          className="relative rounded-full border glow-top"
          style={{ borderWidth: "0.6px", borderColor: "hsl(0 0% 100% / 0.6)" }}
        >
          <span className="block rounded-full bg-foreground px-[29px] py-[11px] text-sm font-medium text-background">
            View My Work
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
