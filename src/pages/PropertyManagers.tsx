import { Link } from 'react-router-dom';
import { Phone, Zap, Clock, AlertTriangle, CheckCircle2, Shield, FileText } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import AreasWeServe from '../components/AreasWeServe';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import { propertyManagersFaqs } from '../lib/links';

export default function PropertyManagers() {
  return (
    <>
      <SEO
        title="Property Manager Services Glasgow | Plumbing & Heating Support"
        description="Reactive plumbing and heating services for property managers and letting agents in Glasgow. Same-day appointments, full compliance support, emergency response. From £170."
        canonical={`${DOMAIN}/landlords/property-managers`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Property Manager Services",
          "Comprehensive plumbing, heating, and compliance services for property managers and letting agents. Same-day reactive support, emergency response, full landlord safety certification, photographic job reports."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Landlord Services", url: `${DOMAIN}/landlords` },
          { name: "Property Managers", url: `${DOMAIN}/landlords/property-managers` }
        ])}
      />

      <section className="bg-gradient-to-br from-orange-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-orange-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/landlords" className="hover:text-white">Landlord Services</Link>
              <span className="mx-2">/</span>
              <span>Property Managers</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumbing & Heating Services for Property Managers
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Same-Day Appointments & Full Landlord Compliance Support. Managing property in Glasgow is demanding. We operate as an extension of your agency with same-day reactive support and complete compliance coverage.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              Emergency Support
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Property Managers Choose Us
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Same-Day Plumbing & Heating</h3>
                  <p className="text-slate-600">Emergency response within hours when tenants report boiler breakdown, burst pipes, or no hot water.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Full Compliance in One Visit</h3>
                  <p className="text-slate-600">CP12, boiler servicing, PAT testing, legionella, and lead testing completed together to minimize disruption.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Photographic Job Reports</h3>
                  <p className="text-slate-600">Detailed before & after photos with clear explanations forwarded directly to landlords.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">12-Month Aftercare</h3>
                  <p className="text-slate-600">All repairs covered by comprehensive aftercare guarantee for tenant peace of mind.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Seamless Tenant Communication</h3>
                  <p className="text-slate-600">Engineers coordinate directly with tenants, minimizing disruption and protecting your reputation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Secure Key Handling</h3>
                  <p className="text-slate-600">Fully insured engineers collect keys, use key safes, and access void properties without delays.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Reactive Plumbing & Heating Support
            </h2>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                Boiler breakdown? Burst pipe? No hot water? We understand that speed matters. Our experienced Gas Safe and WaterSafe engineers regularly attend:
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Boiler breakdowns</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Leaking radiators</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Burst or frozen pipes</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Faulty gas appliances</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">No hot water complaints</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Blocked drains</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Emergency plumbing call-outs</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                We prioritise property managers to minimise tenant disruption and protect your reputation.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Never Miss a Safety Certificate Again
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                Compliance is non-negotiable. We manage:
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">CP12 Gas Safety Certificates</span>
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
                  <span className="text-slate-700">Legionella Risk Assessments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Lead water testing</span>
                </div>
              </div>

              <p className="text-slate-700 mb-4">
                All certifications can be completed in one visit.
              </p>

              <p className="text-slate-700 mb-4">
                We provide:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Automatic annual reminders</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Digital documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Clear expiry tracking</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Photographic reports</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                Your compliance stays organised.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Access via Keys & Key Safes
            </h2>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We understand agency logistics. Our insured engineers can:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Collect keys from your office</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Use key safes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Access void properties</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Communicate directly with tenants</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                No waiting around. No unnecessary delays.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Detailed Photographic Job Reports
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We provide structured reports including:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Before & after photos</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Clear explanation of faults</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Work completed</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Recommended follow-up</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Transparent pricing</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                You can forward reports directly to landlords with confidence.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              All Safety Checks in One Visit
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                Our Gas Safe registered engineers can complete:
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Landlord Gas Safety Records (CP12)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Boiler servicing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Gas fire servicing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">PAT testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Legionella risk assessments</span>
                </div>
              </div>

              <p className="text-slate-700 mb-4 font-semibold">
                One engineer. One visit. Full compliance coverage.
              </p>

              <p className="text-slate-700">
                This saves time, reduces coordination issues, and keeps documentation consistent across portfolios.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Emergency Plumbing & Heating – Glasgow
            </h2>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We operate 6 days per week, with emergency response procedures in place.
              </p>

              <div className="bg-white p-4 rounded border border-orange-300 mb-4">
                <div className="text-2xl font-bold text-orange-600 mb-1">£170 inc VAT</div>
                <div className="text-slate-700">Out-of-hours call-out (first hour)</div>
                <div className="text-sm text-slate-600 mt-1">Additional time charged in half-hour increments</div>
              </div>

              <p className="text-slate-700 text-sm">
                For gas emergencies, we follow Gas Safe guidance and coordinate appropriately with emergency gas services where required.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              New Boiler Installations for Managed Properties
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                When replacement is required, we provide:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Clear written quotations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Brand options (Worcester Bosch, Ideal, Vaillant, Baxi and others)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Warranty registration handled</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">CO alarm installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Boiler safety certification</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">First-year service reminder</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                We keep disruption minimal and properties clean.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Plumbing Repairs & Installations for Managed Properties
            </h2>

            <div className="grid md:grid-cols-2 gap-3 mb-12">
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Leak repairs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Toilet repairs & installations</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Shower repairs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Tap repairs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Radiator repairs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Hot water tank repairs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Cold water tank works</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Unvented cylinder repairs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Drainage works</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Thermostatic mixer valve installation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-700">Legionella remedial works</span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 font-semibold">
                All work covered by a 12-month aftercare guarantee.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Central Heating Systems & Upgrades
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We provide:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Full central heating installations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Boiler upgrades</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">System flushing (powerflush / MagnaCleanse)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Radiator balancing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Smart thermostat installation (Hive, etc.)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Heat pump consultation</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                We can advise whether repair or replacement is the most cost-effective solution for your landlord.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              The Landlord Compliance Package
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We offer structured support for agencies managing multiple properties.
              </p>

              <p className="text-slate-700 mb-4">
                Benefits include:
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Bulk CP12 scheduling</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Portfolio-wide tracking</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Centralised documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Consistent engineer allocation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Predictable pricing structure</span>
                </div>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                Consistency improves compliance records and protects landlords legally.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Professional Standards & Accreditations
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Gas Safe Registered</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <span className="text-slate-700">WaterSafe Approved</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Experienced in landlord compliance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Fully insured</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700">
                We understand documentation requirements and regulatory expectations.
              </p>
            </div>


            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What You Can Expect From Us
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Prompt communication</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Clear written quotations</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Transparent pricing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Tidy, respectful engineers</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Professional tenant interaction</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Structured documentation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">12-month aftercare on repairs</span>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 font-semibold">
                Your reputation matters — we protect it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection
        title="Our Property Manager Service"
        subtitle="Integrated support for letting agencies and property managers"
        steps={[
          {
            step: 1,
            title: 'Rapid Response',
            description: 'Same-day or emergency appointments for reactive plumbing and heating issues.'
          },
          {
            step: 2,
            title: 'Professional Service',
            description: 'Gas Safe and WaterSafe engineers provide comprehensive repairs and maintenance.'
          },
          {
            step: 3,
            title: 'Documentation',
            description: 'Detailed photographic reports forwarded directly to landlords with transparent pricing.'
          },
          {
            step: 4,
            title: 'Compliance Management',
            description: 'All safety certifications tracked and scheduled with automatic annual reminders.'
          }
        ]}
        relatedServices={[
          { label: 'Gas Safety Certificates', path: '/landlords/gas-safety-certificates' },
          { label: 'Boiler Services', path: '/boilers/servicing' },
          { label: 'Emergency Plumbing', path: '/plumbing/repairs' },
          { label: 'PAT Testing', path: '/landlords/pat-testing' },
          { label: 'Landlord Services', path: '/landlords' },
        ]}
      />

      <AreasWeServe />

      <section className="py-16 bg-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work With a Reliable Partner
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Same-day reactive support. Full compliance coverage. Clear documentation. Get in touch today to discuss portfolio support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-orange-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white">
              Discuss Portfolio Support
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={propertyManagersFaqs}
        title="Property Manager Services FAQ"
        description="Common questions about reactive support, compliance management, emergency response, and portfolio agreements for letting agencies."
        imageUrl="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </>
  );
}
