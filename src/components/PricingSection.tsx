import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";

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
  },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("Subscriptions");

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="container relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Pay as you grow
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the right mix of products and services, customizable per industry and stage.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Product badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
            <span className="text-primary text-sm font-medium">product</span>
            <span className="text-muted-foreground text-sm">
              Magical, simple and helpful dashboards designed for your industry and stage. Billed as a subscription.
            </span>
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {["Valuation", "Scenarios", "Audits", "Ownership"].map((feature) => (
            <span
              key={feature}
              className="bg-secondary/30 border border-border/30 rounded-full px-4 py-1 text-sm text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 ${
                plan.isPopular
                  ? "bg-gradient-to-b from-primary/20 to-card border-primary/30"
                  : "bg-card/50"
              } border border-border/30 backdrop-blur-sm`}
            >
              {/* Plan name */}
              <div className="text-sm text-muted-foreground mb-2">{plan.name}</div>
              
              {/* Tagline */}
              <h3 className="text-xl font-semibold text-foreground mb-6">
                <span className="text-muted-foreground font-normal">{plan.tagline}</span>{" "}
                <span className="text-foreground">{plan.highlight}</span>
              </h3>

              {/* CTA Button */}
              <Button
                variant={plan.isPopular ? "hero" : "outline"}
                className="w-full rounded-full mb-6"
              >
                <img src={whatsappIcon} alt="" className="w-4 h-4 mr-2" />
                Request Access
              </Button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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
