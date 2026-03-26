import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Shield, AlertTriangle, Clock, ClipboardCheck, Calendar, Wrench, Truck } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import EnhancedProcessSection from '../components/EnhancedProcessSection';
import FAQSection from '../components/FAQSection';
import { boilerServicingFaqs } from '../lib/links';
import GasSafeInline from '../components/GasSafeInline';

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
              Keep your boiler running safely and efficiently with our professional annual servicing. <span className="inline-flex items-center gap-1.5"><GasSafeInline size="sm" className="brightness-0 invert" /> Gas Safe registered</span> engineers, comprehensive checks, and competitive prices from £75.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              Book Your Service
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Service Your Boiler Annually?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              An annual boiler service is essential for maintaining your heating system's safety, efficiency, and longevity. Regular servicing can prevent expensive breakdowns, reduce energy bills, and most importantly, keep your family safe from carbon monoxide risks.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <AlertTriangle className="w-12 h-12 text-red-600 mb-3" />
                <h3 className="text-xl font-bold mb-2 text-red-900">Safety First</h3>
                <p className="text-slate-700">Annual servicing identifies potential carbon monoxide leaks and other safety hazards before they become dangerous.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <CheckCircle2 className="w-12 h-12 text-secondary mb-3" />
                <h3 className="text-xl font-bold mb-2 text-green-900">Maintain Warranty</h3>
                <p className="text-slate-700">Most boiler warranties require annual servicing. Skip it and you could invalidate your warranty.</p>
              </div>
              <div className="bg-primary-50 border border-blue-200 p-6 rounded-lg">
                <Clock className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2 text-blue-900">Prevent Breakdowns</h3>
                <p className="text-slate-700">Regular maintenance catches small issues before they become expensive repairs or complete system failures.</p>
              </div>
              <div className="bg-primary-50 border border-purple-200 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-primary-600 mb-3" />
                <h3 className="text-xl font-bold mb-2 text-primary-900">Save Money</h3>
                <p className="text-slate-700">A well-maintained boiler runs more efficiently, reducing your energy bills by up to 10%.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What's Included in Our Boiler Service?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Our comprehensive boiler service includes over 30 safety checks and adjustments to ensure your boiler is running at peak performance:
            </p>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Visual inspection of boiler and controls</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Flue and combustion analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Gas pressure and flow rate checks</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Carbon monoxide testing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Safety device operation testing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Boiler efficiency optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Internal component inspection</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Pressure and temperature checks</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Condensate trap cleaning</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">System pressure adjustment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Leak detection throughout system</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-slate-700">Gas Safe certification provided</span>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Service Takes Just 45-60 Minutes</h3>
              <p className="text-slate-700">
                Our experienced engineers complete most boiler services within an hour, causing minimal disruption to your day. We'll provide a detailed service report and explain any issues or recommendations.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              When Should You Service Your Boiler?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              We recommend servicing your boiler once a year, ideally in late summer or early autumn before the heating season begins. This ensures your boiler is ready when you need it most and gives you time to address any issues before the cold weather arrives.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-3 text-amber-900 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Signs Your Boiler Needs Immediate Servicing
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Strange noises like banging, whistling or gurgling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Yellow or orange flame instead of blue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Unusual smells or soot marks around the boiler</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Boiler frequently losing pressure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Increased energy bills without explanation</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Boiler Service Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Standard Service</h3>
                <div className="text-4xl font-bold text-primary mb-4">£75</div>
                <p className="text-slate-600 mb-4">Comprehensive annual service with Gas Safe certificate</p>
              </div>
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">Service Plan</h3>
                <div className="text-4xl font-bold text-secondary mb-4">£12/mo</div>
                <p className="text-slate-600 mb-4">Annual service plus priority emergency cover</p>
                <Link to="/boilers/service-plans" className="text-secondary font-semibold hover:underline">View plans →</Link>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Landlord Pack</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">£65</div>
                <p className="text-slate-600 mb-4">Service + CP12 Gas Safety Certificate</p>
                <Link to="/landlords" className="text-primary-600 font-semibold hover:underline">Learn more →</Link>
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
