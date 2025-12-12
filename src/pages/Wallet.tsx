import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Wallet as WalletIcon } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Wallet = () => {
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
              <WalletIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-semibold text-gray-900">wallet</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Stack your equity
          </h1>
          
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Raise is where serious investors, founders and employees in African startups build their wealth.
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
          
          {/* Phone with hand mockup */}
          <div className="max-w-sm mx-auto relative">
            {/* Hand holding phone image - using a phone mockup */}
            <div className="relative">
              <div className="bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl mx-auto" style={{ maxWidth: '280px' }}>
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-2xl z-10" />
                
                <div className="bg-[#232323] rounded-[2.5rem] p-4 min-h-[500px]">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-4 px-2">
                    <span className="text-white text-xs">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-white/60 rounded-sm" />
                      <div className="w-4 h-2 bg-white/60 rounded-sm" />
                      <div className="w-6 h-3 bg-white rounded-sm" />
                    </div>
                  </div>
                  
                  {/* App header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                      <span className="text-white text-sm">Victoria Alade ▼</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="text-gray-400 text-xs px-2 py-1 bg-gray-700 rounded">Company</span>
                      <span className="text-white text-xs px-2 py-1 bg-primary rounded">Wallet</span>
                    </div>
                  </div>
                  
                  {/* Wallet title */}
                  <div className="text-left mb-4">
                    <h3 className="text-white text-lg font-bold">Wallet</h3>
                    <p className="text-gray-500 text-xs">Manage your entire portfolio in one place</p>
                  </div>
                  
                  {/* Tabs */}
                  <div className="flex gap-2 mb-4">
                    {['Portfolio', 'Calculator', 'Transactions', 'Approvals'].map((tab, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded ${i === 0 ? 'bg-gray-700 text-white' : 'text-gray-500'}`}>{tab}</span>
                    ))}
                  </div>
                  
                  {/* Portfolio value card */}
                  <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333] rounded-xl p-4 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                    <div>
                      <p className="text-gray-400 text-xs">Your entire portfolio is worth</p>
                      <p className="text-white text-2xl font-bold">$900,000.00</p>
                    </div>
                  </div>
                  
                  {/* Holdings */}
                  <div className="text-left">
                    <p className="text-white text-sm font-medium mb-1">Holdings</p>
                    <p className="text-gray-500 text-xs mb-3">Here's a list of startups that you own assets in.</p>
                    
                    {[
                      { name: "Tracka Technologies", type: "SAFE", value: "300,000 USD", color: "from-red-500 to-orange-500" },
                      { name: "Rayven Technologies", type: "SAFE", value: "300,000 USD", color: "from-purple-500 to-pink-500" },
                      { name: "Quotient Inc", type: "SAFE", value: "300,000 USD", color: "from-red-600 to-red-400" },
                    ].map((holding, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-gray-700/50">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${holding.color}`} />
                          <div>
                            <p className="text-white text-sm">{holding.name}</p>
                            <p className="text-gray-500 text-xs">{holding.type}</p>
                          </div>
                        </div>
                        <p className="text-white text-xs">{holding.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* View all button */}
                  <div className="mt-4 flex items-center justify-between">
                    <button className="text-gray-400 text-xs">View all holdings</button>
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <WalletIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Dark Blue */}
      <section className="py-20 bg-[#0a1628] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Phone mockup */}
            <div className="relative">
              <div className="bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl mx-auto" style={{ maxWidth: '260px' }}>
                <div className="bg-[#232323] rounded-[2rem] p-4 min-h-[400px]">
                  {/* Simplified phone content */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                    <span className="text-white text-sm">Portfolio</span>
                  </div>
                  <div className="bg-[#2a2a2a] rounded-xl p-4 mb-4">
                    <p className="text-gray-400 text-xs mb-1">25,402 shares</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-gray-700 rounded text-white">shares</span>
                      <span className="text-xs px-2 py-1 bg-primary rounded text-white">value</span>
                    </div>
                  </div>
                  <div className="w-full h-32 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                A wallet built to track real-time equity in African startups
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    color: "bg-[#25D366]",
                    title: "For founders",
                    description: "Track the net worth of your common shares across the entire company's lifecycle."
                  },
                  {
                    color: "bg-primary",
                    title: "For investors",
                    description: "All of your SAFEs, preferred shares and preferences in one simple place."
                  },
                  {
                    color: "bg-primary",
                    title: "For employees",
                    description: "Model out how your options will grow with the company over time."
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-3 h-3 ${feature.color} rounded-full mt-1.5 flex-shrink-0`} />
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bet Big Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bet big on Africa's<br />innovation economy
              </h2>
              <p className="text-gray-500 mb-6">
                Consolidate all of your equity, SAFEs, options - and connect them all to your company's cap tables in real time.
              </p>
              <a
                href="https://wa.me/254799598541"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-white rounded-lg px-6 py-3 h-auto"
              >
                Request Access
              </a>
            </div>
            
            {/* Right - Equity cards */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-[#f2f5f6] rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Black Star Inc is worth</p>
                  <p className="text-2xl font-bold text-gray-900">700,000 KES</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 overflow-hidden">
                    <div className="w-full h-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop')" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Lydia Oduah</p>
                    <p className="text-xs text-gray-500">current ownership is</p>
                    <p className="text-lg font-bold text-gray-900">5.65%</p>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#f2f5f6] rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop')" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Joshua Obiano</p>
                    <p className="text-xs text-gray-500">received a SAFE worth</p>
                    <p className="text-lg font-bold text-gray-900">50,000 USD</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Nigerian Fintech Index</p>
                  <p className="text-lg font-bold text-[#25D366]">0.20%</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-[#f2f5f6] rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Common shares issued</p>
                  <p className="text-2xl font-bold text-gray-900">70,000 shares</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop')" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Mary Lawan</p>
                    <p className="text-xs text-gray-500">sold common shares</p>
                    <p className="text-lg font-bold text-gray-900">6,000 shares</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Track Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Phone mockup */}
            <div className="relative">
              <div className="bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl mx-auto" style={{ maxWidth: '260px' }}>
                <div className="bg-[#232323] rounded-[2rem] p-4 min-h-[450px]">
                  <div className="text-left mb-4">
                    <h3 className="text-white text-lg font-bold">Wallet</h3>
                  </div>
                  <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333] rounded-xl p-4 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                    <div>
                      <p className="text-gray-400 text-xs">Your entire portfolio is worth</p>
                      <p className="text-white text-xl font-bold">$900,000.00</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-400 text-xs mb-2">25,000 shares</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white rounded-lg py-2 text-sm">
                    view details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Track your portfolio and<br />private indexes
              </h2>
              <p className="text-gray-400 text-lg mb-2">Stack your ownership</p>
              <p className="text-gray-400 text-lg mb-2">Model your returns</p>
              <p className="text-gray-900 font-semibold text-lg">Deposit multiple asset</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Distribute & Wallet Section - Dark */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Distribute side */}
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-[#25D366] rounded-full" />
                <span className="text-gray-400">distribute</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">
                Send and manage equity<br />across your captable
              </h3>
              <a
                href="https://wa.me/254799598541"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg text-white border-white/20 bg-transparent hover:bg-white/10 px-6 py-3"
              >
                Learn more
              </a>
              
              {/* Mini cap table */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between p-3 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Shareholder name</span>
                  <span className="text-gray-400 text-sm">%</span>
                </div>
                {[
                  { name: "Dr Josephine Obi", pct: "2.05%" },
                  { name: "Damola Akinade", pct: "1.30%" },
                  { name: "Jonathan Swanson", pct: "0.95%" },
                  { name: "Edith Shonibare", pct: "0.55%" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#25D366] rounded-full" />
                      <span className="text-white text-sm">{row.name}</span>
                    </div>
                    <span className="text-white text-sm">{row.pct}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Wallet side */}
            <div className="bg-[#1a2a3a] rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-[#25D366] rounded-full" />
                <span className="text-gray-400">wallet</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                See your equity in<br />one place
              </h3>
              <a
                href="https://wa.me/254799598541"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-white rounded-lg px-4 py-2 h-auto text-sm mb-6"
              >
                Learn More
              </a>
              
              {/* Wallet preview */}
              <div className="bg-[#232323] rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white text-sm font-medium">Wallet</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Finlence Inc", type: "SAFE", value: "300,000 USD" },
                    { name: "Tracka", type: "SAFE", value: "300,000 USD" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                        <div>
                          <p className="text-white text-xs">{item.name}</p>
                          <p className="text-gray-500 text-xs">{item.type}</p>
                        </div>
                      </div>
                      <p className="text-white text-xs">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                  <div>
                    <p className="text-gray-400 text-xs">Your portfolio is worth</p>
                    <p className="text-white text-lg font-bold">$600,000.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Send & Manage Section - Dark */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Send & manage multiple<br />assets for all stakeholders
              </h2>
              
              {/* Tabs */}
              <div className="flex gap-2 mb-8">
                <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">Equity</span>
                <span className="px-4 py-2 text-gray-400 text-sm">Convertibles</span>
                <span className="px-4 py-2 text-gray-400 text-sm">Stock Options</span>
              </div>
              
              {/* Asset types */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-[#25D366] rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Common Shares</h3>
                    <p className="text-gray-400 text-sm">Basic ownership in the company, usually with a vote in decisions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-[#25D366] rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Preference Shares</h3>
                    <p className="text-gray-400 text-sm">Shares that get paid first if the company makes money or is sold.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Phone mockup */}
            <div className="relative">
              <div className="bg-[#232323] rounded-[2.5rem] p-3 shadow-2xl mx-auto" style={{ maxWidth: '260px' }}>
                <div className="bg-[#2a2a2a] rounded-[2rem] p-4 min-h-[400px]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-white text-sm font-medium">Wallet</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Finlence Inc", type: "SAFE", value: "300,000 USD" },
                      { name: "Tracka", type: "SAFE", value: "300,000 USD" },
                      { name: "Kobo360", type: "Options", value: "50,000 USD" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                          <div>
                            <p className="text-white text-xs">{item.name}</p>
                            <p className="text-gray-500 text-xs">{item.type}</p>
                          </div>
                        </div>
                        <p className="text-white text-xs">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                    <div>
                      <p className="text-gray-400 text-xs">Your portfolio is worth</p>
                      <p className="text-white text-xl font-bold">$650,000.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Wallet;