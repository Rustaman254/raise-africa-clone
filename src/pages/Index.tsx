import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import MessyEquitySection from "@/components/MessyEquitySection";
import IntroducingOrganize from "@/components/IntroducingOrganize";
import EquityCopilot from "@/components/EquityCopilot";
import PricingSection from "@/components/PricingSection";
import MarketSignals from "@/components/MarketSignals";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <MessyEquitySection />
      <IntroducingOrganize />
      <EquityCopilot />
      <PricingSection />
      <MarketSignals />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
