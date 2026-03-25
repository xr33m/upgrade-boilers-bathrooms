import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl transform group-hover:scale-105 transition duration-300 blur opacity-75 group-hover:opacity-100"></div>
                <img
                  src="/about-us-home-upgrade.webp"
                  alt="Upgrade Plumbing & Heating Service Van"
                  className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-600 mb-4 text-center lg:text-left">Certified & Accredited By</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
                  <div className="h-12 md:h-14 flex items-center">
                    <img src="/city-guilds.webp" alt="City & Guilds" className="h-full w-auto max-w-[120px]" />
                  </div>
                  <div className="h-12 md:h-14 flex items-center">
                    <img src="/ciphe-log.webp" alt="CIPHE" className="h-full w-auto max-w-[120px]" />
                  </div>
                  <div className="h-12 md:h-14 flex items-center">
                    <img src="/water-safe-logo.webp" alt="Water Safe" className="h-full w-auto max-w-[120px]" />
                  </div>
                  <div className="h-12 md:h-14 flex items-center">
                    <img src="/gassafe-upgrade.webp" alt="Gas Safe" className="h-full w-auto max-w-[120px]" />
                  </div>
                  <div className="h-12 md:h-14 flex items-center">
                    <img src="/upgrade-snipef.webp" alt="SNIPEF" className="h-full w-auto max-w-[120px]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4">
                <span className="text-cyan-600 font-semibold text-sm md:text-base tracking-wider uppercase">About Us</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Your Trusted Glasgow Plumbing & Heating Specialists
              </h2>

              <div className="space-y-4 text-slate-700 mb-8 text-base md:text-lg leading-relaxed">
                <p>
                  With over 20 years of industry experience, Upgrade Boilers & Bathrooms delivers reliable plumbing, central heating and boiler services across Glasgow.
                </p>
                <p>
                  From boiler repairs and servicing to full boiler replacements and bespoke bathroom renovations, our fully qualified Gas Safe registered engineers provide safe, efficient and high-quality workmanship on every job.
                </p>
                <p>
                  As a local Glasgow company, we understand the common plumbing and heating challenges in everything from traditional tenements to modern family homes — and we fix them properly.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-block bg-primary hover:bg-primary-700 text-white font-bold px-8 py-3 md:py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-base md:text-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
