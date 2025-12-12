import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wallet as WalletIcon, MessageCircle, Play, TrendingUp, Users, Briefcase } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Wallet = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="container mx-auto px-4 text-center">
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
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Fin lence is where serious investors, founders and employees in African startups build their wealth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <Button className="bg-primary text-white rounded-full px-6 py-3 h-auto flex items-center gap-2">
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              Request Access
            </Button>
            <Button variant="outline" className="rounded-full px-6 py-3 h-auto flex items-center gap-2 border-gray-300">
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </div>
          
          {/* Phone Mockup Placeholder */}
          <div className="max-w-md mx-auto">
            <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-gray-800 rounded-[2.5rem] p-6 min-h-[500px] flex flex-col">
                <div className="text-left">
                  <h3 className="text-white text-lg font-medium mb-2">Wallet</h3>
                  <p className="text-gray-400 text-sm mb-6">Manage your entire portfolio in one place</p>
                  
                  <div className="bg-gray-700/50 rounded-xl p-4 mb-6">
                    <p className="text-gray-400 text-xs mb-1">Your entire portfolio is worth</p>
                    <p className="text-white text-3xl font-bold">$900,000.00</p>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">Holdings</p>
                  <p className="text-gray-500 text-xs mb-4">Here's a list of startups that you own assets in.</p>
                  
                  {[
                    { name: "Tracka Technologies", type: "SAFE", value: "300,000 USD" },
                    { name: "Rayven Technologies", type: "SAFE", value: "300,000 USD" },
                    { name: "Quotient Inc", type: "SAFE", value: "300,000 USD" },
                  ].map((holding, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary text-sm font-bold">{holding.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-white text-sm">{holding.name}</p>
                          <p className="text-gray-500 text-xs">{holding.type}</p>
                        </div>
                      </div>
                      <p className="text-white text-sm">{holding.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-12">A wallet built to track real-time equity in African startups</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Briefcase,
                title: "For founders",
                description: "Track the net worth of your common shares across the entire company's lifecycle.",
                color: "bg-blue-100"
              },
              {
                icon: TrendingUp,
                title: "For investors",
                description: "All of your SAFEs, preferred shares and preferences in one simple place.",
                color: "bg-green-100"
              },
              {
                icon: Users,
                title: "For employees",
                description: "Model out how your options will grow with the company over time.",
                color: "bg-purple-100"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bet big on Africa's innovation economy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Consolidate all of your equity, SAFEs, options - and connect them all to your company's cap tables in real time.
          </p>
          <Button className="bg-primary text-white rounded-full px-8 py-3 h-auto">
            Request Access
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Wallet;
