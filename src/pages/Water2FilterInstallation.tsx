import { Link } from 'react-router-dom';
import { Phone, Droplet, CheckCircle2, Shield, Leaf, Zap, AlertTriangle, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function Water2FilterInstallation() {
  return (
    <>
      <SEO
        title="Water2 Filter Installation Glasgow | Under-Sink Drinking Water Filter"
        description="Professional Water2 under-sink water filter installation in Glasgow. Cleaner, better tasting drinking water. Remove chlorine, sediment, heavy metals. £250 fully fitted."
        canonical="https://upgradeboilersandbathrooms.com/plumbing/water2-filter-installation"
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/plumbing" className="hover:text-white">Plumbing</Link>
              <span className="mx-2">/</span>
              <span>Water2 Filter Installation</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Water2 Filter Installation Glasgow
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 font-semibold">
              Under-Sink Water Filter Supplied & Fitted – Cleaner, Better Tasting Water
            </p>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed max-w-2xl">
              Enjoy crystal-clear, better tasting drinking water straight from your tap with professional Water2 filter installation in Glasgow. Upgrade Boilers & Bathrooms supply and install Water2 under-sink water filtration systems for homeowners, landlords and businesses across Greater Glasgow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Install a Water2 Filter in Your Glasgow Home?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Although Scottish water is among the highest quality in the UK, it can still contain contaminants that affect taste and clarity.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Scottish tap water may contain:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>Chlorine (used for disinfection)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>Sediment from pipework</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>Trace heavy metals (such as lead in older properties)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>Microplastics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>Limescale particles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>Unpleasant tastes or odours</span>
                    </li>
                  </ul>
                </div>
                <p className="text-slate-700 font-semibold">
                  A professionally installed Water2 filter improves the quality of your drinking and cooking water directly at source.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3625517/pexels-photo-3625517.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Clean drinking water from under-sink filter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Key Benefits of a Water2 Under-Sink Filter
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <Droplet className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Cleaner, Safer Drinking Water</h3>
                    <p className="text-slate-700">
                      Removes chlorine, sediments and unwanted contaminants to improve clarity and quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Better Taste & Smell</h3>
                    <p className="text-slate-700">
                      Reduces chlorine taste and odours — ideal for drinking water, tea, coffee and cooking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-600">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Heavy Metal Reduction</h3>
                    <p className="text-slate-700">
                      Helps reduce lead and other heavy metals often found in older plumbing systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-cyan-600">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Microplastic & Sediment Filtration</h3>
                    <p className="text-slate-700">
                      Designed to reduce microplastics, rust flakes and particulate matter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-600">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Protects Appliances</h3>
                    <p className="text-slate-700">
                      Filtered water can help reduce sediment build-up in kettles and coffee machines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-700">
                <div className="flex items-start gap-4">
                  <Leaf className="w-8 h-8 text-green-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Eco-Friendly & Cost Effective</h3>
                    <p className="text-slate-700">
                      Reduces reliance on bottled water and lowers plastic waste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              What Does the Water2 Filter Remove?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3806237/pexels-photo-3806237.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Water filtration system diagram"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  The Water2 multi-stage filtration system is designed to reduce a wide range of contaminants using advanced filtration technology.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Advanced filtration reduces:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Chlorine</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Sediment & rust particles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Microplastics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Bacteria & parasites (mechanical reduction)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Heavy metals such as lead</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Asbestos fibres (where present in supply systems)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-slate-700 text-sm">
                  Using activated carbon and advanced filtration media, it improves water taste and clarity without removing essential minerals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Professional Installation & Pricing
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-blue-300 mb-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Fully Supplied & Installed</h3>
                  <p className="text-5xl font-bold text-blue-600 mb-4">£250</p>
                  <p className="text-slate-700 font-semibold mb-6">Fully fitted inc VAT</p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>No hidden charges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Clean & tidy installation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>System tested before we leave</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Takes under one hour</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3571037/pexels-photo-3571037.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional under-sink filter installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Is a Water Filter Necessary in Glasgow?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Water testing and quality assessment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  While Scottish tap water meets safety standards, older properties in Glasgow may still contain contaminants that affect water quality and taste.
                </p>
                <div className="bg-amber-50 rounded-xl p-8 border-2 border-amber-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Pre-1970s properties may contain:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>Lead pipework</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>Galvanised steel pipe sections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>Internal sediment build-up</span>
                    </li>
                  </ul>
                </div>
                <p className="text-slate-700 mb-4 font-semibold">
                  We're happy to assess your setup and provide honest advice on whether filtration would benefit your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Send Us a Photo of Your Under-Sink Space
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Not sure if a Water2 filter can be installed in your property? It's easy to check — just send us a photo of your under-sink area.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Simply photograph:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Under your kitchen sink</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Your pipework layout</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Available cupboard space</span>
                    </li>
                  </ul>
                </div>
                <p className="text-slate-700 font-semibold">
                  We'll confirm suitability before booking installation and answer any questions you have.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3407517/pexels-photo-3407517.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Under-sink cupboard space assessment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Water2 Filter – Bear Grylls Partnership
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Water2 filter brand quality and innovation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  You may have seen Water2 featured online — Bear Grylls is a co-owner and supporter of the brand.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                  <p className="text-slate-700 mb-4">
                    His involvement reflects the brand's focus on water quality, filtration innovation and accessible clean drinking water solutions.
                  </p>
                  <p className="text-slate-700 text-sm">
                    When choosing a water filter system, you're investing in a brand trusted for performance and environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Filter Replacement & Maintenance
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">How Often Does the Filter Need Replacing?</h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Most Water2 filters require replacement every 6–12 months, depending on usage and water quality in your area.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">We can help with:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Supply replacement cartridges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Install new filters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Set reminder schedules</span>
                    </li>
                  </ul>
                </div>
                <p className="text-slate-700 text-sm">
                  Maintaining your filter ensures continued performance and water quality.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3808015/pexels-photo-3808015.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Water filter replacement and maintenance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Water Filtration for Landlords & Businesses
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3760050/pexels-photo-3760050.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Water filter installation for businesses and rental properties"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  If you're a landlord or business owner, improving water quality can enhance tenant and guest satisfaction while reducing maintenance costs.
                </p>
                <div className="bg-cyan-50 rounded-xl p-8 border-2 border-cyan-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">We install Water2 filters for:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Residential properties</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Rental homes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Offices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Small businesses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Holiday lets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Areas We Cover – Water Filter Installation Glasgow
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">Glasgow City Centre</p>
                </div>
                <p className="text-slate-600 ml-9">G1–G5</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">West End</p>
                </div>
                <p className="text-slate-600 ml-9">G11–G13</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">Southside</p>
                </div>
                <p className="text-slate-600 ml-9">G41–G46</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">East Glasgow</p>
                </div>
                <p className="text-slate-600 ml-9">G31–G32</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">Bearsden & Milngavie</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">East Kilbride</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">Paisley & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Water2 Filter Installation Glasgow – FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Does the Water2 filter remove lead?',
                  answer: 'Yes — it significantly reduces lead levels in drinking water. This is particularly important for older properties in Glasgow with lead pipework or solder connections.'
                },
                {
                  question: 'Will it improve taste?',
                  answer: 'Yes — chlorine reduction improves taste and smell significantly. Most customers notice an immediate improvement in their drinking water quality.'
                },
                {
                  question: 'Does it remove bacteria?',
                  answer: 'It provides high-level mechanical reduction of bacteria and parasites through its advanced multi-stage filtration system.'
                },
                {
                  question: 'How long does installation take?',
                  answer: 'Usually under 60 minutes. We aim for quick, clean installations with minimal disruption to your kitchen.'
                },
                {
                  question: 'Do I need a plumber to install it?',
                  answer: 'Yes — professional installation ensures correct connection to your water supply, leak-free fitting, and proper system testing before we leave.'
                },
                {
                  question: 'Can I install it myself?',
                  answer: 'While some customers attempt DIY installation, we recommend professional fitting to ensure proper connections, correct pressure settings, and to avoid potential water damage.'
                },
                {
                  question: 'What about water pressure after installation?',
                  answer: 'Water pressure typically remains excellent. We test the system before leaving to ensure optimal flow and pressure are maintained.'
                },
                {
                  question: 'How much do replacement filters cost?',
                  answer: 'Replacement cartridges are very affordable. Contact us for current pricing — we can also supply them directly or arrange replacement at your next visit.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Drinking Water?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If you want cleaner, better tasting tap water in your Glasgow home, contact Upgrade Boilers & Bathrooms today. Professional installation. Cleaner water. Better taste.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
