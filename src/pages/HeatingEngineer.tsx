import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Wrench, Clock, ThermometerSun, Shield } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function HeatingEngineer() {
  return (
    <>
      <SEO
        title="Heating Engineer Glasgow | Central Heating Installation & Repair"
        description="Expert heating engineers in Glasgow for central heating installation, repairs, and servicing. Gas Safe registered with 24/7 emergency callouts. Free quotes available."
        canonical={`${DOMAIN}/heating/heating-engineer`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Heating Engineer Services",
          "Professional heating engineers for central heating installation, repairs, and servicing with 24/7 emergency callout support."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Heating Services", url: `${DOMAIN}/heating` },
          { name: "Heating Engineer", url: `${DOMAIN}/heating/heating-engineer` }
        ])}
      />

      <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Heating Engineer Glasgow
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              Professional heating engineers for all your central heating needs. From new installations to emergency repairs, we keep Glasgow homes warm and comfortable all year round.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-accent-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                to="/contact"
                className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThermometerSun className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Installation</h3>
                <p className="text-slate-600">Full central heating system design and installation</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Repairs</h3>
                <p className="text-slate-600">Quick response to heating breakdowns and emergencies</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fully Qualified</h3>
                <p className="text-slate-600">Gas Safe registered and certified engineers</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Heating Engineering Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Central Heating Installation</h3>
                <p className="text-slate-700 mb-4">
                  Complete central heating system design and installation for new builds, extensions, or full system replacements. We work with all major brands and can recommend the best solution for your property.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">New heating system design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Boiler and radiator installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Pipework and controls fitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">System commissioning and testing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Heating System Repairs</h3>
                <p className="text-slate-700 mb-4">
                  No heating or hot water? Our experienced heating engineers can diagnose and repair all types of heating system faults quickly and efficiently, getting your system back up and running.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">No heating diagnostics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Radiator repairs and replacements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Pump and valve repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Thermostat and control issues</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Radiator Services</h3>
                <p className="text-slate-700 mb-4">
                  From single radiator replacements to complete radiator upgrades throughout your property. We can also balance your heating system to ensure even heat distribution.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">New radiator installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Radiator repairs and bleeding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">System balancing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Thermostatic valve fitting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Heating System Upgrades</h3>
                <p className="text-slate-700 mb-4">
                  Improve your heating efficiency with system upgrades including smart controls, power flushing, and energy-saving modifications to reduce your heating bills.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Power flushing services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Smart heating controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Thermostatic radiator valves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Magnetic filters</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4 text-slate-900">24/7 Emergency Heating Engineer</h3>
              <p className="text-slate-700 mb-4">
                Heating breakdown in the middle of winter? We understand how stressful and uncomfortable it can be when your heating fails. Our emergency heating engineers are available 24 hours a day, 7 days a week to respond to urgent heating problems across Glasgow.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Common Heating Emergencies:</h4>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>No heating or hot water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>Boiler making unusual noises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>Heating system leaks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>Cold radiators</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Our Emergency Service:</h4>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>Rapid response times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>Available 24/7, 365 days a year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>Fully stocked vans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span>No call-out charges</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-accent-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition"
              >
                <Clock className="w-5 h-5" />
                Call 24/7: {BUSINESS_INFO.phone}
              </a>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Our Heating Engineers?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">Experienced Team</h3>
                <p className="text-slate-700">Over 14 years serving Glasgow homes and businesses with expert heating solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">All Brands Covered</h3>
                <p className="text-slate-700">We work with all major heating brands including Worcester Bosch, Vaillant, and Baxi</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">Guaranteed Work</h3>
                <p className="text-slate-700">12-month guarantee on all installations and repairs for complete peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Heating Engineer in Glasgow?
          </h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Contact our expert heating engineers today for installations, repairs, or emergency callouts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-accent-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
