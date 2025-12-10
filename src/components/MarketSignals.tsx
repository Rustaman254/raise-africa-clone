import { useState } from "react";
import { Button } from "@/components/ui/button";
import marketSignals from "@/assets/market-signals.png";

const signals = [
  "Fundraising in Africa is at an all time low",
  "Mergers and acquisitions across Africa",
  "Average dilution rates for South African founders",
  "Active African-focused funds",
  "Best valuation caps for logistics companies",
  "Alarming failure rates for Nigerian companies",
];

const MarketSignals = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 relative light bg-[hsl(0,0%,98%)]">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-sm text-[hsl(220,10%,45%)] mb-4">
            Organize integrates the latest African equity data, market trends and legal risks.
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[hsl(225,30%,10%)] mb-6">
            Make the right moves with<br />market signals
          </h2>
        </div>

        {/* Email subscription */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 bg-white rounded-full border border-[hsl(220,15%,90%)] p-1 pl-4 shadow-sm">
            <span className="text-[hsl(220,10%,45%)] text-sm">Read the latest →</span>
            <Button variant="default" size="sm" className="rounded-full bg-[hsl(224,100%,50%)] hover:bg-[hsl(224,100%,45%)]">
              Read
            </Button>
          </div>
        </div>

        {/* Signals marquee */}
        <div className="mb-12 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-3">
            {signals.map((signal, index) => (
              <div
                key={index}
                className="bg-white border border-[hsl(220,15%,90%)] rounded-full px-4 py-2 text-sm text-[hsl(225,30%,10%)] shadow-sm"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        {/* Market image */}
        <div className="flex justify-center">
          <img
            src={marketSignals}
            alt="Market signals visualization"
            className="max-w-full md:max-w-4xl w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketSignals;
