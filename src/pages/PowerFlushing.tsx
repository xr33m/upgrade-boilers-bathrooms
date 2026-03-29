import { Link } from 'react-router-dom';
import { Phone, Droplets, AlertCircle, CheckCircle2, AlertTriangle, Zap, Clock, DollarSign, Shield, Wrench, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { BUSINESS_INFO } from '../constants/business';

const powerFlushingFaqs = [
  {
    question: 'How do I know if I need a power flush?',
    answer: 'Cold spots, noisy pipes, discoloured water when bleeding radiators, and slow heat-up times are strong indicators that your system needs a power flush. We can assess your system with a free consultation.'
  },
  {
    question: 'Is power flushing messy?',
    answer: 'No — we use controlled equipment and protect surrounding areas. Your home remains clean throughout the process. We manage water disposal responsibly.'
  },
  {
    question: 'Will it fix all heating problems?',
    answer: 'If contamination is the cause, yes. However, if mechanical components like the pump or thermostat are faulty, additional work may be required. We diagnose the root cause first.'
  },
  {
    question: 'How long do results last?',
    answer: "With inhibitor treatment and proper maintenance, many years. Most systems don't require another power flush for 5–10 years if looked after with annual inhibitor top-ups."
  },
  {
    question: 'Do I need a magnetic filter after power flushing?',
    answer: 'Yes, we strongly recommend installing one. A magnetic filter captures residual sludge and protects your boiler for years to come. Many manufacturers now require them for warranty coverage.'
  },
  {
    question: 'Can power flushing damage my boiler?',
    answer: "No. Power flushing removes harmful sludge that damages boilers. By removing contamination, you're protecting your boiler investment. We assess compatibility beforehand."
  },
  {
    question: 'Should I power flush before a new boiler installation?',
    answer: 'Absolutely. Installing a new boiler into a contaminated system risks early failure and warranty voidance. We recommend flushing before any new boiler installation.'
  },
  {
    question: "What's the difference between power flushing and chemical flushing?",
    answer: 'Power flushing uses high-flow equipment for heavy contamination. Chemical flushing uses chemicals with standard circulation for lighter contamination. MagnaCleanse uses magnetic technology. We assess which is best for your system.'
  }
];

export default function PowerFlushing() {
  return (
    <>
      <SEO
        title="Central Heating Power Flushing Glasgow | Restore Boiler Efficiency"
        description="Professional central heating power flushing in Glasgow. Cold radiators, noisy boiler, low efficiency? Power flush removes sludge & protects your boiler. Call 07523 172416"
        canonical="https://upgradeboilersandbathrooms.com/heating/power-flushing"
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/heating" className="hover:text-white">Heating</Link>
              <span className="mx-2">/</span>
              <span>Power Flushing</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Central Heating Power Flushing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 font-semibold">
              Restore Heating Efficiency & Protect Your Boiler
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-lg text-blue-50 leading-relaxed">
                Are your radiators cold at the bottom? Is your boiler noisy or frequently faulting? Does your heating take ages to warm up?
              </p>
              <p className="text-lg text-blue-50 leading-relaxed">
                Upgrade Boilers & Bathrooms provide professional central heating power flushing services across Glasgow, helping homeowners restore system efficiency and prevent costly breakdowns.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              What Is a Power Flush?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Central heating power flushing system"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  A power flush is a specialist deep-cleaning process for your central heating system that removes harmful sludge, rust particles, debris, and limescale that accumulate over time.
                </p>
                <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Over time, heating systems collect:</p>
                  <ul className="space-y-3">
                    {[
                      'Sludge (iron oxide)',
                      'Rust particles',
                      'Debris',
                      'Limescale',
                      'Corrosion deposits'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary-50 rounded-xl p-6 border-2 border-blue-200">
                  <p className="text-slate-700 leading-relaxed">
                    This build-up restricts water flow, reduces radiator output and forces your boiler to work harder than it should. A power flush removes this contamination using high-flow, low-pressure equipment and specialist chemicals — restoring circulation and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Signs Your Heating System Needs Power Flushing
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Droplets, title: 'Radiators Cold at the Bottom', color: 'blue' },
                { icon: AlertTriangle, title: 'Some Radiators Not Heating at All', color: 'orange' },
                { icon: Droplets, title: 'Brown or Black Water When Bleeding', color: 'red' },
                { icon: AlertCircle, title: 'Gurgling or Banging Pipes', color: 'purple' },
                { icon: Zap, title: 'Frequent Boiler Lockouts', color: 'amber' },
                { icon: AlertTriangle, title: 'Boiler Overheating', color: 'red' },
                { icon: Clock, title: 'Slow Heat-Up Times', color: 'slate' },
                { icon: AlertCircle, title: 'Thermostat Needing Higher Settings', color: 'orange' }
              ].map((item, idx) => {
                const Icon = item.icon;
                const colorMap: Record<string, string> = {
                  blue: 'bg-primary-50 border-blue-200',
                  orange: 'bg-orange-50 border-orange-200',
                  red: 'bg-red-50 border-red-200',
                  purple: 'bg-primary-50 border-purple-200',
                  amber: 'bg-amber-50 border-amber-200',
                  slate: 'bg-slate-50 border-slate-200'
                };
                const colorMap2: Record<string, string> = {
                  blue: 'text-primary',
                  orange: 'text-accent',
                  red: 'text-red-600',
                  purple: 'text-primary-600',
                  amber: 'text-amber-600',
                  slate: 'text-slate-600'
                };
                return (
                  <div key={idx} className={`${colorMap[item.color]} rounded-lg p-6 border-2 shadow-lg flex items-start gap-4`}>
                    <Icon className={`w-6 h-6 ${colorMap2[item.color]} flex-shrink-0 mt-1`} />
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-lg text-slate-700 text-center bg-primary-50 rounded-xl p-6 border-2 border-blue-200">
              These are common signs of internal sludge build-up. If you notice any of these, contact us for a system assessment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              How Sludge Damages Your Heating System
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Sludge forms naturally through corrosion inside radiators and pipework. If left untreated, it can cause serious damage to your entire heating system.
                </p>
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">If left untreated, sludge can:</p>
                  <ul className="space-y-3">
                    {[
                      'Block radiator panels',
                      'Damage pump components',
                      'Block boiler heat exchangers',
                      'Reduce energy efficiency',
                      'Void boiler warranties',
                      'Cause costly breakdowns'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836791/pexels-photo-3836791.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Boiler system protection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Modern boilers, especially condensing models, have narrow heat exchangers that are highly sensitive to debris.</span> A power flush is essential maintenance to keep your boiler running efficiently and extend its lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Power Flushing Process
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'System Assessment',
                  description: 'We inspect your radiators, pipework and boiler condition.'
                },
                {
                  step: 2,
                  title: 'Connect Power Flush Machine',
                  description: 'A high-flow pump is connected to your system to begin the cleaning process.'
                },
                {
                  step: 3,
                  title: 'Add Cleaning Chemicals',
                  description: 'Specialist chemicals break down sludge and internal corrosion effectively.'
                },
                {
                  step: 4,
                  title: 'Flush Each Radiator Individually',
                  description: 'We isolate and flush each radiator to maximise debris removal and restore performance.'
                },
                {
                  step: 5,
                  title: 'Neutralise & Rinse',
                  description: 'System is thoroughly cleaned and neutralised to remove all residual chemicals.'
                },
                {
                  step: 6,
                  title: 'Add Inhibitor',
                  description: 'A corrosion inhibitor is added to protect the system long-term from future build-up.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-700 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
              <p className="text-lg text-slate-700 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span>
                  <span className="font-semibold">You'll often notice immediate improvements</span> in heat output and response times after the power flush is complete.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Power Flushing Timeline
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836930/pexels-photo-3836930.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Power flushing service duration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  The duration of a power flush depends on several factors that affect the complexity of the job.
                </p>
                <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Typically 4–8 hours depending on:</p>
                  <ul className="space-y-3">
                    {[
                      'Number of radiators',
                      'System size',
                      'Level of contamination',
                      'Pipe diameter (microbore systems can take longer)'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-slate-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700 font-semibold text-lg">Larger systems may take a full day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Pricing & Service Options
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  Power Flushing Cost
                </h3>
                <div className="bg-primary-50 rounded-lg p-6 mb-6 border border-blue-200">
                  <p className="text-4xl font-bold text-primary mb-2">£400–£800</p>
                  <p className="text-slate-700 text-sm">For a typical 3-bedroom property</p>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Cost depends on system size and contamination level. We provide clear quotations before starting any work.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-secondary" />
                  Not All Systems Need Full Flushing
                </h3>
                <p className="text-slate-700 mb-4 font-semibold">We assess your system first and only recommend the level of cleaning required.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4">MagnaCleanse</h4>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Professional magnetic filtration system combined with vibration technology to remove sludge at lower pressure.
                </p>
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                  Ideal for moderately contaminated systems.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-2xl font-bold text-primary">From £360</p>
                  <p className="text-slate-600 text-sm">depending on radiator count</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Chemical Flush</h4>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  A lighter treatment involving cleaning chemicals circulated without high flow rates.
                </p>
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                  Suitable for early-stage contamination.
                </p>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="text-2xl font-bold text-primary-600">From £180</p>
                  <p className="text-slate-600 text-sm">light system cleaning</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200 shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Cold Mains Flush</h4>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  A basic rinse-through using cold water supply.
                </p>
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                  Suitable for relatively clean systems.
                </p>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="text-2xl font-bold text-amber-600">From £110</p>
                  <p className="text-slate-600 text-sm">maintenance rinse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Power Flushing for Underfloor Heating
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Underfloor heating systems require specialist flushing techniques due to their unique design and zoning layouts.
                </p>
                <div className="bg-primary-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Underfloor heating considerations:</p>
                  <ul className="space-y-3">
                    {[
                      'Each loop must be flushed individually',
                      'Zoning layouts require special care',
                      'Microbore pipes are more delicate',
                      'Not all companies are equipped to do this correctly',
                      'We assess systems separately & advise accordingly'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836169/pexels-photo-3836169.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Underfloor heating system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Magnetic Boiler Filters
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Magnetic boiler filter system"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  If you're investing in system cleaning, it's highly recommended to install a magnetic filter to protect your investment.
                </p>
                <div className="bg-primary-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Magnetic filters:</p>
                  <ul className="space-y-3">
                    {[
                      'Capture residual sludge',
                      'Protect your boiler',
                      'Reduce future build-up',
                      'Extend system lifespan'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="font-semibold">Many modern boiler manufacturers now strongly recommend or require magnetic filtration.</span> This is especially important for Worcester Bosch, Ideal, and other premium brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Protecting Your Boiler Warranty
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                  Warranty Void Risks
                </h3>
                <p className="text-slate-700 mb-4 font-semibold">Boiler manufacturers such as Worcester Bosch and Ideal often require system cleaning and inhibitor treatment during installation.</p>
                <p className="text-slate-700 font-semibold mb-4">Failure to maintain system cleanliness can:</p>
                <ul className="space-y-3">
                  {[
                    'Invalidate warranty',
                    'Damage heat exchanger',
                    'Reduce boiler lifespan',
                    'Void manufacturer guarantees'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-secondary" />
                  Our Warranty Compliance
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  We ensure all cleaning work complies with manufacturer standards and maintains your boiler's warranty.
                </p>
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <p className="text-slate-700 font-semibold mb-3">Our approach includes:</p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    {[
                      'Full system assessment',
                      'Compliance documentation',
                      'Proper inhibitor treatment',
                      'Warranty protection advice'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              How Often Should You Power Flush?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Most systems require a power flush every 5–10 years depending on usage and system condition. Prevention is always better than repair.
                </p>
                <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Power flush frequency depends on:</p>
                  <ul className="space-y-3">
                    {[
                      'Water quality',
                      'System age',
                      'Maintenance frequency',
                      'Inhibitor levels'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-slate-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                  <p className="text-slate-700 font-semibold mb-4">We recommend:</p>
                  <ul className="space-y-3">
                    {[
                      'Inhibitor top-up every 2 years',
                      'Magnetic filter cleaning annually',
                      'Boiler servicing every year'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836791/pexels-photo-3836791.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Preventative boiler maintenance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
              <p className="text-slate-700 text-lg">
                <span className="font-semibold">Prevention reduces the need for repeat deep cleaning</span> and keeps your system running at peak efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Can Power Flushing Cause Leaks?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Rare Scenarios</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  In rare cases, flushing can expose existing weak pipework that was previously hidden.
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <p className="text-slate-700 font-semibold mb-2">Important to understand:</p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      If pipework is already severely corroded, cleaning may reveal hidden faults. We don't always know what condition older pipework is in beneath floors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Approach</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  We assess your system beforehand and explain any risks clearly before we begin work.
                </p>
                <ul className="space-y-3">
                  {[
                    'Pre-flush system inspection',
                    'Clear risk communication',
                    'Optional precautionary measures',
                    'Transparency about old pipework'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Power Flushing Before Installing a New Boiler
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836930/pexels-photo-3836930.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="New boiler installation with system flush"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  If you're installing a new boiler, flushing the system is often strongly recommended by manufacturers.
                </p>
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">A new boiler connected to a contaminated system can:</p>
                  <ul className="space-y-3">
                    {[
                      'Fail prematurely',
                      'Overheat',
                      'Void warranty',
                      'Suffer reduced efficiency'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700">
                  <span className="font-semibold">We frequently carry out system flushing alongside new boiler installations in Glasgow,</span> ensuring your new investment performs optimally from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Areas We Cover – Power Flushing Glasgow
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { area: 'Glasgow City Centre', postcodes: 'G1–G5' },
                { area: 'West End', postcodes: 'G11–G13' },
                { area: 'Southside', postcodes: 'G41–G46' },
                { area: 'Bearsden & Milngavie', postcodes: 'North Glasgow' },
                { area: 'East Kilbride', postcodes: 'South Lanarkshire' },
                { area: 'Paisley', postcodes: 'West of Glasgow' },
                { area: 'Greater Glasgow', postcodes: 'All surrounding areas' }
              ].map((location, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">{location.area}</p>
                    <p className="text-slate-600 text-sm">{location.postcodes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={powerFlushingFaqs}
        title="Power Flushing Glasgow – FAQs"
        description="Common questions about central heating power flushing, costs, and system maintenance in Glasgow."
      />

      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your Power Flushing Service
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If your heating system is underperforming or your boiler is working harder than it should, contact Upgrade Boilers & Bathrooms today. Restore performance. Protect your boiler. Improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
