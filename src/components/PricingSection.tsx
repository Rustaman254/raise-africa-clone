import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = ["Subscriptions", "Premium services"];

const plans = [
  {
    name: "Essentials",
    tagline: "Helpful for",
    highlight: "early startups",
    features: [
      "Corporate structure management",
      "Equity workflows",
      "Template automation",
      "Scenario modelling",
      "Collaborate with your law firms",
    ],
    isPopular: false,
    bgColor: "#f2f5f6",
    cardBg: "#fff",
    textColor: "text-gray-900",
    subtitleColor: "text-gray-400",
    featureColor: "text-gray-600",
    checkColor: "text-primary",
  },
  {
    name: "Professional",
    tagline: "Designed to",
    highlight: "get past seed stage",
    features: [
      "Everything in Essentials plan",
      "Employee pools and ownership plans",
      "Integrated scenario modeling with market data",
      "Intelligent corporate structuring",
      "Configurable investor and shareholder wallets",
    ],
    isPopular: true,
    bgColor: "#272627",
    cardBg: "#1a1a1a",
    textColor: "text-white",
    subtitleColor: "text-gray-500",
    featureColor: "text-gray-400",
    checkColor: "text-primary",
  },
  {
    name: "Growth",
    tagline: "Built for",
    highlight: "liquid startups",
    features: [
      "Everything in Professional plan",
      "Advanced 409a and financial valuations",
      "24/7 AI legal associate trained on your structure",
      "Compliance tracking for subsidiaries/entities",
      "Automated diligence for licensing and taxes",
    ],
    isPopular: false,
    bgColor: "#f2f5f6",
    cardBg: "#fff",
    textColor: "text-gray-900",
    subtitleColor: "text-gray-400",
    featureColor: "text-gray-600",
    checkColor: "text-primary",
  },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("Subscriptions");

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Pay as you grow
          </h2>
          <p className="text-base text-gray-600">
            Choose the right mix of products and services, customizable per industry and stage.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Card - Full width within container */}
        <div className="mb-6">
          <div className="bg-[#0f172a] rounded-3xl p-6 md:p-8 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-12 h-12 rounded-full bg-blue-500/20" />
              <div className="w-8 h-8 rounded-full bg-blue-400/30 -ml-4 mt-2" />
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/20 px-3 py-1 rounded-full">
                <span className="text-primary text-sm font-medium">✦ product</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm max-w-md">
              Magical, simple and helpful dashboards designed for your industry and stage. Billed as a subscription.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Valuation", "Scenarios", "Audits", "Ownership"].map((feature) => (
                <span
                  key={feature}
                  className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards - 3 columns fitting container */}
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-4"
              style={{ backgroundColor: plan.bgColor }}
            >
              {/* Inner card with top content */}
              <div 
                className="rounded-xl p-5 mb-4"
                style={{ backgroundColor: plan.cardBg }}
              >
                {/* Plan name label */}
                <div className={`text-xs uppercase tracking-wider mb-2 ${plan.subtitleColor}`}>
                  {plan.name}
                </div>
                
                {/* Plan tagline and highlight */}
                <div className="mb-4">
                  <span className={`text-sm ${plan.subtitleColor}`}>{plan.tagline} </span>
                  <span className={`text-lg font-semibold ${plan.textColor}`}>
                    {plan.highlight}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.isPopular ? "default" : "outline"}
                  className={`w-full rounded-full ${
                    plan.isPopular 
                      ? "bg-primary text-white hover:bg-primary/90" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Request Access
                </Button>
              </div>

              {/* Features */}
              <ul className="space-y-3 px-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-3 text-sm ${plan.featureColor}`}>
                    <Check className={`w-4 h-4 ${plan.checkColor} flex-shrink-0 mt-0.5`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
