import { Link } from 'react-router-dom';
import { Phone, Shield, FileCheck, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function Landlords() {
  return (
    <>
      <SEO
        title="Landlord Services Glasgow | Gas Safety Certificates & Plumbing"
        description="Professional landlord services in Glasgow. Gas safety certificates (CP12), annual boiler servicing, emergency repairs. Fast turnaround. Call 0141 123 4567"
        canonical={`${DOMAIN}/landlords`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Landlord Services",
          "Complete landlord compliance services including gas safety certificates (CP12), PAT testing, legionella risk assessments, lead testing, and emergency plumbing and heating repairs."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Landlord Services", url: `${DOMAIN}/landlords` }
        ])}
      />

      <section className="bg-gradient-to-br from-green-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Landlord Plumbing & Heating Services
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Comprehensive gas safety, plumbing and heating services for landlords across Glasgow. Fast, reliable service to keep your properties compliant and tenants happy.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-12">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-red-900 mb-2">Gas Safety is a Legal Requirement</h2>
                  <p className="text-slate-700 mb-2">
                    As a landlord, you are legally required to have all gas appliances and flues in your rental properties checked annually by a Gas Safe registered engineer.
                  </p>
                  <p className="text-slate-700">
                    We provide fast, reliable Gas Safety Certificates (CP12) with same-day or next-day appointments available.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Our Landlord Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Link to="/landlords/gas-safety-certificates" className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-green-500 transition block">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Gas Safety Certificates</h3>
                <p className="text-slate-700 mb-4">
                  Comprehensive gas safety inspections and CP12 certificates. We check all gas appliances, flues, and pipework to ensure they meet legal safety standards.
                </p>
                <div className="bg-white p-4 rounded border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-1">£65</div>
                  <div className="text-sm text-slate-600">Gas Safety Certificate + Service</div>
                </div>
              </Link>

              <Link to="/landlords/lead-testing" className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-green-500 transition block">
                <FileCheck className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Lead Testing</h3>
                <p className="text-slate-700 mb-4">
                  Professional lead water testing to ensure compliance with water safety regulations and protect your tenants' health.
                </p>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-1">£95</div>
                  <div className="text-sm text-slate-600">Per property</div>
                </div>
              </Link>

              <Link to="/landlords/legionella-risk-assessments" className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-green-500 transition block">
                <Clock className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Legionella Risk Assessments</h3>
                <p className="text-slate-700 mb-4">
                  HSE compliant Legionella risk assessments to identify and control water safety risks in your rental properties.
                </p>
                <div className="bg-white p-4 rounded border border-cyan-200">
                  <div className="text-3xl font-bold text-cyan-600 mb-1">£150</div>
                  <div className="text-sm text-slate-600">Per property assessment</div>
                </div>
              </Link>

              <Link to="/landlords/pat-testing" className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-green-500 transition block">
                <FileCheck className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">PAT Testing</h3>
                <p className="text-slate-700 mb-4">
                  Portable Appliance Testing to ensure all electrical appliances in your furnished properties are safe and compliant.
                </p>
                <div className="bg-white p-4 rounded border border-amber-200">
                  <div className="text-3xl font-bold text-amber-600 mb-1">£3.50</div>
                  <div className="text-sm text-slate-600">Per appliance (min £45)</div>
                </div>
              </Link>

              <Link to="/landlords/property-managers" className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-green-500 transition block">
                <Shield className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Property Manager Services</h3>
                <p className="text-slate-700 mb-4">
                  Reactive plumbing, heating, and compliance support for letting agents and property managers. Same-day response and portfolio support.
                </p>
                <div className="bg-white p-4 rounded border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-1">From £170</div>
                  <div className="text-sm text-slate-600">Emergency call-out + hourly rates</div>
                </div>
              </Link>

              <Link to="/landlords/private-landlords" className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-green-500 transition block">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Private Landlords</h3>
                <p className="text-slate-700 mb-4">
                  Trusted safety certification and plumbing services for private landlords. Complete compliance, automatic reminders, and reactive support.
                </p>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-1">From £65</div>
                  <div className="text-sm text-slate-600">Gas Safety Certificate + Service</div>
                </div>
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Landlords Choose Us
            </h2>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Fast Turnaround</h3>
                  <p className="text-slate-600">Same-day or next-day appointments for gas safety certificates. Digital certificates issued immediately.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Tenant-Friendly Service</h3>
                  <p className="text-slate-600">Our engineers are professional, respectful, and efficient. We work around tenant schedules to minimize disruption.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Multi-Property Discounts</h3>
                  <p className="text-slate-600">Managing multiple properties? We offer competitive rates and discounts for landlords with portfolio agreements.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Proper Documentation</h3>
                  <p className="text-slate-600">Clear, detailed certificates and reports. Digital copies sent immediately, with paper copies available on request.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Reminder Service</h3>
                  <p className="text-slate-600">We'll remind you when certificates are due for renewal, so you never miss a deadline.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Gas Safety Certificate Requirements
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3 text-blue-900">What's Checked?</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>All gas appliances (boilers, fires, cookers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Gas pipework and connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Flues and ventilation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Carbon monoxide emissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Safety device operation</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-3 text-amber-900 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                Legal Requirements for Landlords
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Annual gas safety check by a Gas Safe registered engineer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Provide copy of certificate to tenants within 28 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Keep copies of certificates for 2 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Ensure all gas appliances are maintained in safe working order</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Landlord Service Packages
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Essential</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">£65</div>
                <p className="text-slate-600 mb-4">Per property, per year</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Gas safety certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Boiler service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Digital certificate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
                <h3 className="text-xl font-bold mb-3">Complete</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">£150</div>
                <p className="text-slate-600 mb-4">Per property, per year</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Everything in Essential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Priority emergency repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>10% discount on repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Renewal reminders</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Portfolio</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">POA</div>
                <p className="text-slate-600 mb-4">5+ properties</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Discounted rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Flexible payment terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Priority scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your Gas Safety Certificate
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Fast, reliable service for landlords. Same-day appointments available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-green-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white">
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
