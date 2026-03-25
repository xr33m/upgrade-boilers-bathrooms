import { Link } from 'react-router-dom';
import { Phone, Droplet, CheckCircle2, Thermometer, AlertCircle, Zap, Shield, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';
import AreasWeServe from '../components/AreasWeServe';
import { BUSINESS_INFO } from '../constants/business';
import { serviceLinks, hotWaterTanksRelatedServices } from '../lib/links';

export default function HotWaterTanks() {
  return (
    <>
      <SEO
        title="Hot Water Tank Replacement & Repairs Glasgow | Unvented & Vented Cylinders"
        description="Hot water tank and cylinder repairs, replacements and installations in Glasgow. Unvented and vented cylinders. Expert service from qualified engineers."
        canonical="https://upgradeboilersandbathrooms.com/plumbing/hot-water-tanks"
      />

      <section className="bg-gradient-to-br from-orange-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-orange-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to={serviceLinks.plumbing.hub} className="hover:text-white">Plumbing</Link>
              <span className="mx-2">/</span>
              <span>Hot Water Tanks</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hot Water Tank Replacement & Repairs Glasgow
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-6 font-semibold">
              Unvented & Vented Cylinder Specialists – Repairs, Upgrades & Installations
            </p>
            <p className="text-lg text-orange-50 mb-8 leading-relaxed max-w-2xl">
              No hot water? Leaking cylinder? Low pressure upstairs? Upgrade Boilers & Bathrooms provide professional hot water tank repairs and replacements across Glasgow and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-orange-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              With over 20 years of plumbing and heating experience, our fully qualified engineers install, repair and service unvented pressurised cylinders, gravity-fed tanks, immersion heaters, thermal stores and direct/indirect cylinders.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Signs Your Hot Water Tank Needs Repair or Replacement
                </h2>
                <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
                  <p className="text-slate-700 mb-4 font-semibold">You may need a repair or new installation if experiencing:</p>
                  <ul className="space-y-3 text-slate-700">
                    {[
                      'No hot water or inconsistent temperatures',
                      'Water leaking from cylinder or pipework',
                      'Low pressure upstairs',
                      'Rust-coloured hot water',
                      'Unusual noises from the cylinder',
                      'Rising energy bills',
                      'Visible corrosion'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-700 border-t mt-4 pt-4 font-semibold">
                    A small issue left unresolved can quickly turn into full cylinder failure.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632404/pexels-photo-5632404.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional hot water cylinder installation and repair"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Unvented Hot Water Cylinders (Mains Pressure Systems)
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern unvented hot water cylinder system installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Unvented cylinders connect directly to your mains water supply, providing strong, consistent pressure throughout the property.
                </p>
                <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">Benefits:</p>
                  <ul className="space-y-3">
                    {[
                      'High-pressure showers',
                      'No loft cold water tank required',
                      'Better heat retention',
                      'More energy efficient',
                      'Space-saving design'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700 mb-4 font-semibold">
                  We install and repair: Megaflo, Joule, Telford, Worcester, Vaillant and more.
                </p>
                <p className="text-slate-700 text-sm">
                  Annual servicing is strongly recommended to maintain safety valves, expansion vessels and pressure controls.
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Gravity-Fed (Open Vent) Hot Water Tanks
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Traditional vented systems rely on a cold water storage tank in the loft and operate under gravity pressure. These systems can still be effective — but often suffer from poor shower pressure, heat loss, sludge build-up and ball valve faults.
                </p>
                <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
                  <p className="text-slate-700 mb-4 font-semibold">Common issues:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Lower water pressure</li>
                    <li>• Requires loft cold water tank</li>
                    <li>• More extensive pipework</li>
                    <li>• Poor insulation efficiency</li>
                  </ul>
                  <p className="text-slate-700 border-t mt-4 pt-4 font-semibold">
                    Upgrading to an <Link to={serviceLinks.boilers.installation} className="text-orange-600 hover:text-orange-700 underline">unvented system</Link> improves pressure, efficiency and frees up loft space.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Traditional gravity-fed hot water tank in loft"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Immersion Heater Repairs & Replacements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3817517/pexels-photo-3817517.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Immersion heater and electrical repair service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  If your property relies on an immersion heater, faults can develop over time causing no hot water, water not reaching temperature, or excessive electricity usage.
                </p>
                <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
                  <p className="text-slate-700 mb-4 font-semibold">Common issues:</p>
                  <ul className="space-y-2 text-slate-700 mb-6">
                    <li>• Burned-out heating elements</li>
                    <li>• Faulty thermostats</li>
                    <li>• Electrical supply faults</li>
                    <li>• Tripped safety cut-outs</li>
                  </ul>
                  <p className="text-slate-700 font-semibold">
                    We test, diagnose and replace immersion elements safely and efficiently.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Leaking Hot Water Tank – What Causes It?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">Cylinder leaks are often caused by:</p>
                  <ul className="space-y-2 text-slate-700">
                    {[
                      'Corrosion inside older tanks',
                      'Failed pressure relief valves',
                      'Loose compression fittings',
                      'Split expansion vessels',
                      'Excessive system pressure',
                      'Failed temperature & pressure (T&P) valve'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span>•</span> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700 font-semibold mb-4">
                  Small leaks can escalate quickly — especially in airing cupboards or concealed spaces.
                </p>
                <p className="text-slate-700">
                  We isolate the system, diagnose the source and determine whether repair is possible or replacement is required.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Leaking hot water cylinder diagnosis and repair"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Low Hot Water Pressure? Upgrade Options
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632405/pexels-photo-5632405.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="High-pressure shower upgrade installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Weak hot water flow upstairs is typically caused by gravity-fed system limitations, blocked pipework, scale build-up or undersized pipework.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                  <p className="text-slate-700 mb-4 font-semibold">Solutions we offer:</p>
                  <ul className="space-y-2 text-slate-700 mb-6">
                    <li>• Installing a shower pump</li>
                    <li>• Converting to unvented mains pressure cylinder</li>
                    <li>• Pipework upgrades</li>
                    <li>• Replacing outdated cylinder</li>
                  </ul>
                  <p className="text-slate-700 font-semibold">
                    We install: Salamander, Grundfos, Stuart Turner and more.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Upgrade & Space-Saving Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Many older Glasgow properties have large cold water tanks in lofts, oversized hot water cylinders, inefficient lagging and wasted cupboard space.
                </p>
                <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
                  <p className="text-slate-700 mb-4 font-semibold">Modern cylinder upgrades can:</p>
                  <ul className="space-y-3">
                    {[
                      'Improve pressure',
                      'Reduce energy bills',
                      'Free up cupboard or loft space',
                      'Eliminate cold water storage tanks',
                      'Improve overall system efficiency'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Space-saving modern hot water cylinder installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Unvented Cylinder Servicing – Essential for Safety
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632406/pexels-photo-5632406.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional unvented cylinder servicing and maintenance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Unvented hot water systems operate under pressure and must be serviced annually for safety and warranty compliance.
                </p>
                <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
                  <p className="text-slate-700 mb-4 font-semibold">Servicing includes:</p>
                  <ul className="space-y-2 text-slate-700 mb-6">
                    <li>• Testing expansion vessel charge</li>
                    <li>• Inspecting pressure relief valves</li>
                    <li>• Checking tundish discharge pipe</li>
                    <li>• Verifying thermostat accuracy</li>
                    <li>• Ensuring system safety compliance</li>
                  </ul>
                  <p className="text-slate-700 font-semibold">
                    Regular maintenance prevents dangerous over-pressurisation and extends cylinder lifespan.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Hot Water Tank Replacement Process
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 md:p-12 rounded-xl shadow-lg mb-16">
              <ol className="space-y-4 mb-8">
                {[
                  { num: 1, text: 'Full system assessment' },
                  { num: 2, text: 'Pressure and flow rate testing' },
                  { num: 3, text: 'Honest recommendation (repair vs replace)' },
                  { num: 4, text: 'Safe removal of existing cylinder' },
                  { num: 5, text: 'Professional installation to current regulations' },
                  { num: 6, text: 'System commissioning & safety checks' },
                  { num: 7, text: 'Handover guidance' }
                ].map((item) => (
                  <li key={item.num} className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-600 text-white rounded-full font-bold flex-shrink-0">{item.num}</span>
                    <span className="text-lg text-slate-700 mt-1">{item.text}</span>
                  </li>
                ))}
              </ol>
              <p className="text-slate-700 border-t pt-6 font-semibold text-center">
                Most cylinder replacements are completed within one day.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Hot Water Tank Replacement for Landlords
            </h2>

            <div className="bg-orange-600 text-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-12 h-12 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold">
                    We provide cylinder repairs and replacements for rental properties, HMOs, landlord portfolios and property managers.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: 'Boiler servicing', link: serviceLinks.boilers.servicing },
                  { title: 'Central heating upgrades', link: serviceLinks.heating.hub },
                  { title: 'Gas safety certification', link: serviceLinks.landlords.gasSafety },
                  { title: 'Landlord compliance', link: '/landlords' }
                ].map((item, index) => (
                  <Link key={index} to={item.link} className="bg-orange-700 hover:bg-orange-800 rounded-lg p-4 text-white font-semibold flex items-center gap-2 underline transition">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>

              <p className="text-orange-100 text-sm text-center">
                We combine services to provide efficient, coordinated maintenance for your portfolio.
              </p>
            </div>


            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Hot Water Tank Repairs Glasgow – Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How long does a hot water cylinder last?
                </h3>
                <p className="text-slate-700">
                  Typically 10–20 years depending on system type and maintenance.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Can a leaking cylinder be repaired?
                </h3>
                <p className="text-slate-700">
                  Minor external leaks may be repairable. Internal corrosion usually requires replacement.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Do unvented cylinders require servicing?
                </h3>
                <p className="text-slate-700">
                  Yes — annual servicing is strongly recommended for safety and warranty compliance.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Why is my hot water brown?
                </h3>
                <p className="text-slate-700">
                  This can indicate corrosion inside the cylinder or pipework.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Should I upgrade from vented to unvented?
                </h3>
                <p className="text-slate-700">
                  If your mains pressure is strong, upgrading can significantly improve performance and free up space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AreasWeServe />

      <RelatedServices services={hotWaterTanksRelatedServices} />

      <section className="py-12 md:py-16 bg-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Hot Water Tank Repaired or Replaced in Glasgow?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto leading-relaxed">
            If you're experiencing hot water problems, don't wait for a full system failure. Contact Upgrade Boilers & Bathrooms for professional hot water tank repairs and installations across Glasgow. Reliable advice. Safe installation. Long-term performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-orange-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
