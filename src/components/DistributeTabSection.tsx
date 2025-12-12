import { useState } from "react";
import { Button } from "@/components/ui/button";

const DistributeTabSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: "You're in control",
            title: "See your equity in one place",
            description: "Track all your equity holdings, vesting schedules, and ownership percentages in a single, easy-to-understand dashboard.",
        },
        {
            label: "Distribute in clicks",
            title: "Send and manage equity across your captable",
            description: "Distribute shares, options, and convertibles to your team, investors, and stakeholders with just a few clicks.",
        },
        {
            label: "Build wealth",
            title: "Focus on building while avoiding regulatory headaches",
            description: "Stay compliant with local regulations across African markets while you focus on growing your business.",
        },
    ];

    return (
        <section className="py-20 border-t border-border/30">
            <div className="container">
                {/* Tab Navigation */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === index
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 md:p-12 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            {tabs[activeTab].title}
                        </h3>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            {tabs[activeTab].description}
                        </p>
                        <Button
                            variant="outline"
                            className="rounded-full"
                            onClick={() => window.open('https://wa.me/254799598541', '_blank')}
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DistributeTabSection;
