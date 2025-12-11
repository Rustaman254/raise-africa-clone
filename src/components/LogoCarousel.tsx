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
        
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-10"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-5 md:h-6 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
