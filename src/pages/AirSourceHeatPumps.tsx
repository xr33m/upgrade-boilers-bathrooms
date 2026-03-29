import { Link } from 'react-router-dom';
import { Phone, Wind, CheckCircle2, Zap, TrendingDown, Leaf, AlertCircle, Home, Gauge, Droplet, Award } from 'lucide-react';
import SEO from '../components/SEO';
import AreasWeCover from '../components/AreasWeCover';
import FAQSection from '../components/FAQSection';
import { BUSINESS_INFO } from '../constants/business';

const heatPumpFaqs = [
  {
    question: 'Do heat pumps work in cold weather?',
    answer: 'Yes — modern systems operate effectively in Scottish winter temperatures. Air source heat pumps can extract usable heat even when outdoor temperatures are well below freezing.'
  },
  {
    question: 'How long does installation take?',
    answer: 'Typically 3–4 days depending on property size and system requirements. We keep disruption to a minimum and work efficiently to get your system running.'
  },
  {
    question: 'Do heat pumps replace boilers?',
    answer: 'In many cases, yes. They can fully replace gas boilers when correctly designed for your home. We assess this during your survey.'
  },
  {
    question: 'Do heat pumps need servicing?',
    answer: 'Yes — annual servicing keeps performance high and warranties valid. Like any mechanical system, regular maintenance ensures reliability and longevity.'
  },
  {
    question: 'Will my radiators need upgrading?',
    answer: 'Possibly. Heat pumps operate at lower temperatures than gas boilers. We assess this during your survey and advise on any upgrades needed.'
  },
  {
    question: 'How much does a heat pump installation cost?',
    answer: 'Costs vary depending on your property, existing system, and size. Government grants of up to £7,500 are available. We provide clear quotations after a survey.'
  },
  {
    question: 'Can I get a grant for a heat pump?',
    answer: 'Yes. The Boiler Upgrade Scheme (BUS) provides up to £7,500 towards installation. We can guide you through the application process.'
  },
  {
    question: 'How long do heat pumps last?',
    answer: 'Well-maintained heat pumps typically last 20–25 years, significantly longer than traditional boilers (10–15 years).'
  }
];

