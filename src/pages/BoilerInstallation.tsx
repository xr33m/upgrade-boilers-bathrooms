import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, TrendingDown, Shield, Calendar, Zap, ThermometerSun, PhoneCall, ClipboardCheck, Wrench, Truck } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import EnhancedProcessSection from '../components/EnhancedProcessSection';
import FAQSection from '../components/FAQSection';
import AreasWeCover from '../components/AreasWeCover';
import { boilerInstallationFaqs } from '../lib/links';

export default function BoilerInstallation() {
  return (
    <>
      <SEO
        title="Boiler Installation & Replacement Glasgow | Gas Safe Registered | Up to 12 Year Warranty"
        description="Professional boiler installation in Glasgow. Gas Safe registered engineers. Worcester Bosch, Ideal, Vaillant & Baxi installers. Up to 12 year warranties. Call 0141 123 4567"
        canonical={`${DOMAIN}/boilers/installation`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Boiler Installation",
          "Professional boiler installation services from Gas Safe registered engineers. Installations from Worcester Bosch, Ideal, Vaillant, and Baxi with up to 12 year warranties."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Boiler Services", url: `${DOMAIN}/boilers` },
          { name: "Boiler Installation", url: `${DOMAIN}/boilers/installation` }
        ])}
      />

      <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/boiler-install-upgrade.webp"
            alt="Boiler Installation Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-slate-900/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/boilers" className="hover:text-white">Boilers</Link>
              <span className="mx-2">/</span>
              <span>Installation</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Boiler Installation & Replacement in Glasgow
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-semibold">
              Gas Safe Registered Boiler Installers – Up to 12 Year Warranty Available
            </p>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              Looking for a reliable boiler installation in Glasgow? Whether your current boiler has broken down beyond repair or you're upgrading to a more energy-efficient system, Upgrade Boilers & Bathrooms provides professional boiler replacements across Glasgow and surrounding areas.
            </p>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              With over 20 years of experience, our fully qualified Gas Safe registered engineers install high-efficiency boilers safely, efficiently and in full compliance with UK regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
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
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  We specialise in:
                </h2>
                <ul className="space-y-3">
                  {[
                    'Combi boiler installation',
                    'System boiler installation',
                    'Regular (heat-only) boiler replacement',
                    'Boiler upgrades & conversions',
                    'Full central heating upgrades'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/boiler-upgrade.webp"
                  alt="Professional boiler installation services in Glasgow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Upgrade Your Boiler?
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              If your boiler is:
            </p>
            <ul className="space-y-2 mb-8 text-slate-700 bg-slate-50 p-6 rounded-lg">
              <li>• Over 10–15 years old</li>
              <li>• Breaking down frequently</li>
              <li>• No longer energy efficient</li>
              <li>• Struggling to provide consistent heating or hot water</li>
              <li>• Costing more in repairs each year</li>
            </ul>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              A new boiler installation could reduce energy bills, improve reliability and increase property value.
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-12">
              <p className="text-slate-800 font-semibold text-lg">
                Modern A-rated boilers operate at over 90% efficiency compared to older systems running at 60–70%.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg">
                <TrendingDown className="w-12 h-12 text-secondary mb-3" />
                <h3 className="text-xl font-bold mb-2">Lower Energy Bills</h3>
                <p className="text-slate-600">High-efficiency condensing boilers reduce wasted fuel.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">Increased Reliability</h3>
                <p className="text-slate-600">Reduced risk of breakdowns during winter.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <ThermometerSun className="w-12 h-12 text-accent mb-3" />
                <h3 className="text-xl font-bold mb-2">Improved Performance</h3>
                <p className="text-slate-600">Faster hot water and more consistent central heating.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <Calendar className="w-12 h-12 text-red-600 mb-3" />
                <h3 className="text-xl font-bold mb-2">Long Warranties</h3>
                <p className="text-slate-600">Up to 12 years depending on model selected.</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Boiler Types We Install in Glasgow
            </h2>

            <div className="space-y-8 mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/5691621/pexels-photo-5691621.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Combi boiler installation Glasgow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Combi Boilers</h3>
                    <p className="text-lg text-slate-700 mb-4">
                      Perfect for smaller homes and flats. Provides hot water on demand without a separate cylinder.
                    </p>
                    <p className="text-slate-700 font-semibold">
                      Ideal for: Flats, small to medium homes, properties with limited space
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">System Boilers</h3>
                    <p className="text-lg text-slate-700 mb-4">
                      Ideal for homes with higher hot water demand and multiple bathrooms.
                    </p>
                    <p className="text-slate-700 font-semibold">
                      Ideal for: Larger homes, multiple bathrooms, high hot water demand
                    </p>
                  </div>
                </div>
                <div>
                  <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/system-boiler-uprade.webp"
                      alt="System boiler installation Glasgow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/heat-only-boiler-upgrade.webp"
                      alt="Regular boiler installation Glasgow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Regular (Heat Only) Boilers</h3>
                    <p className="text-lg text-slate-700 mb-4">
                      Suitable for traditional heating systems with tanks in the loft.
                    </p>
                    <p className="text-slate-700 font-semibold">
                      Ideal for: Period properties, homes with low mains pressure, existing tank systems
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg mb-16">
              <p className="text-lg text-slate-800 leading-relaxed">
                Not sure which boiler suits your home? We provide honest advice based on property size, water pressure and household usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Accredited Boiler Installers – Top Brands Supplied
            </h2>
            <p className="text-xl text-slate-700 mb-8 text-center leading-relaxed">
              We install trusted and reliable boiler brands including:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { name: 'Worcester Bosch', desc: 'Market-leading reliability with extended warranties', logo: '/worcester-upgrade.webp' },
                { name: 'Ideal', desc: 'Trusted British manufacturing with great value', logo: '/ideal-logo.webp' },
                { name: 'Vaillant', desc: 'German engineering excellence', logo: '/vaillant_upgrade.webp' },
                { name: 'Baxi', desc: 'Affordable quality heating solutions', logo: '/Baxi-Large-Logo.webp' }
              ].map((brand, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 text-center">{brand.name}</h3>
                  <p className="text-slate-600 text-center text-sm">{brand.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-secondary text-white rounded-xl p-8 text-center">
              <p className="text-2xl font-bold">
                Accredited installations allow us to offer extended manufacturer warranties — up to 12 years depending on model.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/emergency-boiler-upgrade.webp"
                  alt="Emergency boiler replacement Glasgow"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Emergency Boiler Replacement Glasgow
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  If your boiler has completely failed and cannot be repaired, we can prioritise urgent boiler replacements across Glasgow.
                </p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  In many cases, we can install a new boiler within 24–48 hours, subject to availability.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg">
                  <p className="text-slate-800 font-medium mb-3">
                    If you're unsure whether your boiler needs repair or replacement, we also provide:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/boilers/repairs" className="text-primary hover:text-blue-800 font-semibold underline">
                        Boiler Repairs Glasgow
                      </Link>
                    </li>
                    <li>
                      <Link to="/boilers/servicing" className="text-primary hover:text-blue-800 font-semibold underline">
                        Annual Boiler Servicing Glasgow
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Boiler Installation for Homeowners & <Link to="/landlords" className="text-primary hover:text-blue-800 underline">Landlords</Link>
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              We provide boiler installation services for:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                'Residential properties',
                'Landlords & rental properties',
                'Property management companies',
                'HMOs'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">We can also combine installations with:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>
                  • <Link to="/landlords/gas-safety-certificates" className="text-primary hover:text-blue-800 underline">Gas Safety Certificates (CP12)</Link>
                </li>
                <li>• Central heating upgrades</li>
                <li>• Smart thermostat installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AreasWeCover
        title="Areas We Cover – Boiler Installation Glasgow"
        subtitle="We install boilers throughout Greater Glasgow and surrounding areas"
        accentColor="blue"
      />

      <FAQSection
        faqs={boilerInstallationFaqs}
        title="Boiler Installation Glasgow – FAQs"
        description="Common questions about boiler installation, warranties, financing, and our installation process."
        imageUrl="https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=800"
      />

      <EnhancedProcessSection
        badgeText="4 EASY STEPS"
        title="Boiler Installation"
        titleHighlight="Made Simple"
        steps={[
          {
            number: '1',
            icon: ClipboardCheck,
            title: 'Free Consultation & Survey',
            description: 'We visit your home to assess your heating needs, check available space, and recommend the best boiler model for your property.'
          },
          {
            number: '2',
            icon: Calendar,
            title: 'Fixed Quote & Planning',
            description: 'You\'ll receive a transparent quote with no hidden costs. We discuss the installation timeline and any preparatory work needed.'
          },
          {
            number: '3',
            icon: Wrench,
            title: 'Professional Installation',
            description: 'Our Gas Safe registered engineers complete the installation safely and efficiently, including system commissioning and testing.'
          },
          {
            number: '4',
            icon: Truck,
            title: 'Handover & Warranty',
            description: 'We explain how to use your new boiler, provide documentation, and register your warranty. You\'re fully supported going forward.'
          }
        ]}
        brands={[
          { name: 'Worcester Bosch', logo: '/worcester-upgrade.webp' },
          { name: 'Ideal', logo: '/ideal-logo.webp' },
          { name: 'Vaillant', logo: '/vaillant_upgrade.webp' },
          { name: 'Baxi', logo: '/Baxi-Large-Logo.webp' }
        ]}
        relatedServices={[
          { label: 'Boiler Repairs', path: '/boiler-repairs' },
          { label: 'Boiler Servicing', path: '/boiler-servicing' },
          { label: 'Power Flushing', path: '/power-flushing' },
          { label: 'Heating Engineer', path: '/heating-engineer' },
          { label: 'Boiler Cover Plans', path: '/boiler-cover' }
        ]}
      />

      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get a Quote for Boiler Installation in Glasgow
          </h2>
          <p className="text-xl mb-6 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If you're considering a boiler upgrade or need an urgent replacement, contact Upgrade Boilers & Bathrooms today.
          </p>
          <p className="text-2xl font-bold mb-8">Professional installation. Clear pricing. Gas Safe compliance. Long-term reliability.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Request Free Survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
