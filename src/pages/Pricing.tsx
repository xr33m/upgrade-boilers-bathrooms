import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, PoundSterling } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function Pricing() {
  return (
    <>
      <SEO
        title="Plumbing Pricing Glasgow | Boiler Installation & Service Costs"
        description="Transparent pricing for plumbing and heating services in Glasgow. Boiler installation, servicing, repairs, emergency callouts. No hidden fees. Free quotes available."
        canonical={`${DOMAIN}/pricing`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Pricing", url: `${DOMAIN}/pricing` }
        ])}
      />

      <section className="bg-gradient-to-br from-green-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <PoundSterling className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing Guide
            </h1>
            <p className="text-xl text-green-100">
              Transparent, competitive pricing with no hidden fees. Get the quality service you deserve at fair prices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-l-4 border-primary p-6 mb-12">
              <p className="text-lg text-slate-700">
                <strong>Important:</strong> Prices shown are guide prices only. Final costs depend on the specific work required, property access, and materials needed. We always provide a detailed quote before starting any work.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Boiler Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Boiler Service</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £75</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Full safety inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Component cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Efficiency testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Service certificate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Boiler Installation</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £1,800</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>A-rated combi boiler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Full installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Old boiler removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Manufacturer warranty</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Boiler Repair</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £90</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Diagnostic visit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Labor included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Parts charged separately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Fixed before payment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Gas Safety Certificate</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £60</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>All gas appliances checked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>CP12 certificate issued</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Landlord compliant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Same-day certificate</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Heating Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Radiator Installation</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £150</p>
                <p className="text-slate-600 mb-4">Per radiator including labor, valves, and installation</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Power Flushing</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £400</p>
                <p className="text-slate-600 mb-4">Complete system clean for typical 3-bed property</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Gas Fire Service</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £70</p>
                <p className="text-slate-600 mb-4">Annual service including safety checks and certificate</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Thermostatic Valves</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £45</p>
                <p className="text-slate-600 mb-4">Per TRV including supply and fitting</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Plumbing Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Emergency Callout</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £120</p>
                <p className="text-slate-600 mb-4">24/7 emergency service within 1-2 hours. Includes first hour of labor.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Tap Repair/Replacement</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £80</p>
                <p className="text-slate-600 mb-4">Includes labor. Taps charged separately based on your choice.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Toilet Repair</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £75</p>
                <p className="text-slate-600 mb-4">Common issues like flush mechanisms, leaks, and cistern problems</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold mb-2">Leak Detection & Repair</h3>
                <p className="text-3xl font-bold text-primary mb-4">From £90</p>
                <p className="text-slate-600 mb-4">Find and fix leaks to prevent water damage and high bills</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Our Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <CheckCircle2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">No Hidden Fees</h3>
                <p className="text-slate-600">All costs clearly explained upfront with no surprises</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Free Quotes</h3>
                <p className="text-slate-600">No-obligation quotes for all services</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <CheckCircle2 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-slate-600">All work fully guaranteed with warranty on parts</p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
              <h3 className="font-bold text-lg mb-2">Need a Detailed Quote?</h3>
              <p className="text-slate-700">
                For accurate pricing tailored to your specific requirements, contact us for a free, no-obligation quote. We'll assess your needs and provide a detailed breakdown of costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Contact us for transparent, competitive pricing with no hidden fees
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-primary hover:bg-primary-700 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
