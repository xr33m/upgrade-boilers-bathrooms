import { Link } from 'react-router-dom';
import { Phone, AlertTriangle, Wind, Shield, Clock } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function GasLeak() {
  return (
    <>
      <SEO
        title="Gas Leak Detection & Repair Glasgow | Emergency Gas Engineer"
        description="Emergency gas leak detection and repair in Glasgow. Gas Safe registered engineers available 24/7. Fast response to gas emergencies. Call now for immediate assistance."
        canonical={`${DOMAIN}/heating/gas-leak`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Gas Leak Detection & Repair",
          "24/7 emergency gas leak detection and repair service by Gas Safe registered engineers. Immediate response to gas emergencies."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Heating Services", url: `${DOMAIN}/heating` },
          { name: "Gas Leak Service", url: `${DOMAIN}/heating/gas-leak` }
        ])}
      />

      <section className="bg-gradient-to-b from-red-100 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Gas Leak Emergency? Call Us Now
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              If you suspect a gas leak, act immediately. Our Gas Safe registered engineers are available 24/7 for emergency gas leak detection and repair across Glasgow.
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-lg font-bold text-2xl transition shadow-2xl animate-pulse"
            >
              <Phone className="w-8 h-8" />
              EMERGENCY: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-red-50 border-2 border-red-600 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                If You Suspect a Gas Leak - Act Now
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-red-900">Immediate Actions:</h3>
                  <ol className="list-decimal list-inside space-y-3 text-slate-800">
                    <li className="font-medium">Do NOT turn on/off any electrical switches</li>
                    <li className="font-medium">Do NOT use mobile phones inside the property</li>
                    <li className="font-medium">Do NOT light matches or create any sparks</li>
                    <li className="font-medium">Turn off the gas supply at the meter if safe to do so</li>
                    <li className="font-medium">Open all windows and doors</li>
                    <li className="font-medium">Evacuate the property immediately</li>
                    <li className="font-medium">Call us from outside: {BUSINESS_INFO.phone}</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-red-900">Signs of a Gas Leak:</h3>
                  <ul className="space-y-3 text-slate-800">
                    <li className="flex items-start gap-2">
                      <Wind className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Smell of rotten eggs or sulfur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wind className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Hissing or whistling sounds near gas pipes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wind className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Dead or dying plants near gas lines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wind className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Physical symptoms: nausea, dizziness, fatigue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wind className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>White cloud or dust cloud near gas pipes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wind className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Higher than normal gas bills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Emergency Response</h3>
                <p className="text-slate-600">Available day and night for gas emergencies</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Gas Safe Registered</h3>
                <p className="text-slate-600">All engineers fully qualified and certified</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rapid Response</h3>
                <p className="text-slate-600">Fast emergency callout across Glasgow</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Our Gas Leak Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Gas Leak Detection</h3>
                <p className="text-slate-700 mb-4">
                  Using the latest gas detection equipment, our engineers can quickly and accurately locate gas leaks in your property, no matter how small. We use electronic leak detectors and pressure testing to identify the exact source.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Electronic gas detection equipment</li>
                  <li>• Pressure testing of gas systems</li>
                  <li>• Visual inspection of all gas appliances</li>
                  <li>• Pipe work and joint testing</li>
                  <li>• Meter and emergency control valve checks</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Gas Leak Repair</h3>
                <p className="text-slate-700 mb-4">
                  Once located, we'll repair the gas leak safely and efficiently. From loose pipe fittings to corroded pipes or faulty appliances, we can fix all types of gas leaks and ensure your system is safe to use.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Emergency gas pipe repairs</li>
                  <li>• Gas pipe replacements</li>
                  <li>• Appliance connection repairs</li>
                  <li>• Gas valve and regulator replacement</li>
                  <li>• Complete system pressure testing</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Gas Safety Checks</h3>
                <p className="text-slate-700 mb-4">
                  After any repair, we conduct thorough gas safety checks to ensure your entire gas system is working correctly and safely. We'll test all appliances and connections before leaving.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Full gas tightness testing</li>
                  <li>• Appliance safety inspections</li>
                  <li>• Carbon monoxide testing</li>
                  <li>• Ventilation checks</li>
                  <li>• Gas safety certificate issued</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Preventive Maintenance</h3>
                <p className="text-slate-700 mb-4">
                  Prevent future gas leaks with regular maintenance and inspections. We offer annual gas safety checks and boiler servicing to keep your gas appliances in top condition.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Annual gas safety inspections</li>
                  <li>• Boiler servicing and maintenance</li>
                  <li>• Gas appliance servicing</li>
                  <li>• Pipe work inspection and testing</li>
                  <li>• Carbon monoxide detector installation</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Why Gas Leaks Are Dangerous</h3>
              <p className="text-slate-700 mb-4">
                Natural gas is highly flammable and can pose serious risks if leaked. Even small leaks can lead to:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fire and explosion risks</strong> - Gas can ignite from the smallest spark</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Health problems</strong> - Nausea, headaches, and breathing difficulties</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Carbon monoxide poisoning</strong> - Can be fatal in high concentrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Property damage</strong> - Gas explosions can destroy buildings</span>
                </li>
              </ul>
              <p className="text-slate-700 mt-4 font-semibold">
                Never ignore the signs of a gas leak. Always treat it as an emergency and call a Gas Safe registered engineer immediately.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Common Causes of Gas Leaks
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">Old or Corroded Pipes</h3>
                <p className="text-slate-700">Gas pipes can corrode over time, especially in older properties. Regular inspections can identify issues before they become dangerous.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">Faulty Appliances</h3>
                <p className="text-slate-700">Gas boilers, fires, and cookers can develop faults that cause gas leaks. Annual servicing helps prevent these issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="font-bold text-lg mb-3 text-slate-900">Poor Installation</h3>
                <p className="text-slate-700">Gas appliances must be installed by Gas Safe engineers. Improper installation is a common cause of gas leaks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-16 h-16" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gas Emergency? Don't Wait - Call Now
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our Gas Safe registered engineers are standing by 24/7 to respond to gas emergencies across Glasgow. Fast response, expert service, safe repairs.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-red-600 px-10 py-5 rounded-lg font-bold text-2xl transition shadow-2xl"
          >
            <Phone className="w-8 h-8" />
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}
