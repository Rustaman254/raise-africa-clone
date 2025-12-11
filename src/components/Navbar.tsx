import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import raiseLogo from "@/assets/raise-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (approximately 100vh)
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div 
        className={`backdrop-blur-xl border border-border/50 rounded-full px-3 py-2 flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-[#222222]" : "bg-white"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={raiseLogo} alt="Raise" className="h-7 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-0">
          <a 
            href="#pricing" 
            className={`px-3 py-2 text-sm transition-colors ${
              isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Pricing
          </a>
          <button 
            className={`px-3 py-2 text-sm transition-colors flex items-center gap-1 ${
              isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            For Founders
            <ChevronDown className="w-3 h-3" />
          </button>
          <button 
            className={`px-3 py-2 text-sm transition-colors flex items-center gap-1 ${
              isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            For Investors
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-1">
          <a 
            href="#" 
            className={`px-3 py-2 text-sm transition-colors ${
              isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Log In
          </a>
          <Button 
            className={`rounded-full text-sm px-5 py-1.5 h-auto ${
              isScrolled 
                ? "bg-white text-gray-900 hover:bg-gray-100" 
                : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={`w-5 h-5 ${isScrolled ? "text-white" : "text-gray-900"}`} />
          ) : (
            <Menu className={`w-5 h-5 ${isScrolled ? "text-white" : "text-gray-900"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden mt-2 backdrop-blur-xl border border-border/50 rounded-2xl p-4 ${
          isScrolled ? "bg-[#222222]" : "bg-white"
        }`}>
          <div className="flex flex-col gap-2">
            <a 
              href="#pricing" 
              className={`px-4 py-2 text-sm ${isScrolled ? "text-white/80 hover:text-white" : "text-gray-700"}`}
            >
              Pricing
            </a>
            <button className={`px-4 py-2 text-sm text-left flex items-center gap-1 ${isScrolled ? "text-white/80" : "text-gray-700"}`}>
              For Founders
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className={`px-4 py-2 text-sm text-left flex items-center gap-1 ${isScrolled ? "text-white/80" : "text-gray-700"}`}>
              For Investors
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className={`px-4 py-2 text-sm ${isScrolled ? "text-white/80" : "text-gray-700"}`}>
              Log In
            </a>
            <Button className="rounded-full mt-2 bg-primary text-white">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
