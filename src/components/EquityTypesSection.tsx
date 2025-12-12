import { useState } from "react";

const EquityTypesSection = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = ["Equity", "Convertibles", "Stock Options"];

    const equityTypes = [
        {
            name: "Common Shares",
            description: "Basic ownership in the company, usually with a vote in decisions",
        },
        {
            name: "Preference Shares",
            description: "Shares that get paid first if the company makes money or is sold.",
        },
    ];

    return (
        <section className="py-20 border-t border-border/30">
            <div className="container">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
                    Send & manage multiple assets for all stakeholders
                </h2>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === index
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Equity Types */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {equityTypes.map((type, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                {type.name}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {type.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EquityTypesSection;
