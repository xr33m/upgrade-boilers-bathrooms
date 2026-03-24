import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';
import ProcessSection from '../components/ProcessSection';

export default function PlumberPaisley() {
  return (
    <>
      <SEO
        title="Plumber in Paisley | Emergency Plumbing Services in Renfrewshire"
        description="Professional plumber serving Paisley, Inchinnan, Renfrew and Renfrewshire. 24/7 emergency repairs, boiler servicing, bathroom installations. Call 07523 172416"
        canonical="https://upgradeboilersandbathrooms.com/areas/plumber-paisley"
      />

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in Paisley
            </h1>
            <p className="text-xl text-cyan-100 mb-6">
              Professional plumbing and heating services throughout Paisley, Inchinnan, Renfrew and Renfrewshire. Fast response for emergency and routine work.
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
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Serving Paisley and Renfrewshire</h2>
                  <p className="text-slate-700 mb-4">
                    We provide comprehensive plumbing services throughout Paisley and surrounding Renfrewshire areas including Inchinnan, Renfrew, Johnstone, Bridge of Weir and beyond. Whether you need emergency repairs or planned work, our local plumbers are ready to help.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Plumbing Services for Paisley Homes and Businesses
              </h2>
              <p className="text-slate-700 mb-8 leading-relaxed">
                Paisley is a thriving Renfrewshire town with a mix of traditional and modern properties. Our plumbers have extensive experience with the range of plumbing systems found in Paisley homes, from older terraced properties to modern developments. We serve homeowners and businesses throughout Paisley, Inchinnan, Renfrew and all surrounding areas in Renfrewshire.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                  <AlertCircle className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">24/7 Emergency Plumbing</h3>
                  <p className="text-slate-700 mb-4">
                    Burst pipes or flooding in Paisley? Our emergency plumbers respond rapidly throughout Renfrewshire day and night.
                  </p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                  <Wrench className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Maintenance & Upgrades</h3>
                  <p className="text-slate-700 mb-4">
                    Regular servicing, repairs and upgrades for Paisley properties. From boiler work to bathroom installations in Inchinnan and Renfrew.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-bold transition">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Common Plumbing Issues in Paisley
            </h2>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Boiler Servicing in Paisley</h3>
                  <p className="text-slate-600">Regular boiler maintenance and repairs ensure efficient heating throughout Paisley and Renfrewshire. Gas Safe registered engineers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Leak Repairs</h3>
                  <p className="text-slate-600">Water leaks affecting Paisley properties need urgent attention. We locate and repair leaks quickly in Inchinnan, Renfrew and surrounding areas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Bathroom Plumbing</h3>
                  <p className="text-slate-600">From small repairs to complete bathroom renovations across Paisley, Inchinnan and Renfrewshire properties.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Drain Unblocking</h3>
                  <p className="text-slate-600">Blocked drains in Paisley homes causing problems? We provide rapid unblocking and cleaning throughout Renfrewshire.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Heating Systems</h3>
                  <p className="text-slate-600">Radiator problems, system flushing, and complete heating upgrades for Paisley, Inchinnan, Renfrew and surrounding Renfrewshire areas.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Our Paisley Plumbers?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Local to Paisley</h3>
                <p className="text-slate-600">We understand Paisley and Renfrewshire properties and provide responsive service across the area.</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                <p className="text-slate-600">Rapid response to emergencies throughout Paisley, Inchinnan and surrounding Renfrewshire areas.</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="text-slate-600">12-month guarantee on all work. Professional service across Paisley and Renfrewshire.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl border-2 border-cyan-200 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Service Coverage - Paisley and Renfrewshire</h3>
              <p className="text-slate-700 mb-4">
                Our plumbers regularly serve properties throughout Paisley and surrounding areas:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div>
                  <p className="mb-2">• Paisley</p>
                  <p className="mb-2">• Inchinnan</p>
                  <p className="mb-2">• Renfrew</p>
                  <p className="mb-2">• Johnstone</p>
                  <p className="mb-2">• Bargarran</p>
                </div>
                <div>
                  <p className="mb-2">• Bridge of Weir</p>
                  <p className="mb-2">• Lochwinnoch</p>
                  <p className="mb-2">• Houston</p>
                  <p className="mb-2">• Linwood</p>
                  <p className="mb-2">• Erskine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection
        title="How Upgrade Boilers & Bathrooms Serves Paisley"
        subtitle="Fast, professional plumbing and heating service for Paisley, Inchinnan, Renfrew and Renfrewshire"
        steps={[
          {
            step: 1,
            title: 'Call for Help',
            description: 'Contact us for emergency or routine plumbing in Paisley. We respond rapidly throughout Renfrewshire.'
          },
          {
            step: 2,
            title: 'Expert Diagnosis',
            description: 'Our experienced Paisley plumbers assess your issue thoroughly and explain the best solution for your property.'
          },
          {
            step: 3,
            title: 'Fixed Price Quote',
            description: 'Clear, transparent pricing upfront with no surprises. Most jobs completed on the first visit with our fully-stocked vans.'
          },
          {
            step: 4,
            title: 'Complete & Guaranteed',
            description: 'Professional workmanship with thorough cleanup. Every job backed by our 12-month guarantee across Paisley and Renfrewshire.'
          }
        ]}
        relatedServices={[
          { label: 'Emergency Plumber', path: '/emergency-plumber' },
          { label: 'Boiler Services', path: '/boilers' },
          { label: 'Heating Systems', path: '/heating' },
          { label: 'Bathroom Installations', path: '/bathroom-installations' },
          { label: 'Tap & Toilet Repairs', path: '/tap-repairs' }
        ]}
      />

      <section className="py-16 bg-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Plumber in Paisley, Inchinnan or Renfrewshire?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Contact our Paisley plumbers today for emergency repairs or routine work
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
