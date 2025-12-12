const DistributeFeatures = () => {
    const features = [
        {
            title: "For founders",
            description: "Align your co-founders vesting and common shares - so everyone is on the same page.",
        },
        {
            title: "For investors",
            description: "Help investors model returns and growth opportunities for their money.",
        },
        {
            title: "For employees",
            description: "Align your employee's ownership with your growth plans.",
        },
    ];

    return (
        <section className="py-20 border-t border-border/30">
            <div className="container">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
                    Distribute digital equity to your shareholders
                </h2>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-foreground mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DistributeFeatures;
