import { Link } from 'react-router-dom';
import { Phone, Droplet, ClipboardCheck, AlertTriangle, CheckCircle2, FileText, ThermometerSun, Shield, Calendar, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function LegionellaRiskAssessments() {
  return (
    <>
      <SEO
        title="Legionella Risk Assessment Glasgow | Landlord Compliance, Water Safety & Scottish Repairing Standard Guidance"
        description="Professional Legionella risk assessments for landlords in Glasgow. Scottish Repairing Standard compliance. Water safety inspections. Clear documentation. Call 0141 123 4567"
        canonical="https://upgradeboilersandbathrooms.com/landlords/legionella-risk-assessments"
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/landlords" className="hover:text-white">Landlord Services</Link>
              <span className="mx-2">/</span>
              <span>Legionella Risk Assessments</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Legionella Risk Assessment Glasgow
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-semibold">
              Landlord Compliance, Water Safety & Scottish Repairing Standard Guidance
            </p>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              If you are a <Link to="/landlords" className="text-white hover:text-blue-100 underline font-semibold">landlord in Glasgow</Link>, you are legally required to assess and manage the risk of Legionella bacteria within your rental property's water system. A professional Legionella Risk Assessment (LRA) ensures you meet your obligations under Scottish housing legislation while protecting tenant health.
            </p>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              We provide fully documented Legionella Risk Assessments in Glasgow and surrounding areas, giving you clear compliance evidence and practical control guidance.
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
                  What Is a Legionella Risk Assessment?
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  A Legionella Risk Assessment is a structured inspection of your property's domestic water system to identify conditions that could allow Legionella bacteria to grow and spread.
                </p>
                <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-lg mb-3">Legionella bacteria thrive in:</h3>
                  <ul className="space-y-2 text-slate-700">
                    {[
                      'Water temperatures between 20°C and 50°C',
                      'Stagnant pipework or infrequently used outlets',
                      'Systems with scale, sludge or biofilm build-up',
                      'Poorly insulated tanks or pipework'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Droplet className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If contaminated water droplets are inhaled (commonly from showers), Legionella can cause Legionnaires' disease, a serious respiratory infection.
                </p>
                <p className="text-slate-700 leading-relaxed font-semibold">
                  An LRA identifies risks and outlines the control measures required to keep your property safe and compliant.
                </p>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8062410/pexels-photo-8062410.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional water safety and Legionella risk assessment"
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
                <Shield className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Is a Legionella Risk Assessment a Legal Requirement in Scotland?
                  </h2>
                  <p className="text-3xl font-bold mb-6">Yes.</p>
                  <p className="text-lg text-red-50 mb-6 leading-relaxed">
                    Under Scotland's Repairing Standard, <Link to="/landlords" className="text-white hover:text-red-100 underline font-semibold">landlords</Link> must ensure properties are safe, wind and watertight, and free from health hazards — including waterborne risks such as Legionella.
                  </p>
                </div>
              </div>

              <div className="bg-red-700 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Although legislation does not specify an exact interval, landlords are expected to:</h3>
                <ul className="space-y-3">
                  {[
                    'Carry out an initial risk assessment',
                    'Review the assessment every 12 months',
                    'Reassess following plumbing alterations or long vacancy periods',
                    'Maintain written records of risk control measures'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white text-red-900 rounded-lg p-6">
                <p className="font-bold text-lg">
                  Failure to assess and manage Legionella risks could leave landlords liable if an outbreak occurs.
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
              What Our Legionella Risk Assessment in Glasgow Includes
            </h2>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">1</div>
                    <h3 className="text-2xl font-bold text-slate-900">Initial Property Consultation</h3>
                  </div>
                  <p className="text-lg font-semibold text-slate-900 mb-3">We review:</p>
                  <ul className="space-y-2 text-slate-700">
                    {[
                      'Property type (flat, HMO, house, portfolio property)',
                      'Occupancy patterns',
                      'Age and layout of plumbing system'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Water system inspection Glasgow"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="order-2 md:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Hot water cylinder and tank inspection"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="order-1 md:order-2 bg-green-50 rounded-xl p-8 border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">2</div>
                    <h3 className="text-2xl font-bold text-slate-900">On-Site Water System Inspection</h3>
                  </div>
                  <p className="text-lg font-semibold text-slate-900 mb-3">Our qualified engineer inspects:</p>
                  <ul className="space-y-2 text-slate-700">
                    {[
                      'Cold water storage tanks',
                      'Hot water cylinders and calorifiers',
                      'Outlet temperatures',
                      'Dead legs and redundant pipework',
                      'Shower heads and tap condition',
                      'Signs of stagnation, corrosion or scale'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">3</div>
                    <ThermometerSun className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Temperature Monitoring</h3>
                  <p className="text-slate-700 mb-3 font-semibold">We check:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Hot water storage temperatures (recommended 60°C)</li>
                    <li>• Cold water supply (below 20°C)</li>
                    <li>• Distribution temperatures at outlets</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">4</div>
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Risk Evaluation</h3>
                  <p className="text-slate-700">
                    We assess the likelihood of bacterial growth and consider whether tenants may be more vulnerable (elderly, smokers, underlying health conditions).
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">5</div>
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Written Report</h3>
                  <p className="text-slate-700 mb-3 font-semibold">You receive a professional report including:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Risk classification</li>
                    <li>• Required remedial actions</li>
                    <li>• Recommended monitoring regime</li>
                    <li>• Suggested review date</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary text-white rounded-xl p-8 text-center">
                <p className="text-xl font-bold">
                  This documentation provides evidence of due diligence for compliance purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Practical Legionella Control Measures for Glasgow Landlords
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Depending on findings, we may recommend:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                'Flushing infrequently used taps and showers',
                'Cleaning and disinfecting shower heads quarterly',
                'Maintaining hot water storage at 60°C',
                'Insulating tanks and pipework',
                'Removing redundant pipework (dead legs)',
                'Implementing temperature monitoring logs',
                'Improving access to water tanks for maintenance'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <p className="text-slate-800 font-semibold text-lg">
                Good record keeping is essential. Written evidence of inspection and control measures protects <Link to="/landlords" className="text-primary hover:text-blue-800 underline">landlords</Link> in the event of investigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Legionella Risk Assessments for Letting Agents & Portfolio Landlords
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              We regularly carry out Legionella Risk Assessments across:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                'Glasgow City Centre (G1–G5)',
                'Southside Glasgow (G41–G46)',
                'West End (G11–G13)',
                'Bearsden & Milngavie',
                'East Kilbride',
                'Paisley & Renfrewshire'
              ].map((area, index) => (
                <div key={index} className="bg-primary-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-slate-800 font-semibold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {area}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg">
              <p className="text-slate-800 text-lg leading-relaxed">
                If you manage multiple properties, we can coordinate assessments efficiently and align them with <Link to="/landlords/gas-safety-certificates" className="text-primary hover:text-blue-800 font-semibold underline">annual gas safety inspections</Link> or <Link to="/boilers/servicing" className="text-primary hover:text-blue-800 font-semibold underline">boiler servicing</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Combine Your Landlord Safety Certificates
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              To simplify compliance, many landlords combine their Legionella Risk Assessment with:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Gas Safety Record (CP12)', link: '/gas-safety-certificates' },
                { name: 'Annual boiler service', link: '/boiler-servicing' },
                { name: 'PAT testing', link: '/pat-testing' },
                { name: 'Lead water testing', link: '/lead-testing' }
              ].map((item, index) => (
                <div key={index} className="bg-primary-700 rounded-lg p-6">
                  <Link to={item.link} className="text-white hover:text-blue-100 font-semibold text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    <span className="underline">{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-white text-blue-900 rounded-lg p-6 mt-8">
              <p className="text-lg font-bold">
                One coordinated visit reduces disruption and keeps your safety documentation aligned.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Choose Us for Legionella Risk Assessments in Glasgow?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Experienced plumbing & heating engineers',
                'Clear, structured compliance reports',
                'Fast turnaround times',
                'Flexible appointments for tenants',
                'Reminder system for annual reviews',
                'Practical advice — no unnecessary upselling'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 text-white rounded-xl p-8 mt-8 text-center">
              <p className="text-2xl font-bold">
                We focus on real compliance, clear documentation, and landlord protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Legionella Risk Assessment Glasgow – Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'How often do landlords need a Legionella risk assessment in Glasgow?',
                  answer: 'Best practice is every 12 months or sooner if there are plumbing changes or extended void periods.'
                },
                {
                  question: 'Is Legionella testing mandatory?',
                  answer: 'Not always. Testing is risk-based. Most domestic properties require risk assessment and control measures rather than routine water sampling.'
                },
                {
                  question: 'Can a landlord carry out their own Legionella assessment?',
                  answer: 'Yes, but you must be competent and able to demonstrate sufficient knowledge of water systems and control measures. Professional assessments provide stronger compliance protection.'
                },
                {
                  question: 'Do small flats require Legionella assessments?',
                  answer: 'Yes. Any rental property with a water system requires a risk assessment under health and safety obligations.'
                },
                {
                  question: 'What temperature kills Legionella bacteria?',
                  answer: 'Legionella begins to die above 50°C and is effectively controlled when hot water is stored at 60°C.'
                },
                {
                  question: 'How much does a Legionella Risk Assessment cost in Glasgow?',
                  answer: 'Costs vary depending on property size and complexity. Contact us for a fixed, transparent quote.'
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

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <MapPin className="w-10 h-10 text-primary" />
              Areas We Cover in Glasgow
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              We provide Legionella Risk Assessments throughout Greater Glasgow including:
            </p>

            <div className="grid md:grid-cols-4 gap-3">
              {[
                'G1', 'G2', 'G3', 'G4', 'G5', 'G11', 'G12', 'G13', 'G20', 'G21', 'G31', 'G32',
                'G41', 'G42', 'G43', 'G44', 'G45', 'G46', 'G51', 'G52', 'G53', 'G61', 'G62', 'G64'
              ].map((postcode, index) => (
                <div key={index} className="bg-primary-50 p-3 rounded-lg border border-blue-200 text-center">
                  <p className="text-slate-800 font-semibold">{postcode}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-100 p-4 rounded-lg mt-6 text-center">
              <p className="text-slate-800 font-semibold">
                G71–G77 and surrounding areas
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your Legionella Risk Assessment in Glasgow
          </h2>
          <p className="text-xl mb-6 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If you need a professional Legionella Risk Assessment in Glasgow, we can arrange a prompt inspection and provide clear compliance documentation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-blue-800 rounded-lg p-6">
              <Shield className="w-12 h-12 mx-auto mb-3 text-secondary" />
              <p className="text-lg font-bold">Protect your tenants.</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-6">
              <FileText className="w-12 h-12 mx-auto mb-3 text-secondary" />
              <p className="text-lg font-bold">Protect your property.</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-6">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-secondary" />
              <p className="text-lg font-bold">Protect yourself legally.</p>
            </div>
          </div>
          <p className="text-2xl font-bold mb-8">Contact us today to arrange your assessment.</p>
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
