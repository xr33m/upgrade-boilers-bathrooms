import { Link } from 'react-router-dom';
import { Phone, Thermometer, Wind, Wrench, CheckCircle2, Flame, Droplets, Zap, ClipboardCheck, Calendar, Truck } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import GasSafeBadge from '../components/GasSafeBadge';
import EnhancedProcessSection from '../components/EnhancedProcessSection';
import RelatedServices from '../components/RelatedServices';
import { heatingRelatedServices } from '../lib/links';

export default function Heating() {
  return (
    <>
      <SEO
        title="Heating Services Glasgow | Central Heating Installation & Repairs"
        description="Professional heating services in Glasgow. Central heating installation, radiator repairs, underfloor heating, system upgrades. Gas Safe registered. Call 0141 123 4567"
        canonical={`${DOMAIN}/heating`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Heating Services",
          "Complete heating solutions including central heating installation, radiator repairs, underfloor heating systems, heat pump installation, power flushing, and heating system upgrades by Gas Safe registered engineers."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Heating Services", url: `${DOMAIN}/heating` }
        ])}
      />

      <section className="bg-gradient-to-br from-orange-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Heating Services in Glasgow
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Expert central heating installation, repairs and maintenance. Keep your home warm and comfortable with our professional heating services.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Our Heating Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-orange-500 transition">
                <Thermometer className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Central Heating Installation</h3>
                <p className="text-slate-700 mb-4">
                  Complete central heating system design and installation. We'll create an efficient heating solution tailored to your home's specific needs and layout.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Full system design and planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Energy-efficient radiator sizing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Smart heating controls</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-orange-500 transition">
                <Wind className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Radiator Services</h3>
                <p className="text-slate-700 mb-4">
                  Radiator installation, replacement, repairs and upgrades. From single radiator changes to complete property radiator replacement.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Designer radiator installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Radiator balancing and bleeding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Thermostatic valve fitting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-orange-500 transition">
                <Wrench className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Heating System Repairs</h3>
                <p className="text-slate-700 mb-4">
                  Fast diagnosis and repair of all heating system faults. From cold radiators to circulation problems, we'll get your heating working again.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Pump repairs and replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Valve repairs and upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>System leak detection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-orange-500 transition">
                <Thermometer className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Underfloor Heating</h3>
                <p className="text-slate-700 mb-4">
                  Underfloor heating design, installation and repair. Efficient, invisible heating that provides ultimate comfort throughout your home.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Electric and water-based systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>New builds and retrofits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Zone control systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Heating System Upgrades
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Upgrade your heating system for improved efficiency, comfort and control:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Smart Controls</h3>
                <p className="text-slate-600">Nest, Hive and other smart thermostats for complete control from your phone</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">System Flushing</h3>
                <p className="text-slate-600">Power flushing to remove sludge and improve heating efficiency by up to 25%</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Magnetic Filters</h3>
                <p className="text-slate-600">Protect your system and boiler from debris and extend equipment lifespan</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Specialist Heating Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Link to="/heating/gas-fire-repairs" className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-orange-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition">
                    <Flame className="w-8 h-8 text-orange-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-600 transition">Gas Fire Repairs & Servicing</h3>
                    <p className="text-slate-600">Professional gas fire repairs, annual servicing and installations for all makes and models.</p>
                  </div>
                </div>
                <span className="text-orange-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/heating/radiator-repairs" className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-blue-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition">
                    <Wind className="w-8 h-8 text-blue-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition">Radiator Repairs & Installation</h3>
                    <p className="text-slate-600">New radiators, designer models, repairs, balancing and thermostatic valve installation.</p>
                  </div>
                </div>
                <span className="text-blue-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/heating/power-flushing" className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-cyan-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-600 transition">
                    <Droplets className="w-8 h-8 text-cyan-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-600 transition">Power Flushing</h3>
                    <p className="text-slate-600">Professional system cleaning to remove sludge, improve efficiency and extend equipment life.</p>
                  </div>
                </div>
                <span className="text-cyan-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>

              <Link to="/heating/air-source-heat-pumps" className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-green-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition">
                    <Zap className="w-8 h-8 text-green-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-green-600 transition">Air Source Heat Pumps</h3>
                    <p className="text-slate-600">Renewable heating solutions with professional installation and servicing. Save up to 50% on bills.</p>
                  </div>
                </div>
                <span className="text-green-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border-2 border-orange-200 mt-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <GasSafeBadge size="medium" />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Gas Safe Registered Engineers</h3>
                  <p className="text-slate-700">All heating work carried out by fully qualified, Gas Safe registered professionals. Your safety is our priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices services={heatingRelatedServices} title="Explore Our Complete Heating Solutions" />

      <EnhancedProcessSection
        badgeText="4 EASY STEPS"
        title="Heating Solutions"
        titleHighlight="When You Need Them"
        steps={[
          {
            number: '1',
            icon: ClipboardCheck,
            title: '24/7 Emergency Call',
            description: 'Contact us anytime day or night for heating emergencies. Our team responds quickly to get your heating back on fast.'
          },
          {
            number: '2',
            icon: Calendar,
            title: 'Professional Diagnosis',
            description: 'Our Gas Safe engineers conduct a thorough inspection to identify the exact problem with your heating system.'
          },
          {
            number: '3',
            icon: Wrench,
            title: 'Clear Options & Quote',
            description: 'We explain the issue in plain language and provide a transparent fixed quote with all options presented clearly.'
          },
          {
            number: '4',
            icon: Truck,
            title: 'Expert Resolution',
            description: 'We complete the repair or installation professionally, test everything thoroughly, and ensure your system is safe and efficient.'
          }
        ]}
        brands={[
          { name: 'Worcester Bosch', logo: '/worcester-upgrade.webp' },
          { name: 'Vaillant', logo: '/vaillant_upgrade.webp' },
          { name: 'Wilo', logo: '/wilo_upgrade.webp' },
          { name: 'Potterton', logo: '/potterton_upgrade.webp' }
        ]}
        relatedServices={[
          { label: 'Emergency Plumber', path: '/emergency-plumber' },
          { label: 'Boiler Installation', path: '/boiler-installation' },
          { label: 'Boiler Repairs', path: '/boiler-repairs' },
          { label: 'Radiator Repairs', path: '/radiator-repairs' },
          { label: 'Underfloor Heating', path: '/underfloor-heating' }
        ]}
      />

      <section className="py-16 bg-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Heating Help?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            From new installations to emergency repairs, we're here to keep your home warm
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-orange-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
