import messyEquity from "@/assets/messy-equity.png";

const painPoints = [
  {
    emoji: "🤕",
    title: "You're busy",
    description: "We're all building in the world's most difficult business environment, Africa. So it's hard to prioritize equity and corporate decisions.",
  },
  {
    emoji: "😱",
    title: "Equity and legals are scary",
    description: "Confusing terms and managing multiple entities across Africa and the world just feel messy. So, you hire law firms to fix it for you.",
  },
  {
    emoji: "💸",
    title: "Legal debt gets expensive",
    description: "But, those law firms charge you a lot to tell you what you already know. And by that time, you built up legal debt that will take years to pay off.",
  },
];

const MessyEquitySection = () => {
  return (
    <section className="py-24 relative light bg-[hsl(0,0%,98%)]">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[hsl(225,30%,10%)] mb-4">
            Messy equity slows you down
          </h2>
          <p className="text-lg text-[hsl(220,10%,45%)]">
            Managing multiple companies, lawyers, and shareholders is expensive. Mistakes happen, legal debt builds up and it slows you down.
          </p>
        </div>

        {/* Messy Equity Image */}
        <div className="flex justify-center mb-16">
          <img
            src={messyEquity}
            alt="Messy equity visualization"
            className="max-w-full md:max-w-4xl w-full h-auto"
          />
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-4xl mb-4">{point.emoji}</div>
              <h3 className="text-xl font-semibold text-[hsl(225,30%,10%)] mb-2">
                {point.title}
              </h3>
              <p className="text-[hsl(220,10%,45%)] text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessyEquitySection;
