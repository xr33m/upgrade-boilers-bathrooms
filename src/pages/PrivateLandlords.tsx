import { Link } from 'react-router-dom';
import { Phone, Shield, CheckCircle2, AlertCircle, Clock, Zap } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import { privateLandlordsFaqs } from '../lib/links';

export default function PrivateLandlords() {
  return (
    <>
      <SEO
        title="Private Landlord Services Glasgow | Gas Safety & Compliance"
        description="Complete landlord safety certification, plumbing and heating support for Glasgow landlords. Gas safety certificates, PAT testing, legionella assessments, same-day repairs. Call 0141 123 4567"
        canonical={`${DOMAIN}/landlords/private-landlords`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Private Landlord Services",
          "Full landlord compliance services including gas safety certificates (CP12), PAT testing, legionella risk assessments, lead water testing, and reactive plumbing and heating support."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Landlord Services", url: `${DOMAIN}/landlords` },
          { name: "Private Landlords", url: `${DOMAIN}/landlords/private-landlords` }
        ])}
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/landlords" className="hover:text-white">Landlord Services</Link>
              <span className="mx-2">/</span>
              <span>Private Landlords</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted Plumbing Services & Safety Certification for Glasgow Landlords
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Full Landlord Compliance & Reactive Support in One Place. Managing rental property in Glasgow comes with increasing legal responsibility. We provide dependable plumbing, heating and landlord safety certification services trusted by landlords across Greater Glasgow.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">As part of our Landlord Promise</h2>
              <p className="text-slate-700">
                We'll remind you when your safety certifications are due — so you never fall out of compliance.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Complete Landlord Safety Certification
            </h2>

            <p className="text-slate-700 mb-8 text-lg">
              We manage all major landlord safety obligations, including:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Gas Safety Checks (CP12 Certificates)
                </h3>
                <p className="text-slate-700 mb-4">
                  Annual Gas Safe inspections covering:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Boilers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Gas fires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Gas cookers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Pipework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Flues</span>
                  </li>
                </ul>
                <p className="text-slate-700 font-semibold mt-4">
                  Issued same-day in most cases. Legally compliant.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  PAT Testing (Portable Appliance Testing)
                </h3>
                <p className="text-slate-700 mb-4">
                  Safety checks for landlord-owned electrical appliances.
                </p>
                <p className="text-slate-700 mb-3 font-semibold">
                  Includes:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Visual inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Electrical testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Compliance certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Documentation of failed items</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-cyan-900 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Legionella Risk Assessments
                </h3>
                <p className="text-slate-700 mb-4">
                  Inspection of water systems to assess risk of Legionella bacteria.
                </p>
                <p className="text-slate-700 mb-3 font-semibold">
                  We:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span>Identify risk areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span>Recommend corrective measures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span>Provide documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span>Support compliance under the Repairing Standard</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Lead Water Testing
                </h3>
                <p className="text-slate-700 mb-4">
                  Under the updated Repairing Standard, landlords must ensure drinking water is free from lead.
                </p>
                <p className="text-slate-700 mb-3 font-semibold">
                  We provide:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Visual inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Laboratory testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Remedial guidance</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              All Certifications Completed in One Visit
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4 font-semibold">
                No booking multiple companies.
              </p>

              <p className="text-slate-700 mb-4">
                Our qualified engineers can complete:
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">CP12 Gas Safety</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Boiler servicing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">PAT testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Legionella risk assessment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Lead testing</span>
                </div>
              </div>

              <p className="text-slate-700">
                All in one scheduled appointment. This reduces disruption and keeps your paperwork consistent.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Never Miss a Safety Check Again
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4 text-lg font-semibold">
                Compliance deadlines are easy to forget.
              </p>

              <p className="text-slate-700 mb-4">
                Our Landlord Promise includes:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Automatic renewal reminders</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Advance booking allocation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Digital certification records</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Portfolio tracking support</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                You focus on managing tenants — we manage compliance.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Same-Day Plumbing & Heating Support
            </h2>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4 text-lg font-semibold">
                When something goes wrong, you need fast action.
              </p>

              <p className="text-slate-700 mb-4">
                We provide reactive support for:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700">Boiler breakdowns</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700">No heating or hot water</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700">Leaking pipes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700">Toilet and shower faults</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700">Radiator issues</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700">Emergency plumbing</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                We prioritise landlord and letting agent clients to minimise tenant disruption.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Access via Keys & Key Safes
            </h2>

            <div className="bg-primary-50 border border-blue-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We are insured and experienced in accessing properties via:
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Agency-held keys</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Key safes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Void properties</span>
                </div>
              </div>

              <p className="text-slate-700">
                We communicate clearly with tenants and respect the property at all times.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Photographic Job Reports
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                For every repair or installation, we provide:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Before & after photos</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Clear explanation of work</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Transparent pricing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Recommended follow-up</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                You can forward reports directly to landlords or asset managers.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              New Boiler Installations for Rental Properties
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                If replacement is required, we offer:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Clear written quotations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">A-rated boiler upgrades</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Warranty registration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">CO alarm installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">12-month workmanship guarantee</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">First-year service reminder</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                We install leading brands and ensure compliance with manufacturer and Gas Safe standards.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Plumbing Repairs & Installations for Landlords
            </h2>

            <div className="grid md:grid-cols-2 gap-3 mb-12">
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Toilet repairs & installations</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Leak detection & repairs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Shower installations</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Tap replacements</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Hot water tank repairs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Unvented cylinder works</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Cold water tank works</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Drainage repairs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Thermostatic mixer valves</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Garden taps</span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 font-semibold">
                All work backed by a 12-month aftercare guarantee.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Emergency Plumbing & Heating – Glasgow
            </h2>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We operate 6 days per week with emergency response available.
              </p>

              <div className="bg-white p-4 rounded border border-red-300 mb-6">
                <div className="text-2xl font-bold text-red-600 mb-1">£170 inc VAT</div>
                <div className="text-slate-700">Out-of-hours call-out (first hour)</div>
                <div className="text-sm text-slate-600 mt-1">£85 per additional half hour</div>
              </div>

              <p className="text-slate-700 mb-4">
                We provide immediate advice if required, including:
              </p>

              <ul className="space-y-2 text-slate-700 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Stopcock location guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Gas shut-off instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Emergency safety advice</span>
                </li>
              </ul>

              <p className="text-slate-700 text-sm">
                For gas emergencies, always contact 0800 111 999 first.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Central Heating Services for Rental Properties
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We support landlords with:
              </p>

              <ul className="space-y-2 text-slate-700 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Boiler repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Annual boiler servicing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Central heating upgrades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>System flushing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Radiator balancing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span>Smart thermostat installation</span>
                </li>
              </ul>

              <p className="text-slate-700 font-semibold">
                We advise honestly on whether repair or replacement is most cost-effective.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Covering Greater Glasgow
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We provide landlord plumbing and heating services across:
              </p>

              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-700">Glasgow City Centre</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-700">West End</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-700">Southside</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-700">Bearsden & Milngavie</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-700">East Kilbride</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-700">Paisley</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-700">Surrounding Greater Glasgow areas</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Landlord Promise
            </h2>

            <div className="bg-primary-50 border border-blue-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We created our Landlord Promise because managing property is busy enough.
              </p>

              <p className="text-slate-700 mb-4">
                We will:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Remind you before certifications expire</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Pre-book renewal appointments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Provide structured documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Communicate clearly</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Handle tenant coordination</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Keep properties clean and tidy</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                Compliance made simple.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Glasgow Landlords Choose Upgrade Boilers & Bathrooms
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Gas Safe Registered Engineers</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-slate-700">WaterSafe Approved</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Experienced with landlord portfolios</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Fast turnaround</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Clear written documentation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Photographic reporting</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-slate-700">12-month aftercare guarantee</span>
              </div>
            </div>

            <div className="bg-primary-50 border border-blue-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 font-semibold">
                We operate as a professional, organised partner — not just a trades company.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection
        title="Our Private Landlord Service"
        subtitle="Comprehensive compliance and reactive support"
        steps={[
          {
            step: 1,
            title: 'Annual Certifications',
            description: 'CP12 gas safety, PAT testing, legionella assessments, and lead testing scheduled and completed in single visits.'
          },
          {
            step: 2,
            title: 'Compliance Reminders',
            description: 'Automatic renewal notifications ensure you never miss critical safety certification deadlines.'
          },
          {
            step: 3,
            title: 'Reactive Support',
            description: 'Same-day plumbing and heating repairs for tenant issues, minimizing disruption and void periods.'
          },
          {
            step: 4,
            title: 'Complete Documentation',
            description: 'Photographic reports and structured records for every service, ready for tenant and inspector reviews.'
          }
        ]}
        relatedServices={[
          { label: 'Gas Safety Certificates', path: '/landlords/gas-safety-certificates' },
          { label: 'Boiler Services', path: '/boilers/servicing' },
          { label: 'Emergency Plumbing', path: '/plumbing/emergency-plumber' },
          { label: 'PAT Testing', path: '/landlords/pat-testing' },
          { label: 'Landlord Services', path: '/landlords' },
        ]}
      />

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work With a Reliable Landlord Compliance Partner
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            If you're a private landlord or letting agent in Glasgow looking for a dependable plumbing and heating company, we're ready to support you. Full certification. Reactive support. Structured communication.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-primary hover:bg-primary-700 px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white">
              Get in Touch Today
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={privateLandlordsFaqs}
        title="Private Landlord Services FAQ"
        description="Common questions about landlord compliance, safety certifications, emergency repairs, and our Landlord Promise."
        imageUrl="https://images.pexels.com/photos/8961819/pexels-photo-8961819.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </>
  );
}
