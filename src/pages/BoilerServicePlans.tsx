import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, Clock, TrendingDown, Star, ArrowRight, Zap } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import FAQSection from '../components/FAQSection';
import AreasWeCover from '../components/AreasWeCover';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

const servicePlanFaqs = [
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, there are no long-term contracts. You can cancel with 30 days notice, though you must have received your annual service.'
  },
  {
    question: 'What if my boiler is old?',
    answer: 'We accept boilers up to 15 years old onto our service plans. Boilers over 15 years may be assessed on a case-by-case basis.'
  },
  {
    question: 'Are parts and labour really covered?',
    answer: 'On Complete Care, parts up to £100/year are covered. On Premium Care, all parts and labour are fully covered with no excess.'
  },
  {
    question: 'Do you service all boiler makes?',
    answer: 'Yes, our Gas Safe engineers are trained to service all major boiler brands including Worcester Bosch, Vaillant, Ideal, Baxi, and more.'
  },
  {
    question: 'When does coverage start?',
    answer: 'Coverage begins after your first service visit. We typically schedule this within 2 weeks of signing up.'
  },
  {
    question: 'What areas do you cover?',
    answer: 'We cover all of Greater Glasgow and surrounding areas including East Kilbride, Paisley, Bearsden, and more.'
  }
];

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

      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-sm mb-6 text-blue-200">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/boilers" className="hover:text-white transition">Boilers</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Service Plans</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 text-secondary" />
              <span>Plans from just £12/month</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Boiler Service Plans
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Protect your boiler and save money with our affordable service plans. Annual servicing, priority emergency cover, and exclusive discounts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
              >
                <Phone className="w-6 h-6" />
                Call to Join
              </a>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2"
              >
                Compare Plans
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Boiler Service Plan
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Simple, affordable plans designed to keep your heating system running smoothly all year round
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-slate-900 text-center">Basic Care</h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-primary">£12</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 mb-8 text-center">Essential boiler protection for peace of mind</p>

              <ul className="space-y-4 mb-8">
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

              <Link to="/contact" className="block text-center bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold transition">
                Choose Basic
              </Link>
            </div>

            <div className="relative bg-gradient-to-br from-secondary via-green-500 to-secondary-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                <Star className="w-4 h-4" />
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center pt-4">Complete Care</h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold">£18</span>
                <span className="text-green-100">/month</span>
              </div>
              <p className="text-green-100 mb-8 text-center">Comprehensive cover with emergency call-outs</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Everything in Basic, plus:</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>24/7 emergency call-outs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Parts covered up to £100/year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>10% discount on repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Central heating system check</span>
                </li>
              </ul>

              <Link to="/contact" className="block text-center bg-white hover:bg-slate-100 text-secondary py-4 rounded-xl font-semibold transition shadow-lg">
                Choose Complete
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-slate-900 text-center">Premium Care</h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-primary">£28</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 mb-8 text-center">Ultimate protection with full parts cover</p>

              <ul className="space-y-4 mb-8">
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

              <Link to="/contact" className="block text-center bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold transition">
                Choose Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose a Service Plan?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Protect your investment and enjoy worry-free heating all year round
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Save Money</h3>
                <p className="text-slate-600 text-sm">Spread the cost of annual servicing and save with member discounts.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Peace of Mind</h3>
                <p className="text-slate-600 text-sm">Never worry about boiler breakdowns. We'll keep your system running smoothly.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Priority Service</h3>
                <p className="text-slate-600 text-sm">Jump the queue with priority booking and faster emergency response.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Maintain Warranty</h3>
                <p className="text-slate-600 text-sm">Regular servicing keeps your boiler warranty valid. We take care of it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-slate-300">Getting started is quick and easy</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                <p className="text-sm">Choose your plan and sign up</p>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-slate-500" />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                <p className="text-sm">We schedule your first service</p>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-slate-500" />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                <p className="text-sm">Enjoy priority service all year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={servicePlanFaqs}
        title="Service Plan FAQs"
        description="Common questions about our boiler service plans in Glasgow."
      />

      <AreasWeCover
        title="Service Plans Throughout Glasgow"
        subtitle="Local engineers serving all areas of Greater Glasgow"
        accentColor="blue"
        bgColor="white"
      />

      <section className="py-12 md:py-16 bg-gradient-to-br from-secondary via-green-500 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Limited Time Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Today - First Month Just £1
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Sign up to Complete or Premium Care and get your first month for just £1
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white hover:bg-slate-100 text-secondary px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2"
            >
              Get Started Online
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
