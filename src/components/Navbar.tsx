import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Wallet, Share2, BookOpen, Users, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import raiseLogo from "@/assets/raise-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const foundersLinks = [
    { name: "Organize", href: "/", icon: Building2, description: "Equity and corporate management" },
    { name: "Distribute", href: "/distribute", icon: Share2, description: "Digital equity distribution" },
    { name: "Learn", href: "/blog", icon: BookOpen, description: "Educational resources" },
  ];

  const investorsLinks = [
    { name: "Wallet", href: "/wallet", icon: Wallet, description: "Track your equity portfolio" },
    { name: "About Us", href: "/about", icon: Users, description: "Our story and team" },
    // { name: "Contact", href: "/contact", icon: Mail, description: "Get in touch" },
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const location = useLocation();
  const showShadow = location.pathname !== "/"; // no shadow on organize (home) page

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div 
        ref={dropdownRef}
        className={`backdrop-blur-xl border border-border/50 rounded-full px-3 py-2 flex items-center justify-between transition-all duration-500 ease-in-out ${
          (isScrolled || showShadow) ? "bg-[#222222] shadow-2xl" : "bg-white"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={raiseLogo} alt="Fin lence" className="h-7 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-0 relative">
          <a 
            href="#pricing" 
            className={`px-3 py-2 text-sm transition-colors ${
              isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Pricing
          </a>
          
          {/* For Founders Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('founders')}
              className={`px-3 py-2 text-sm transition-colors flex items-center gap-1 ${
                isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              For Founders
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === 'founders' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'founders' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                {foundersLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{link.name}</p>
                      <p className="text-xs text-gray-500">{link.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* For Investors Dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('investors')}
              className={`px-3 py-2 text-sm transition-colors flex items-center gap-1 ${
                isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              For Investors
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === 'investors' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'investors' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                {investorsLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{link.name}</p>
                      <p className="text-xs text-gray-500">{link.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
            
            {/* Mobile For Founders */}
            <div>
              <button 
                onClick={() => toggleDropdown('founders-mobile')}
                className={`w-full px-4 py-2 text-sm text-left flex items-center justify-between ${isScrolled ? "text-white/80" : "text-gray-700"}`}
              >
                For Founders
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'founders-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'founders-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  {foundersLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => { setActiveDropdown(null); setIsOpen(false); }}
                      className={`block px-4 py-2 text-sm ${isScrolled ? "text-white/60 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile For Investors */}
            <div>
              <button 
                onClick={() => toggleDropdown('investors-mobile')}
                className={`w-full px-4 py-2 text-sm text-left flex items-center justify-between ${isScrolled ? "text-white/80" : "text-gray-700"}`}
              >
                For Investors
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'investors-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'investors-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  {investorsLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => { setActiveDropdown(null); setIsOpen(false); }}
                      className={`block px-4 py-2 text-sm ${isScrolled ? "text-white/60 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
