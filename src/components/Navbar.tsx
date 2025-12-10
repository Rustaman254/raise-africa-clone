import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import raiseLogo from "@/assets/raise-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="bg-secondary/80 backdrop-blur-xl border border-border/50 rounded-full px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={raiseLogo} alt="Raise" className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <a href="#pricing" className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </a>
          <button className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
            For Founders
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
            For Investors
            <ChevronDown className="w-4 h-4" />
          </button>
          <a href="#" className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors">
            Log In
          </a>
        </div>

        {/* Sign Up Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="sm">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-secondary/95 backdrop-blur-xl border border-border/50 rounded-2xl p-4">
          <div className="flex flex-col gap-2">
            <a href="#pricing" className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground">
              Pricing
            </a>
            <button className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground text-left flex items-center gap-1">
              For Founders
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground text-left flex items-center gap-1">
              For Investors
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground">
              Log In
            </a>
            <Button variant="hero" size="sm" className="mt-2">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
