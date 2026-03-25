import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, AlertTriangle, Shield } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import AreasWeServe from '../components/AreasWeServe';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import { gasSafetyFaqs } from '../lib/links';

export default function GasSafetyCertificates() {
  return (
    <>
      <SEO
        title="Gas Safety Certificates Glasgow | CP12 Landlord Gas Safety Checks"
        description="Fast Gas Safe CP12 certificates for landlords in Glasgow. Annual gas safety checks from £100. Same-day appointments available. Gas Safe registered engineers. Protect your tenants legally."
        canonical={`${DOMAIN}/landlords/gas-safety-certificates`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Gas Safety Certificates (CP12)",
          "Annual landlord gas safety checks (CP12 certificates) by Gas Safe registered engineers. Comprehensive inspection of all gas appliances, pipework, and flues to ensure legal compliance and tenant safety."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Landlord Services", url: `${DOMAIN}/landlords` },
          { name: "Gas Safety Certificates", url: `${DOMAIN}/landlords/gas-safety-certificates` }
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
              <span>Gas Safety Certificates</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gas Safety Certificates Glasgow
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              CP12 Gas Safety Checks for Landlords. Protect your tenants and stay legally compliant with annual Gas Safe inspections. Fast appointments, same-day certificates, from £100.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              Book Your Check
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What Is a CP12 Gas Safety Certificate?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              A CP12 (Landlord Gas Safety Record) is a legal document issued after a Gas Safe registered engineer inspects all gas appliances in a rental property. Think of it like an MOT for your property's gas system.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              It confirms that:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Gas appliances are safe</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Pipework is secure</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Flues are functioning correctly</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Ventilation is adequate</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Carbon monoxide risks are controlled</span>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
              <p className="text-slate-700 font-semibold">
                A CP12 must be renewed every 12 months.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Legal Requirements for Glasgow Landlords
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Under The Gas Safety (Installation and Use) Regulations 1998, landlords must:
            </p>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-12">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Have all gas appliances inspected annually</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Use a Gas Safe registered engineer</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Provide tenants with a copy within 28 days</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Keep records for at least 2 years</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-amber-200">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Failure to comply can result in:
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Fines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Prosecution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Invalid landlord insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Serious legal consequences</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-700 font-semibold mt-4">
                This is not optional — it is a legal duty.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Gas Safety Inspection From £100
            </h2>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-3">
                Standard CP12 inspection (up to 3 gas appliances): From £100
              </p>
              <p className="text-slate-700 mb-3">
                Gas fires may vary depending on make and model.
              </p>
              <p className="text-slate-700">
                We provide fixed pricing and confirm costs before attending.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What's Included in a CP12 Gas Safety Check?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Our landlord gas safety inspections in Glasgow are thorough and compliant. Here's what we assess:
            </p>

            <div className="space-y-6 mb-12">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  Visual Inspection
                </h3>
                <p className="text-slate-700 mb-4">We inspect:</p>
                <div className="grid md:grid-cols-2 gap-2 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Boilers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Gas fires</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Gas cookers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Pipework</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Gas meters</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Flue systems</span>
                  </div>
                </div>
                <p className="text-slate-700 mb-2 font-semibold">We check for:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Correct installation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Signs of heat damage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Casing seals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Corrosion</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Unsafe alterations</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  Gas Pressure & Tightness Test
                </h3>
                <p className="text-slate-700 mb-4">We test the gas supply pressure to ensure:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Safe operating pressure</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">No gas leaks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Correct regulator function</span>
                  </div>
                </div>
                <p className="text-slate-700 mt-4 text-sm italic">If issues are found at the meter, we report directly to the gas network provider.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  Flue & Chimney Inspection
                </h3>
                <p className="text-slate-700 mb-4">The flue safely removes combustion gases from the property. We check:</p>
                <div className="grid md:grid-cols-2 gap-2 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Flue integrity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Correct installation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Terminal condition</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Blockages (birds nests, debris)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Correct combustion discharge</span>
                  </div>
                </div>
                <p className="text-slate-700 text-sm">For gas fires using chimneys, we check chimney condition and ventilation.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  Flue Gas Analysis
                </h3>
                <p className="text-slate-700 mb-4">Using calibrated flue gas analysers, we check:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Combustion efficiency</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Safe CO levels</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Manufacturer tolerances</span>
                  </div>
                </div>
                <p className="text-slate-700 mt-4 text-sm italic">If readings fall outside safe parameters, adjustments are made where possible.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">5</span>
                  Safety Device Checks
                </h3>
                <p className="text-slate-700 mb-4">We test:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Flame failure devices</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Thermocouples</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Gas shut-off mechanisms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-slate-700">Boiler safety interlocks</span>
                  </div>
                </div>
                <p className="text-slate-700 mt-4 text-sm italic">These ensure appliances shut down safely if faults occur.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">6</span>
                  Ventilation Assessment
                </h3>
                <p className="text-slate-700 mb-4">Some gas appliances require fixed ventilation. We inspect:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Air vents</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Room ventilation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Appliance positioning</span>
                  </div>
                </div>
                <p className="text-slate-700 mt-4 text-sm italic">If ventilation is insufficient, a warning notice is issued.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">7</span>
                  Carbon Monoxide Alarm Check
                </h3>
                <p className="text-slate-700 mb-4">Scottish law requires:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">CO alarms installed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Sealed 10-year lithium battery units</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Correct positioning</span>
                  </div>
                </div>
                <p className="text-slate-700 mt-4 text-sm italic">We confirm compliance and document findings.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">8</span>
                  CP12 Certificate Issued
                </h3>
                <p className="text-slate-700 mb-2">Once inspection is complete:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">CP12 Gas Safety Record issued</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Same-day certificate (in most cases)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Digital copy for records</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Clear documentation</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Unsafe Classifications Explained
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-orange-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  At Risk (AR)
                </h3>
                <p className="text-slate-700">Potentially dangerous if left. The appliance will be switched off (with permission) and a warning notice issued.</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Immediately Dangerous (ID)
                </h3>
                <p className="text-slate-700">Immediate risk to life or property. The appliance will be disconnected from gas supply. A new CP12 can only be issued after repairs and reinspection.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Key Information
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-blue-900">Can a CP12 Be Updated After Repairs?</h3>
                <p className="text-slate-700 mb-2">No. Once issued, a CP12 cannot be amended. If repairs are required after inspection:</p>
                <ul className="space-y-1 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>A new inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>A new certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>A chargeable revisit</span>
                  </li>
                </ul>
                <span className="text-slate-700 mt-2 block">is required.</span>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-green-900">Should I Pay for Boiler Service AND CP12?</h3>
                <p className="text-slate-700 mb-3">Important clarification:</p>
                <p className="text-slate-700 mb-3">You should not pay twice for the same boiler checks. If your boiler is being serviced, the safety checks required for CP12 are already covered. You only pay extra for additional appliances (e.g., gas fire or cooker).</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-purple-900">The 2-Month Renewal Rule</h3>
                <p className="text-slate-700 mb-3">You can complete your CP12:</p>
                <div className="flex items-start gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Up to 2 months before expiry</span>
                </div>
                <div className="flex items-start gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Without losing renewal date</span>
                </div>
                <p className="text-slate-700 text-sm italic">Example: If your certificate expires 30 June, you can renew anytime in May or June and keep the same expiry next year. This gives flexibility while maintaining compliance.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Landlord Promise
            </h2>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">We understand managing property is demanding.</p>
              <p className="text-slate-700 mb-4">We:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Remind you when certificates are due</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Coordinate with tenants</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Offer flexible appointments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Provide same-day documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Bundle compliance services</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Bundle Your Compliance Services
            </h2>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-12">
              <p className="text-slate-700 mb-4">We can complete multiple landlord services in one visit:</p>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700">CP12 Gas Safety Certificate</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700">Boiler servicing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700">Gas fire servicing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700">Lead water testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700">Legionella Risk Assessment</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700">PAT testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-slate-700">Emergency plumbing</span>
                </div>
              </div>
              <p className="text-slate-700 font-semibold mt-4">One engineer. One visit. Full compliance.</p>
            </div>


            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Upgrade Boilers & Bathrooms?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Gas Safe Registered Engineers</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Fast turnaround</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Same-day certificates</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Transparent pricing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Experienced in landlord compliance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Portfolio management available</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Professional documentation</span>
              </div>
            </div>

            <p className="text-slate-700 text-center font-semibold">
              Consistency matters — especially for multi-property landlords.
            </p>
          </div>
        </div>
      </section>

      <ProcessSection
        title="How We Conduct Your Gas Safety Check"
        subtitle="Professional, thorough, compliant – every time"
        steps={[
          {
            step: 1,
            title: 'Book Your Appointment',
            description: 'Contact us to schedule your CP12 check at a time that suits you and your tenant. We offer flexible appointments including evenings and weekends.'
          },
          {
            step: 2,
            title: 'Engineer Inspection',
            description: 'Our Gas Safe registered engineer conducts a comprehensive inspection of all gas appliances, pipework, flues, safety devices, and ventilation.'
          },
          {
            step: 3,
            title: 'Testing & Analysis',
            description: 'We perform gas pressure tests, flue gas analysis, safety device checks, and carbon monoxide assessments to current regulations.'
          },
          {
            step: 4,
            title: 'Certificate Issued',
            description: 'If all checks pass, your CP12 certificate is issued same-day. Digital copies sent immediately, with printed copies available.'
          }
        ]}
        relatedServices={[
          { label: 'Boiler Servicing', path: '/boilers/servicing' },
          { label: 'Lead Testing', path: '/landlords/lead-testing' },
          { label: 'Legionella Assessments', path: '/landlords/legionella-risk-assessments' },
          { label: 'PAT Testing', path: '/landlords/pat-testing' },
          { label: 'Landlord Services', path: '/landlords' },
        ]}
      />

      <AreasWeServe />

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your CP12 Gas Safety Check in Glasgow
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Stay compliant. Protect your tenants. Avoid legal risk. Contact Upgrade Boilers & Bathrooms today to arrange your landlord gas safety certificate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={gasSafetyFaqs}
        title="CP12 Gas Safety FAQ – Glasgow"
        description="Answers to common questions about landlord gas safety certificates, requirements, and what to expect."
        imageUrl="https://images.pexels.com/photos/3994899/pexels-photo-3994899.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </>
  );
}
