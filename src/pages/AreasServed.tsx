import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

const areas = [
  'Anniesland',
  'Baillieston',
  'Battlefield',
  'Bearsden',
  'Bishopbriggs',
  'Blackburn',
  'Blantyre',
  'Burnside',
  'Cambuslang',
  'Clydebank',
  'East Kilbride',
  'Giffnock',
  'Glasgow',
  'Glasgow Southside',
  'Glasgow West End',
  'Hamilton',
  'Kings Park',
  'Motherwell',
  'Newton Mearns',
  'Paisley',
  'Pollokshields',
  'Rutherglen',
  'Scotstoun',
  'Shawlands',
  'Strathbungo',
  'Uddingston'
];

export default function AreasServed() {
  return (
    <>
      <SEO
        title="Areas We Serve | Plumbing & Heating Across Glasgow"
        description="Professional plumbing and heating services across Glasgow and surrounding areas. Gas Safe registered engineers serving all Glasgow postcodes. 24/7 emergency service available."
        canonical="https://upgradeboilersandbathrooms.com/areas-served"
      />

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Areas We Serve
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Professional plumbing and heating services across Glasgow and surrounding areas
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Comprehensive Coverage Across Glasgow
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our Gas Safe registered engineers provide expert plumbing and heating services throughout Glasgow and the surrounding areas. No matter where you are located, we're here to help with all your boiler, heating, and plumbing needs.
              </p>
            </div>

            <div className="bg-slate-800 text-white rounded-xl shadow-2xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                AREAS
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {areas.map((area) => (
                  <div
                    key={area}
                    className="border-b border-slate-600 pb-3"
                  >
                    <span className="text-sm md:text-base font-medium uppercase tracking-wide">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Local Service, Expert Care
                </h3>
                <p className="text-slate-600 mb-4">
                  As a Glasgow-based company, we have extensive knowledge of the local area and can reach you quickly, whether it's a routine service or an emergency call-out. Our engineers are familiar with the properties and plumbing systems throughout Glasgow and surrounding areas.
                </p>
                <p className="text-slate-600">
                  We pride ourselves on providing fast, reliable service to all areas we cover, typically arriving within 60-90 minutes for emergency calls.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  24/7 Emergency Coverage
                </h3>
                <p className="text-slate-600 mb-4">
                  Plumbing and heating emergencies don't wait for business hours, and neither do we. Our 24/7 emergency service covers all areas listed above, ensuring you're never left without help when you need it most.
                </p>
                <p className="text-slate-600">
                  Whether you have a burst pipe in Bearsden, a boiler breakdown in Bishopbriggs, or a heating emergency in Hamilton, we're just a phone call away.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Complete Range of Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Boiler Services</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Boiler installation and replacement</li>
                    <li>• Annual boiler servicing</li>
                    <li>• Boiler repairs and diagnostics</li>
                    <li>• Emergency boiler breakdowns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Heating Systems</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Central heating installation</li>
                    <li>• Radiator repairs and replacement</li>
                    <li>• Power flushing</li>
                    <li>• Heat pump installation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Plumbing Services</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Emergency plumbing repairs</li>
                    <li>• Leak detection and repair</li>
                    <li>• Tap and toilet repairs</li>
                    <li>• Pipe work and installations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Specialist Services</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Bathroom installations</li>
                    <li>• Landlord gas safety certificates</li>
                    <li>• Water tank installations</li>
                    <li>• Gas fire repairs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Plumber or Heating Engineer?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for fast, reliable service in your area. Free quotes and 24/7 emergency call-outs available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg border-2 border-white"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
