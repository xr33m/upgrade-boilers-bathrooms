import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, ThermometerSun, Zap, Home, Settings } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function UnderfloorHeating() {
  return (
    <>
      <SEO
        title="Underfloor Heating Installation Glasgow | Electric & Water Systems"
        description="Professional underfloor heating installation in Glasgow. Electric and water-based systems for new builds and renovations. Energy-efficient heating solutions from expert installers."
        canonical="https://upgradeboilersandbathrooms.com/heating/underfloor-heating"
      />

      <section className="bg-gradient-to-b from-amber-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Underfloor Heating Installation Glasgow
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              Transform your home with luxurious underfloor heating. Energy-efficient, space-saving, and incredibly comfortable. Expert installation of electric and water-based systems across Glasgow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                to="/contact"
                className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThermometerSun className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Even Heat Distribution</h3>
                <p className="text-slate-600 text-sm">Comfortable warmth throughout every room</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Energy Efficient</h3>
                <p className="text-slate-600 text-sm">Lower running costs than radiators</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Space Saving</h3>
                <p className="text-slate-600 text-sm">No radiators needed on walls</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Easy Control</h3>
                <p className="text-slate-600 text-sm">Smart thermostats and zoning available</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Types of Underfloor Heating We Install
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border-2 border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Electric Underfloor Heating</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Perfect for single rooms, bathrooms, and extensions. Quick to install with minimal floor height increase. Ideal for renovations and retrofit projects.
                </p>
                <h4 className="font-bold text-slate-900 mb-3">Best For:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Bathrooms and kitchens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Single room installations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Extensions and conservatories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Renovation projects</span>
                  </li>
                </ul>
                <h4 className="font-bold text-slate-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Fast installation (1-2 days)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Low floor build-up (as little as 3mm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Quick heat-up time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Suitable for all floor types</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border-2 border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <ThermometerSun className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Water Underfloor Heating</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  The most efficient option for whole-house heating. Connects to your boiler or heat pump for lower running costs. Perfect for new builds and major renovations.
                </p>
                <h4 className="font-bold text-slate-900 mb-3">Best For:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Whole house heating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">New build properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Major renovations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Heat pump installations</span>
                  </li>
                </ul>
                <h4 className="font-bold text-slate-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Lowest running costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Works with boilers and heat pumps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Most efficient heating system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Long lifespan (50+ years)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Benefits of Underfloor Heating</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Comfort & Efficiency</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Even heat distribution from floor to ceiling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Up to 25% more efficient than radiators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Lower operating temperatures save energy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>No cold spots or drafts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Design & Lifestyle</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>More usable wall space without radiators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Silent operation - no noise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Better for allergies - no dust circulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Compatible with all floor finishes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Our Underfloor Heating Installation Process
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <div className="text-3xl font-bold text-amber-600 mb-3">1</div>
                <h3 className="font-bold text-lg mb-3 text-slate-900">Free Survey & Design</h3>
                <p className="text-slate-700">We visit your property to assess your needs, take measurements, and design the optimal underfloor heating solution for your space.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <div className="text-3xl font-bold text-amber-600 mb-3">2</div>
                <h3 className="font-bold text-lg mb-3 text-slate-900">Professional Installation</h3>
                <p className="text-slate-700">Our experienced installers fit your underfloor heating system with precision, ensuring perfect coverage and efficient operation.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <div className="text-3xl font-bold text-amber-600 mb-3">3</div>
                <h3 className="font-bold text-lg mb-3 text-slate-900">Testing & Commissioning</h3>
                <p className="text-slate-700">We thoroughly test the system, commission all controls, and show you how to operate your new underfloor heating efficiently.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Suitable Floor Finishes
            </h2>
            <p className="text-slate-700 mb-8">
              Underfloor heating works with virtually all floor types. We can advise on the best options for your property:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-slate-900 mb-2">Tile & Stone</h4>
                <p className="text-sm text-slate-600">Best heat conductivity - highly efficient</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-slate-900 mb-2">Engineered Wood</h4>
                <p className="text-sm text-slate-600">Excellent with UFH - use specific grades</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-slate-900 mb-2">Laminate</h4>
                <p className="text-sm text-slate-600">Works well - check UFH compatibility</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-slate-900 mb-2">Carpet</h4>
                <p className="text-sm text-slate-600">Possible with low tog rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Underfloor Heating?
          </h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Get in touch for a free survey and quote. We'll design the perfect underfloor heating system for your Glasgow property.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              Request Free Survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
