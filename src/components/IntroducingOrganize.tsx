import { ExternalLink } from "lucide-react";
import organizeDashboard from "@/assets/organize-dashboard.png";

const IntroducingOrganize = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      
      <div className="container relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Introducing Organize:<br />
            <span className="text-primary">make your equity an asset</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Organize is our latest product with a modern and intuitive way to optimize, value, and manage your equity and corporate structure for everyone on your team.
          </p>
        </div>

        {/* Feature Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-navy-medium to-navy-deep rounded-3xl p-8 md:p-12 border border-border/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Text content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Powerful and simple equity solutions
                </h3>
                <p className="text-muted-foreground mb-6">
                  Designed from the ground up for the most dedicated, resourceful and resilient African startup teams.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-blue-glow transition-colors text-sm font-medium"
                >
                  Why we shipped organize
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Right: Dashboard image */}
              <div className="relative">
                <img
                  src={organizeDashboard}
                  alt="Organize Dashboard"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* With/Without Organize comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          {/* Without Organize */}
          <div className="flex flex-col items-center text-center p-8">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4 relative">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-400" />
                <div className="w-8 h-8 rounded-full bg-blue-400" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Without Organize
            </h4>
            <p className="text-muted-foreground text-sm">
              Multiple tools and entities scattered across the internet.
            </p>
          </div>

          {/* With Organize */}
          <div className="flex flex-col items-center text-center p-8">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4 glow-blue">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              With Organize
            </h4>
            <p className="text-muted-foreground text-sm">
              Everything intuitively automated in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingOrganize;
