import { Link } from 'react-router-dom';
import { Phone, Droplets, CheckCircle2, AlertTriangle, MapPin, Clipboard, Beaker, Shield, Home, FileText, AlertCircle, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function LeadTesting() {
  return (
    <>
      <SEO
        title="Lead Water Testing Glasgow | WaterSafe Approved Testing Service"
        description="Professional lead water testing for landlords & homeowners in Glasgow. £150 fixed price. WaterSafe approved. Full compliance documentation. Call 07523 172416"
        canonical="https://upgradeboilersandbathrooms.com/landlords/lead-testing"
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/landlords" className="hover:text-white">Landlords</Link>
              <span className="mx-2">/</span>
              <span>Lead Testing</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Lead Water Testing Glasgow
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 font-semibold">
              Landlord Compliance & Drinking Water Safety
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-lg text-blue-50 leading-relaxed">
                Need your water supply tested for lead in Glasgow?
              </p>
              <p className="text-lg text-blue-50 leading-relaxed">
                Whether you're a landlord ensuring compliance with the Repairing Standard, or a homeowner wanting peace of mind about your drinking water, Upgrade Boilers & Bathrooms provide professional WaterSafe-approved lead testing services across Greater Glasgow.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Book Test
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Landlords – Are You Compliant With the Repairing Standard?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Water safety and lead testing compliance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  As of March 2024, the Scottish Repairing Standard requires landlords to ensure their rental properties meet strict water safety requirements.
                </p>
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Legal Requirements:</p>
                  <ul className="space-y-3">
                    {[
                      'Water supply is free from lead',
                      'Lead pipes, tanks and fittings are removed or disconnected',
                      'Drinking water does not pose health risks to tenants'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-200">
                  <p className="text-slate-700 leading-relaxed">
                    <span className="font-semibold">This is now a legal obligation.</span> Failure to comply can result in enforcement action from local authorities.
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
              Why Lead Testing Is Important
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Health Risk Groups
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Lead in drinking water can cause serious health issues, particularly for:
                </p>
                <ul className="space-y-3">
                  {[
                    'Children',
                    'Pregnant women',
                    'Vulnerable adults',
                    'People with compromised immunity'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-primary" />
                  Where Lead Is Found
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Properties built before 1970 are more likely to contain:
                </p>
                <ul className="space-y-3">
                  {[
                    'Lead water pipes',
                    'Lead storage tanks',
                    'Lead connections',
                    'Galvanised pipework with lead solder'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Droplets className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200 text-center">
              <p className="text-slate-700 text-lg">
                <span className="font-semibold">Testing is the only way to confirm whether lead is present in your water supply.</span> Visual inspection alone is insufficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              What Is the Legal Limit for Lead?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">UK Maximum Level</h3>
                <p className="text-5xl font-bold text-primary mb-4">10 µg/L</p>
                <p className="text-slate-700 leading-relaxed">
                  The UK maximum allowable concentration for lead in drinking water is 10 micrograms per litre.
                </p>
              </div>

              <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                  Repairing Standard Goes Further
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Even if water tests below 10 µg/L, landlords are still required to remove or disconnect all lead components from the plumbing system. <span className="font-semibold">Compliance is about eliminating lead sources — not just passing the lab test.</span>
                </p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-6 border-2 border-slate-300">
              <p className="text-slate-700 text-center font-semibold">
                Lead removal is a legal requirement, not optional. The law prioritises prevention over reliance on test results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Fixed Price Lead Testing Service
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 text-center">
                <p className="text-5xl font-bold text-primary mb-3">£150</p>
                <p className="text-slate-700 font-semibold mb-4">Fixed Price Service</p>
                <p className="text-slate-600 text-sm">No hidden costs. Clear pricing.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Includes:</h3>
                <ul className="space-y-3">
                  {[
                    'WaterSafe plumber visit',
                    'Visual plumbing inspection',
                    'Laboratory water sample test',
                    'Official certificate'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Plus:</h3>
                <ul className="space-y-3">
                  {[
                    'Written report',
                    'Professional guidance',
                    'Compliance documentation',
                    'Remediation advice'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{item}</span>
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
              Our Lead Testing Process
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  icon: Clipboard,
                  title: 'Plumber Visit 1 – Visual Inspection',
                  description: 'We attend your property and inspect for visible lead pipework, lead tanks, lead connections and other risk areas.',
                  details: [
                    'Inspect all visible pipework',
                    'Identify lead tanks or connections',
                    'Check risk areas thoroughly',
                    'Advise on removal if needed',
                    'Leave test bottle if safe to proceed'
                  ]
                },
                {
                  step: 2,
                  icon: Beaker,
                  title: 'Sample Collection – 12-Hour Standing Water Test',
                  description: 'To ensure accurate results, we collect a standing water sample using industry-standard protocols.',
                  details: [
                    'No water use for 12 hours prior',
                    'First draw sample from kitchen tap',
                    'Bottle filled to top',
                    'Sample stored in fridge',
                    'Ensures highest concentration testing'
                  ]
                },
                {
                  step: 3,
                  icon: Wrench,
                  title: 'Plumber Visit 2 – Sample Collection & Lab Submission',
                  description: 'We collect your sample and submit it to an accredited laboratory for professional analysis.',
                  details: [
                    'Collect sample bottle',
                    'Submit to accredited lab',
                    'Lab analysis typically 5–7 days',
                    'Receive official certificate',
                    'Get written confirmation'
                  ]
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-700 text-lg">{item.description}</p>
                      </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3 ml-22">
                      {item.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Understanding Test Results
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">What Does "&lt;1.11 µg/L" Mean?</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  A result of "&lt;1.11 µg/L" means lead levels are below detectable limits.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <span className="font-semibold">However — this does not automatically confirm compliance</span> if lead components remain in the system. Testing below the limit is good news, but you must still ensure all lead infrastructure is removed.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                  If Lead Found
                </h3>
                <p className="text-slate-700 mb-4 font-semibold">If results show lead presence or components are identified, we can:</p>
                <ul className="space-y-2">
                  {[
                    'Replace lead pipework',
                    'Remove lead tanks',
                    'Upgrade to WRAS-approved materials',
                    'Conduct follow-up testing',
                    'Provide compliance documentation'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Scottish Water Lead Pipe Replacement</h3>
              <p className="text-slate-700 leading-relaxed">
                Scottish Water may replace lead pipes on their side of the boundary at no cost, depending on circumstances. <span className="font-semibold">Contact them to ask about your property.</span> We can advise on which pipes are your responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Documentation You Should Retain
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3807518/pexels-photo-3807518.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Documentation and compliance records"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  To satisfy your duty of care as a landlord, retain all relevant documentation. These records may be requested by your local council during compliance inspections.
                </p>
                <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg">
                  <p className="text-slate-700 font-semibold mb-4">Essential Records:</p>
                  <ul className="space-y-3">
                    {[
                      'Laboratory test certificate',
                      'Plumber inspection report',
                      'Photographic evidence (if applicable)',
                      'Records of remedial works completed',
                      'Confirmation of lead pipe removal',
                      'Certificates of compliant materials used'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-6 border-2 border-slate-300">
              <p className="text-slate-700 text-center leading-relaxed">
                <span className="font-semibold">Keep records for the duration of your tenancy.</span> Documentation proves you've taken necessary steps to comply with the Repairing Standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Signs You May Have Lead Pipes
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Home className="w-6 h-6 text-accent" />
                  Visual Indicators
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Lead pipes often display these characteristics:
                </p>
                <ul className="space-y-3">
                  {[
                    'Appear dull grey in colour',
                    'Are soft and easily scratched with a coin',
                    'Lack visible branding or markings',
                    'Found in pre-1970 properties',
                    'Larger diameter than copper pipes'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Important Note
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Visual inspection alone is not sufficient to confirm lead presence or absence.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-slate-700 font-semibold text-sm">
                    Even if pipes appear safe, they may contain hidden lead components. Professional testing is the only reliable method.
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
              Combine With Other Water Safety Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Droplets,
                  title: 'Lead Testing',
                  description: 'Professional testing with laboratory analysis and official certification.'
                },
                {
                  icon: Beaker,
                  title: 'Legionella Risk Assessment',
                  description: 'Assess and mitigate risks from Legionella bacteria in water systems.'
                },
                {
                  icon: Shield,
                  title: 'Cold Water Tank Inspection',
                  description: 'Check condition, cleanliness and safety of storage tanks.'
                }
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Single Visit Compliance Solution</h3>
              <p className="text-slate-700 leading-relaxed">
                Combining lead testing with Legionella assessment and tank inspection ensures full water safety compliance in one efficient visit. This saves time and cost for landlords managing multiple properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Use a WaterSafe Approved Plumber?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3862360/pexels-photo-3862360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional water safety certification"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  WaterSafe plumbers meet strict industry standards and comply with all water regulations to protect drinking water safety and provide proper documentation.
                </p>
                <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg">
                  <p className="text-slate-700 font-semibold mb-4">WaterSafe Accreditation Ensures:</p>
                  <ul className="space-y-3">
                    {[
                      'Meet strict industry standards',
                      'Comply with water regulations',
                      'Backed by UK water industry',
                      'Protect drinking water safety',
                      'Proper inspection & documentation',
                      'Recognized compliance credentials'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border-2 border-blue-200 text-center">
              <p className="text-slate-700 text-lg">
                <span className="font-semibold">Choosing a qualified professional ensures correct inspection and documentation.</span> This is essential for landlord compliance and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Areas We Cover – Lead Testing Glasgow
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { area: 'Glasgow City Centre', postcodes: 'G1–G5' },
                { area: 'West End', postcodes: 'G11–G13' },
                { area: 'Southside', postcodes: 'G41–G46' },
                { area: 'Bearsden & Milngavie', postcodes: 'North Glasgow' },
                { area: 'East Kilbride', postcodes: 'South Lanarkshire' },
                { area: 'Paisley', postcodes: 'West of Glasgow' },
                { area: 'Greater Glasgow', postcodes: 'All surrounding areas' }
              ].map((location, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
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

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Lead Testing FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Is lead testing mandatory for landlords?',
                  answer: 'Yes — landlords must ensure the water supply is free from lead and safe under the Scottish Repairing Standard. This is a legal requirement, not optional.'
                },
                {
                  question: 'What if my result is under 10 µg/L?',
                  answer: 'Even if results are below 10 µg/L, you must still remove all lead components (pipes, tanks, fittings) from the system. The law requires elimination of lead sources, not just test results below the limit.'
                },
                {
                  question: 'How long does the testing process take?',
                  answer: 'Typically 1–2 visits depending on sample collection timing. Visit 1 is inspection, then you leave the bottle for 12 hours standing water, then Visit 2 collects the sample. Lab results typically return in 5–7 days.'
                },
                {
                  question: 'Can homeowners test for peace of mind?',
                  answer: 'Yes — many homeowners choose lead testing for reassurance about their drinking water quality. You don\'t need to be a landlord to request testing.'
                },
                {
                  question: 'Do you replace lead pipes?',
                  answer: 'Yes — if lead is identified or present, we provide professional lead pipe replacement and upgrade to compliant WRAS-approved materials. We handle everything.'
                },
                {
                  question: 'How much does lead pipe replacement cost?',
                  answer: 'Replacement costs depend on the extent of lead pipework. We provide fixed quotations after inspection. Contact us for an estimate tailored to your property.'
                },
                {
                  question: 'Will my property fail inspection if lead is found?',
                  answer: 'Lead discovery doesn\'t mean failure — it means remediation is required. Once pipes are replaced and re-tested below limits, your property will be compliant.'
                },
                {
                  question: 'Is WaterSafe approval important?',
                  answer: 'Yes — WaterSafe approval ensures the plumber meets strict industry standards, complies with water regulations, and your testing/documentation is recognized by authorities and water companies.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
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
            Book Your Lead Water Test in Glasgow
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If you're a landlord needing compliance documentation, or a homeowner wanting reassurance about your drinking water, contact Upgrade Boilers & Bathrooms today. Professional testing. Clear certification. Full compliance support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Book Test
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
