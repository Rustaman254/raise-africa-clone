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
    <section className="py-24 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-sm text-gray-500 mb-4">
            Organize integrates the latest African equity data, market trends and legal risks.
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Make the right moves with<br />market signals
          </h2>
        </div>

        {/* Email subscription */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 bg-white rounded-full border border-gray-200 p-1 pl-4 shadow-sm">
            <span className="text-gray-600 text-sm">Read the latest →</span>
            <Button variant="default" size="sm" className="rounded-full bg-primary hover:bg-primary/90">
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
                className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-900 shadow-sm"
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
