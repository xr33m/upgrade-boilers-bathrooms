import { Link } from 'react-router-dom';
import { Phone, Wind, CheckCircle2, Wrench, Droplets, ThermometerSun, AlertCircle, Zap, MapPin, Droplet, TrendingUp, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function RadiatorRepairs() {
  return (
    <>
      <SEO
        title="Radiator Repairs & Installation Glasgow | Designer Radiators"
        description="Professional radiator repairs, installation & replacement in Glasgow. Cold radiators, leaks, designer radiators, balancing. Call 07523 172416"
        canonical="https://upgradeboilersandbathrooms.com/heating/radiator-repairs"
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/heating" className="hover:text-white">Heating</Link>
              <span className="mx-2">/</span>
              <span>Radiator Repairs</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Radiator Repairs & New Radiator Installation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 font-semibold">
              Leaking, Cold & Designer Radiator Specialists
            </p>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed max-w-2xl">
              Is your radiator cold at the bottom? Leaking at the valve? Not heating up properly? Upgrade Boilers & Bathrooms provide professional radiator repairs and installation services across Glasgow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
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
              Common Radiator Problems We Repair
            </h2>
            <p className="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto">
              Radiators are a key part of your central heating system. When one fails, it can affect comfort and efficiency throughout the home.
            </p>

            <div className="space-y-6 mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-600 text-white rounded-full p-3 flex-shrink-0">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Radiator Cold at the Bottom</h3>
                    <p className="text-slate-700 mb-4">If your radiator is hot at the top but cold at the bottom, this usually indicates:</p>
                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      {[
                        'Sludge build-up',
                        'Rust deposits inside system',
                        'Poor circulation',
                        'System corrosion'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-700 font-semibold mb-3">This is one of the most common signs your heating system may require:</p>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <ul className="space-y-2">
                        {[
                          'A chemical flush',
                          'Magnetic filter installation',
                          'System balancing',
                          'Radiator replacement (if heavily corroded)'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-red-700 font-semibold mt-4">Left untreated, sludge can damage your boiler and pump.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-red-600 text-white rounded-full p-3 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Leaking Radiator</h3>
                    <p className="text-slate-700 mb-4">Leaks commonly occur from:</p>
                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      {[
                        'Corroded radiator panels',
                        'Faulty thermostatic radiator valves (TRVs)',
                        'Loose compression fittings',
                        'Damaged pipework joints'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Droplet className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-700 font-semibold mb-3">Even small leaks can cause:</p>
                    <div className="bg-white rounded-lg p-4 border border-red-200 mb-4">
                      <ul className="space-y-2">
                        {[
                          'Pressure loss',
                          'Boiler shutdown',
                          'Floor damage',
                          'Ceiling staining (in flats/tenements)'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-slate-700">We identify the leak source and advise whether repair or replacement is most appropriate.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-purple-600 text-white rounded-full p-3 flex-shrink-0">
                    <ThermometerSun className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Faulty Thermostatic Radiator Valves (TRVs)</h3>
                    <p className="text-slate-700 mb-4">TRVs regulate the temperature of individual rooms by controlling hot water flow.</p>
                    <p className="text-slate-700 font-semibold mb-3">Common TRV issues:</p>
                    <div className="bg-white rounded-lg p-4 border border-purple-200 mb-4">
                      <ul className="space-y-2">
                        {[
                          'Stuck pin',
                          'Valve not opening',
                          'Radiator permanently hot or cold',
                          'Inconsistent room temperature'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-slate-700 font-semibold mb-2">We can:</p>
                    <ul className="space-y-2">
                      {[
                        'Replace faulty TRVs',
                        'Upgrade to modern energy-efficient valves',
                        'Install smart radiator valves (Hive compatible)'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-amber-600 text-white rounded-full p-3 flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Radiator Not Heating at All</h3>
                    <p className="text-slate-700 mb-4">Possible causes include:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Air trapped in system',
                        'Blocked radiator',
                        'Closed or faulty valve',
                        'Circulation pump issue',
                        'System imbalance'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-700 mt-4">We diagnose whether the problem lies with the radiator itself or the wider central heating system.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-green-600 text-white rounded-full p-3 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Noisy Radiators (Banging / Gurgling)</h3>
                    <p className="text-slate-700 mb-4">Noises can indicate:</p>
                    <ul className="space-y-2">
                      {[
                        'Air trapped',
                        'Sludge build-up',
                        'Pipe expansion',
                        'Poor system balancing',
                        'Incorrect flow rate'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-slate-700 mt-4">Bleeding may solve minor issues — but persistent noise usually requires deeper investigation.</p>
                  </div>
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
              Our Radiator Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-600 text-white rounded-full p-3">
                    <Wind className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">New Radiator Installation</h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Professional installation of all types of radiators, from standard panel radiators to bespoke designer models that enhance your home's aesthetic.
                </p>
                <ul className="space-y-3">
                  {[
                    'Standard panel radiators',
                    'Vertical designer radiators',
                    'Column radiators',
                    'Cast iron traditional radiators',
                    'Towel radiators',
                    'Low-temperature radiators (for heat pumps)'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-600 text-white rounded-full p-3">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Radiator Repairs</h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Fast, reliable repairs for all radiator problems to get your heating working properly again. We diagnose and fix issues quickly.
                </p>
                <ul className="space-y-3">
                  {[
                    'Cold radiator diagnosis',
                    'Leak repairs and sealing',
                    'Valve replacement & repairs',
                    'Radiator bleeding',
                    'System balancing',
                    'Sludge removal'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-600 text-white rounded-full p-3">
                    <ThermometerSun className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Thermostatic Valves</h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Installation and replacement of thermostatic radiator valves for better temperature control and energy savings throughout your home.
                </p>
                <ul className="space-y-3">
                  {[
                    'TRV installation and upgrades',
                    'Smart TRV fitting',
                    'Faulty valve replacement',
                    'Energy-saving advice',
                    'System balancing with TRVs',
                    'Hive-compatible smart valves'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-cyan-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-cyan-600 text-white rounded-full p-3">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Radiator Replacement</h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Complete radiator replacement service, from single units to whole-house upgrades. We handle removal, disposal, and new installation.
                </p>
                <ul className="space-y-3">
                  {[
                    'Old radiator removal',
                    'Pipework modifications',
                    'New radiator fitting',
                    'System refilling and testing',
                    'Pressure testing',
                    'Decommissioning old systems'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Radiator Balancing – Why It Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Radiator balancing heating system"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  If some rooms are roasting and others freezing, your system may be unbalanced. Balancing ensures proper heat distribution throughout your home.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Balancing ensures:</p>
                  <ul className="space-y-3">
                    {[
                      'Even heat distribution',
                      'Improved efficiency',
                      'Lower energy bills',
                      'Reduced strain on boiler'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700">
                  This involves adjusting radiator lockshield valves to control flow rate properly across the system. Our engineers ensure every room receives the right amount of heat.
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
              Installing New Radiators in Glasgow
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Replacing old radiators can significantly improve your home's heating efficiency, aesthetic appeal, and overall comfort. Modern radiators offer better heat output and performance.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      We Install
                    </h4>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      {[
                        'Standard panel radiators',
                        'Vertical designer radiators',
                        'Column radiators',
                        'Cast iron traditional radiators',
                        'Towel radiators',
                        'Low-temperature radiators (for heat pumps)'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836791/pexels-photo-3836791.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="New radiator installation"
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
              Choosing the Right Radiator – BTU Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                  When Radiators Are Too Small
                </h3>
                <p className="text-slate-700 mb-4 font-semibold">Undersized radiators lead to:</p>
                <ul className="space-y-3">
                  {[
                    'Cold rooms',
                    'Boiler overworking',
                    'Higher energy bills',
                    'Reduced system lifespan'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  Our Sizing Process
                </h3>
                <p className="text-slate-700 mb-4">We calculate correct BTU requirements during installation surveys by assessing:</p>
                <ul className="space-y-3">
                  {[
                    'Room size and volume',
                    'Insulation levels',
                    'Window types & size',
                    'Heat loss calculations',
                    'Desired temperature'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Adding an Extra Radiator
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  If a room is consistently cold, adding a second radiator may be the best solution. This is more involved than a simple like-for-like replacement.
                </p>
                <p className="text-slate-700 font-semibold mb-4">This involves:</p>
                <ul className="space-y-3">
                  {[
                    'Lifting floorboards',
                    'Extending pipework',
                    'Balancing system',
                    'Pressure testing',
                    'System refilling',
                    'Commissioning'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836930/pexels-photo-3836930.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Radiator installation floorwork"
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
              Pricing & Costs
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">How Much Does Radiator Repair Cost?</h3>
                <div className="bg-white rounded-lg p-6 mb-4 border border-blue-200">
                  <p className="text-5xl font-bold text-blue-600 mb-2">From £100</p>
                  <p className="text-slate-700">Most radiator repair visits start at this price</p>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  If parts are required or work is extensive, we provide a clear quotation before proceeding. No hidden costs.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">How Much Does Radiator Installation Cost?</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">Costs depend on:</p>
                <ul className="space-y-3">
                  {[
                    'Radiator type & size',
                    'Pipework alterations required',
                    'Accessibility',
                    'System condition',
                    'Number of radiators'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 mt-4 font-semibold">Straight swap installations are typically quicker and more cost-effective.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              TRVs Explained – Why You Should Have Them
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836169/pexels-photo-3836169.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Thermostatic radiator valve TRV"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Thermostatic Radiator Valves allow you to control temperature room-by-room, optimizing comfort and energy usage throughout your home.
                </p>
                <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Benefits include:</p>
                  <ul className="space-y-3">
                    {[
                      'Energy savings',
                      'Increased comfort',
                      'Reduced overheating',
                      'Lower gas usage'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                  <p className="text-amber-900 font-bold mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Important
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    One radiator (usually hallway) should not have a TRV — this acts as your system bypass radiator to protect boiler pressure. Incorrect TRV setup can affect boiler warranties.
                  </p>
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
              When Sludge Is a Bigger Issue
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Signs of System Sludge
                </h3>
                <ul className="space-y-3">
                  {[
                    'Multiple radiators cold at bottom',
                    'Inconsistent heating throughout home',
                    'Boiler making noise',
                    'System pressure drops frequently',
                    'Radiators need repeated bleeding'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Available Solutions</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Power flushing',
                    'Chemical flushing',
                    'Installing magnetic filter',
                    'Full system upgrade (in severe cases)'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 text-sm">We can use thermal imaging where necessary to assess heat distribution accurately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Radiators & Heat Pumps
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Different Heating Approach</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Heat pumps operate at lower temperatures than gas boilers, which means radiator sizing becomes even more important.
                </p>
                <ul className="space-y-3">
                  {[
                    'Larger surface area radiators may be required',
                    'Proper system design is critical',
                    'Lower flow temperatures mean longer run times',
                    'System balancing is essential'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Planning Your Upgrade</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  If you're considering a heat pump installation in Glasgow, radiator assessment is part of the process.
                </p>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <p className="text-slate-700 font-semibold mb-3">Our survey includes:</p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    {[
                      'Heat loss calculations',
                      'Radiator sizing assessment',
                      'System design review',
                      'Cost-benefit analysis',
                      'Grant eligibility check'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              Radiator Safety & Structural Issues
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836170/pexels-photo-3836170.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Radiator safety and wall mounting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Radiators can become loose over time, especially in older properties. This can cause structural and safety issues that need professional attention.
                </p>
                <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Loose radiators can:</p>
                  <ul className="space-y-3">
                    {[
                      'Damage wall fixings',
                      'Cause pipe stress',
                      'Create leak risks',
                      'Present safety hazards',
                      'Lead to water damage'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700">
                  We can secure, refit or replace brackets as needed to ensure your radiators are safely installed and properly supported.
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
              Areas We Cover – Radiator Repairs Glasgow
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                { area: 'Glasgow City Centre', postcodes: 'G1–G5' },
                { area: 'West End', postcodes: 'G11–G13' },
                { area: 'Southside', postcodes: 'G41–G46' },
                { area: 'Bearsden & Milngavie', postcodes: 'North Glasgow' },
                { area: 'East Kilbride', postcodes: 'South Lanarkshire' },
                { area: 'Paisley', postcodes: 'West of Glasgow' },
                { area: 'Clydebank', postcodes: 'West Dunbartonshire' },
                { area: 'Greater Glasgow', postcodes: 'All surrounding areas' }
              ].map((location, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">{location.area}</p>
                    <p className="text-slate-600 text-sm">{location.postcodes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Radiator Repairs Glasgow – FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Why is my radiator cold at the bottom?',
                  answer: 'This is usually caused by sludge build-up inside the radiator. Cold water at the bottom prevents hot water from circulating properly. System cleaning, magnetic filter installation, or radiator replacement may be required.'
                },
                {
                  question: 'Can I bleed my radiator myself?',
                  answer: 'Yes, you can bleed a radiator yourself, but always turn the heating off first and wait for the system to cool. You\'ll need a radiator bleed key. However, if multiple radiators need bleeding or the system keeps losing pressure, call a professional.'
                },
                {
                  question: 'How long do radiators last?',
                  answer: 'Typically 15–25 years depending on water quality and system maintenance. Well-maintained radiators with proper inhibitor levels can last 20+ years.'
                },
                {
                  question: 'Should I replace or flush my system?',
                  answer: 'Depends on condition. We assess the system before recommending. If sludge is localized, flushing may work. If radiators are heavily corroded or multiple replacements are needed, replacement is often more cost-effective.'
                },
                {
                  question: 'Can I paint my radiator?',
                  answer: 'Yes, you can paint radiators with radiator-specific paint. Regular paint can flake off with heat. Use a primer first and choose heat-resistant enamel paint for best results.'
                },
                {
                  question: 'What is a thermostatic radiator valve (TRV)?',
                  answer: 'A TRV is a smart valve that automatically controls the temperature of individual radiators. When the room reaches the desired temperature, the valve closes slightly to reduce flow. This saves energy and improves comfort.'
                },
                {
                  question: 'Do I need TRVs on every radiator?',
                  answer: 'No. One radiator (usually the hallway) should remain without a TRV to act as a bypass and protect boiler pressure. All other radiators can have TRVs for temperature control.'
                },
                {
                  question: 'Why is my radiator leaking?',
                  answer: 'Common causes include corroded radiator panels, faulty valves, loose fittings, or damaged joints. Small leaks may be repairable, but large leaks usually require radiator or valve replacement.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-lg shadow-lg border border-slate-200">
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
            Book Your Radiator Repair or Installation
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If your radiators are leaking, cold, or outdated, contact Upgrade Boilers & Bathrooms today. Professional heating engineers. Efficient solutions. Reliable service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
