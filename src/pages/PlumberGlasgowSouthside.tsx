import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';
import ProcessSection from '../components/ProcessSection';

export default function PlumberGlasgowSouthside() {
  return (
    <>
      <SEO
        title="Plumber Glasgow Southside | Emergency Repairs in Pollokshaws, Giffnock, Clarkston"
        description="Professional plumber serving Glasgow Southside including Pollokshaws, Giffnock, Clarkston, Busby and surrounding areas. 24/7 emergency service. Call 07523 172416"
        canonical="https://upgradeboilersandbathrooms.com/areas/plumber-glasgow-southside"
      />

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in Glasgow Southside
            </h1>
            <p className="text-xl text-cyan-100 mb-6">
              Professional plumbing services throughout Glasgow Southside, including Pollokshaws, Giffnock, Clarkston, Busby, Stamperland and surrounding areas. 24/7 emergency response available.
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
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Areas We Serve in Glasgow Southside</h2>
                  <p className="text-slate-700 mb-4">
                    We provide plumbing services throughout Glasgow's southside including Pollokshaws, Giffnock, Clarkston, Busby, Stamperland, Newton Mearns, Williamwood, Cathcart and all surrounding residential and commercial properties.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Plumbing Services for Glasgow Southside Homes
              </h2>
              <p className="text-slate-700 mb-8 leading-relaxed">
                Whether you're in a traditional Glasgow Southside Victorian terrace or a modern Busby bungalow, our plumbers understand the unique requirements of homes across the south side of Glasgow. From Pollokshaws period properties to Newton Mearns newer builds, we have the expertise to handle any plumbing challenge.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                  <AlertCircle className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">24/7 Emergency Plumbing - Southside</h3>
                  <p className="text-slate-700 mb-4">
                    Burst pipes in Clarkston? Flooding in Giffnock? Our emergency plumbers respond rapidly throughout Glasgow Southside.
                  </p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                  <Wrench className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Maintenance & Repairs</h3>
                  <p className="text-slate-700 mb-4">
                    Regular plumbing maintenance, leak repairs, and upgrades for properties across Pollokshaws, Busby, Stamperland and Newton Mearns.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-bold transition">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Common Plumbing Issues in Glasgow Southside
            </h2>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Aging Pipes in Victorian Properties</h3>
                  <p className="text-slate-600">Many Pollokshaws and Cathcart homes have old cast iron pipes that require specialist assessment and replacement. We offer safe, compliant solutions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Water Pressure Issues</h3>
                  <p className="text-slate-600">Many Southside properties experience low water pressure. We diagnose and fix issues throughout Giffnock, Clarkston, Busby and surrounding areas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Heating System Issues</h3>
                  <p className="text-slate-600">Combined with plumbing work, we offer boiler and heating solutions across Glasgow Southside including Stamperland and Newton Mearns.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Bathroom Plumbing</h3>
                  <p className="text-slate-600">From small tap repairs to complete bathroom renovations in Clarkston, Busby and Giffnock properties, we handle all aspects.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Drain and Sewer Work</h3>
                  <p className="text-slate-600">Blocked drains affecting Southside properties? We provide rapid unblocking services across Pollokshaws, Giffnock, and surrounding areas.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Us for Plumbing in Glasgow Southside?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Local to Southside</h3>
                <p className="text-slate-600">We know Glasgow Southside properties inside out, from Pollokshaws terraces to Newton Mearns homes.</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
                <p className="text-slate-600">2-hour emergency response across Giffnock, Clarkston, Busby and all Southside areas, 24/7.</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">12-Month Guarantee</h3>
                <p className="text-slate-600">All work backed by our 12-month workmanship guarantee across all Southside locations.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl border-2 border-cyan-200 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Service Coverage Throughout Glasgow Southside</h3>
              <p className="text-slate-700 mb-4">
                Our plumbers regularly serve properties across Glasgow Southside including:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div>
                  <p className="mb-2">• Pollokshaws</p>
                  <p className="mb-2">• Giffnock</p>
                  <p className="mb-2">• Clarkston</p>
                  <p className="mb-2">• Busby</p>
                  <p className="mb-2">• Stamperland</p>
                </div>
                <div>
                  <p className="mb-2">• Newton Mearns</p>
                  <p className="mb-2">• Williamwood</p>
                  <p className="mb-2">• Cathcart</p>
                  <p className="mb-2">• Rouken Glen</p>
                  <p className="mb-2">• Eaglesham</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection
        title="How Upgrade Boilers & Bathrooms Serves Glasgow Southside"
        subtitle="Fast, professional plumbing service across Giffnock, Pollokshaws, Clarkston, Busby and Glasgow Southside"
        steps={[
          {
            step: 1,
            title: 'Call for Help',
            description: 'Contact us for emergency or routine plumbing across Glasgow Southside. We respond rapidly throughout Giffnock, Pollokshaws, Clarkston and surrounding areas.'
          },
          {
            step: 2,
            title: 'Expert Diagnosis',
            description: 'Our experienced plumbers assess your issue thoroughly and understand your Southside property to identify the best solution.'
          },
          {
            step: 3,
            title: 'Fixed Price Quote',
            description: 'Clear, transparent pricing upfront with no surprises. Most jobs completed on the first visit with our fully-equipped vans.'
          },
          {
            step: 4,
            title: 'Complete & Guaranteed',
            description: 'Professional workmanship with thorough cleanup. Every job backed by our 12-month guarantee across Glasgow Southside.'
          }
        ]}
        relatedServices={[
          { label: 'Emergency Plumber', path: '/emergency-plumber' },
          { label: 'Tap Repairs', path: '/tap-repairs' },
          { label: 'Toilet Repairs', path: '/toilet-repairs' },
          { label: 'Bathroom Installations', path: '/bathroom-installations' },
          { label: 'Heating Services', path: '/heating' }
        ]}
      />

      <section className="py-16 bg-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Plumber in Giffnock, Clarkston, Pollokshaws or Glasgow Southside?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Call our Southside plumbers now for emergency repairs or to book a routine visit
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
