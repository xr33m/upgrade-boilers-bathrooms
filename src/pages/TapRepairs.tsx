import { Link } from 'react-router-dom';
import { Phone, Droplet, CheckCircle2, Wrench, AlertTriangle, Zap, Shield, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function TapRepairs() {
  return (
    <>
      <SEO
        title="Tap Repairs & Installation Glasgow | Dripping, Leaking & Mixer Tap Specialists"
        description="Professional tap repairs in Glasgow. Fix dripping taps, mixer taps, kitchen & bathroom taps. Tap installation, washer & cartridge replacement. From £100."
        canonical="https://upgradeboilersandbathrooms.com/plumbing/tap-repairs"
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/plumbing" className="hover:text-white">Plumbing</Link>
              <span className="mx-2">/</span>
              <span>Tap Repairs</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Tap Repairs & Tap Installation Glasgow
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 font-semibold">
              Dripping, Leaking & Mixer Tap Specialists Across Greater Glasgow
            </p>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed max-w-2xl">
              Is your kitchen tap dripping constantly? Bathroom mixer leaking underneath? Thinking about upgrading to a modern chrome or matte black tap? Upgrade Boilers & Bathrooms provide professional tap repairs and tap replacement services in Glasgow and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
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
              Common Tap Problems We Repair
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Taps are one of the most frequently used plumbing fixtures in your home. Over time, internal components wear down and leaks begin.
                </p>

                <div className="space-y-6">
                  <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Droplet className="w-5 h-5 text-primary" />
                      Dripping Tap (The "Drip Drip" at Night)
                    </h3>
                    <p className="text-slate-700 text-sm mb-3">A dripping tap is usually caused by:</p>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Worn rubber washer (traditional taps)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Failed ceramic cartridge (mixer taps)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Damaged valve seat</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Limescale build-up inside mechanism</span>
                      </li>
                    </ul>
                    <p className="text-slate-700 text-sm mt-3 font-semibold">Even a slow drip can waste thousands of litres of water per year.</p>
                  </div>

                  <div className="bg-cyan-50 rounded-xl p-6 border-l-4 border-cyan-600">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-cyan-600" />
                      Mixer Tap Cartridge Replacement
                    </h3>
                    <p className="text-slate-700 text-sm mb-3">Modern lever taps use ceramic cartridges. Common symptoms of cartridge failure:</p>
                    <ul className="space-y-1 text-slate-700 text-sm mb-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>Tap won't fully shut off</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>Water leaking from handle</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>Stiff or loose lever movement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>Uneven hot and cold control</span>
                      </li>
                    </ul>
                    <p className="text-slate-700 text-sm font-semibold">We identify, source and install the correct cartridge.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional tap repair and maintenance"
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
              More Tap Problems We Fix
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                  Washer Tap Repairs (Traditional Crosshead Taps)
                </h3>
                <p className="text-slate-700 mb-4">If your tap screws down to turn off and has separate hot & cold handles, it likely uses a washer-based mechanism.</p>
                <p className="text-slate-700 mb-3 font-semibold">Washers perish over time and are one of the most common causes of tap leaks. Replacement is normally straightforward — but older taps can seize internally, making removal difficult without proper tools.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Droplet className="w-6 h-6 text-secondary" />
                  Low Water Pressure from One Tap
                </h3>
                <p className="text-slate-700 mb-3">If only one tap has poor pressure, possible causes include:</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Partially closed isolation valve</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Blocked aerator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Damaged washer obstructing flow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Cartridge failure or scale build-up</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-primary-600" />
                  Leaking Tap Connections Under Sink
                </h3>
                <p className="text-slate-700 mb-3">Sometimes the tap itself is fine — but the issue lies with:</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Flexible tap connectors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Isolation valves</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Compression fittings or pipework joints</span>
                  </li>
                </ul>
                <p className="text-slate-700 mt-3 font-semibold text-sm">These repairs are often quicker and more cost-effective than replacing the tap.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Loose or Wobbling Tap
                </h3>
                <p className="text-slate-700 mb-3">A loose tap can:</p>
                <ul className="space-y-2 text-slate-700 mb-3">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Damage worktops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Stress pipework</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Cause leaks beneath sink</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Crack sealant</span>
                  </li>
                </ul>
                <p className="text-slate-700 text-sm">Often this simply requires tightening the retaining nut — but access under kitchen sinks can be restricted and awkward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Installing New Kitchen & Bathroom Taps
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3408356/pexels-photo-3408356.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern kitchen tap installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Already purchased a new tap? We can professionally install all types of modern and traditional taps.
                </p>
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">We install:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Kitchen mixer taps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Pull-out spray taps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Boiling water taps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Bathroom basin taps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Bath mixer taps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Wall-mounted & outdoor taps</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <p className="text-slate-700 font-semibold mb-3">We ensure:</p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>Secure mounting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>Leak-free connections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>Correct pressure balance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>Proper sealing</span>
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
              Tap Repair Costs & Decision Making
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">How Much Does Tap Repair Cost in Glasgow?</h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  In most cases, tap repairs are completed on the first visit with no return visits needed.
                </p>
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-5xl font-bold text-primary mb-2">From £100</p>
                  <p className="text-slate-700 font-semibold mb-4">Minor tap repairs typically start from around £100 depending on parts required.</p>
                  <p className="text-slate-700 text-sm">If parts must be ordered, we provide a clear quotation before proceeding.</p>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Should You Repair or Replace a Tap?</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                    <p className="text-slate-700 font-semibold mb-2">Repair is usually possible when:</p>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>The body of the tap is in good condition</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>Parts are still available</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>The issue is internal (washer/cartridge)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-600">
                    <p className="text-slate-700 font-semibold mb-2">Replacement may be better when:</p>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>Tap is heavily corroded</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>Spare parts are obsolete</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>Persistent leaks continue</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>You want an aesthetic upgrade</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-slate-700 mt-6 text-sm">
                  Most quality taps last 15–25 years. Choosing a branded tap with manufacturer warranty makes future repairs easier.
                </p>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3427773/pexels-photo-3427773.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cost-effective tap repair decision"
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
              Why Fix a Dripping Tap Quickly?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-orange-50 p-8 rounded-xl shadow-lg border-l-4 border-orange-600">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Prevent Higher Costs</h3>
                    <p className="text-slate-700">
                      Small leaks can become larger internal failures. Early intervention saves money on repairs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Prevent Water Damage</h3>
                    <p className="text-slate-700">
                      Leaks under sinks can damage cabinets, flooring and plaster over time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-8 rounded-xl shadow-lg border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Maintain Water Pressure</h3>
                    <p className="text-slate-700">
                      Unresolved leaks can affect overall system performance and pressure throughout your home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl shadow-lg border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <Droplet className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Reduce Water Waste</h3>
                    <p className="text-slate-700">
                      A single dripping tap can waste hundreds of litres annually and increase water bills.
                    </p>
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
              Our Tap Repair Process
            </h2>

            <div className="grid md:grid-cols-5 gap-4 mb-16">
              {[
                { num: '1', title: 'Send Photos', desc: '(optional but helpful)' },
                { num: '2', title: 'Diagnosis & Quote', desc: 'Transparent pricing' },
                { num: '3', title: 'Professional Repair', desc: 'On-site service' },
                { num: '4', title: 'System Testing', desc: 'Leak detection' },
                { num: '5', title: '12-Month Guarantee', desc: 'Peace of mind' }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-primary">
                  <div className="text-4xl font-bold text-primary mb-2">{step.num}</div>
                  <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200 text-center">
              <p className="text-lg text-slate-700 font-semibold">
                Most tap issues are resolved within a single visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Tap Repairs for Landlords & Letting Agents
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3651451/pexels-photo-3651451.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Rental property tap maintenance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  We regularly carry out tap repairs for landlords and property managers. Fast repairs prevent tenant complaints and water damage claims.
                </p>
                <div className="bg-cyan-50 rounded-xl p-8 border-2 border-cyan-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">We work with:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>Rental properties</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>HMOs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>Property managers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
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
              Areas We Cover – Tap Repairs Glasgow
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">Glasgow City Centre</p>
                </div>
                <p className="text-slate-600 ml-9">G1–G5</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">West End</p>
                </div>
                <p className="text-slate-600 ml-9">G11–G13</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">Southside</p>
                </div>
                <p className="text-slate-600 ml-9">G41–G46</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">East Glasgow</p>
                </div>
                <p className="text-slate-600 ml-9">G31–G32</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">Bearsden & Milngavie</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 font-semibold">East Kilbride</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
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
              Tap Repairs Glasgow – Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Why is my tap dripping?',
                  answer: 'Most commonly due to a worn washer or failed ceramic cartridge. Other causes include damage to the valve seat or limescale build-up inside the mechanism.'
                },
                {
                  question: 'Can I replace a tap myself?',
                  answer: 'Yes, if you\'re confident and can isolate the water fully. However, seized fittings and restricted access often make professional installation safer and cleaner.'
                },
                {
                  question: 'Why does my tap have low pressure?',
                  answer: 'Check other taps first to see if it\'s a wider plumbing issue. If it\'s isolated to one tap, it\'s usually a washer, cartridge, blocked aerator, or partially closed isolation valve.'
                },
                {
                  question: 'How long do taps last?',
                  answer: 'Typically 15–25 years depending on quality and usage. Quality branded taps with warranties last longer and are easier to maintain.'
                },
                {
                  question: 'Need a Tap Repaired in Glasgow?',
                  answer: 'If your tap is dripping, leaking or needs replacing, contact Upgrade Boilers & Bathrooms today. Fast repairs. Clean installation. Reliable plumbing.'
                },
                {
                  question: 'What about water damage under my sink?',
                  answer: 'Leaking connections or taps can cause significant damage to cabinets and flooring. We diagnose the source quickly and repair it before further damage occurs.'
                },
                {
                  question: 'Do you work on weekends and evenings?',
                  answer: 'We aim to accommodate emergency repairs where possible. Call us to discuss your specific situation and availability.'
                },
                {
                  question: 'Is there a call-out charge?',
                  answer: 'We discuss pricing transparently before work begins. Most standard tap repairs are charged as a flat rate once diagnosed.'
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
            Need a Tap Repaired in Glasgow?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If your tap is dripping, leaking or needs replaced, contact Upgrade Boilers & Bathrooms today. Fast repairs. Clean installation. Reliable plumbing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
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
