import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = ["Optimize", "Distribute", "Own", "Valuations"];

const EquityCopilot = () => {
  const [activeTab, setActiveTab] = useState("Optimize");

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Organize is your equity copilot
          </h2>
          <p className="text-base text-gray-600">
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
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Dashboard preview card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0f172a] rounded-2xl p-6 overflow-hidden">
            {/* Tab bar mockup */}
            <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
              <span className="text-white text-sm">Dashboard</span>
              <span className="text-gray-400 text-sm">Overview</span>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-gray-400 text-xs mb-1">Total Valuation</div>
                <div className="text-white text-xl font-bold">$9,518,136</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-gray-400 text-xs mb-1">Equity Pool</div>
                <div className="text-white text-xl font-bold">15.2%</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-gray-400 text-xs mb-1">Shareholders</div>
                <div className="text-white text-xl font-bold">24</div>
              </div>
            </div>
            
            {/* Chart area placeholder */}
            <div className="bg-white/5 rounded-xl p-6 h-48 flex items-center justify-center">
              <div className="flex items-end gap-2 h-32">
                <div className="w-8 bg-green-500/60 rounded-t" style={{ height: '40%' }} />
                <div className="w-8 bg-green-500/60 rounded-t" style={{ height: '55%' }} />
                <div className="w-8 bg-green-500/60 rounded-t" style={{ height: '35%' }} />
                <div className="w-8 bg-green-500/60 rounded-t" style={{ height: '70%' }} />
                <div className="w-8 bg-green-500/60 rounded-t" style={{ height: '85%' }} />
                <div className="w-8 bg-green-500/60 rounded-t" style={{ height: '60%' }} />
                <div className="w-8 bg-green-500/60 rounded-t" style={{ height: '90%' }} />
                <div className="w-8 bg-green-500/60 rounded-t" style={{ height: '75%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquityCopilot;
