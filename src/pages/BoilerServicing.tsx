import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, AlertTriangle, Clock, ClipboardCheck, Calendar, Wrench, Truck } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import EnhancedProcessSection from '../components/EnhancedProcessSection';
import FAQSection from '../components/FAQSection';
import { boilerServicingFaqs } from '../lib/links';

export default function BoilerServicing() {
  return (
    <>
      <SEO
        title="Boiler Servicing Glasgow | Annual Boiler Service & Maintenance"
        description="Professional boiler servicing in Glasgow by Gas Safe engineers. Annual boiler services from £75. Maintain warranties, improve efficiency & safety. Book online or call 0141 123 4567"
        canonical={`${DOMAIN}/boilers/servicing`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Boiler Servicing",
          "Annual boiler servicing and maintenance by Gas Safe registered engineers. Regular boiler checks ensure safety, efficiency, and warranty compliance."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Boiler Services", url: `${DOMAIN}/boilers` },
          { name: "Boiler Servicing", url: `${DOMAIN}/boilers/servicing` }
        ])}
      />

      <section className="bg-gradient-to-br from-green-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-green-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/boilers" className="hover:text-white">Boilers</Link>
              <span className="mx-2">/</span>
              <span>Servicing</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Annual Boiler Servicing in Glasgow
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Keep your boiler running safely and efficiently with our professional annual servicing. Gas Safe registered engineers, comprehensive checks, and competitive prices from £75.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              Book Your Service
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">Essential Maintenance</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Why Service Your Boiler Annually?
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  An annual boiler service is essential for maintaining your heating system's safety, efficiency, and longevity. Regular servicing can prevent expensive breakdowns, reduce energy bills, and most importantly, keep your family safe from carbon monoxide risks.
                </p>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">90%</div>
                    <div className="text-slate-600 text-sm">of breakdowns are preventable with regular servicing</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-blue-200 rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src="https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional boiler servicing"
                  className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              <div className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-red-200 transition-all duration-300">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  <AlertTriangle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Safety First</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Identifies potential carbon monoxide leaks and safety hazards before they become dangerous.</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Maintain Warranty</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Most boiler warranties require annual servicing. Skip it and you could invalidate your warranty.</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Prevent Breakdowns</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Regular maintenance catches small issues before they become expensive repairs.</p>
              </div>
              <div className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                  <Shield className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Save Money</h3>
                <p className="text-slate-600 text-sm leading-relaxed">A well-maintained boiler runs more efficiently, reducing your energy bills by up to 10%.</p>
              </div>
            </div>

            
            </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">Transparent Pricing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Boiler Service Pricing
              </h2>
              <p className="text-lg text-slate-600">No hidden fees. Clear pricing. Quality service.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Standard Service</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">£75</span>
                  <span className="text-slate-500">one-time</span>
                </div>
                <ul className="space-y-3 mb-6 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>30+ point safety check</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Gas Safe certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Efficiency optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Written service report</span>
                  </li>
                </ul>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="block w-full text-center py-3 px-4 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition">
                  Book Now
                </a>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 shadow-xl text-white relative transform md:-translate-y-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">Service Plan</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">£12</span>
                  <span className="text-green-100">/month</span>
                </div>
                <ul className="space-y-3 mb-6 text-green-50">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Annual service included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Priority emergency callouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>No repair call-out fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Parts discount</span>
                  </li>
                </ul>
                <Link to="/boilers/service-plans" className="block w-full text-center py-3 px-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition">
                  View Plans
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Landlord Pack</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">£65</span>
                  <span className="text-slate-500">per property</span>
                </div>
                <ul className="space-y-3 mb-6 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Full boiler service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>CP12 Gas Safety Certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Digital records</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Multi-property discounts</span>
                  </li>
                </ul>
                <Link to="/landlords" className="block w-full text-center py-3 px-4 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-semibold mb-4">Comprehensive Checks</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's Included in Our Boiler Service?
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Our comprehensive boiler service includes over 30 safety checks and adjustments to ensure your boiler is running at peak performance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Visual Inspection</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>Boiler and controls check</li>
                  <li>Internal component inspection</li>
                  <li>Leak detection throughout</li>
                  <li>Flue and combustion analysis</li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Safety Testing</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>Carbon monoxide testing</li>
                  <li>Gas pressure checks</li>
                  <li>Safety device operation</li>
                  <li>Flow rate verification</li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Optimization</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>Efficiency optimization</li>
                  <li>Pressure adjustment</li>
                  <li>Condensate trap cleaning</li>
                  <li>Temperature calibration</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-bold">45-60 Minutes</div>
                  <div className="text-green-100">Average service time with minimal disruption</div>
                </div>
              </div>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-white text-green-900 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition">
                <Phone className="w-5 h-5" />
                Book Your Service
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="When to service your boiler"
                    className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-xl shadow-lg">
                    <Calendar className="w-8 h-8 mb-1" />
                    <div className="text-sm font-semibold">Best Time</div>
                    <div className="text-xs text-green-100">Late Summer</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  When Should You Service Your Boiler?
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  We recommend servicing your boiler once a year, ideally in late summer or early autumn before the heating season begins. This ensures your boiler is ready when you need it most.
                </p>
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
                  <h3 className="text-lg font-bold mb-3 text-amber-900 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Signs You Need Immediate Servicing
                  </h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Strange noises like banging, whistling or gurgling
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Yellow or orange flame instead of blue
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Unusual smells or soot marks around the boiler
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Boiler frequently losing pressure
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Increased energy bills without explanation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnhancedProcessSection
        badgeText="4 EASY STEPS"
        title="Boiler Servicing"
        titleHighlight="Made Easy"
        steps={[
          {
            number: '1',
            icon: ClipboardCheck,
            title: 'Schedule Your Service',
            description: 'Contact us to book your annual boiler service at a time that suits you best. We offer flexible appointment times to fit your schedule.'
          },
          {
            number: '2',
            icon: Calendar,
            title: 'Gas Safe Engineer Visit',
            description: 'Our Gas Safe registered engineer arrives with all necessary equipment to conduct a thorough and professional boiler inspection.'
          },
          {
            number: '3',
            icon: Wrench,
            title: 'Full System Check',
            description: 'We perform 30+ safety checks including carbon monoxide testing, efficiency measurement, and component cleaning for peak performance.'
          },
          {
            number: '4',
            icon: Truck,
            title: 'Service Report & Advice',
            description: 'You receive a detailed Gas Safe certificate and comprehensive report. We explain any findings and recommend next steps if needed.'
          }
        ]}
        brands={[
          { name: 'Worcester Bosch', logo: '/worcester-upgrade.webp' },
          { name: 'Ideal', logo: '/ideal-logo.webp' },
          { name: 'Vaillant', logo: '/vaillant_upgrade.webp' },
          { name: 'Baxi', logo: '/baxi-logo.svg' },
          { name: 'Potterton', logo: '/potterton_upgrade.webp' }
        ]}
        relatedServices={[
          { label: 'Boiler Repairs', path: '/boiler-repairs' },
          { label: 'Boiler Installation', path: '/boiler-installation' },
          { label: 'Gas Safety Certificates', path: '/gas-safety-certificates' },
          { label: 'Heating Engineer', path: '/heating-engineer' },
          { label: 'Boiler Cover Plans', path: '/boiler-cover' }
        ]}
      />

      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your Boiler Service Today
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Don't wait for a breakdown. Get your boiler serviced by Gas Safe engineers and enjoy peace of mind all year round.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-green-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-secondary hover:bg-secondary-600 px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white">
              Book Online
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={boilerServicingFaqs}
        title="Boiler Servicing Glasgow – FAQs"
        description="Common questions about annual boiler maintenance, costs, and why regular servicing is important."
        imageUrl="https://images.pexels.com/photos/8092390/pexels-photo-8092390.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </>
  );
}
