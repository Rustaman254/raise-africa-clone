import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

const locations = [
  { city: "Amsterdam", address: "Suite 101 Nayzak Street Clonify REU Netherlands" },
  { city: "London", address: "Suite 101 Nayzak Street Clonify REU United Kingdom" },
  { city: "California", address: "Suite 101 Nayzak Street Clonify REU United States" },
  { city: "Dubai", address: "Suite 101 Nayzak Street Clonify REU United Arab Emirates" },
  { city: "Tokyo", address: "Suite 101 Nayzak Street Clonify REU Japan" },
  { city: "New Delhi", address: "Suite 101 Nayzak Street Clonify REU India" },
];

const faqs = [
  "Which pricing plan is right for me?",
  "What payment methods do you offer?",
  "How much does a subscription cost?",
  "What is your refund policy?",
  "Where is my license code?",
  "I have a question",
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            How can we help?
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Should you have any inquiries, don't hesitate to contact us, and we'll get back to you promptly. Make sure to include as much detail as you can.
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-primary/80 to-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact us</h2>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Name" 
                  className="bg-[#f8f9fa] border-0 rounded-xl h-12"
                />
                <Input 
                  type="email"
                  placeholder="Email" 
                  className="bg-[#f8f9fa] border-0 rounded-xl h-12"
                />
              </div>
              <Textarea 
                placeholder="Message" 
                className="bg-[#f8f9fa] border-0 rounded-xl min-h-[150px] resize-none"
              />
              <Button className="w-full bg-primary text-white rounded-xl h-12">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Our locations</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            6 locations around the world
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            We're operating all around the world with teams from all around the globe. If you're around, come drop a hello.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{location.city}</h3>
                    <p className="text-gray-500 text-sm">{location.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">FAQ</h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-[#f8f9fa] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900">{faq}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
