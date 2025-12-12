import { Button } from "@/components/ui/button";
import raiseLogo from "@/assets/raise-logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-[#1a1a1a] text-white">
      <div className="container">
        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Make equity moves with Organize
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            With this second release, we're selectively serving a few founders to ensure we're truly helpful. Priority to African teams operating in fintech, e-commerce, agriculture & climate.
          </p>
          <a
            href="https://wa.me/254799598541"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-white rounded-lg px-6 py-3"
          >
            <img src={whatsappIcon} alt="" className="w-4 h-4 mr-2" />
            Send us a message
          </a>
        </div>

        {/* Footer links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-400 hover:text-white text-sm">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Education
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white text-sm">
              Pricing
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Wallet
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <img src={raiseLogo} alt="Raise" className="h-6 w-auto" />
            <span className="text-gray-400 text-sm">© 2024 — Copyright</span>
            <span className="text-gray-400 text-sm">Wallet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
