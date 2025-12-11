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
    <section className="py-12 bg-white">
      <div className="container">
        <p className="text-center text-sm text-gray-500 mb-8">
          Trusted by Africa's fastest-growing startup teams
        </p>
        
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center h-10 flex-shrink-0 mx-8 md:mx-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-5 md:h-6 w-auto opacity-70 grayscale"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center h-10 flex-shrink-0 mx-8 md:mx-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-5 md:h-6 w-auto opacity-70 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
