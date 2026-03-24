import { Link } from 'react-router-dom';
import { Phone, Bath, Sparkles, Ruler, CheckCircle2, ClipboardCheck, Calendar, Wrench, Truck } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import WhyChooseUs from '../components/WhyChooseUs';
import EnhancedProcessSection from '../components/EnhancedProcessSection';
import RelatedServices from '../components/RelatedServices';
import { bathroomRelatedServices } from '../lib/links';

export default function BathroomInstallations() {
  return (
    <>
      <SEO
        title="Bathroom Installation Glasgow | Complete Bathroom Fitting Services"
        description="Professional bathroom installations in Glasgow. Complete design, supply and fitting service. Showers, wet rooms, suites. Free design consultation. Call 0141 123 4567"
        canonical={`${DOMAIN}/bathroom-installations`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Bathroom Installation Services",
          "Complete bathroom installation and design services including modern and traditional bathroom suites, shower installations, wet rooms, and full bathroom renovations with professional fitting."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Bathroom Installations", url: `${DOMAIN}/bathroom-installations` }
        ])}
      />

      <section className="bg-gradient-to-br from-purple-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bathroom Installations in Glasgow
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Transform your bathroom with our complete design, supply and installation service. From contemporary wet rooms to traditional family bathrooms.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Complete Bathroom Solutions
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              We handle every aspect of your bathroom project, from initial design through to final installation. Our experienced team will create the perfect bathroom for your home and lifestyle.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-purple-500 transition">
                <Ruler className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Design & Planning</h3>
                <p className="text-slate-700 mb-4">
                  Free design consultation and 3D planning. We'll help you choose the perfect layout, fixtures and finishes for your space and budget.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Free home surveys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>3D bathroom design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Expert product advice</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-purple-500 transition">
                <Bath className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Full Installation</h3>
                <p className="text-slate-700 mb-4">
                  Complete bathroom fitting including plumbing, tiling, electrics, plastering and decorating. One team, one project manager, no hassle.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>All trades coordinated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Guaranteed timescales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>12 month guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Full Bathroom Suite Installation Glasgow
                </h2>
                <p className="text-lg text-slate-700 mb-4">
                  Our complete bathroom suite installations cover everything from removing your old bathroom to installing a brand new suite with modern fixtures and fittings. With over 14 years of experience, we have fitted hundreds of bathrooms across Glasgow to the highest standards.
                </p>
                <p className="text-slate-700 mb-4">
                  We work with leading bathroom suppliers to offer you a wide range of suite options to match any budget. Each installation includes professional plumbing work, all waste and water connections, full testing, and certification where required.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Complete removal of existing bathroom suite</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Installation of bath, toilet, basin and all sanitaryware</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">All plumbing and waste connections certified</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Usually completed within 5-7 days</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern bathroom suite installation"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury wet room installation"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  What is a Wet Room and Should You Get One?
                </h2>
                <p className="text-lg text-slate-700 mb-4">
                  A wet room is a fully waterproofed bathroom space with a walk-in shower area that has no step or shower tray. The entire floor is tanked and gently slopes towards a central drain. Wet rooms have become increasingly popular in Glasgow homes for their contemporary look and accessibility benefits.
                </p>
                <p className="text-slate-700 mb-4">
                  Our wet room installations use professional waterproofing systems that are guaranteed for 25 years. We're experienced with both new build wet rooms and converting existing bathrooms. The process involves specialist tanking membranes, precise floor leveling, and careful drainage installation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Professional tanking with 25-year guarantee</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Creates more space in smaller bathrooms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Perfect for accessibility and mobility needs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Modern, minimalist design aesthetic</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Professional Shower Installation Services
                </h2>
                <p className="text-lg text-slate-700 mb-4">
                  Whether you need a new electric shower installed, want to upgrade to a thermostatic mixer shower, or require a complete shower enclosure, our qualified plumbers handle all types of shower installations across Glasgow. We're experienced with all major shower brands and can recommend the best solution for your water pressure and bathroom layout.
                </p>
                <p className="text-slate-700 mb-4">
                  Electric showers are ideal for homes with low water pressure as they heat water on demand. Mixer showers provide excellent flow rates and consistent temperatures. Power showers deliver spa-like experiences with high pressure jets. We'll assess your system and recommend the most suitable option.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Electric, mixer, and power shower installations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Custom glass shower enclosures and screens</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Digital and smart shower systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Advice on best shower type for your water system</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.pexels.com/photos/4498220/pexels-photo-4498220.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern shower installation with glass enclosure"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bathroom wall and floor tiling"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Expert Bathroom Tiling Services in Glasgow
                </h2>
                <p className="text-lg text-slate-700 mb-4">
                  Quality tiling can make or break a bathroom installation. Our experienced tilers have completed thousands of bathroom tiling projects across Glasgow, working with ceramic, porcelain, natural stone, and large format tiles. We ensure perfect alignment, consistent grout lines, and proper waterproofing behind all wet areas.
                </p>
                <p className="text-slate-700 mb-4">
                  We can tile walls, floors, shower enclosures, and create bespoke features like tiled niches and borders. All tiling work includes proper surface preparation, waterproof backing boards where needed, and high-quality adhesives and grouts suitable for bathroom environments.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Wall and floor tiling with precision finish</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Large format, ceramic, porcelain, and natural stone</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Waterproof backing and professional grouting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Mosaic features and bespoke designs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  How Long Does a Bathroom Installation Take?
                </h2>
                <p className="text-lg text-slate-700 mb-4">
                  A typical full bathroom installation takes between 5-7 working days from start to finish. This includes removing the old bathroom, any necessary plumbing alterations, tiling, installation of the new suite, and final finishing. Larger or more complex bathrooms, such as wet rooms or bathrooms requiring structural changes, may take 8-10 days.
                </p>
                <p className="text-slate-700 mb-4">
                  We provide a detailed schedule before work begins so you know exactly what to expect each day. Our team works efficiently to minimize disruption to your home while never compromising on quality. Most clients are able to use a second toilet during the installation, but we can work with you to find solutions if this isn't possible.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="font-semibold text-slate-900 mb-2">What affects installation time?</p>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Size of bathroom and complexity of design</li>
                    <li>• Amount of tiling required</li>
                    <li>• Whether plumbing needs relocating</li>
                    <li>• Wet room installations (require longer drying times)</li>
                    <li>• Any structural or electrical work needed</li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bathroom installation in progress"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Compact ensuite bathroom"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  En-Suite and Cloakroom Installations
                </h2>
                <p className="text-lg text-slate-700 mb-4">
                  Smaller bathrooms like en-suites and cloakrooms require careful planning to maximize every inch of space. We specialize in creating functional, stylish small bathrooms that don't feel cramped. From space-saving toilets and compact basins to clever storage solutions, we'll design a small bathroom that works perfectly for your needs.
                </p>
                <p className="text-slate-700 mb-4">
                  En-suite bathrooms add significant value to your home and provide convenient private facilities. We can install en-suites in even the smallest bedroom spaces, handling all the plumbing connections, drainage, ventilation, and electrics required. Cloakrooms and downstairs toilets are essential for family homes and we have extensive experience fitting these compact spaces.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Space-saving fixtures and smart storage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">All plumbing and electrical work included</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Ventilation and building regulation compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Installation Process
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Free Design Consultation</h3>
                  <p className="text-slate-700">We visit your home to measure up, discuss your requirements, and show you design options. This service is completely free with no obligation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design & Quote</h3>
                  <p className="text-slate-700">We create a detailed 3D design and provide a fixed-price quote covering all materials and labor. No hidden costs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Schedule & Prepare</h3>
                  <p className="text-slate-700">Once you're happy with the design and price, we order materials and schedule your installation for a convenient date.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                  <p className="text-slate-700">Our team completes your bathroom to the highest standards. Most bathrooms are finished within 5-7 days.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Final Inspection & Handover</h3>
                  <p className="text-slate-700">We walk through your new bathroom with you, ensure everything works perfectly, and provide care and maintenance advice.</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-3 text-purple-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                Why Choose Us for Your Bathroom?
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Over 14 years experience in bathroom installations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Fully qualified plumbers, tilers and electricians</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Fixed prices with no hidden extras</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Access to trade prices on all bathroom products</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive 12 month guarantee on all work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <RelatedServices services={bathroomRelatedServices} title="Related Plumbing & Heating Services" />

      <EnhancedProcessSection
        badgeText="4 EASY STEPS"
        title="Bathroom Transformation"
        titleHighlight="From Start to Finish"
        steps={[
          {
            number: '1',
            icon: ClipboardCheck,
            title: 'Free Design Consultation',
            description: 'We visit to understand your vision, assess your space, and discuss budget. We provide expert design recommendations and product options.'
          },
          {
            number: '2',
            icon: Calendar,
            title: 'Transparent Fixed Quote',
            description: 'You receive a detailed quote including all labour, materials, fixtures, and the complete timeline with no hidden costs.'
          },
          {
            number: '3',
            icon: Wrench,
            title: 'Expert Installation',
            description: 'Our skilled team of plumbers, electricians, and tilers works efficiently to create your bathroom with minimal disruption to your home.'
          },
          {
            number: '4',
            icon: Truck,
            title: 'Final Inspection & Handover',
            description: 'We conduct thorough quality checks, explain all features and fixtures, and ensure everything is perfect. Backed by our 12-month guarantee.'
          }
        ]}
        brands={[
          { name: 'Ideal Standard', logo: '/ideal-logo.webp' },
          { name: 'Water Safe', logo: '/water-safe-logo.webp' }
        ]}
      />

      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Dream Bathroom?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Book your free design consultation today and let's start planning your perfect bathroom
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
