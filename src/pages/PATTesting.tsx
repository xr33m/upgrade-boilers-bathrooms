import { Link } from 'react-router-dom';
import { Phone, Zap, ClipboardCheck, AlertTriangle, CheckCircle2, FileText, Shield } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import { patTestingFaqs } from '../lib/links';

export default function PATTesting() {
  return (
    <>
      <SEO
        title="PAT Testing Glasgow | Portable Appliance Testing for Landlords"
        description="Professional PAT testing for landlords in Glasgow. Portable appliance electrical safety testing from £45. Protect tenants, ensure compliance, reduce risk. Gas Safe registered engineers."
        canonical={`${DOMAIN}/landlords/pat-testing`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "PAT Testing (Portable Appliance Testing)",
          "Professional portable appliance testing (PAT) for landlords. Comprehensive electrical safety inspection of all tenant-supplied appliances. Visual and electrical testing with detailed certification."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Landlord Services", url: `${DOMAIN}/landlords` },
          { name: "PAT Testing", url: `${DOMAIN}/landlords/pat-testing` }
        ])}
      />

      <section className="bg-gradient-to-br from-violet-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-violet-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/landlords" className="hover:text-white">Landlord Services</Link>
              <span className="mx-2">/</span>
              <span>PAT Testing</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PAT Testing Glasgow
            </h1>
            <p className="text-xl text-violet-100 mb-6">
              Portable Appliance Testing for Landlords. Professional electrical safety testing from £45. Protect your tenants and stay compliant with expert PAT checks across Greater Glasgow.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              Book Your Test
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What Is PAT Testing?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              PAT testing (Portable Appliance Testing) is the process of inspecting and electrically testing portable appliances to ensure they are safe to use.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              It involves:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Visual inspection</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Plug and cable checks</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Earth continuity testing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Insulation resistance testing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Functional checks</span>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4 font-semibold">The goal is to identify faults that could cause:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Electric shock</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Fire risk</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Appliance failure</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Tenant injury</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Is PAT Testing Important for Landlords?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              As a landlord in Scotland, you are responsible under the Repairing Standard for ensuring that all electrical appliances you provide are safe.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              While PAT testing is not explicitly mandated by name in legislation, it is widely accepted as the best way to demonstrate compliance with your legal duty of care.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              Regular PAT testing:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Reduces risk of electrical accidents</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Demonstrates proactive safety management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Protects tenants</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Protects you legally</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Supports insurance compliance</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              PAT Testing From £45 – Glasgow
            </h2>
            <div className="bg-violet-50 border border-violet-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                Prices start from £45, depending on number of appliances.
              </p>
              <p className="text-slate-700 mb-4">
                We provide:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Clear pricing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Fast turnaround</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Certification for your records</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Documentation of failed appliances</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What Appliances Need PAT Testing?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Any portable appliance supplied by the landlord should be tested.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              Examples include:
            </p>

            <div className="grid md:grid-cols-3 gap-3 mb-12">
              <div className="flex items-start gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span className="text-slate-700">Kettles</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span className="text-slate-700">Microwaves</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span className="text-slate-700">Toasters</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span className="text-slate-700">Washing machines</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span className="text-slate-700">Tumble dryers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span className="text-slate-700">Heaters</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span className="text-slate-700">Vacuum cleaners</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span className="text-slate-700">Extension leads</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span className="text-slate-700">Desk lamps</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span className="text-slate-700">Fridges (plug-in units)</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 font-semibold">
                Tenant-owned appliances are excluded.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Your Responsibilities Under the Repairing Standard
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Under Scottish legislation, landlords must ensure:
            </p>

            <div className="space-y-3 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Electrical installations are safe</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Supplied appliances are safe</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Ongoing safety is maintained</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-3">
                While EICR (Electrical Installation Condition Report) covers fixed wiring, PAT testing covers portable appliances.
              </p>
              <p className="text-slate-700 font-semibold">
                Both together demonstrate strong compliance.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              How Often Should PAT Testing Be Done?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              There is no fixed legal timeframe.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              Best practice for landlords is:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Every 12–15 months</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Or at change of tenancy</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Or during annual safety checks</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-3">
                Many landlords align PAT testing with:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">CP12 Gas Safety Certificate</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Boiler servicing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Legionella Risk Assessment</span>
                </div>
              </div>
              <p className="text-slate-700 mt-3">
                This simplifies compliance management.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our PAT Testing Process
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  Property Assessment
                </h3>
                <p className="text-slate-700">
                  We identify which landlord-owned appliances require testing.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  On-Site Inspection
                </h3>
                <p className="text-slate-700 mb-4">We perform:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-violet-600 font-bold">•</span>
                    <span className="text-slate-700">Visual checks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-violet-600 font-bold">•</span>
                    <span className="text-slate-700">Electrical safety tests</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-violet-600 font-bold">•</span>
                    <span className="text-slate-700">Cable & plug inspection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-violet-600 font-bold">•</span>
                    <span className="text-slate-700">Internal fuse verification</span>
                  </div>
                </div>
                <p className="text-slate-700 mt-4 text-sm italic">All testing is completed using calibrated equipment.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  Certification & Reporting
                </h3>
                <p className="text-slate-700 mb-3">You receive:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">PAT Test Certificate</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Appliance register</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Pass / fail status</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Documentation of non-compliant items</span>
                  </div>
                </div>
                <p className="text-slate-700 mt-4 text-sm italic">If an appliance fails, we will advise whether repair or replacement is required.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What Happens If an Appliance Fails?
            </h2>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-3">
                If an appliance fails testing:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700">It must be removed from service</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700">Repaired by a qualified professional</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-slate-700">Or replaced</span>
                </div>
              </div>
              <p className="text-slate-700 mt-4">
                We document the failure for your records and provide guidance on next steps.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Top Tips for Landlords Between PAT Tests
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                To minimise risk between inspections:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Encourage tenants to report faults immediately</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Remove damaged appliances promptly</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Avoid overloading extension leads</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Label tested appliances clearly</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Keep an updated appliance inventory</span>
                </div>
              </div>
              <p className="text-slate-700 mt-4 text-sm italic">
                Providing tenants with a list of landlord-owned appliances prevents confusion and avoids unnecessary testing of tenant property.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Bundle Your Landlord Safety Services
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We regularly complete multiple compliance checks in one visit:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">PAT Testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">CP12 Gas Safety Certificate</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Boiler Servicing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Legionella Risk Assessment</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold">•</span>
                  <span className="text-slate-700">Lead Water Testing</span>
                </div>
              </div>
              <p className="text-slate-700 font-semibold mt-4">
                One engineer. One visit. Full compliance.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Landlord Promise
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                Managing property is busy enough.
              </p>
              <p className="text-slate-700 mb-4">
                We:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Remind you when testing is due</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Coordinate access with tenants</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Offer flexible appointments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Provide clear documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Help streamline portfolio compliance</span>
                </div>
              </div>
              <p className="text-slate-700 mt-4 italic">
                You focus on managing properties — we handle the certifications.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Areas We Cover – PAT Testing Glasgow
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">
                We provide landlord PAT testing across:
              </p>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">•</span>
                  <span className="text-slate-700">Glasgow City Centre</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">•</span>
                  <span className="text-slate-700">West End</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">•</span>
                  <span className="text-slate-700">Southside</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">•</span>
                  <span className="text-slate-700">Bearsden & Milngavie</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">•</span>
                  <span className="text-slate-700">East Kilbride</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">•</span>
                  <span className="text-slate-700">Paisley</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">•</span>
                  <span className="text-slate-700">Greater Glasgow</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Upgrade Boilers & Bathrooms?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Experienced with landlord compliance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Fast certification turnaround</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Flexible scheduling</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Clear pricing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Professional documentation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Local Glasgow service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection
        title="Our PAT Testing Service"
        subtitle="Professional electrical safety testing for landlords"
        steps={[
          {
            step: 1,
            title: 'Assessment',
            description: 'We identify all landlord-owned portable appliances requiring testing in your property.'
          },
          {
            step: 2,
            title: 'Testing',
            description: 'Comprehensive visual and electrical testing using calibrated equipment for all appliances.'
          },
          {
            step: 3,
            title: 'Documentation',
            description: 'Detailed certification with pass/fail status, appliance register, and recommendations provided.'
          },
          {
            step: 4,
            title: 'Guidance',
            description: 'Clear advice on any failed appliances and next steps to bring them back into compliance.'
          }
        ]}
        relatedServices={[
          { label: 'Gas Safety Certificates', path: '/landlords/gas-safety-certificates' },
          { label: 'Lead Testing', path: '/landlords/lead-testing' },
          { label: 'Legionella Assessments', path: '/landlords/legionella-risk-assessments' },
          { label: 'Boiler Servicing', path: '/boilers/servicing' },
          { label: 'Landlord Services', path: '/landlords' },
        ]}
      />

      <section className="py-16 bg-violet-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your PAT Testing in Glasgow
          </h2>
          <p className="text-xl mb-8 text-violet-100 max-w-2xl mx-auto">
            Stay compliant. Reduce risk. Protect your tenants. Contact Upgrade Boilers & Bathrooms today to arrange PAT testing for your rental property in Glasgow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-violet-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={patTestingFaqs}
        title="PAT Testing FAQ – Glasgow"
        description="Common questions about portable appliance testing, landlord responsibilities, and electrical safety compliance."
        imageUrl="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </>
  );
}
