import { Link } from 'react-router-dom';
import { Phone, Droplet, CheckCircle2, AlertCircle, Wrench, Shield, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';
import { BUSINESS_INFO } from '../constants/business';
import { serviceLinks, coldWaterTanksRelatedServices } from '../lib/links';

export default function ColdWaterTanks() {
  return (
    <>
      <SEO
        title="Cold Water Tank Repairs & Replacement Glasgow | Ball Valve, Cleaning, WRAS"
        description="Cold water tank repairs, cleaning, chlorination and WRAS-approved replacements in Glasgow. Legionella assessments. Expert service from qualified plumbers."
        canonical="https://upgradeboilersandbathrooms.com/plumbing/cold-water-tanks"
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to={serviceLinks.plumbing.hub} className="hover:text-white">Plumbing</Link>
              <span className="mx-2">/</span>
              <span>Cold Water Tanks</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Cold Water Tank Repairs & Replacement Glasgow
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 font-semibold">
              Ball Valve Repairs, Tank Cleaning, Chlorination & WRAS Upgrades
            </p>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed max-w-2xl">
              Do you have an overflowing cold water tank in the loft? Noisy ball valve? Rust flakes in your water? Upgrade Boilers & Bathrooms provide professional cold water tank repairs, cleaning, chlorination and full replacements across Glasgow and surrounding areas.
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
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              With over 20 years of plumbing experience, we help homeowners and landlords keep their water storage systems safe, compliant and functioning properly.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Cold Water Tank Repairs in Glasgow
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Cold water storage tanks (usually located in loft spaces) supply water to gravity-fed hot water cylinders, bathroom taps, toilets, and some heating systems.
                </p>
                <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-3">If faults are ignored, they can cause:</p>
                  <ul className="space-y-2 text-slate-700">
                    {[
                      'Water damage to ceilings and insulation',
                      'Water contamination and discolouration',
                      'Loss of water pressure',
                      'System failure'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5638681/pexels-photo-5638681.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional cold water tank inspection and repair service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Common Cold Water Tank Problems We Repair
            </h2>

            <div className="space-y-12 mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                    <h3 className="text-2xl font-bold text-slate-900">Overflowing or Constantly Filling Tank</h3>
                  </div>
                  <p className="text-slate-700 mb-4 font-semibold">Often caused by:</p>
                  <ul className="space-y-2 mb-6 text-slate-700">
                    <li className="flex items-start gap-2"><span>•</span> <span>Worn or seized ball valve</span></li>
                    <li className="flex items-start gap-2"><span>•</span> <span>Incorrect float height</span></li>
                    <li className="flex items-start gap-2"><span>•</span> <span>Debris stuck in valve seat</span></li>
                    <li className="flex items-start gap-2"><span>•</span> <span>High incoming pressure</span></li>
                  </ul>
                  <p className="text-slate-700 border-t pt-4 font-semibold">
                    An overflowing tank can soak insulation, ceilings and electrics below.
                  </p>
                </div>

                <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/279813/pexels-photo-279813.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Leaking tank and water damage inspection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="order-2 md:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/6580139/pexels-photo-6580139.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Plumbing pipe inspection and maintenance"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="order-1 md:order-2 bg-green-50 rounded-xl p-8 border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                    <h3 className="text-2xl font-bold text-slate-900">Noisy Ball Cock / Hammering Sounds</h3>
                  </div>
                  <p className="text-slate-700 mb-4 font-semibold">This can indicate:</p>
                  <ul className="space-y-2 mb-6 text-slate-700">
                    <li className="flex items-start gap-2"><span>•</span> <span>Faulty float valve</span></li>
                    <li className="flex items-start gap-2"><span>•</span> <span>Pressure imbalance</span></li>
                    <li className="flex items-start gap-2"><span>•</span> <span>Failing internal components</span></li>
                  </ul>
                  <p className="text-slate-700 border-t pt-4 font-semibold">
                    Ignoring this can lead to complete valve failure.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                    <Wrench className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Minor Tank Leaks</h3>
                  <p className="text-slate-700">
                    Cracks in older plastic tanks, corroded galvanised steel tanks, or split joints can cause slow but damaging leaks.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Damaged Insulation or Missing Lid</h3>
                  <p className="text-slate-700 mb-3 font-semibold">A missing lid can allow:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Debris contamination</li>
                    <li>• Insect ingress</li>
                    <li>• Heat loss & freezing</li>
                  </ul>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">5</div>
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Water Contamination</h3>
                  <p className="text-slate-700">
                    Discoloured water, rust flakes, or visible debris indicate tank sediment buildup or system corrosion.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Cold Water Tank Cleaning & Chlorination
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7108093/pexels-photo-7108093.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional tank cleaning and chlorination service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Many homeowners are shocked at the condition inside their loft tank. Over time, tanks accumulate sediment, rust flakes, biofilm, insect debris, and algae growth.
                </p>
                <p className="text-slate-700 mb-6 font-semibold">
                  In stagnant or poorly maintained systems, bacteria including Legionella can develop.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                  <p className="text-slate-700 font-semibold mb-3">Our comprehensive cleaning process:</p>
                  <ol className="space-y-2 text-slate-700">
                    <li>1. Full system drain-down</li>
                    <li>2. Internal tank scrub & debris removal</li>
                    <li>3. Approved chlorination treatment</li>
                    <li>4. Disinfection of connected pipework</li>
                    <li>5. System refill & recommission</li>
                    <li>6. Job report for compliance</li>
                  </ol>
                  <p className="text-slate-700 border-t mt-4 pt-4 font-semibold">
                    Recommended every 1–2 years. Annually for rental properties.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              WRAS-Approved Cold Water Tank Replacement
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Older tanks may not meet current UK Water Supply (Water Fittings) Regulations. We replace outdated tanks with modern WRAS-approved replacements that reduce contamination risk and improve efficiency.
                </p>
                <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
                  <p className="text-slate-700 mb-4 font-semibold">We install:</p>
                  <ul className="space-y-3">
                    {[
                      'WRAS-approved plastic tanks',
                      'Fully insulated & sealed lids',
                      'Screened overflow pipes',
                      'Proper support & base boarding',
                      'Compliant float valves'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="New WRAS-approved water tank installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Replace Lead or Galvanised Steel Cold Water Tanks
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6942660/pexels-photo-6942660.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Corroded metal water tank removal and replacement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Older Glasgow properties may still have lead tanks, galvanised steel tanks, or corroded metal storage units. These systems are prone to rust contamination and often leak.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                  <p className="text-slate-700 mb-3 font-semibold">Problems with metal tanks:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2"><span>•</span> <span>Rust contamination affecting water quality</span></li>
                    <li className="flex items-start gap-2"><span>•</span> <span>Frequent leaks</span></li>
                    <li className="flex items-start gap-2"><span>•</span> <span>Do not meet modern regulations</span></li>
                    <li className="flex items-start gap-2"><span>•</span> <span>High maintenance costs</span></li>
                  </ul>
                </div>
                <p className="text-slate-700 font-semibold">
                  We assess safe removal options and install modern compliant replacements where possible.
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Upgrade to Direct Mains Water Supply
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  In some properties, especially where upgrading to <Link to={serviceLinks.boilers.installation} className="text-primary hover:text-blue-700 font-semibold">combi boilers</Link>, <Link to={serviceLinks.plumbing.hotWaterTanks} className="text-primary hover:text-blue-700 font-semibold">unvented cylinders</Link>, or pressurised systems, the cold water storage tank may no longer be required.
                </p>
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">Benefits of Mains-Fed Systems:</p>
                  <ul className="space-y-3">
                    {[
                      'Stronger water pressure',
                      'Cleaner water (no loft storage)',
                      'Reduced maintenance',
                      'More loft space',
                      'Fewer contamination risks'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700 font-semibold">
                  Not all tanks can or should be removed — we assess incoming mains pressure, pipework suitability, and system compatibility to provide honest advice.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern mains water system installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Landlord Responsibilities & Legionella Risk
            </h2>

            <div className="bg-red-600 text-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-12 h-12 flex-shrink-0" />
                <div>
                  <p className="text-lg mb-4 leading-relaxed">
                    Landlords in Glasgow have a legal duty to manage water hygiene risks. Cold water tanks are a known risk area under HSE Approved Code of Practice L8.
                  </p>
                  <p className="text-lg font-semibold">
                    We provide comprehensive water safety support for your rental properties.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Legionella Risk Assessments', link: true, text: 'Professional water system inspections and documentation' },
                  { title: 'Control Measures', link: false, text: 'Temperature monitoring, flushing, system maintenance' },
                  { title: 'Tank Cleaning & Chlorination', link: false, text: 'Professional tank disinfection and water treatment' },
                  { title: 'Compliance Documentation', link: false, text: 'Clear records for landlord protection' }
                ].map((item, index) => (
                  <div key={index} className="bg-red-700 rounded-lg p-4">
                    {item.link ? (
                      <Link to={serviceLinks.landlords.legionella} className="text-white hover:text-red-100 font-semibold text-lg flex items-center gap-2 underline">
                        {item.title}
                      </Link>
                    ) : (
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    )}
                    <p className="text-red-100 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Signs Your Cold Water Tank Needs Attention
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Water damage and plumbing repair assessment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
                  <p className="text-slate-700 mb-4 font-semibold">Don't ignore these warning signs:</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Water discolouration',
                      'Reduced water pressure',
                      'Water dripping from overflow',
                      'Unusual noises from loft',
                      'Damp patches on ceilings',
                      'Rust or debris in bath'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-700 border-t pt-4 font-semibold">
                    Early intervention prevents more expensive plumbing repairs later.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Cold Water Tank Service Process
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 md:p-12 rounded-xl shadow-lg">
              <ol className="space-y-4 mb-8">
                {[
                  { num: 1, text: 'Inspection of loft tank and pipework' },
                  { num: 2, text: 'Assessment of compliance and condition' },
                  { num: 3, text: 'Repair, clean or replacement recommendation' },
                  { num: 4, text: 'Clear quotation' },
                  { num: 5, text: 'Professional installation or cleaning' },
                  { num: 6, text: 'System recommissioning' }
                ].map((item) => (
                  <li key={item.num} className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full font-bold flex-shrink-0">{item.num}</span>
                    <span className="text-lg text-slate-700 mt-1">{item.text}</span>
                  </li>
                ))}
              </ol>
              <p className="text-slate-700 border-t pt-6 font-semibold text-center">
                We aim to resolve most repair issues on first visit.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Areas We Cover – Cold Water Tank Repairs Glasgow
            </h2>

            <div className="bg-slate-50 p-8 rounded-lg mb-12">
              <p className="text-slate-700 mb-6">We work across:</p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="text-slate-600">• Glasgow City Centre (G1–G5)</li>
                <li className="text-slate-600">• West End (G11–G13)</li>
                <li className="text-slate-600">• Southside (G41–G46)</li>
                <li className="text-slate-600">• East Glasgow (G31–G32)</li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <Link to={serviceLinks.areas.bearsden} className="text-primary hover:text-blue-700 font-semibold">Bearsden & Milngavie</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <Link to={serviceLinks.areas.eastKilbride} className="text-primary hover:text-blue-700 font-semibold">East Kilbride</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <Link to={serviceLinks.areas.paisley} className="text-primary hover:text-blue-700 font-semibold">Paisley & surrounding areas</Link>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Cold Water Tank FAQs
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How often should a cold water tank be cleaned?
                </h3>
                <p className="text-slate-700">
                  Every 1–2 years. Annually for rental properties.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Is chlorination necessary?
                </h3>
                <p className="text-slate-700">
                  Yes — it eliminates bacteria and ensures water hygiene compliance.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Can I remove my loft tank?
                </h3>
                <p className="text-slate-700">
                  Possibly — if your heating system supports mains pressure. We assess before advising.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Are metal tanks safe?
                </h3>
                <p className="text-slate-700">
                  Older metal tanks are prone to corrosion and contamination and are generally recommended for replacement.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What is a WRAS-approved tank?
                </h3>
                <p className="text-slate-700">
                  A tank compliant with Water Supply Regulations, fitted with sealed lids and screened outlets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices services={coldWaterTanksRelatedServices} />

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Cold Water Tank Repaired or Replaced in Glasgow?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            If your loft tank is leaking, overflowing or hasn't been cleaned in years, don't delay. Contact Upgrade Boilers & Bathrooms for professional cold water tank repairs, cleaning and upgrades across Glasgow. Safe water. Compliant systems. Professional workmanship.
          </p>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition">
            <Phone className="w-6 h-6" />
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}
