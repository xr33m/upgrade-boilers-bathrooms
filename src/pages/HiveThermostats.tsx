import { Link } from 'react-router-dom';
import { Phone, Smartphone, Wifi, Zap, Home, Gauge, AlertCircle, CheckCircle2, AlertTriangle, Wrench, MapPin, Lock, Battery, Droplets } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function HiveThermostats() {
  return (
    <>
      <SEO
        title="Hive Thermostat Installation & Repairs Glasgow | Smart Heating Control"
        description="Professional Hive thermostat installation and repairs in Glasgow. Remote heating control via smartphone. Compatible with most boilers. Call 07523 172416"
        canonical="https://upgradeboilersandbathrooms.com/heating/hive-thermostats"
      />

      <section className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-emerald-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/heating" className="hover:text-white">Heating</Link>
              <span className="mx-2">/</span>
              <span>Hive Thermostats</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hive Thermostat Installation & Repairs
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-6 font-semibold">
              Smart Heating Control for Modern, Energy-Efficient Homes
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-lg text-emerald-50 leading-relaxed">
                Looking to control your heating from your phone? Need a Hive thermostat installed or repaired in Glasgow?
              </p>
              <p className="text-lg text-emerald-50 leading-relaxed">
                Upgrade Boilers & Bathrooms provide professional Hive thermostat installation, setup and fault repairs across Greater Glasgow — ensuring your smart heating system works reliably and safely.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              What Is a Hive Thermostat?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hive smart thermostat control"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  A Hive thermostat is a smart heating control system that connects to your boiler and allows you to manage your heating and hot water remotely from your smartphone, tablet or voice assistant.
                </p>
                <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">With Hive, you can control:</p>
                  <ul className="space-y-3">
                    {[
                      'Central heating',
                      'Hot water (if you have a cylinder)',
                      'Schedules & temperature settings',
                      'Energy usage monitoring'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary-50 rounded-xl p-6 border-2 border-blue-200">
                  <p className="text-slate-700 leading-relaxed">
                    <span className="font-semibold">Instead of manually adjusting your heating,</span> Hive gives you remote control wherever you are — whether you're at work, on holiday, or checking on elderly relatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              How Hive Works
            </h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  step: 1,
                  icon: Gauge,
                  title: 'Room Thermostat',
                  description: 'Wall-mounted or freestanding device that measures room temperature and communicates with your boiler.'
                },
                {
                  step: 2,
                  icon: Wifi,
                  title: 'Hive Hub',
                  description: 'Connects to your broadband router and links your heating system to the internet for remote control.'
                },
                {
                  step: 3,
                  icon: Smartphone,
                  title: 'Hive App',
                  description: 'Smartphone, tablet or voice assistant app that allows you to control heating and hot water remotely.'
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
                    <div className="flex items-start gap-6">
                      <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-700 text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Once installed, Hive communicates directly with your boiler,</span> allowing precise scheduling, real-time temperature adjustments, and energy monitoring from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Hive Installation in Glasgow
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Professional installation ensures your Hive system is safe, reliable, and optimized for your heating system.
                </p>
                <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Professional installation includes:</p>
                  <ul className="space-y-3">
                    {[
                      'Safe electrical wiring',
                      'Correct boiler integration',
                      'Reliable hub connection',
                      'Proper pairing with app',
                      'Heating & hot water configuration',
                      'Firmware updates completed'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3862633/pexels-photo-3862633.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional Hive installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Why DIY Installation Can Cause Problems
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Incorrect DIY installation can result in:
              </p>
              <ul className="space-y-3">
                {[
                  'Boiler not firing',
                  'Heating stuck on',
                  'No hot water',
                  'Connectivity issues',
                  'Warranty complications'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Hive Installation Pricing
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Gauge className="w-6 h-6 text-emerald-600" />
                  Hive Thermostat
                </h3>
                <div className="bg-emerald-50 rounded-lg p-6 mb-6 border border-emerald-200">
                  <p className="text-4xl font-bold text-emerald-600 mb-2">£325</p>
                  <p className="text-slate-700 text-sm">Supplied & professionally fitted</p>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Includes thermostat, hub, wiring, boiler integration, app setup, and full testing.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Battery className="w-6 h-6 text-primary" />
                  Hive TRVs (Smart Radiator Valves)
                </h3>
                <div className="bg-primary-50 rounded-lg p-6 mb-6 border border-blue-200">
                  <p className="text-3xl font-bold text-primary mb-2">From £75</p>
                  <p className="text-slate-700 text-sm">Per valve + £110 minimum labour</p>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Control individual radiators remotely. Perfect for room-by-room heating.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200 text-center">
              <p className="text-slate-700 text-lg">
                <span className="font-semibold">We provide fixed-price quotations before any installation.</span> No hidden costs or surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Hive Compatibility – Will It Work With Your Boiler?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                  Compatible With Most Boilers
                </h3>
                <ul className="space-y-3">
                  {[
                    'Combi boilers',
                    'System boilers',
                    'Heat-only (regular) boilers',
                    'Hot water cylinder systems',
                    'Many modern condensing boilers'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Unsure About Compatibility?
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  If you're not sure whether Hive will work with your boiler, contact us for a free assessment.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold">We inspect your boiler setup</span> and advise honestly before proceeding with installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Hive for Different Boiler Types
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Hive & Combi Boilers</h3>
                <p className="text-slate-700 mb-4 font-semibold">For combi boilers, Hive gives you:</p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Remote heating control',
                    'Heating schedules',
                    'Temperature optimisation',
                    'Energy monitoring'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 text-sm">
                  Hot water control is automatic on combi systems (as they heat on demand).
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Hive & Hot Water Cylinders</h3>
                <p className="text-slate-700 mb-4 font-semibold">If you have a regular boiler with a hot water tank, Hive allows you to:</p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Schedule hot water',
                    'Boost hot water remotely',
                    'Avoid heating water unnecessarily',
                    'Save energy significantly'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Hive TRVs – Smart Radiator Control
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hive TRV smart radiator control"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Hive TRVs (Thermostatic Radiator Valves) allow you to control individual radiators via the Hive app, giving you unprecedented control over your heating system.
                </p>
                <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Instead of heating the entire house:</p>
                  <ul className="space-y-3">
                    {[
                      'Heat only rooms in use',
                      'Lower temperature in unused rooms',
                      'Create room-by-room schedules',
                      'Optimize heating zones'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary-50 rounded-lg p-6 border-2 border-blue-200">
                  <p className="text-slate-700 font-semibold mb-3">This improves:</p>
                  <ul className="space-y-2">
                    {[
                      'Energy efficiency',
                      'Comfort in occupied rooms',
                      'Heating zoning',
                      'Reduced energy bills'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200 text-center">
              <p className="text-slate-700 text-lg">
                <span className="font-semibold">TRVs are especially useful in larger homes</span> where you want zone control and energy savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              How Hive Saves You Money
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Hive improves efficiency and reduces wasted energy through smart scheduling and geolocation features.
                </p>
                <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Hive achieves savings by:</p>
                  <ul className="space-y-3">
                    {[
                      'Avoiding heating empty homes',
                      'Using geolocation to switch heating off when you leave',
                      'Scheduling heating accurately to your routine',
                      'Monitoring usage patterns and optimizing',
                      'Reducing standby losses'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3862631/pexels-photo-3862631.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Energy savings with smart heating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Potential Savings</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-4">Up to £110/year</p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Hive users report energy savings depending on home size, insulation and heating habits. Actual savings vary significantly based on how you use the system.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Beyond Savings</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Beyond financial savings, Hive provides:
                </p>
                <ul className="space-y-2">
                  {[
                    'Greater comfort control',
                    'Environmental benefits',
                    'Peace of mind monitoring',
                    'Smart home integration'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Hive for Vulnerable Family Members
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="bg-primary-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary-600" />
                  Peace of Mind for Families
                </h3>
                <p className="text-slate-700 mb-4 font-semibold">Hive is useful for monitoring:</p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Elderly parents',
                    'Vulnerable relatives',
                    'Rental properties',
                    'Holiday homes'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="font-semibold">This provides peace of mind during Glasgow winters.</span> You can ensure properties stay warm even when you're not there.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3808335/pexels-photo-3808335.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Family comfort and monitoring"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Remote Capability Benefits:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Monitor heating remotely',
                  'Ensure property stays warm',
                  'Adjust heating during cold weather',
                  'Respond quickly if heating fails',
                  'Check thermostat before visiting',
                  'Prevent frozen pipes in winter'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Common Hive Faults We Repair
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Wifi, title: 'Hive not connecting to app', color: 'blue' },
                { icon: AlertCircle, title: 'Hub flashing red', color: 'red' },
                { icon: Zap, title: 'Thermostat not pairing', color: 'amber' },
                { icon: Home, title: 'Boiler not responding', color: 'orange' },
                { icon: Droplets, title: 'Hot water not activating', color: 'cyan' },
                { icon: AlertTriangle, title: 'Heating stuck on', color: 'red' },
                { icon: Wifi, title: 'Lost WiFi connection', color: 'slate' },
                { icon: Wrench, title: 'Hub power issues', color: 'gray' }
              ].map((item, idx) => {
                const Icon = item.icon;
                const colorMap: Record<string, string> = {
                  blue: 'bg-primary-50 border-blue-200',
                  red: 'bg-red-50 border-red-200',
                  amber: 'bg-amber-50 border-amber-200',
                  orange: 'bg-orange-50 border-orange-200',
                  cyan: 'bg-cyan-50 border-cyan-200',
                  slate: 'bg-slate-50 border-slate-200',
                  gray: 'bg-gray-50 border-gray-200'
                };
                const colorMap2: Record<string, string> = {
                  blue: 'text-primary',
                  red: 'text-red-600',
                  amber: 'text-amber-600',
                  orange: 'text-accent',
                  cyan: 'text-cyan-600',
                  slate: 'text-slate-600',
                  gray: 'text-gray-600'
                };
                return (
                  <div key={idx} className={`${colorMap[item.color]} rounded-lg p-6 border-2 shadow-lg flex items-start gap-4`}>
                    <Icon className={`w-6 h-6 ${colorMap2[item.color]} flex-shrink-0 mt-1`} />
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Common Causes of Hive Issues:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Router changes',
                  'Power cuts',
                  'Firmware updates',
                  'Incorrect wiring',
                  'WiFi signal range problems',
                  'Hub power cycling',
                  'Boiler compatibility issues',
                  'App synchronization errors'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200 text-center">
              <p className="text-slate-700 text-lg">
                <span className="font-semibold">We diagnose and restore Hive connectivity properly.</span> Most issues can be resolved quickly without expensive replacements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Does Hive Work With Heat Pumps?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Heat pump thermostat integration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Yes – With Important Caveats</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    In many cases, Hive can integrate with heat pump systems, although setup differs significantly from gas boilers.
                  </p>
                  <p className="text-slate-700 font-semibold">
                    Correct configuration is critical to avoid inefficient cycling and poor performance.
                  </p>
                </div>
                <div className="bg-primary-50 rounded-lg p-6 border-2 border-blue-200">
                  <p className="text-slate-700 font-semibold mb-3">If you're upgrading to a heat pump:</p>
                  <ul className="space-y-2">
                    {[
                      'Thermostat selection should be planned',
                      'Heat pump requires different control',
                      'Professional setup is essential',
                      'We can advise on compatibility'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Is Hive Right for You?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                  Hive Is Ideal If You:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Want lower energy bills',
                    'Travel frequently',
                    'Want smart home integration',
                    'Want room-by-room heating control',
                    'Have a rental property',
                    'Want heating monitoring',
                    'Prefer remote control',
                    'Use Alexa or Google Home'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                  Hive May Not Be Suitable If:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Broadband is unreliable',
                    'You prefer manual control only',
                    'Heating system is very old',
                    'System is non-standard',
                    'No WiFi available',
                    'Limited technical comfort',
                    'Frequent power outages',
                    'Budget is very tight'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200 text-center">
              <p className="text-slate-700 text-lg">
                <span className="font-semibold">We can advise honestly during assessment.</span> Not every home is suited for Hive, and we'll recommend alternatives if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Areas We Cover – Hive Installation Glasgow
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { area: 'Glasgow City Centre', postcodes: 'G1–G5' },
                { area: 'West End', postcodes: 'G11–G13' },
                { area: 'Southside', postcodes: 'G41–G46' },
                { area: 'Bearsden & Milngavie', postcodes: 'North Glasgow' },
                { area: 'East Kilbride', postcodes: 'South Lanarkshire' },
                { area: 'Paisley', postcodes: 'West of Glasgow' },
                { area: 'Greater Glasgow', postcodes: 'All surrounding areas' }
              ].map((location, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-2 border-emerald-200 flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">{location.area}</p>
                    <p className="text-slate-600 text-sm">{location.postcodes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Hive Thermostat FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Can I install Hive myself?',
                  answer: 'It\'s possible if you\'re experienced with boiler wiring, but professional installation ensures safe electrical work and optimal performance. We recommend professional installation.'
                },
                {
                  question: 'Why has my Hive lost connection?',
                  answer: 'Common causes include router changes, WiFi dropouts, hub disconnection, power cycling, or broadband outages. We can diagnose and fix these issues quickly.'
                },
                {
                  question: 'Does Hive control individual radiators?',
                  answer: 'Only if Hive TRVs (smart radiator valves) are installed on each radiator you want to control. The main thermostat controls overall heating and hot water.'
                },
                {
                  question: 'Will Hive work with older boilers?',
                  answer: 'In most cases, yes — even with boilers 15+ years old. However, some very old or non-standard systems may not be compatible. We assess compatibility beforehand.'
                },
                {
                  question: 'Does Hive need internet to work?',
                  answer: 'Yes — broadband is required for full smart functionality. However, basic heating control continues if the WiFi connection is lost temporarily.'
                },
                {
                  question: 'What happens if my WiFi goes down?',
                  answer: 'Your heating will continue on its last set schedule. Once WiFi is restored, Hive automatically reconnects and syncs. No loss of heating during outages.'
                },
                {
                  question: 'Can Hive reduce my heating bills?',
                  answer: 'Yes — by preventing unnecessary heating, scheduling accurately, and using geolocation to turn heating off when you leave. Savings depend on your habits and home. Typical savings are £50–£110/year.'
                },
                {
                  question: 'Is Hive compatible with voice assistants?',
                  answer: 'Yes — Hive works with Amazon Alexa and Google Assistant. You can control heating with voice commands like "Alexa, set heating to 21 degrees."'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your Hive Thermostat Installation
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Whether you need a new Hive thermostat installed or your existing unit repaired, contact Upgrade Boilers & Bathrooms today. Smart heating. Greater control. Lower energy waste.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
