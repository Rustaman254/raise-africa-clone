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
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4 relative overflow-hidden">
              {/* Scattered circles representing chaos */}
              <div className="absolute w-6 h-6 rounded-full bg-orange-400 top-3 left-3" />
              <div className="absolute w-5 h-5 rounded-full bg-blue-400 top-6 right-4" />
              <div className="absolute w-4 h-4 rounded-full bg-green-400 bottom-4 left-5" />
              <div className="absolute w-5 h-5 rounded-full bg-purple-400 bottom-3 right-3" />
              <div className="absolute w-3 h-3 rounded-full bg-red-400 top-8 left-8" />
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
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                {/* Organize icon - stacked lines */}
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
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
