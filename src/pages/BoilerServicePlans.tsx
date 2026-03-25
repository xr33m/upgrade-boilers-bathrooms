import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Clock, TrendingDown } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function BoilerServicePlans() {
  return (
    <>
      <SEO
        title="Boiler Service Plans Glasgow | Annual Cover from £12/month"
        description="Affordable boiler service plans in Glasgow. Annual servicing, priority emergency cover, discounts on repairs. Plans from £12/month. Call 0141 123 4567"
        canonical={`${DOMAIN}/boilers/service-plans`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Boiler Service Plans",
          "Affordable annual boiler service plans with priority emergency cover, annual servicing, and repair discounts."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Boiler Services", url: `${DOMAIN}/boilers` },
          { name: "Service Plans", url: `${DOMAIN}/boilers/service-plans` }
        ])}
      />

      <section className="bg-gradient-to-br from-purple-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-primary-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/boilers" className="hover:text-white">Boilers</Link>
              <span className="mx-2">/</span>
              <span>Service Plans</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Boiler Service Plans in Glasgow
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              Protect your boiler and save money with our affordable service plans. Annual servicing, priority emergency cover, and exclusive discounts from just £12 per month.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              Call to Join
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Boiler Service Plan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple, affordable plans designed to keep your heating system running smoothly all year round
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Basic Care</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-primary">£12</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 mb-6">Essential boiler protection for peace of mind</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Annual boiler service included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Priority booking for repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">5% discount on repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Gas Safe certificate</span>
                </li>
              </ul>

              <Link to="/contact" className="block text-center bg-primary hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition">
                Choose Basic
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-500 rounded-xl p-8 hover:shadow-xl transition relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Complete Care</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-secondary">£18</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 mb-6">Comprehensive cover with emergency call-outs</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Everything in Basic, plus:</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">24/7 emergency call-outs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Parts covered up to £100/year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">10% discount on repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Central heating system check</span>
                </li>
              </ul>

              <Link to="/contact" className="block text-center bg-secondary hover:bg-secondary-600 text-white py-3 rounded-lg font-semibold transition">
                Choose Complete
              </Link>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Premium Care</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-primary-600">£28</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 mb-6">Ultimate protection with full parts cover</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Everything in Complete, plus:</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">All parts & labour covered</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Same-day emergency response</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">15% discount on other services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Radiator system flush (annual)</span>
                </li>
              </ul>

              <Link to="/contact" className="block text-center bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition">
                Choose Premium
              </Link>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose a Service Plan?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg">
                <TrendingDown className="w-12 h-12 text-secondary mb-3" />
                <h3 className="text-xl font-bold mb-2">Save Money</h3>
                <p className="text-slate-600">Spread the cost of annual servicing over 12 months and save money on repairs with member discounts.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">Total Peace of Mind</h3>
                <p className="text-slate-600">Never worry about boiler breakdowns. We'll keep your system running smoothly all year.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <Clock className="w-12 h-12 text-primary-600 mb-3" />
                <h3 className="text-xl font-bold mb-2">Priority Service</h3>
                <p className="text-slate-600">Jump the queue with priority booking and faster response times for emergency call-outs.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <CheckCircle2 className="w-12 h-12 text-accent mb-3" />
                <h3 className="text-xl font-bold mb-2">Maintain Warranty</h3>
                <p className="text-slate-600">Regular servicing is required to keep your boiler warranty valid. We'll take care of everything.</p>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-2 text-blue-900">How It Works</h3>
              <ol className="space-y-2 text-slate-700">
                <li><strong>1.</strong> Choose your plan and sign up by phone or online</li>
                <li><strong>2.</strong> We'll schedule your first annual service at a time that suits you</li>
                <li><strong>3.</strong> Pay monthly by direct debit - no long-term commitment required</li>
                <li><strong>4.</strong> Enjoy priority service and discounts throughout the year</li>
                <li><strong>5.</strong> We'll remind you when your next service is due</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 mb-12">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Can I cancel anytime?</h3>
                <p className="text-slate-600">Yes, there are no long-term contracts. You can cancel with 30 days notice, though you must have received your annual service.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What if my boiler is old?</h3>
                <p className="text-slate-600">We accept boilers up to 15 years old onto our service plans. Boilers over 15 years may be assessed on a case-by-case basis.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Are parts and labour really covered?</h3>
                <p className="text-slate-600">On Complete Care, parts up to £100/year are covered. On Premium Care, all parts and labour are fully covered with no excess.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Do you service all boiler makes?</h3>
                <p className="text-slate-600">Yes, our Gas Safe engineers are trained to service all major boiler brands including Worcester Bosch, Vaillant, Ideal, Baxi, and more.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Special Offer: Join Today</h3>
              <p className="text-xl mb-6 text-green-100">Get your first month for just £1 when you sign up to Complete or Premium Care</p>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition">
                <Phone className="w-6 h-6" />
                Call {BUSINESS_INFO.phone} to Join
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
