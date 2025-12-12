import Navbar from "@/components/Navbar";
import DistributeHero from "@/components/DistributeHero";
import DistributeFeatures from "@/components/DistributeFeatures";
import DistributeTabSection from "@/components/DistributeTabSection";
import EquityTypesSection from "@/components/EquityTypesSection";
import Footer from "@/components/Footer";

const Distribute = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <DistributeHero />
            <DistributeFeatures />
            <DistributeTabSection />
            <EquityTypesSection />
            <Footer />
        </main>
    );
};

export default Distribute;
