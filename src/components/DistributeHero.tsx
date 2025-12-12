import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const DistributeHero = () => {
  return (
    <section className="relative min-h-[80vh] pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in">
            Align your shareholders in clicks
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in animation-delay-100">
            Empower your team, investors, and board with digital equity that's easy to understand and track.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-200">
            <Button 
              variant="hero" 
              size="lg" 
              className="rounded-full"
              onClick={() => window.open('https://wa.me/254799598541', '_blank')}
            >
              <img src={whatsappIcon} alt="" className="w-4 h-4 mr-2" />
              Request Access
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-border/50 hover:bg-secondary"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributeHero;
