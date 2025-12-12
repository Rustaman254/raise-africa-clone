import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import heroDashboard from "@/assets/hero-dashboard-main.png";

const Distribute = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        {/* Background gradient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-gray-100 to-transparent rounded-full opacity-50 pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Product Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-semibold text-gray-900">
              distribute
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Align your shareholders
            <br />
            in clicks
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Empower your team, investors, and board with digital equity that's
            easy to understand and track.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/254799598541"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white rounded-lg px-6 py-3"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              Request Access
            </a>
            <Button
              variant="outline"
              className="rounded-lg px-6 py-3 !text-gray-500 h-auto flex items-center gap-2 border-gray-300 !hover:text-white-900 bg-white"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </div>

          {/* Desktop hero mockup */}
          <div className="max-w-4xl mx-auto relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto">
              <img
                src={heroDashboard}
                alt="Raise dashboard"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Distribute Digital Equity - Dark Background */}
      <section className="py-20 bg-[#181818] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Investment Card */}
            <div className="relative">
              <div className="bg-[#181818] border border-gray-400 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop')",
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold">
                      Amarachi Eze
                    </h3>
                    <p className="text-gray-400 text-sm">
                      will receive SF-1 (SAFE)
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Investment amount</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">$25,000</span>
                      <div className="w-4 h-4 bg-primary rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Valuation Cap</span>
                    <span className="text-white font-semibold">$300,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Type</span>
                    <span className="text-white font-semibold">Post Money</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Discount</span>
                    <span className="text-white font-semibold">10%</span>
                  </div>
                  <div className="pt-3 border-t border-gray-400">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Total value</span>
                      <span className="text-white text-lg font-bold">$125,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Distribute digital equity to your shareholders
              </h2>
              <div className="space-y-6">
                {[
                  {
                    color: "bg-[#25D366]",
                    icon: "🏠",
                    title: "For founders",
                    description: "Align your co-founders vesting and common shares - so everyone is on the same page.",
                  },
                  {
                    color: "bg-primary",
                    icon: "💰",
                    title: "For investors",
                    description: "Help investors model returns and growth opportunities for their money.",
                  },
                  {
                    color: "bg-primary",
                    icon: "👔",
                    title: "For employees",
                    description: "Align your employee's ownership with your growth plans.",
                  },
                ].map((feature, i) => (
                  <div key={i} className="bg-[#181818] border border-gray-400 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${feature.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white text-lg">{feature.icon}</span>
                      </div>
                      <h3 className="font-semibold text-white text-lg">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Control and Wealth Building - White Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Small dashboard screenshot */}
            <div className="relative">
              <div className="max-w-xs mx-auto relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-teal-400/30">
                  <img
                    src={heroDashboard}
                    alt="Dashboard preview"
                    className="w-full h-auto object-cover block opacity-90"
                  />
                </div>
              </div>
            </div>

            {/* Right - Text phrases */}
            <div className="space-y-6">
              <p className="text-gray-400 text-2xl md:text-3xl">You're in control</p>
              <p className="text-gray-400 text-2xl md:text-3xl">Distribute in clicks</p>
              <p className="text-gray-900 font-bold text-2xl md:text-3xl">Build wealth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Feature Cards - Wallet and Distribute - White Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Wallet Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-[#25D366] rounded-full" />
                <span className="text-gray-400 text-sm">wallet</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                See your equity in one place
              </h3>
              <a
                href="https://wa.me/254799598541"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-white rounded-lg px-4 py-2 h-auto text-sm mb-6"
              >
                Learn More
              </a>
              
              {/* Phone mockup */}
              <div className="bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl" style={{ maxWidth: '280px' }}>
                <div className="bg-[#232323] rounded-[2rem] p-4 min-h-[400px]">
                  <div className="text-left mb-4">
                    <h4 className="text-white text-lg font-bold">Wallet</h4>
                  </div>
                  <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333] rounded-xl p-4 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                    <div>
                      <p className="text-gray-400 text-xs">Your entire portfolio is worth</p>
                      <p className="text-white text-2xl font-bold">$900,000.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribute Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-[#25D366] rounded-full" />
                <span className="text-gray-400 text-sm">distribute</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Send and manage equity across your captable
              </h3>
              <a
                href="https://wa.me/254799598541"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-white rounded-lg px-4 py-2 h-auto text-sm mb-6"
              >
                Learn More
              </a>
              
              {/* Desktop mockup */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <div className="bg-white p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 min-h-[300px]">
                  <div className="flex gap-4">
                    {/* Sidebar */}
                    <div className="w-1/4 space-y-2">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <p className="text-xs font-medium text-primary">Step 1</p>
                      </div>
                      <div className="bg-gray-200 rounded-lg p-2">
                        <p className="text-xs text-gray-500">Step 2</p>
                      </div>
                      <div className="bg-gray-200 rounded-lg p-2">
                        <p className="text-xs text-gray-500">Step 3</p>
                      </div>
                    </div>
                    {/* Main content */}
                    <div className="flex-1 space-y-3">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-sm font-medium text-gray-900 mb-2">Asset Types</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                            <span className="text-xs text-gray-600">Common Shares</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                            <span className="text-xs text-gray-600">Preference Shares</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                            <span className="text-xs text-gray-600">Stock Options</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Send & Manage Multiple Assets - Dark Background */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Send & manage multiple
                <br />
                assets for all stakeholders
              </h2>

              {/* Tabs */}
              <div className="flex gap-2 mb-8">
                <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                  Equity
                </span>
                <span className="px-4 py-2 text-gray-400 text-sm">
                  Convertibles
                </span>
                <span className="px-4 py-2 text-gray-400 text-sm">
                  Stock Options
                </span>
              </div>

              {/* Asset types */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-[#25D366] rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Common Shares
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Basic ownership in the company, usually with a vote in
                      decisions
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Preference Shares
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Shares that get paid first if the company makes money or
                      is sold.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Common shares card */}
            <div className="relative">
              <div className="bg-[#8B6F47] rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
                <div className="mb-4">
                  <span className="text-white/80 text-sm">Common shares</span>
                </div>
                <div className="mb-6">
                  <p className="text-white text-3xl font-bold">25,000 shares</p>
                </div>
                <button className="w-full bg-white/10 border border-white/30 rounded-lg py-3 text-white text-sm font-medium hover:bg-white/20 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Distribute;
