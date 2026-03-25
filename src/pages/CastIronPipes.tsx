import { Link } from 'react-router-dom';
import { Phone, AlertCircle, CheckCircle2, Shield, Wrench, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function CastIronPipes() {
  return (
    <>
      <SEO
        title="Cast Iron Pipe Repairs & Replacement Glasgow | Soil Stack, Waste Pipe & Drainage"
        description="Cast iron pipe repairs and replacements in Glasgow. Soil stacks, waste pipes, drainage specialists. Expert repairs for older properties. Call 0141 123 4567"
        canonical="https://upgradeboilersandbathrooms.com/plumbing/cast-iron-pipes-drainage"
      />

      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-slate-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/plumbing" className="hover:text-white">Plumbing</Link>
              <span className="mx-2">/</span>
              <span>Cast Iron Pipes & Drainage</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Cast Iron Pipe Repairs & Replacement Glasgow
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-6 font-semibold">
              Soil Stack, Waste Pipe & Drainage Specialists for Older Properties
            </p>
            <p className="text-lg text-slate-50 mb-8 leading-relaxed max-w-2xl">
              Do you have a leaking cast iron soil pipe? Rusty drainage joints? Cracked waste pipe running down the side of your tenement building? Upgrade Boilers & Bathrooms provide professional cast iron pipe repairs and drainage replacement services across Glasgow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
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
              Many older Glasgow properties — especially traditional tenements and sandstone buildings — still rely on original cast iron drainage systems that are now 70–150+ years old. Over time, these systems corrode, crack and fail.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Why Cast Iron Drainage Fails in Older Glasgow Properties
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Cast iron was commonly used for soil stacks (vertical toilet waste pipes), external rainwater downpipes, internal bathroom waste pipes and underground drainage connections.
                </p>
                <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
                  <p className="text-slate-700 mb-4 font-semibold">While extremely durable, cast iron deteriorates due to:</p>
                  <ul className="space-y-3 text-slate-700">
                    {[
                      { title: 'Internal Corrosion', desc: 'Waste causes gradual internal rusting, thinning the pipe wall' },
                      { title: 'Joint Failure', desc: 'Lead-caulked or cemented joints crack and allow water to escape' },
                      { title: 'Freeze Expansion', desc: 'Glasgow winters cause expansion/contraction, weakening joints' },
                      { title: 'Water Ingress', desc: 'Rainwater downpipes often rot from the inside out' },
                      { title: 'Building Movement', desc: 'Settling and structural movement stress rigid cast iron systems' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div>
                          <p className="font-semibold text-slate-900">{item.title}</p>
                          <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Corroded cast iron soil pipe and drainage system"
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
              Signs Your Cast Iron Pipe Needs Repair
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
                <p className="text-slate-700 mb-6 font-semibold">Don't ignore these warning signs:</p>
                <ul className="space-y-3 text-slate-700">
                  {[
                    'Brown or damp staining on ceilings',
                    'Dripping sounds behind walls',
                    'Cracks in vertical soil stack',
                    'Rust flakes around pipe joints',
                    'Strong sewage smell',
                    'Slow draining sinks or toilets',
                    'Water running down exterior wall'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 border-t mt-6 pt-4 font-semibold">
                  Tenement properties in Glasgow are especially prone to shared soil stack issues.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6580139/pexels-photo-6580139.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Water damage from failing cast iron drainage pipes"
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
              Cast Iron Soil Stack & Waste Pipe Repairs
            </h2>

            <div className="space-y-12 mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                    <h3 className="text-2xl font-bold text-slate-900">Cast Iron Soil Stack Repairs</h3>
                  </div>
                  <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                    We regularly repair cracked vertical soil stacks, leaking cast iron joints, failed lead sleeve connections, split sections passing through walls, corroded pipe collars and loose bracket supports.
                  </p>
                  <p className="text-slate-700 mb-4 font-semibold">If the pipe is structurally sound overall, we can often:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Install a time-saver clamp</li>
                    <li>• Seal a joint professionally</li>
                    <li>• Replace a short damaged section</li>
                    <li>• Connect cast iron to modern PVC safely</li>
                  </ul>
                  <p className="text-slate-700 border-t mt-4 pt-4 font-semibold">
                    This avoids unnecessary full replacement.
                  </p>
                </div>

                <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/279813/pexels-photo-279813.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional cast iron soil stack repair"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="order-2 md:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Internal cast iron waste pipe inspection and replacement"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="order-1 md:order-2 bg-green-50 rounded-xl p-8 border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                    <h3 className="text-2xl font-bold text-slate-900">Internal Cast Iron Waste Pipe Repairs</h3>
                  </div>
                  <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                    Inside older properties, cast iron waste pipes often run behind plaster, pass through floors, connect into lead pipe sections or transition into clay underground drainage.
                  </p>
                  <p className="text-slate-700 mb-4 font-semibold">Where accessible, we:</p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li>• Remove damaged sections</li>
                    <li>• Replace with compliant PVC pipe</li>
                    <li>• Reconnect to existing system safely</li>
                    <li>• Pressure test connections</li>
                  </ul>
                  <p className="text-slate-700 font-semibold">
                    Lead pipes inside walls are particularly prone to splitting and should be addressed early.
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
              When Cast Iron Drainage Needs Replacing
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5638681/pexels-photo-5638681.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cast iron pipe replacement installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Repair is not always possible. Full or partial replacement may be necessary if you have severe rusting throughout the pipe, multiple cracks, repeated blockages, structural collapse, loose or detached stack, or extensive joint failure.
                </p>
                <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">We provide honest advice — repair where viable, replace where necessary.</p>
                  <p className="text-slate-700 font-semibold">Most replacements use modern PVC systems that:</p>
                  <ul className="space-y-2 text-slate-700 mt-3">
                    <li>• Meet current Building Regulations</li>
                    <li>• Are corrosion-resistant</li>
                    <li>• Require less maintenance</li>
                    <li>• Improve long-term reliability</li>
                  </ul>
                </div>
                <p className="text-slate-700">
                  If required (for conservation areas or aesthetic reasons), we can also install new cast iron pipework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Cast Iron Drain Replacement Process
            </h2>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 md:p-12 rounded-xl shadow-lg mb-16">
              <ol className="space-y-4 mb-8">
                {[
                  { num: 1, text: 'On-site inspection of drainage system' },
                  { num: 2, text: 'Photographic job report (ideal for landlords & factors)' },
                  { num: 3, text: 'Clear explanation of condition' },
                  { num: 4, text: 'Transparent quotation' },
                  { num: 5, text: 'Safe removal of damaged sections' },
                  { num: 6, text: 'Installation of new compliant drainage' }
                ].map((item) => (
                  <li key={item.num} className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-slate-700 text-white rounded-full font-bold flex-shrink-0">{item.num}</span>
                    <span className="text-lg text-slate-700 mt-1">{item.text}</span>
                  </li>
                ))}
              </ol>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Communal Drainage & Tenement Soil Stack Repairs
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  In Glasgow tenement properties, soil stacks are often shared between multiple flats. We can repair communal stacks, liaise with property factors, provide photographic reports, carry out section replacements and coordinate safe access scaffolding where required.
                </p>
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200">
                  <p className="text-slate-700 mb-4 font-semibold">These systems must be handled carefully to avoid affecting neighbouring properties.</p>
                  <p className="text-slate-700 font-semibold">Water damage from failed cast iron pipes can affect:</p>
                  <ul className="space-y-2 text-slate-700 mt-3">
                    <li>• Plaster ceilings</li>
                    <li>• Timber joists</li>
                    <li>• Flooring</li>
                    <li>• Electrical systems</li>
                  </ul>
                  <p className="text-slate-700 border-t mt-4 pt-4 font-semibold">
                    We can provide detailed reports to assist with insurance claims if required.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6942660/pexels-photo-6942660.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Communal tenement building with cast iron drainage"
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
              We Also Repair Other Drainage Pipe Types
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-white rounded-xl p-8 border-2 border-slate-200 shadow-md">
                <p className="text-slate-700 mb-4 font-semibold">Our team regularly works with:</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Cast iron soil stacks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Lead waste pipes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>PVC and ABS drainage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Clay underground drains</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Rainwater downpipes</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200">
                <p className="text-slate-700 mb-4 font-semibold">If your property still has original metal pipework, we've almost certainly repaired something similar before.</p>
                <p className="text-slate-700 mb-4 font-semibold">Many plumbers prefer not to work with cast iron due to the complexity. We have the tools and experience to handle it properly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Choose Upgrade for Cast Iron Pipe Repairs in Glasgow?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                'Over 20 Years Experience',
                'Specialists in Older Properties',
                'Fully Insured & Qualified Engineers',
                'Clear, Honest Advice',
                '12 Month Workmanship Guarantee',
                'Rapid Response for Leaks'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-50 p-5 rounded-lg shadow-sm border border-slate-200">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <MapPin className="w-10 h-10 text-slate-600" />
              Areas We Cover – Cast Iron Drain Repairs Glasgow
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              We serve:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                'Glasgow City Centre (G1–G5)',
                'West End (G11–G13)',
                'Southside (G41–G46)',
                'East Glasgow (G31–G32)',
                'Bearsden & Milngavie',
                'East Kilbride',
                'Paisley & surrounding areas'
              ].map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="text-slate-800 font-semibold">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Cast Iron Pipe Repair Glasgow – Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'How long do cast iron pipes last?',
                  answer: 'Typically 50–70 years, but many older systems exceed 100 years. Corrosion eventually weakens the structure.'
                },
                {
                  question: 'Can cracked cast iron pipes be repaired?',
                  answer: 'Yes — if the damage is localised. We assess before recommending replacement.'
                },
                {
                  question: 'Do you repair external soil stacks?',
                  answer: 'Yes — internal and external systems.'
                },
                {
                  question: 'Can you replace only part of the pipe?',
                  answer: 'In most cases, yes. Sectional replacement is common.'
                },
                {
                  question: 'Is PVC better than cast iron?',
                  answer: 'PVC is lighter, corrosion-resistant and easier to maintain, but cast iron may be required in certain properties.'
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

      <section className="py-12 md:py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Cast Iron Pipe Repairs in Glasgow?
          </h2>
          <p className="text-xl mb-8 text-slate-100 max-w-3xl mx-auto leading-relaxed">
            If you're seeing damp patches, smelling sewage or dealing with recurring drainage problems, it's time to have your pipework inspected. Contact Upgrade Boilers & Bathrooms for professional cast iron pipe repairs and replacements across Glasgow.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <Wrench className="w-12 h-12 mx-auto mb-3 text-secondary" />
              <p className="text-lg font-bold">Protect your property.</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 text-secondary" />
              <p className="text-lg font-bold">Prevent further damage.</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-secondary" />
              <p className="text-lg font-bold">Repair it properly.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
