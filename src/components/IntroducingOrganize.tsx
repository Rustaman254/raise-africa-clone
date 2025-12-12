import { ExternalLink } from "lucide-react";
import organizeDashboard from "@/assets/organize-dashboard.png";

const IntroducingOrganize = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Introducing Organize:<br />
            <span className="text-gray-900">make your equity an asset</span>
          </h2>
          <p className="text-base text-gray-600">
            Organize is our latest product with a modern and intuitive way to optimize, value, and manage your equity and corporate structure for everyone on your team.
          </p>
        </div>

        {/* Feature Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Text content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Powerful and simple<br />equity solutions
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Designed from the ground up for the most dedicated, resourceful and resilient African startup teams.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-blue-400 transition-colors text-sm font-medium"
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
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-16">
          {/* Without Organize */}
          <div className="flex flex-col items-center text-center p-8">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 relative">
              {/* Scattered icons representing chaos */}
              <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center">
                <span className="text-white text-xs font-bold">f</span>
              </div>
              <div className="absolute -top-1 right-0 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xs">e</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 text-xs">📄</span>
              </div>
              <div className="absolute -bottom-2 left-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">$</span>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Without Organize
            </h4>
            <p className="text-gray-500 text-sm">
              Multiple tools and entities scattered across the internet.
            </p>
          </div>

          {/* With Organize */}
          <div className="flex flex-col items-center text-center p-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                {/* Organize icon - stacked lines */}
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              With Organize
            </h4>
            <p className="text-gray-500 text-sm">
              Everything intuitively automated in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingOrganize;
