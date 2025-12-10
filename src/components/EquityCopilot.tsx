import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = ["Optimize", "Distribute", "Own", "Valuations"];

const EquityCopilot = () => {
  const [activeTab, setActiveTab] = useState("Optimize");

  return (
    <section className="py-24 relative light bg-[hsl(0,0%,98%)]">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[hsl(225,30%,10%)] mb-4">
            Organize is your equity copilot
          </h2>
          <p className="text-lg text-[hsl(220,10%,45%)]">
            Organize is the modern and intuitive way to optimize, value, and manage your equity and corporate structure for everyone on your team.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full ${
                activeTab === tab
                  ? "bg-[hsl(224,100%,50%)] text-white"
                  : "bg-[hsl(220,15%,92%)] text-[hsl(225,30%,10%)] border-transparent hover:bg-[hsl(220,15%,88%)]"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Video placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-[hsl(225,30%,10%)] rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
                <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white/60 text-sm">
              {activeTab} from Raise Team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquityCopilot;
