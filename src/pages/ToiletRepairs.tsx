import { Link } from 'react-router-dom';
import { Phone, AlertTriangle, Droplet, Clock, CheckCircle2, Wrench, MapPin, PhoneCall } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function ToiletRepairs() {
  return (
    <>
      <SEO
        title="Toilet Repairs Glasgow | Emergency Toilet Repair Plumbers for Blocked, Leaking & Running Toilets"
        description="Professional toilet repairs in Glasgow. Fix blocked, leaking, running & overflowing toilets. 24/7 emergency service. Gas Safe registered plumbers. Call 0141 123 4567"
        canonical="https://upgradeboilersandbathrooms.com/plumbing/toilet-repairs"
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/plumbing" className="hover:text-white">Plumbing</Link>
              <span className="mx-2">/</span>
              <span>Toilet Repairs</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Toilet Repairs Glasgow
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-semibold">
              Emergency Toilet Repair Plumbers for Blocked, Leaking & Running Toilets
            </p>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              Looking for professional toilet repairs in Glasgow? Whether your toilet is blocked, leaking, constantly running, overflowing, or refusing to flush, our experienced local plumbers provide fast and reliable toilet repair services across Greater Glasgow.
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
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  We repair all types of toilets including:
                </h2>
                <ul className="space-y-3">
                  {[
                    'Close-coupled toilets',
                    'Wall-hung toilets',
                    'Concealed cistern systems',
                    'Push-button flush toilets',
                    'Lever flush toilets',
                    'Commercial WC systems'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg mt-6">
                  <p className="text-slate-800 font-medium">
                    If your toilet isn't working properly, don't ignore it. Small toilet faults quickly become major <Link to="/plumbing" className="text-primary hover:text-blue-800 font-semibold underline">plumbing problems</Link>.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7512823/pexels-photo-7512823.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional toilet repair services in Glasgow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-600 text-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    24 Hour Emergency Toilet Repairs in Glasgow
                  </h2>
                  <p className="text-xl text-red-50 mb-6">
                    A broken toilet is one of the most urgent <Link to="/plumbing" className="text-white hover:text-red-100 font-semibold underline">plumbing problems</Link> in any property.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">You may need an <Link to="/plumbing/emergency-plumber" className="text-white hover:text-red-100 underline">emergency toilet plumber</Link> if:</h3>
                  <ul className="space-y-2">
                    {[
                      'The toilet is overflowing',
                      'Water is leaking onto the floor',
                      'The flush will not stop running',
                      'The toilet is completely blocked',
                      'There is sewage backing up'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-200">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">We provide rapid response toilet repairs across:</h3>
                  <p className="text-red-50 leading-relaxed">
                    Glasgow City Centre, West End, Southside, Bearsden, Milngavie, Bishopbriggs, East Kilbride, Paisley and surrounding G-postcodes.
                  </p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-bold text-lg mt-6 transition">
                    <PhoneCall className="w-5 h-5" />
                    Call Now: {BUSINESS_INFO.phone}
                  </a>
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
              Common Toilet Problems We Fix
            </h2>

            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/4792491/pexels-photo-4792491.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Blocked toilet repair Glasgow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🚽</span> Blocked Toilet Repairs Glasgow
                  </h3>
                  <p className="text-lg text-slate-700 mb-4">
                    Blocked toilets are one of the most searched <Link to="/plumbing" className="text-primary hover:text-blue-800 font-semibold underline">plumbing problems</Link> in Glasgow.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-6 mb-4">
                    <h4 className="font-bold text-lg mb-3">Common causes include:</h4>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'Excess toilet paper',
                        'Wet wipes (even "flushable" wipes)',
                        'Sanitary products',
                        'Children\'s toys or foreign objects',
                        'Drain build-up',
                        'Partial soil pipe blockage'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Minor blockages can often be cleared quickly. However, recurring toilet blockages may indicate a deeper drainage issue, in which case further investigation may be required.
                  </p>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    If your blockage is caused by a larger drainage fault, we may recommend specialist drain inspection or jetting services.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">💧</span> Leaking Toilet Repair
                  </h3>
                  <p className="text-lg text-slate-700 mb-4">
                    Toilet leaks can occur from:
                  </p>
                  <ul className="space-y-2 mb-6 text-slate-700">
                    {[
                      'The base of the toilet pan',
                      'The cistern to pan connection',
                      'Inlet valves',
                      'Flush pipe seals',
                      'Cracked porcelain',
                      'Overflow pipe'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Droplet className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary-50 border-l-4 border-primary p-5 rounded-lg mb-4">
                    <h4 className="font-bold mb-2">Even a slow toilet leak can cause:</h4>
                    <ul className="space-y-1 text-slate-700">
                      <li>• Damaged flooring</li>
                      <li>• Stained ceilings below</li>
                      <li>• Mould growth</li>
                      <li>• Increased water bills</li>
                    </ul>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Most toilet leaks are caused by worn washers, seals or faulty valves and can be repaired without replacing the entire unit.
                  </p>
                </div>
                <div>
                  <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/8062343/pexels-photo-8062343.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Leaking toilet repair services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/4792511/pexels-photo-4792511.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Toilet cistern repair Glasgow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🔁</span> Toilet Cistern Constantly Running
                  </h3>
                  <p className="text-lg text-slate-700 mb-4">
                    If your toilet keeps filling or you can hear water trickling after flushing, this usually indicates:
                  </p>
                  <ul className="space-y-2 mb-6 text-slate-700">
                    {[
                      'Faulty fill valve',
                      'Failed flush valve',
                      'Worn diaphragm washer',
                      'Incorrect float height',
                      'Scale build-up inside mechanism'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg">
                    <p className="text-slate-800 font-semibold">
                      A continuously running toilet can waste hundreds of litres of water per day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🚫</span> Toilet Not Flushing Properly
                  </h3>
                  <p className="text-lg text-slate-700 mb-4">
                    If your toilet:
                  </p>
                  <ul className="space-y-2 mb-6 text-slate-700 bg-slate-50 p-5 rounded-lg">
                    <li>• Requires multiple attempts to flush</li>
                    <li>• Has a weak flush</li>
                    <li>• Won't flush at all</li>
                    <li>• Only partially empties</li>
                  </ul>
                  <p className="text-lg font-semibold text-slate-900 mb-3">The problem may involve:</p>
                  <ul className="space-y-2 mb-4 text-slate-700">
                    {[
                      'Failed siphon',
                      'Broken flush linkage',
                      'Low water level in cistern',
                      'Partial internal blockage',
                      'Airlock in system'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Wrench className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-700">
                    Older toilets often require cistern removal to access and replace internal components.
                  </p>
                </div>
                <div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Toilet flush repair Glasgow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 rounded-xl p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🔘</span> Broken Flush Button or Handle
                </h3>
                <p className="text-lg text-slate-700 mb-6">
                  A broken toilet flush button or lever is common in both modern and older systems.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3">We replace:</h4>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'Push button flush systems',
                        'Dual flush mechanisms',
                        'Lever handles',
                        'Flush cables',
                        'Siphons'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-slate-700 leading-relaxed">
                      Universal parts can often be fitted quickly, but concealed systems may require more time depending on accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Concealed Cistern & Wall-Hung Toilet Repairs
            </h2>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Modern bathrooms often include hidden cistern systems behind tiles or wall panels.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              While these look great aesthetically, repairs can be more complex due to limited access.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">We repair:</h3>
                <ul className="space-y-2 text-slate-300">
                  {[
                    'Concealed cistern flush valves',
                    'Frame-mounted wall-hung toilets',
                    'Access panel systems',
                    'In-wall fill valves'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary rounded-lg p-6">
                <p className="text-lg font-semibold mb-2">
                  Where access is restricted, additional work may be required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Is It Cheaper to Repair or Replace a Toilet?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-900 mb-4">✓ Repair is recommended when:</h3>
                <ul className="space-y-2 text-slate-700">
                  {[
                    'The porcelain is intact',
                    'The issue is mechanical',
                    'Parts are available',
                    'The toilet is structurally sound'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">⚠ Replacement may be advised if:</h3>
                <ul className="space-y-2 text-slate-700">
                  {[
                    'The pan is cracked',
                    'The toilet is outdated and inefficient',
                    'Parts are obsolete',
                    'There are repeated internal failures'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary">
              <p className="text-lg text-slate-800 mb-4 leading-relaxed">
                In most cases, toilet repairs are far more cost-effective than full replacement.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Modern dual flush toilets are more water efficient and environmentally friendly. If replacement is required, we can also install new toilets and modify soil pipe or water supply connections if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fixed Price Toilet Repairs in Glasgow
              </h2>
              <p className="text-xl text-blue-100">
                We offer transparent pricing for common toilet repairs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white text-slate-900 rounded-xl p-8">
                <div className="text-4xl font-bold text-primary mb-2">From £190</div>
                <h3 className="text-2xl font-bold mb-4">Standard Close-Coupled Toilet Repair</h3>
                <ul className="space-y-2 text-slate-700">
                  {[
                    'Leak repairs',
                    'Flush valve replacement',
                    'Fill valve replacement',
                    'Minor blockages',
                    'Seal replacement',
                    'Running toilet repair'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white text-slate-900 rounded-xl p-8">
                <div className="text-4xl font-bold text-primary mb-2">From £250</div>
                <h3 className="text-2xl font-bold mb-4">Accessible Concealed Cistern Repair</h3>
                <p className="text-slate-700 mb-4">
                  Includes all standard repairs for concealed cistern systems with accessible access panels.
                </p>
                <p className="text-sm text-slate-600 italic">
                  Excludes specialist toilets requiring manufacturer-specific parts.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold mb-2">No hidden hourly rates. Clear upfront pricing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Toilet Repairs for <Link to="/landlords" className="text-primary hover:text-blue-800 underline">Landlords</Link> & Letting Agents
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              We regularly provide toilet repairs for:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ul className="space-y-3">
                {[
                  'Rental properties',
                  'HMOs',
                  'Letting agents',
                  'Airbnb properties',
                  'Commercial premises'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-6">
                  <p className="text-slate-800 font-semibold">
                    Fast response is critical in rental properties where toilet issues can quickly become tenant complaints.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-3">We can also combine toilet repairs with:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <Link to="/plumbing" className="text-primary hover:text-blue-800 underline">General plumbing repairs</Link></li>
                    <li>• <Link to="/plumbing/emergency-plumber" className="text-primary hover:text-blue-800 underline">Emergency plumbing callouts</Link></li>
                    <li>• <Link to="/boilers/servicing" className="text-primary hover:text-blue-800 underline">Boiler servicing</Link></li>
                    <li>• <Link to="/landlords" className="text-primary hover:text-blue-800 underline">Landlord safety inspections</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <MapPin className="w-10 h-10 text-primary" />
              Areas We Cover – Toilet Repairs Glasgow
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              We cover all Glasgow postcodes including:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                'G1–G5 (City Centre)',
                'G11–G13 (West End)',
                'G41–G46 (Southside)',
                'G31–G32 (East Glasgow)',
                'G61–G64 (Bearsden & Milngavie)',
                'G71–G77 and surrounding areas'
              ].map((area, index) => (
                <div key={index} className="bg-primary-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-slate-800 font-semibold">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Toilet Repairs Glasgow – Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'How quickly can you repair my toilet?',
                  answer: 'We aim to attend as quickly as possible, with many repairs completed the same day.'
                },
                {
                  question: 'Why does my toilet keep running after flushing?',
                  answer: 'This is usually caused by a faulty fill valve, flush valve or worn washer inside the cistern.'
                },
                {
                  question: 'Can you fix a blocked toilet?',
                  answer: 'Yes. Most minor blockages can be cleared quickly. More serious drainage issues may require additional investigation.'
                },
                {
                  question: 'How long does a toilet repair take?',
                  answer: 'Most standard repairs are completed within 1–2 hours.'
                },
                {
                  question: 'Do you offer emergency toilet repair in Glasgow?',
                  answer: 'Yes. We provide urgent plumbing services for serious toilet faults.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
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
            Book a Toilet Repair in Glasgow
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If your toilet is leaking, blocked, overflowing or not flushing properly, contact us today for professional toilet repairs in Glasgow.
          </p>
          <p className="text-2xl font-bold mb-8">Fast diagnosis. Clear pricing. Reliable workmanship.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
