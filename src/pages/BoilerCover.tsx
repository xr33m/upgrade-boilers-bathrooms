import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Shield, Wrench, Clock, AlertCircle } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function BoilerCover() {
  return (
    <>
      <SEO
        title="Boiler Cover & Service Plans Glasgow | Annual Boiler Maintenance"
        description="Comprehensive boiler cover and service plans in Glasgow. Protect your heating system with annual servicing, priority repairs, and 24/7 emergency callouts. Gas Safe registered."
        canonical={`${DOMAIN}/heating/boiler-cover`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Boiler Cover & Service Plans",
          "Comprehensive boiler protection plans including annual servicing, priority repairs, and 24/7 emergency support."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Heating Services", url: `${DOMAIN}/heating` },
          { name: "Boiler Cover", url: `${DOMAIN}/heating/boiler-cover` }
        ])}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Boiler Cover & Service Plans Glasgow
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              Protect your heating system with comprehensive boiler cover. Annual servicing, priority repairs, and 24/7 emergency support from Gas Safe registered engineers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                to="/contact"
                className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Protection</h3>
                <p className="text-slate-600">Complete peace of mind with annual servicing, parts, and labour covered</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Emergency Cover</h3>
                <p className="text-slate-600">Priority response when you need it most, day or night</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Gas Safe Engineers</h3>
                <p className="text-slate-600">All work carried out by qualified, experienced heating professionals</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Our Boiler Cover Plans
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">Essential Cover</h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">£15</div>
                    <div className="text-sm text-slate-600">per month</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Annual boiler service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Gas safety inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Priority booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>10% discount on repairs</span>
                  </li>
                </ul>
                <Link to="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Get Essential Cover
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl border-2 border-blue-800 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Complete Cover</h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold">£25</div>
                    <div className="text-sm text-blue-100">per month</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Everything in Essential, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency callouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Parts and labour included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Annual safety certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Controls and thermostat cover</span>
                  </li>
                </ul>
                <Link to="/contact" className="block text-center bg-white hover:bg-slate-100 text-blue-600 px-6 py-3 rounded-lg font-semibold transition">
                  Get Complete Cover
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Why Choose Our Boiler Cover?</h3>
                  <p className="text-slate-700 mb-3">
                    Unlike national providers, we're local to Glasgow with engineers who can reach you quickly. No lengthy call centers, no excessive wait times. Just reliable, professional service when you need it most.
                  </p>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Local Glasgow-based engineers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>No excess charges on callouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Direct contact with your engineer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Flexible monthly payments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              What's Included in Your Boiler Cover?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Annual Boiler Service</h3>
                <p className="text-slate-700 mb-4">
                  Keep your boiler running efficiently with a comprehensive annual service. Our Gas Safe engineers will check all components, clean key parts, and identify any potential issues before they become problems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Full safety inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Efficiency testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Component cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Written service report</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Emergency Repairs</h3>
                <p className="text-slate-700 mb-4">
                  With Complete Cover, you're protected 24/7. No heating in winter? Hot water not working? We'll get an engineer to you as quickly as possible, with all parts and labour included in your plan.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">24/7 emergency helpline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Priority response times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Parts and labour included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">No call-out charges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Boiler?
          </h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Get in touch today to discuss our boiler cover plans and find the right protection for your home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