export default function AirSourceHeatPumps() {
  return (
    <>
      <SEO
        title="Air Source Heat Pump Installation & Service Glasgow | Energy Efficient"
        description="Professional air source heat pump installation and servicing in Glasgow. Renewable heating solutions, government grants available. MCS certified. Free survey. Call 07523 172416"
        canonical="https://upgradeboilersandbathrooms.com/heating/air-source-heat-pumps"
      />

      <section className="bg-gradient-to-br from-green-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-green-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/heating" className="hover:text-white">Heating</Link>
              <span className="mx-2">/</span>
              <span>Air Source Heat Pumps</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Air Source Heat Pump Installation & Servicing
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-6 font-semibold">
              Renewable Heating Specialists for Modern, Energy-Efficient Homes
            </p>
            <p className="text-lg text-green-50 mb-8 leading-relaxed max-w-2xl">
              Looking to reduce your energy bills and future-proof your home? Upgrade Boilers & Bathrooms provide professional air source heat pump installation and servicing across Glasgow and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Get Free Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              What Is an Air Source Heat Pump?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/9370169/pexels-photo-9370169.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Air source heat pump installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  An air source heat pump (ASHP) extracts heat from the outside air — even in cold Scottish temperatures — and transfers it into your home to provide:
                </p>
                <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200 mb-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="font-semibold">Central heating</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Droplet className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="font-semibold">Hot water</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="font-semibold">Consistent indoor comfort</span>
                    </li>
                  </ul>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Unlike gas boilers, heat pumps don't burn fuel. They use electricity to move heat rather than generate it — making them significantly more energy efficient.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Key Benefits</h3>
            <div className="grid md:grid-cols-5 gap-4 mb-16">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 shadow-lg text-center">
                <Leaf className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="font-bold text-slate-900 mb-2">Lower Carbon Emissions</p>
                <p className="text-sm text-slate-700">Reduces your household's carbon footprint significantly</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 shadow-lg text-center">
                <TrendingDown className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-slate-900 mb-2">Energy Efficiency</p>
                <p className="text-sm text-slate-700">300–400% efficient - 3–4kW heat per 1kW electricity</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200 shadow-lg text-center">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <p className="font-bold text-slate-900 mb-2">Government Incentives</p>
                <p className="text-sm text-slate-700">Grants and interest-free loans via Home Energy Scotland</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-200 shadow-lg text-center">
                <Gauge className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-bold text-slate-900 mb-2">Stable Heating</p>
                <p className="text-sm text-slate-700">Steady, consistent warmth rather than high bursts</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 shadow-lg text-center">
                <Wind className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <p className="font-bold text-slate-900 mb-2">Future-Proofing</p>
                <p className="text-sm text-slate-700">UK moves toward low-carbon heating targets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Heat Pump vs Gas Boiler — Choose Your Path
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <p className="text-sm text-slate-400 font-semibold mb-2">FEATURE</p>
                  <p className="font-bold text-white">Fuel Type</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <p className="text-sm text-slate-400 font-semibold mb-2">FEATURE</p>
                  <p className="font-bold text-white">Carbon Emissions</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <p className="text-sm text-slate-400 font-semibold mb-2">FEATURE</p>
                  <p className="font-bold text-white">Efficiency</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <p className="text-sm text-slate-400 font-semibold mb-2">FEATURE</p>
                  <p className="font-bold text-white">Running Temperature</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <p className="text-sm text-slate-400 font-semibold mb-2">FEATURE</p>
                  <p className="font-bold text-white">Future Regulations</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl p-6 border-2 border-red-700 shadow-lg">
                  <p className="text-xs text-red-200 font-bold uppercase tracking-wide mb-3">Gas Boiler</p>
                  <p className="font-semibold text-white">Natural Gas</p>
                </div>
                <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl p-6 border-2 border-red-700 shadow-lg">
                  <p className="text-xs text-red-200 font-bold uppercase tracking-wide mb-3">Gas Boiler</p>
                  <p className="font-semibold text-white">Higher</p>
                </div>
                <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl p-6 border-2 border-red-700 shadow-lg">
                  <p className="text-xs text-red-200 font-bold uppercase tracking-wide mb-3">Gas Boiler</p>
                  <p className="font-semibold text-white">~90%</p>
                </div>
                <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl p-6 border-2 border-red-700 shadow-lg">
                  <p className="text-xs text-red-200 font-bold uppercase tracking-wide mb-3">Gas Boiler</p>
                  <p className="font-semibold text-white">High Heat Bursts</p>
                </div>
                <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl p-6 border-2 border-red-700 shadow-lg">
                  <p className="text-xs text-red-200 font-bold uppercase tracking-wide mb-3">Gas Boiler</p>
                  <p className="font-semibold text-white">Phasing Out</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 border-2 border-green-500 shadow-lg">
                  <p className="text-xs text-green-100 font-bold uppercase tracking-wide mb-3">Heat Pump</p>
                  <p className="font-semibold text-white">Electricity</p>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 border-2 border-green-500 shadow-lg">
                  <p className="text-xs text-green-100 font-bold uppercase tracking-wide mb-3">Heat Pump</p>
                  <p className="font-semibold text-white">Much Lower</p>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 border-2 border-green-500 shadow-lg">
                  <p className="text-xs text-green-100 font-bold uppercase tracking-wide mb-3">Heat Pump</p>
                  <p className="font-semibold text-white">300–400%</p>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 border-2 border-green-500 shadow-lg">
                  <p className="text-xs text-green-100 font-bold uppercase tracking-wide mb-3">Heat Pump</p>
                  <p className="font-semibold text-white">Lower but Steady</p>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 border-2 border-green-500 shadow-lg">
                  <p className="text-xs text-green-100 font-bold uppercase tracking-wide mb-3">Heat Pump</p>
                  <p className="font-semibold text-white">Encouraged</p>
                </div>
              </div>
            </div>

            <p className="text-green-100 mt-8 text-center italic max-w-3xl mx-auto">
              Heat pumps operate at lower temperatures but run for longer — delivering steady, even heat throughout the home while significantly reducing carbon emissions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Glasgow Homeowners Are Switching to Heat Pumps
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern energy efficient home"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <div className="flex items-start gap-4">
                    <Leaf className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900 mb-2">Reduced Energy Bills</p>
                      <p className="text-slate-700">Save up to £500+ per year on heating compared to gas boilers</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900 mb-2">Government Support</p>
                      <p className="text-slate-700">Boiler Upgrade Scheme: up to £7,500 grant towards installation</p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-200">
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900 mb-2">Environmental Impact</p>
                      <p className="text-slate-700">Reduce household carbon footprint by up to 50%</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-50 p-6 rounded-xl border-2 border-purple-200">
                  <div className="flex items-start gap-4">
                    <Home className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900 mb-2">Future-Proof Investment</p>
                      <p className="text-slate-700">UK phasing out gas boilers – heat pumps are the future standard</p>
                    </div>
                  </div>
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
              Are Heat Pumps Suitable for Older Glasgow Homes?
            </h2>

            <p className="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
              Many properties in Glasgow — including tenements and traditional sandstone homes — can be suitable, but system design is crucial.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Factors We Assess</h3>
                <ul className="space-y-4">
                  {[
                    'Radiator sizing',
                    'Insulation levels',
                    'Pipework condition',
                    'Hot water cylinder compatibility',
                    'Available outdoor unit space'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Quick Suitability Check</h3>
                <div className="bg-white rounded-lg p-6 mb-4 border border-green-200">
                  <p className="text-slate-700 leading-relaxed">
                    <span className="font-bold">Simple Rule of Thumb:</span> If you turn your existing boiler down to 55°C and your home still heats comfortably, your radiators are likely suitable for a heat pump system.
                  </p>
                </div>
                <p className="text-slate-700 font-semibold text-center">
                  We carry out a full survey before recommending installation.
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
              What's Involved in a Heat Pump Installation?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836791/pexels-photo-3836791.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Heat pump installation process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Typical installation takes 3–4 days and includes:</p>
                  <ul className="space-y-3">
                    {[
                      'Removal or isolation of existing boiler (if replacing)',
                      'Installation of outdoor heat pump unit',
                      'Installation of compatible hot water cylinder',
                      'Pipework upgrades if required',
                      'Electrical connections',
                      'System commissioning & performance setup'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  We ensure the system is correctly sized and optimised for efficiency — not just fitted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Heat Pump Servicing Glasgow
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Just like a boiler, an air source heat pump requires annual servicing to ensure it runs safely and efficiently throughout its lifespan.
                </p>
                <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Regular servicing ensures:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>Efficiency remains high</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>Warranty remains valid</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>Early fault detection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>Safe operation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>Long lifespan</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg mb-6">
                  <p className="text-slate-700 mb-2 text-lg">Annual Heat Pump Service</p>
                  <p className="text-5xl font-bold text-secondary mb-2">£264</p>
                  <p className="text-slate-700 text-sm">Comprehensive annual maintenance and performance check</p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 border-2 border-blue-200">
                  <p className="text-slate-700 font-semibold mb-4">Service includes:</p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    {[
                      'Electrical connection checks',
                      'Refrigerant circuit inspection',
                      'System pressure testing',
                      'Filter cleaning',
                      'Outdoor unit inspection',
                      'Performance optimisation'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-primary flex-shrink-0" />
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

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Government Grants & Funding
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { title: 'Boiler Upgrade Scheme', desc: 'Up to £7,500 grant towards heat pump installation costs' },
                { title: 'Home Energy Scotland', desc: 'Interest-free loans for renewable heating improvements' },
                { title: 'Renewable Heat Incentive', desc: 'Additional support available for eligible properties' }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 border-2 border-amber-200 shadow-lg">
                  <Award className="w-8 h-8 text-amber-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">{item.title}</h3>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200 text-center">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold">We can guide you through the application process</span> and explain funding options during your survey. Let us help you access available support for your heat pump installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Choose Upgrade Boilers & Bathrooms?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Award, title: 'Experienced Heating Engineers', desc: 'Specialists in modern heat pump technology and installation' },
                { icon: CheckCircle2, title: 'Water Regulations Compliant', desc: 'All installations meet UK water supply regulations' },
                { icon: Zap, title: 'Clear System Design', desc: 'No guesswork – proper sizing for your home' },
                { icon: MapPin, title: 'Local Glasgow-Based Team', desc: 'Fast, reliable service in your area' },
                { icon: Leaf, title: 'Transparent Pricing', desc: 'No hidden costs, clear quotations upfront' },
                { icon: Home, title: 'Ongoing Support', desc: 'Servicing and maintenance throughout the year' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200">
                    <div className="flex items-start gap-4">
                      <Icon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-700">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-green-50 p-8 rounded-2xl border-2 border-green-200 text-center">
              <AlertCircle className="w-8 h-8 text-secondary mx-auto mb-4" />
              <p className="text-lg text-slate-700 font-semibold">
                Heat pumps are technical systems — correct sizing and installation makes all the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Water Regulations & Installation Standards
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3836930/pexels-photo-3836930.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Water regulations compliance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  We follow strict UK water supply regulations to ensure your heat pump system is safe, compliant, and protects both your home and water supply.
                </p>
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200">
                  <p className="text-slate-700 font-semibold mb-4">We ensure:</p>
                  <ul className="space-y-3">
                    {[
                      'Proper backflow prevention',
                      'System safety',
                      'Drinking water protection',
                      'Full regulatory compliance'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-700 text-sm mt-6 font-semibold">
                  Choosing a qualified installer protects both your home and water system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Is a Heat Pump Right for You?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Good Fit For Heat Pump
                </h3>
                <ul className="space-y-3">
                  {[
                    'You want to reduce carbon emissions',
                    'Upgrading from oil or electric heating',
                    'Renovating or improving insulation',
                    'Future-proofing against gas price volatility',
                    'Have suitable outdoor space'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  May Not Be Ideal If
                </h3>
                <ul className="space-y-3">
                  {[
                    'Property has very poor insulation',
                    'Radiator upgrades are not feasible',
                    'Limited outdoor space available',
                    'Budget constraints without government support',
                    'Uncertain about long-term commitment'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200 text-center">
              <p className="text-lg text-slate-700 font-semibold">
                We'll always provide honest advice following a survey. No pressure, just expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AreasWeCover
        title="Areas We Cover – Heat Pump Installation Glasgow"
        subtitle="Professional heat pump installation and servicing across Greater Glasgow"
        accentColor="green"
        bgColor="white"
      />

      <FAQSection
        faqs={heatPumpFaqs}
        title="Heat Pump FAQs"
        description="Common questions about air source heat pump installation, costs, and renewable heating in Glasgow."
      />

      <section className="py-12 md:py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Switch to Renewable Heating?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Book a free heat pump survey today. We'll assess your home, explain your options, and provide a clear, no-obligation quotation. Cleaner heating. Lower emissions. Future-ready homes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Get Free Survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
