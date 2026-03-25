import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';
import ProcessSection from '../components/ProcessSection';

export default function PlumberBearsden() {
  return (
    <>
      <SEO
        title="Plumber in Bearsden | Emergency Plumbing Services in North Glasgow"
        description="Professional plumber serving Bearsden, Milngavie, Mugdock and North Glasgow. 24/7 emergency repairs, boiler services, bathroom installations. Call 07523 172416"
        canonical="https://upgradeboilersandbathrooms.com/areas/plumber-bearsden"
      />

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in Bearsden
            </h1>
            <p className="text-xl text-cyan-100 mb-6">
              Professional plumbing and heating services throughout Bearsden, Milngavie, Mugdock and North Glasgow. Fast response times for emergency and routine work.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Serving Bearsden and Surrounding Areas</h2>
                  <p className="text-slate-700 mb-4">
                    We provide comprehensive plumbing services throughout Bearsden, including Milngavie, Mugdock, Torrance, Clober and all surrounding North Glasgow properties. Whether you need emergency repairs or planned work, our local plumbers are ready to help.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Plumbing Services for Bearsden Homes and Businesses
              </h2>
              <p className="text-slate-700 mb-8 leading-relaxed">
                Bearsden is known for its quality residential properties, including modern homes and substantial family properties. Our plumbers have extensive experience with the type of plumbing systems found in Bearsden properties, from up-to-date boiler installations to complex heating systems. We serve homeowners throughout Milngavie, Mugdock, and the surrounding North Glasgow areas.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                  <AlertCircle className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">24/7 Emergency Plumbing</h3>
                  <p className="text-slate-700 mb-4">
                    Emergency burst pipes or flooding in Bearsden? Our rapid-response plumbers are available day and night throughout North Glasgow.
                  </p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                  <Wrench className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Boiler and Heating</h3>
                  <p className="text-slate-700 mb-4">
                    Gas Safe registered engineers for boiler installation, servicing, and repairs throughout Bearsden, Milngavie and Mugdock.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-bold transition">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Common Plumbing Issues in Bearsden
            </h2>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Boiler Servicing and Repairs</h3>
                  <p className="text-slate-600">Regular boiler maintenance in Bearsden properties ensures efficient heating throughout North Glasgow. We're Gas Safe registered for all work.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Heating System Issues</h3>
                  <p className="text-slate-600">Radiator problems, low heating pressure, or complete system upgrades across Bearsden, Milngavie and surrounding areas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Bathroom Renovations</h3>
                  <p className="text-slate-600">Complete bathroom plumbing solutions from design to installation in Bearsden's modern homes and properties in Mugdock and Milngavie.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Water Supply Issues</h3>
                  <p className="text-slate-600">Low pressure, leaks, or complex water system issues affecting Bearsden properties. We diagnose and resolve quickly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Drainage Solutions</h3>
                  <p className="text-slate-600">Blocked drains, drain repairs, and drain cleaning services across Bearsden, Milngavie, Mugdock and North Glasgow.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Our Bearsden Plumbers?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Local Knowledge</h3>
                <p className="text-slate-600">We know Bearsden properties and understand the specific plumbing needs of homes in Milngavie and Mugdock.</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-slate-600">Quick response to emergencies across Bearsden, Milngavie and surrounding North Glasgow areas, 24/7.</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gas Safe Certified</h3>
                <p className="text-slate-600">All boiler and heating work carried out by Gas Safe registered engineers in Bearsden and surrounding areas.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl border-2 border-cyan-200 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Service Coverage - Bearsden and North Glasgow</h3>
              <p className="text-slate-700 mb-4">
                Our plumbers regularly serve properties throughout the Bearsden area:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div>
                  <p className="mb-2">• Bearsden</p>
                  <p className="mb-2">• Milngavie</p>
                  <p className="mb-2">• Mugdock</p>
                  <p className="mb-2">• Torrance</p>
                </div>
                <div>
                  <p className="mb-2">• Clober</p>
                  <p className="mb-2">• Summerston</p>
                  <p className="mb-2">• Maryhill</p>
                  <p className="mb-2">• Anniesland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection
        title="How Upgrade Boilers & Bathrooms Serves Bearsden"
        subtitle="Fast, professional plumbing and heating service for Bearsden, Milngavie, Mugdock and North Glasgow"
        steps={[
          {
            step: 1,
            title: 'Call for Help',
            description: 'Contact us for emergency or planned work in Bearsden. We respond rapidly throughout North Glasgow including Milngavie and Mugdock.'
          },
          {
            step: 2,
            title: 'Expert Assessment',
            description: 'Our skilled Bearsden plumbers and engineers thoroughly assess your issue and explain the best solution for your home.'
          },
          {
            step: 3,
            title: 'Fixed Price Quote',
            description: 'Clear, transparent pricing upfront with no surprises. Most jobs completed on the first visit with our fully-stocked vans.'
          },
          {
            step: 4,
            title: 'Complete & Guaranteed',
            description: 'Professional workmanship with thorough cleanup. Every job backed by our 12-month guarantee across Bearsden and North Glasgow.'
          }
        ]}
        relatedServices={[
          { label: 'Boiler Services', path: '/boilers' },
          { label: 'Heating Systems', path: '/heating' },
          { label: 'Emergency Plumber', path: '/emergency-plumber' },
          { label: 'Bathroom Installations', path: '/bathroom-installations' },
          { label: 'Tap & Toilet Repairs', path: '/tap-repairs' }
        ]}
      />

      <section className="py-16 bg-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Plumber in Bearsden, Milngavie or North Glasgow?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Contact our Bearsden plumbers today for emergency repairs or routine work
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
