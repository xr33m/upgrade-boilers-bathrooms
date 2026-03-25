import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';
import ProcessSection from '../components/ProcessSection';

export default function PlumberEastKilbride() {
  return (
    <>
      <SEO
        title="Plumber in East Kilbride | Emergency Plumbing Services in South Lanarkshire"
        description="Professional plumber serving East Kilbride, Strathaven, Lesmahagow and South Lanarkshire. 24/7 emergency repairs, boiler services, installations. Call 07523 172416"
        canonical="https://upgradeboilersandbathrooms.com/areas/plumber-east-kilbride"
      />

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plumber in East Kilbride
            </h1>
            <p className="text-xl text-cyan-100 mb-6">
              Professional plumbing and heating services throughout East Kilbride, Strathaven, Lesmahagow and South Lanarkshire. Fast response for emergency and routine work.
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
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">Serving East Kilbride and South Lanarkshire</h2>
                  <p className="text-slate-700 mb-4">
                    We provide comprehensive plumbing services throughout East Kilbride and surrounding South Lanarkshire areas including Strathaven, Lesmahagow, Larkhall, Hamilton and beyond. Whether you need emergency repairs or planned work, our plumbers are ready to help.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Plumbing Services for East Kilbride Homes and Businesses
              </h2>
              <p className="text-slate-700 mb-8 leading-relaxed">
                East Kilbride is Scotland's largest new town with modern residential and commercial properties. Our plumbers have extensive experience with the range of plumbing systems found in East Kilbride homes, from modern new-build properties to established residential areas. We serve homeowners and businesses throughout East Kilbride, Strathaven, Lesmahagow and all surrounding areas in South Lanarkshire.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                  <AlertCircle className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">24/7 Emergency Plumbing</h3>
                  <p className="text-slate-700 mb-4">
                    Burst pipes or flooding in East Kilbride? Our emergency plumbers respond rapidly throughout South Lanarkshire day and night.
                  </p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                  <Wrench className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">New Builds & Upgrades</h3>
                  <p className="text-slate-700 mb-4">
                    Boiler installation, heating systems, and complete plumbing work for East Kilbride homes including Strathaven and Lesmahagow properties.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-bold transition">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Common Plumbing Issues in East Kilbride
            </h2>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">New Build Defects</h3>
                  <p className="text-slate-600">Issues with plumbing in new East Kilbride properties? We investigate and resolve new build plumbing defects quickly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Boiler and Heating</h3>
                  <p className="text-slate-600">Gas Safe registered engineers for boiler installation, servicing and repairs throughout East Kilbride and South Lanarkshire.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Leak Detection & Repair</h3>
                  <p className="text-slate-600">Water leaks in East Kilbride homes need expert detection. We locate leaks and provide permanent repairs in Strathaven, Lesmahagow and surrounding areas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Bathroom Installations</h3>
                  <p className="text-slate-600">Complete bathroom plumbing solutions from design through installation in East Kilbride properties.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Commercial Plumbing</h3>
                  <p className="text-slate-600">Large-scale plumbing work for businesses and commercial properties throughout East Kilbride and South Lanarkshire.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Our East Kilbride Plumbers?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                <p className="text-slate-600">We understand East Kilbride and South Lanarkshire properties from new builds to older homes.</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
                <p className="text-slate-600">Fast response to emergencies throughout East Kilbride, Strathaven and South Lanarkshire, 24/7.</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fully Qualified</h3>
                <p className="text-slate-600">Gas Safe certified engineers. 12-month guarantee on all work across East Kilbride.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl border-2 border-cyan-200 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Service Coverage - East Kilbride and South Lanarkshire</h3>
              <p className="text-slate-700 mb-4">
                Our plumbers regularly serve properties throughout East Kilbride and South Lanarkshire:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div>
                  <p className="mb-2">• East Kilbride</p>
                  <p className="mb-2">• Strathaven</p>
                  <p className="mb-2">• Lesmahagow</p>
                  <p className="mb-2">• Larkhall</p>
                  <p className="mb-2">• Hamilton</p>
                </div>
                <div>
                  <p className="mb-2">• Uddingston</p>
                  <p className="mb-2">• Wishaw</p>
                  <p className="mb-2">• Newmains</p>
                  <p className="mb-2">• Stonehouse</p>
                  <p className="mb-2">• Carluke</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection
        title="How Upgrade Boilers & Bathrooms Serves East Kilbride"
        subtitle="Fast, reliable plumbing and heating service for East Kilbride, Strathaven and South Lanarkshire"
        steps={[
          {
            step: 1,
            title: 'Call for Help',
            description: 'Contact us for emergency or planned work in East Kilbride. We respond rapidly throughout South Lanarkshire.'
          },
          {
            step: 2,
            title: 'Expert Assessment',
            description: 'Our skilled East Kilbride plumbers assess your issue thoroughly and explain the best solution for your property.'
          },
          {
            step: 3,
            title: 'Fixed Price Quote',
            description: 'Clear, transparent pricing upfront with no surprises. Most jobs completed on the first visit with our fully-stocked vans.'
          },
          {
            step: 4,
            title: 'Complete & Guaranteed',
            description: 'Professional workmanship with thorough cleanup. Every job backed by our 12-month guarantee across East Kilbride and South Lanarkshire.'
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
            Need a Plumber in East Kilbride, Strathaven or South Lanarkshire?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Contact our East Kilbride plumbers today for emergency repairs or routine work
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
