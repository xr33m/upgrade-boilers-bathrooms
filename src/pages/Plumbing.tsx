import { Link } from 'react-router-dom';
import { Phone, Droplet, AlertCircle, Wrench, CheckCircle2, ClipboardCheck, Calendar, Truck } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import EnhancedProcessSection from '../components/EnhancedProcessSection';
import RelatedServices from '../components/RelatedServices';
import { plumbingRelatedServices } from '../lib/links';

export default function Plumbing() {
  return (
    <>
      <SEO
        title="Plumbing Services Glasgow | Emergency Plumber & Repairs"
        description="Expert plumbing services in Glasgow. 24/7 emergency plumber, leak repairs, pipe work, drain unblocking. Fast response. Call 0141 123 4567"
        canonical={`${DOMAIN}/plumbing`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Plumbing Services",
          "Professional plumbing services including 24/7 emergency repairs, leak detection and repair, pipe installations, tap repairs, toilet repairs, and complete plumbing solutions for homes and businesses."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Plumbing Services", url: `${DOMAIN}/plumbing` }
        ])}
      />

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-orange-400">Local</span> Plumber in Glasgow – 24/7 Repairs & Installations
            </h1>
            <p className="text-xl text-cyan-100 mb-6">
              Providing professional plumbing repairs, boiler servicing, emergency call-outs and bathroom plumbing across Glasgow and surrounding areas. Gas Safe registered engineers delivering fast response times and guaranteed workmanship.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold mb-4">Complete Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Plumbing Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Professional plumbing solutions for every need, from emergency repairs to planned installations.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <Link to="/plumbing/emergency-plumber" className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-red-500">
                <AlertCircle className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition">Emergency Plumber</h3>
                <p className="text-slate-700 mb-4">
                  24/7 emergency service. Fast 2-hour response for urgent plumbing problems.
                </p>
                <span className="text-red-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/plumbing/plumber-repairs" className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-cyan-500">
                <Wrench className="w-12 h-12 text-cyan-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition">Plumber Repairs</h3>
                <p className="text-slate-700 mb-4">
                  Professional repairs for leaks, pipes, drainage. 12-month guarantee.
                </p>
                <span className="text-cyan-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/plumbing/tap-repairs" className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-secondary">
                <Droplet className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">Tap Repairs</h3>
                <p className="text-slate-700 mb-4">
                  Fix dripping taps, mixer taps. Install new kitchen and bathroom taps.
                </p>
                <span className="text-primary font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/plumbing/toilet-repairs" className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-purple-500">
                <AlertCircle className="w-12 h-12 text-primary-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition">Toilet Repairs</h3>
                <p className="text-slate-700 mb-4">
                  Running toilets, blockages, leaks. Same-day service available.
                </p>
                <span className="text-primary-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/plumbing/hot-water-tanks" className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-orange-500">
                <Droplet className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition">Hot Water Tanks</h3>
                <p className="text-slate-700 mb-4">
                  Hot water cylinder installation. Unvented and vented systems.
                </p>
                <span className="text-accent font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/plumbing/cold-water-tanks" className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-secondary">
                <Droplet className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">Cold Water Tanks</h3>
                <p className="text-slate-700 mb-4">
                  Loft tank installation, replacement. Water regulations compliant.
                </p>
                <span className="text-primary font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/plumbing/cast-iron-pipes-drainage" className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-slate-600">
                <Wrench className="w-12 h-12 text-slate-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-slate-600 transition">Cast Iron Pipes</h3>
                <p className="text-slate-700 mb-4">
                  Cast iron drainage repair. Specialist services for older properties.
                </p>
                <span className="text-slate-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/plumbing/lead-pipe-replacement" className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-amber-600">
                <AlertCircle className="w-12 h-12 text-amber-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition">Lead Pipe Replacement</h3>
                <p className="text-slate-700 mb-4">
                  Safe removal of lead water pipes. Protect your family's health.
                </p>
                <span className="text-amber-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/plumbing/shower-repairs" className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-cyan-500">
                <Droplet className="w-12 h-12 text-cyan-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition">Shower Repairs</h3>
                <p className="text-slate-700 mb-4">
                  Fix leaking showers, low pressure, temperature problems.
                </p>
                <span className="text-cyan-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-semibold mb-4">Expert Solutions</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Common Plumbing Problems We Fix
                </h2>
                <p className="text-slate-300 mb-8">
                  From minor annoyances to major emergencies, our experienced plumbers diagnose and repair all common plumbing issues quickly and effectively.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">Dripping Taps</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">Low Water Pressure</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">Running Toilets</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">Blocked Drains</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">Water Hammer</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">Leaking Pipes</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional plumber fixing pipes"
                  className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Our Plumbing Services?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-cyan-200 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <AlertCircle className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Response</h3>
                <p className="text-slate-600">Same-day service available. Emergency plumbers on call 24/7.</p>
              </div>

              <div className="group text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fixed Right</h3>
                <p className="text-slate-600">Permanent repairs, not temporary patches. 12 month guarantee.</p>
              </div>

              <div className="group text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-green-200 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Clean & Tidy</h3>
                <p className="text-slate-600">We protect your property and clean up thoroughly after every job.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices services={plumbingRelatedServices} title="Explore All Our Plumbing & Heating Services" />

      <EnhancedProcessSection
        badgeText="4 EASY STEPS"
        title="Plumbing"
        titleHighlight="Done Right"
        steps={[
          {
            number: '1',
            icon: ClipboardCheck,
            title: 'Quick Assessment Call',
            description: 'Tell us about your plumbing issue and we\'ll schedule a convenient visit. For emergencies, we respond within 2 hours.'
          },
          {
            number: '2',
            icon: Calendar,
            title: 'Expert Investigation',
            description: 'Our experienced plumbers conduct a thorough inspection to identify the root cause and explain exactly what needs fixing.'
          },
          {
            number: '3',
            icon: Wrench,
            title: 'Transparent Fixed Quote',
            description: 'We provide upfront pricing before any work begins. Our well-stocked vans mean most jobs are completed on the first visit.'
          },
          {
            number: '4',
            icon: Truck,
            title: 'Complete & Clean',
            description: 'We finish the work to the highest standards, clean up properly, and ensure you\'re completely satisfied. 12-month guarantee included.'
          }
        ]}
        brands={[
          { name: 'Ideal', logo: '/ideal-logo.webp' },
          { name: 'Water Safe', logo: '/water-safe-logo.webp' }
        ]}
      />

      <section className="py-16 bg-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Plumber in Glasgow?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            From emergency leaks to planned work, our experienced plumbers are ready to help
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-cyan-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
