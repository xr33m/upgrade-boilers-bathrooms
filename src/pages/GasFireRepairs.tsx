import { Link } from 'react-router-dom';
import { Phone, Flame, CheckCircle2, AlertTriangle, Wrench, Zap, Shield, MapPin, Heart, Wind } from 'lucide-react';
import SEO from '../components/SEO';
import AreasWeServe from '../components/AreasWeServe';
import { BUSINESS_INFO } from '../constants/business';
import GasSafeBadge from '../components/GasSafeBadge';

export default function GasFireRepairs() {
  return (
    <>
      <SEO
        title="Gas Fire Repairs & Servicing Glasgow | Gas Safe Engineers"
        description="Professional gas fire repairs and servicing in Glasgow. Gas Safe registered engineers for all makes and models. Annual servicing from £125, repairs, safe disconnection. Call now."
        canonical="https://upgradeboilersandbathrooms.com/heating/gas-fire-repairs"
      />

      <section className="bg-gradient-to-br from-orange-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-orange-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/heating" className="hover:text-white">Heating</Link>
              <span className="mx-2">/</span>
              <span>Gas Fire Repairs</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Gas Fire Repairs & Servicing Glasgow
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-6 font-semibold">
              Gas Safe Engineers for Safe, Reliable Gas Fires
            </p>
            <p className="text-lg text-orange-50 mb-8 leading-relaxed max-w-2xl">
              Is your gas fire not igniting? Pilot light keeps going out? Noticed soot or strange smells? Upgrade Boilers & Bathrooms provide professional gas fire servicing and repairs in Glasgow, carried out by fully Gas Safe registered engineers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-orange-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 mb-16 flex flex-col md:flex-row items-center justify-center gap-6">
              <GasSafeBadge size="medium" />
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Gas Safe Registered Engineers</h3>
                <p className="text-slate-700 leading-relaxed">
                  All gas fire work must be carried out by Gas Safe registered professionals. We are fully qualified and registered to work on all gas appliances. Never attempt DIY repairs on gas appliances.
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Annual Gas Fire Servicing Glasgow – Why It Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3636620/pexels-photo-3636620.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional gas fire servicing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Gas fires should be serviced once per year to ensure safety, efficiency, and compliance with manufacturer requirements.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Annual service ensures:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Safe combustion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Correct ventilation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>No carbon monoxide risk</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Efficient operation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Manufacturer compliance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <p className="text-slate-700 font-semibold mb-3">During a full gas fire service we:</p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Remove and clean burners</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Inspect pilot assembly</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Test ignition system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Check thermocouple & flame failure device</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Inspect flue or chimney draw</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Check ventilation & airflow</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Perform combustion safety checks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Inspect for signs of soot or incomplete burn</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 border-2 border-orange-200 text-center mb-16">
              <p className="text-slate-700 mb-2 text-lg">Gas Fire Service</p>
              <p className="text-5xl font-bold text-orange-600 mb-2">£125</p>
              <p className="text-slate-700">Regular servicing keeps your fire safe and reduces the risk of dangerous faults developing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Common Gas Fire Problems We Repair
            </h2>

            <p className="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
              Gas fires are mechanical appliances. Over time, parts wear out, block up or fail. Here are the most common issues we attend in Glasgow homes:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Flame className="w-6 h-6 text-orange-600" />
                  Gas Fire Won't Ignite
                </h3>
                <p className="text-slate-700 mb-4 font-semibold">Possible causes:</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Faulty igniter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Broken thermocouple</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Failed gas valve</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Blocked pilot assembly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Battery ignition failure (remote fires)</span>
                  </li>
                </ul>
                <p className="text-slate-700 text-sm mt-4 font-semibold">We diagnose and repair the fault quickly to restore safe operation.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Flame className="w-6 h-6 text-red-600" />
                  Pilot Light Keeps Going Out
                </h3>
                <p className="text-slate-700 mb-4 text-sm">This is one of the most frequent call-outs.</p>
                <p className="text-slate-700 mb-3 font-semibold text-sm">Causes include:</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Faulty thermocouple</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Dirty pilot injector</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Draft affecting flame stability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Weak gas pressure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Faulty flame supervision device</span>
                  </li>
                </ul>
                <p className="text-slate-700 text-sm mt-3 bg-amber-50 p-3 rounded border border-amber-200 font-semibold">
                  If your pilot flame is yellow instead of blue, turn the fire off immediately and contact a Gas Safe engineer.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-black">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-black" />
                  Gas Fire "Sooting Up"
                </h3>
                <p className="text-slate-700 mb-4 font-semibold">Black soot around the fire or on walls is extremely serious.</p>
                <p className="text-slate-700 mb-3 text-sm">It indicates:</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Incomplete combustion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Blocked burner ports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Poor ventilation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Incorrect gas pressure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>Flue obstruction</span>
                  </li>
                </ul>
                <p className="text-slate-700 text-sm mt-4 bg-red-50 p-3 rounded border border-red-200 font-semibold">
                  Stop using the fire immediately. Soot build-up can lead to carbon monoxide production and serious health risk.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-600" />
                  Noisy Gas Fire (Banging or Hissing)
                </h3>
                <p className="text-slate-700 mb-3 font-semibold">Unusual sounds may indicate:</p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Gas flow issues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Burner misalignment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Debris inside combustion chamber</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Expansion noise from metal components</span>
                  </li>
                </ul>
                <p className="text-slate-700 text-sm font-semibold">We inspect and resolve safely.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-cyan-600">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-cyan-600" />
                  Remote Control or Control Valve Issues
                </h3>
                <p className="text-slate-700 mb-4">Modern gas fires often use:</p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Battery-powered ignition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Remote control systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Electronic ignition boards</span>
                  </li>
                </ul>
                <p className="text-slate-700 text-sm">Sometimes it's just batteries — sometimes it's a deeper component issue. We diagnose before replacing unnecessary parts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-red-50 border-t-4 border-red-600 border-b-4">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <Heart className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-6">Carbon Monoxide Warning – Know the Signs</h2>
                <p className="text-lg text-red-800 mb-6 leading-relaxed">
                  Carbon monoxide (CO) is colourless, odourless, and potentially fatal. It's one of the most serious risks associated with faulty gas appliances.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-4">Symptoms of CO Exposure:</h3>
                <ul className="space-y-3 text-red-800">
                  <li className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="font-semibold">Headaches</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="font-semibold">Nausea</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="font-semibold">Dizziness</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="font-semibold">Fatigue</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="font-semibold">Confusion</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-4">If You Suspect Carbon Monoxide:</h3>
                <ol className="space-y-3 text-red-800">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-lg flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full">1</span>
                    <span className="font-semibold">Turn off the gas fire immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-lg flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full">2</span>
                    <span className="font-semibold">Open windows and ventilate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-lg flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full">3</span>
                    <span className="font-semibold">Leave the property</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-lg flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full">4</span>
                    <span className="font-semibold">Seek medical help</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-200">
              <p className="text-lg text-slate-700 font-semibold flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                Annual servicing dramatically reduces the risk of CO production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Gas Fire Safety Certificates (CP12) – Glasgow Landlords
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  We provide Gas Safety Certificates (CP12) for landlords and letting agents. Your gas fire must be inspected annually as part of landlord compliance under UK gas safety regulations.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                  <p className="text-slate-700 font-semibold mb-4">We provide CP12 certificates for:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Landlords</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Letting agents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>HMO properties</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Rental homes</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3662625/pexels-photo-3662625.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Landlord property compliance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Gas Fire Decommissioning & Removal
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3783098/pexels-photo-3783098.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Gas fire disconnection and removal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  If your gas fire is outdated, inefficient, unsafe, or no longer used, we can safely disconnect and remove it.
                </p>
                <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">We offer:</p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        <span className="font-semibold">Fixed price disconnect & make safe</span>
                        <span className="block text-sm text-slate-600 mt-1">From £150</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        <span className="font-semibold">Full removal & disposal</span>
                        <span className="block text-sm text-slate-600 mt-1">£250 inc VAT</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We safely isolate the gas supply, cap pipework and ensure the appliance is fully compliant with regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Brands We Service & Repair
            </h2>

            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 mb-12">
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                We commonly work on all major gas fire brands and manufacturers. Our engineers have experience with traditional and modern models across:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {['Gazco', 'Valor', 'Flavel', 'Baxi', 'Robinson Willey', 'Focal Point', 'Be Modern', 'And many more'].map((brand, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-blue-200 text-center font-semibold text-slate-700">
                    {brand}
                  </div>
                ))}
              </div>
              <p className="text-slate-700 text-sm mt-6 italic">If unsure, simply send us a photo before booking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              How Long Does Gas Fire Repair Take?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Quick gas fire repairs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200 mb-6">
                  <p className="text-5xl font-bold text-green-600 mb-3">1-2 Hours</p>
                  <p className="text-slate-700 font-semibold">Most repairs are completed within 1–2 hours.</p>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">Factors that affect timing:</h3>
                <ul className="space-y-3 text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>Parts availability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>Age of appliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>Manufacturer support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>Flue condition</span>
                  </li>
                </ul>

                <p className="text-slate-700 text-sm bg-blue-50 p-4 rounded-lg border border-blue-200">
                  If parts must be ordered, we provide a clear quotation before proceeding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Choose Upgrade Boilers & Bathrooms?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: 'Fully Gas Safe Registered Engineers', desc: 'All work carried out safely and legally by qualified professionals' },
                { icon: Zap, title: 'Clear Pricing – No Hidden Charges', desc: 'Transparent quotations before work begins' },
                { icon: MapPin, title: 'Local Glasgow-Based Team', desc: 'Fast response to your area' },
                { icon: Flame, title: 'Fast Response', desc: 'Quick turnaround on repairs and servicing' },
                { icon: Heart, title: '12-Month Workmanship Guarantee', desc: 'Peace of mind on all repairs' },
                { icon: Wind, title: 'Experienced with All Models', desc: 'Older and modern fires – all makes' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border-2 border-orange-200 shadow-lg">
                    <div className="flex items-start gap-4">
                      <Icon className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-700">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-red-50 p-8 rounded-2xl border-2 border-red-200 text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <p className="text-lg text-slate-700 font-semibold">
                Gas appliances are not DIY jobs — always use a qualified engineer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AreasWeServe />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Gas Fire Repairs Glasgow – FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Should I service my gas fire every year?',
                  answer: 'Yes. Annual servicing ensures safety, efficiency, and compliance with manufacturers\' recommendations. It also keeps your fire safe and extends its lifespan.'
                },
                {
                  question: 'Is soot dangerous?',
                  answer: 'Yes. Soot indicates incomplete combustion and potential carbon monoxide (CO) risk. If you notice black soot around your fire, stop using it and contact a Gas Safe engineer immediately.'
                },
                {
                  question: 'Can I repair a gas fire myself?',
                  answer: 'No. Gas appliances must only be worked on by Gas Safe registered engineers. It\'s dangerous, illegal, and will void warranties.'
                },
                {
                  question: 'Do you service all gas fire models?',
                  answer: 'We service most major brands including Gazco, Valor, Flavel, Baxi, Robinson Willey, and many more. If unsure, send us a photo to confirm before booking.'
                },
                {
                  question: 'My fire smells unusual – what should I do?',
                  answer: 'Turn it off immediately and contact a Gas Safe engineer. Unusual smells can indicate combustion problems or ventilation issues.'
                },
                {
                  question: 'How much does a gas fire repair cost?',
                  answer: 'Costs vary depending on the fault and parts required. Minor repairs may cost around £100–£200, while larger replacements cost more. We always provide a clear quotation before proceeding.'
                },
                {
                  question: 'What if my fire has a gas leak?',
                  answer: 'If you smell gas, turn off the fire, open windows, leave the property, and call the National Gas Emergency Service on 0800 111 999 immediately.'
                },
                {
                  question: 'How long is the 12-month guarantee?',
                  answer: 'Our workmanship guarantee covers all repairs we carry out for 12 months from the date of service. If the same fault reoccurs, we\'ll fix it free of charge.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your Gas Fire Service in Glasgow
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto leading-relaxed">
            If your gas fire needs servicing, repair or safe disconnection, contact Upgrade Boilers & Bathrooms today. Safe. Professional. Gas Safe registered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-orange-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
