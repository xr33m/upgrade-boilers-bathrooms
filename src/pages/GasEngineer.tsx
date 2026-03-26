import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Shield, Wrench, Clock, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';
import GasSafeBadge from '../components/GasSafeBadge';
import GasSafeInline from '../components/GasSafeInline';

export default function GasEngineer() {
  return (
    <>
      <SEO
        title="Gas Engineer Glasgow | Gas Safe Registered Engineers"
        description="Trusted Gas Safe registered engineers in Glasgow. Expert gas appliance installation, servicing, repairs, and safety certificates. Available 24/7 for emergencies."
        canonical="https://upgradeboilersandbathrooms.com/heating/gas-engineer"
      />

      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <GasSafeBadge />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-3">
              <GasSafeInline size="md" /> Gas Safe Registered Engineers Glasgow
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              Expert gas engineers for all your heating and gas appliance needs. Fully qualified, Gas Safe registered, and trusted by Glasgow homeowners for over 14 years.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                to="/contact"
                className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition"
              >
                Book an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 flex items-center justify-center gap-1.5"><GasSafeInline size="sm" /> Gas Safe Registered</h3>
                <p className="text-slate-600 text-sm">All engineers fully qualified and registered</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">24/7 Available</h3>
                <p className="text-slate-600 text-sm">Emergency gas services day and night</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Expert Service</h3>
                <p className="text-slate-600 text-sm">Over 14 years serving Glasgow</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Fully Insured</h3>
                <p className="text-slate-600 text-sm">Comprehensive public liability cover</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Gas Engineering Services We Provide
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Boiler Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">New boiler installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Annual boiler servicing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Boiler repairs and breakdowns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Boiler replacements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Gas Appliances</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Gas fire installation and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Gas cooker installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Gas hob fitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Gas appliance servicing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Gas Safety</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Gas safety certificates (CP12)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Landlord gas safety inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Gas leak detection and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Carbon monoxide testing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Heating Systems</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Central heating installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Radiator installation and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Heating system power flushing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Heating controls and thermostats</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Why Choose Our Gas Engineers?</h3>
              <p className="text-slate-700 mb-4">
                When it comes to gas work, you need engineers you can trust. All our gas engineers are Gas Safe registered, fully insured, and have years of experience working across Glasgow. We prioritize safety above everything else and take pride in delivering the highest quality workmanship.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Our Qualifications</h4>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>Gas Safe registered engineers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>City & Guilds certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>CIPHE qualified plumbers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>Manufacturer trained technicians</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Our Guarantees</h4>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>12-month workmanship guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>Manufacturer warranties honored</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>Fully insured and covered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span>Free quotes and advice</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Emergency Gas Engineer Glasgow
            </h2>
            <p className="text-slate-700 mb-8">
              Gas emergencies require immediate attention. If you smell gas, suspect a gas leak, or have a boiler that's not working safely, call us immediately. Our emergency gas engineers are available 24/7 to respond to urgent calls across Glasgow and surrounding areas.
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-red-900">Gas Emergency? Call Us Now</h3>
              <p className="text-slate-700 mb-4">
                If you suspect a gas leak or gas emergency, follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
                <li>Turn off your gas supply at the meter</li>
                <li>Open windows and doors for ventilation</li>
                <li>Do not use electrical switches or naked flames</li>
                <li>Call us immediately for emergency assistance</li>
              </ol>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition"
              >
                <Phone className="w-5 h-5" />
                Emergency: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Gas Safe Engineer in Glasgow?
          </h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Contact us today for expert gas engineering services from qualified, experienced professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
