import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Share2 } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

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
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-semibold text-gray-900">distribute</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Align your shareholders<br />in clicks
          </h1>
          
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Empower your team, investors, and board with digital equity that's easy to understand and track.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <Button className="bg-primary text-white rounded-full px-6 py-3 h-auto flex items-center gap-2">
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              Request Access
            </Button>
            <Button variant="outline" className="rounded-full px-6 py-3 h-auto flex items-center gap-2 border-gray-300 bg-white">
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </div>
          
          {/* Phone with hand mockup */}
          <div className="max-w-sm mx-auto relative">
            <div className="relative">
              <div className="bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl mx-auto" style={{ maxWidth: '280px' }}>
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
                      <span className="text-white text-xs px-2 py-1 bg-primary rounded">Company</span>
                      <span className="text-gray-400 text-xs px-2 py-1 bg-gray-700 rounded">Wallet</span>
                    </div>
                  </div>
                  
                  {/* Captable title */}
                  <div className="text-left mb-4">
                    <h3 className="text-white text-lg font-bold">Captable</h3>
                    <p className="text-gray-500 text-xs">Manage your company's equity</p>
                  </div>
                  
                  {/* Tabs */}
                  <div className="flex gap-2 mb-4">
                    {['Overview', 'Shareholders', 'Transactions'].map((tab, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded ${i === 0 ? 'bg-gray-700 text-white' : 'text-gray-500'}`}>{tab}</span>
                    ))}
                  </div>
                  
                  {/* Equity breakdown */}
                  <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333] rounded-xl p-4 mb-4">
                    <p className="text-gray-400 text-xs mb-2">Total equity distributed</p>
                    <p className="text-white text-2xl font-bold">1,000,000 shares</p>
                    <div className="flex gap-2 mt-2">
                      <div className="flex-1 h-2 bg-primary rounded-full" />
                      <div className="w-1/4 h-2 bg-[#25D366] rounded-full" />
                      <div className="w-1/6 h-2 bg-purple-500 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Shareholders */}
                  <div className="text-left">
                    <p className="text-white text-sm font-medium mb-1">Shareholders</p>
                    <p className="text-gray-500 text-xs mb-3">List of equity holders</p>
                    
                    {[
                      { name: "Founders", shares: "600,000", pct: "60%" },
                      { name: "Investors", shares: "250,000", pct: "25%" },
                      { name: "ESOP Pool", shares: "150,000", pct: "15%" },
                    ].map((holder, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-gray-700/50">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-[#25D366]' : 'bg-purple-500'}`} />
                          <div>
                            <p className="text-white text-sm">{holder.name}</p>
                            <p className="text-gray-500 text-xs">{holder.shares} shares</p>
                          </div>
                        </div>
                        <p className="text-white text-sm font-medium">{holder.pct}</p>
                      </div>
                    ))}
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
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                    <span className="text-white text-sm">Cap Table</span>
                  </div>
                  <div className="bg-[#2a2a2a] rounded-xl p-4 mb-4">
                    <p className="text-gray-400 text-xs mb-1">Total Shares</p>
                    <p className="text-white text-xl font-bold">1,000,000</p>
                  </div>
                  {/* Pie chart representation */}
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary via-[#25D366] to-purple-500 relative">
                    <div className="absolute inset-4 bg-[#232323] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Distribute digital equity to your shareholders
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    color: "bg-[#25D366]",
                    title: "For founders",
                    description: "Align your co-founders vesting and common shares - so everyone is on the same page."
                  },
                  {
                    color: "bg-primary",
                    title: "For investors",
                    description: "Help investors model returns and growth opportunities for their money."
                  },
                  {
                    color: "bg-primary",
                    title: "For employees",
                    description: "Align your employee's ownership with your growth plans."
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
      
      {/* How it works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Manage equity<br />the modern way
              </h2>
              <p className="text-gray-500 mb-6">
                Create, distribute, and track equity for all your stakeholders in one simple platform.
              </p>
              <Button className="bg-primary text-white rounded-full px-6 py-3 h-auto">
                Request Access
              </Button>
            </div>
            
            {/* Right - Feature cards */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-[#f2f5f6] rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">New shareholder added</p>
                  <p className="text-2xl font-bold text-gray-900">Dr. Josephine Obi</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Ownership</p>
                  <p className="text-lg font-bold text-gray-900">2.05%</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#f2f5f6] rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop')" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Damola Akinade</p>
                    <p className="text-xs text-gray-500">received options</p>
                    <p className="text-lg font-bold text-gray-900">50,000 shares</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Vesting</p>
                  <p className="text-lg font-bold text-[#25D366]">4 years</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-[#f2f5f6] rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">ESOP pool created</p>
                  <p className="text-2xl font-bold text-gray-900">150,000 shares</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop')" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Team allocation</p>
                    <p className="text-xs text-gray-500">15% of total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Track & Manage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Phone mockup */}
            <div className="relative">
              <div className="bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl mx-auto" style={{ maxWidth: '260px' }}>
                <div className="bg-[#232323] rounded-[2rem] p-4 min-h-[450px]">
                  <div className="text-left mb-4">
                    <h3 className="text-white text-lg font-bold">Transactions</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { action: "Issued shares to", name: "John Doe", amount: "10,000" },
                      { action: "Vested options for", name: "Jane Smith", amount: "5,000" },
                      { action: "Created ESOP grant", name: "New hire", amount: "2,500" },
                    ].map((tx, i) => (
                      <div key={i} className="bg-[#2a2a2a] rounded-xl p-3">
                        <p className="text-gray-400 text-xs">{tx.action}</p>
                        <p className="text-white text-sm font-medium">{tx.name}</p>
                        <p className="text-[#25D366] text-sm">{tx.amount} shares</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Track every equity<br />transaction
              </h2>
              <p className="text-gray-400 text-lg mb-2">Issue new shares</p>
              <p className="text-gray-400 text-lg mb-2">Track vesting schedules</p>
              <p className="text-gray-900 font-semibold text-lg">Manage cap table updates</p>
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
              <Button variant="outline" className="rounded-full text-white border-white/20 bg-transparent hover:bg-white/10">
                Learn more
              </Button>
              
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
              <Button className="bg-primary text-white rounded-full px-4 py-2 h-auto text-sm mb-6">
                Learn More
              </Button>
              
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
                    <span className="text-white text-sm font-medium">Cap Table</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Founders", type: "Common", value: "600,000 shares" },
                      { name: "Series A", type: "Preferred", value: "250,000 shares" },
                      { name: "ESOP", type: "Options", value: "150,000 shares" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-[#25D366]' : 'bg-purple-500'}`} />
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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#25D366]" />
                    <div>
                      <p className="text-gray-400 text-xs">Total shares issued</p>
                      <p className="text-white text-xl font-bold">1,000,000</p>
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

export default Distribute;