import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import organizeLogo from "@/assets/organize-logo.png";
import heroDashboard from "@/assets/hero-dashboard-main.png";
import { MousePointer } from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate rotation based on scroll (starts at 10deg, goes to 0deg)
  const rotation = Math.max(0, 10 - (scrollY / 300) * 10);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Organize Logo */}
          <div className="mb-6 animate-fade-in">
            <img src={organizeLogo} alt="Organize" className="h-10 md:h-12 w-auto" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
            Make equity moves
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in animation-delay-200">
            Ambitious African startups trust Organize to handle their equity and legal operations so they can focus on driving revenue.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in animation-delay-300">
            <Button variant="outline" size="lg" className="rounded-full border-border/50 hover:bg-secondary">
              Request access
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 md:mt-24 relative animate-fade-in animation-delay-400">
          <div className="relative mx-auto max-w-5xl" style={{ perspective: "1000px" }}>
            {/* Device frame effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-t-3xl blur-3xl" />
            <img
              src={heroDashboard}
              alt="Organize Dashboard"
              className="w-full h-auto rounded-t-3xl shadow-2xl shadow-primary/10 transition-transform duration-300 ease-out"
              style={{ 
                transform: `rotateX(${rotation}deg)`,
                transformOrigin: "bottom center"
              }}
            />
            {/* Fade to bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center mt-8 animate-fade-in animation-delay-500">
          <MousePointer className="w-5 h-5 text-muted-foreground mb-2" />
          <p className="text-xs text-muted-foreground">Swipe to fully see the dashboard</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
