import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Shield, Wrench, Clock, AlertCircle, Star, ArrowRight } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import FAQSection from '../components/FAQSection';
import AreasWeCover from '../components/AreasWeCover';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

const boilerCoverFaqs = [
  {
    question: 'What does boiler cover include?',
    answer: 'Our boiler cover plans include annual servicing, safety inspections, priority booking, and depending on your plan level, 24/7 emergency callouts with parts and labour included.'
  },
  {
    question: 'How quickly will an engineer respond in an emergency?',
    answer: 'With Complete Cover, we aim to respond to emergencies within 24 hours, often same-day. As a local Glasgow company, we can reach you faster than national providers.'
  },
  {
    question: 'Are there any hidden charges or excess fees?',
    answer: 'No. With our Complete Cover plan, there are no call-out charges, no excess fees, and parts and labour are fully included. What you see is what you pay.'
  },
  {
    question: 'Can I cancel my boiler cover plan?',
    answer: 'Yes, you can cancel at any time with 30 days notice. We believe in keeping customers through great service, not contracts.'
  },
  {
    question: 'Is my boiler eligible for cover?',
    answer: 'Most boilers under 15 years old are eligible. We may need to carry out an initial inspection for older boilers or those without recent service history.'
  },
  {
    question: 'Do you cover the whole central heating system?',
    answer: 'Our Complete Cover plan includes controls and thermostats. For full system cover including radiators and pipework, contact us for a bespoke quote.'
  }
];

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

      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-sm mb-6 text-blue-200">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/heating" className="hover:text-white transition">Heating</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Boiler Cover</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Protect Your Heating System</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Boiler Cover &<br className="hidden sm:block" /> Service Plans
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Comprehensive protection for your heating system. Annual servicing, priority repairs, and 24/7 emergency support from local Gas Safe registered engineers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Comprehensive Protection</h3>
                <p className="text-slate-600">Complete peace of mind with annual servicing, parts, and labour covered</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">24/7 Emergency Cover</h3>
                <p className="text-slate-600">Priority response when you need it most, day or night</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Gas Safe Engineers</h3>
                <p className="text-slate-600">All work carried out by qualified, experienced heating professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Boiler Cover Plans
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Choose the level of protection that suits your needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 sm:mb-0">Essential Cover</h3>
                  <div className="sm:text-right">
                    <div className="text-3xl font-bold text-primary">£15</div>
                    <div className="text-sm text-slate-600">per month</div>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Annual boiler service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Gas safety inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Priority booking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">10% discount on repairs</span>
                  </li>
                </ul>
                <Link to="/contact" className="block text-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-xl font-semibold transition">
                  Get Essential Cover
                </Link>
              </div>

              <div className="relative bg-gradient-to-br from-primary via-blue-600 to-primary-700 p-8 rounded-2xl text-white shadow-2xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                  <Star className="w-4 h-4" />
                  MOST POPULAR
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pt-4 text-center sm:text-left">
                  <h3 className="text-2xl font-bold mb-2 sm:mb-0">Complete Cover</h3>
                  <div className="sm:text-right">
                    <div className="text-3xl font-bold">£25</div>
                    <div className="text-sm text-blue-100">per month</div>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Everything in Essential, plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency callouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Parts and labour included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Annual safety certificates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Controls and thermostat cover</span>
                  </li>
                </ul>
                <Link to="/contact" className="block text-center bg-white hover:bg-slate-100 text-primary px-6 py-4 rounded-xl font-semibold transition shadow-lg">
                  Get Complete Cover
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Boiler Cover?</h2>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  Unlike national providers, we're local to Glasgow with engineers who can reach you quickly. No lengthy call centers, no excessive wait times. Just reliable, professional service when you need it most.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Local Glasgow-based engineers</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>No excess charges on callouts</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Direct contact with your engineer</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Flexible monthly payments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What's Included in Your Boiler Cover?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive protection to keep your heating running smoothly all year round
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mb-5">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Annual Boiler Service</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Keep your boiler running efficiently with a comprehensive annual service. Our Gas Safe engineers will check all components, clean key parts, and identify any potential issues before they become problems.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-slate-700">Full safety inspection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-slate-700">Efficiency testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-slate-700">Component cleaning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-slate-700">Written service report</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-600 rounded-xl flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Emergency Repairs</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  With Complete Cover, you're protected 24/7. No heating in winter? Hot water not working? We'll get an engineer to you as quickly as possible, with all parts and labour included in your plan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-slate-700">24/7 emergency helpline</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-slate-700">Priority response times</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-slate-700">Parts and labour included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-slate-700">No call-out charges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={boilerCoverFaqs}
        title="Boiler Cover FAQs"
        description="Common questions about our boiler cover and service plans in Glasgow."
      />

      <AreasWeCover
        title="Boiler Cover Throughout Glasgow"
        subtitle="Local engineers serving all areas of Greater Glasgow"
        accentColor="blue"
        bgColor="white"
      />

      <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-blue-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Boiler?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Get in touch today to discuss our boiler cover plans and find the right protection for your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white hover:bg-slate-100 text-primary px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2"
            >
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
