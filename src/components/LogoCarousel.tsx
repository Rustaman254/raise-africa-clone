import logo54gene from "@/assets/logo-54gene.png";
import logoBrisco from "@/assets/logo-brisco.svg";
import logoHygel from "@/assets/logo-hygel.png";
import logoBrigify from "@/assets/logo-brigify.png";
import logoEdusko from "@/assets/logo-edusko.png";
import logoOther from "@/assets/logo-other.png";

const logos = [
  { src: logo54gene, alt: "54gene" },
  { src: logoBrisco, alt: "Brisco" },
  { src: logoHygel, alt: "Hygel" },
  { src: logoBrigify, alt: "Brigify" },
  { src: logoEdusko, alt: "Edusko" },
  { src: logoOther, alt: "Partner" },
];

const LogoCarousel = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by Africa's fastest-growing startup teams
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling logos */}
        <div className="flex animate-logo-scroll">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-12"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
