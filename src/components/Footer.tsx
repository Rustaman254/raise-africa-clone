import { Button } from "@/components/ui/button";
import raiseLogo from "@/assets/raise-logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container">
        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Make equity moves with Organize
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            With this second release, we're selectively serving a few founders to ensure we're truly helpful. Priority to African teams operating in fintech, e-commerce, agriculture & climate.
          </p>
          <Button variant="hero" className="rounded-full">
            <img src={whatsappIcon} alt="" className="w-4 h-4 mr-2" />
            Send us a message
          </Button>
        </div>

        {/* Footer links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="/" className="text-muted-foreground hover:text-foreground text-sm">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
              Education
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground text-sm">
              Pricing
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
              Wallet
            </a>
          </div>
          
          <img src={raiseLogo} alt="Raise" className="h-6 w-auto opacity-60" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
