import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "15k+", label: "Design assets", description: "No need to install software. Simply start from your browser." },
  { value: "250+", label: "Servers", description: "Work with your team on designs in real time and make changes" },
  { value: "86+", label: "Variations", description: "Create interactive prototypes that look and feel like the real thing" },
  { value: "120+", label: "Components", description: "Choose from a vast library of components, templates, and icons" },
];

const team = [
  { name: "Dana Arfana", role: "Senior UI Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  { name: "Michael Chen", role: "Lead Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  { name: "Sarah Johnson", role: "Product Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
  { name: "David Okonkwo", role: "Head of Growth", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Helping startups<br />and designers<br />since 2014
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            We created an ever-growing design software with high precision and the best UI/UX practices in mind so you'll always find the perfect asset.
          </p>
          
          {/* Team Image */}
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
              alt="Our Team"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-12">
            Packed with useful features
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-lg font-medium text-gray-700 mb-2">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">Our story</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                It all started with an idea that became a family
              </h2>
              <p className="text-gray-600 mb-8">
                We created an ever-growing design software with high precision and the best practices in mind so you'll always find the asset you're looking for.
              </p>
              <Button className="bg-primary text-white rounded-full px-6">
                Read post
              </Button>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                alt="Our Story"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            We started as a small team, now we're family
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Meet the people behind Fin lence
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Clients</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by world's leading companies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Semper eget dictum id nec lorem feugiat vestibulum dapibus.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
