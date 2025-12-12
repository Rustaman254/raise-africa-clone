import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Share2, Play, Briefcase, TrendingUp, Users } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Distribute = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="container mx-auto px-4 text-center">
          {/* Product Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-semibold text-gray-900">distribute</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Align your<br />shareholders in clicks
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Empower your team, investors, and board with digital equity that's easy to understand and track.
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
          
          {/* Video/Demo Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl aspect-video flex items-center justify-center shadow-xl">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-12">Distribute digital equity to your shareholders</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Briefcase,
                title: "For founders",
                description: "Align your co-founders vesting and common shares - so everyone is on the same page.",
                color: "bg-blue-100"
              },
              {
                icon: TrendingUp,
                title: "For investors",
                description: "Help investors model returns and growth opportunities for their money.",
                color: "bg-green-100"
              },
              {
                icon: Users,
                title: "For employees",
                description: "Align your employee's ownership with your growth plans.",
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
      
      {/* How it works */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            How Distribute works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Create your cap table",
                description: "Import or build your cap table in minutes with our intuitive interface."
              },
              {
                step: "02",
                title: "Invite shareholders",
                description: "Send digital invites to founders, investors, and employees."
              },
              {
                step: "03",
                title: "Track in real-time",
                description: "Everyone sees their ownership updated as the company grows."
              }
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <span className="text-5xl font-bold text-primary/20">{step.step}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to align your shareholders?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join hundreds of African startups managing their equity with Fin lence.
          </p>
          <Button className="bg-primary text-white rounded-full px-8 py-3 h-auto">
            Get Started Today
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Distribute;
