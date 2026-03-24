import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, AlertTriangle, Clock, CheckCircle2, Zap, Droplet, Flame, Wrench, MapPin } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import ServicePageTemplate from '../components/ServicePageTemplate';
import RelatedServices from '../components/RelatedServices';
import { emergencyPlumberRelatedServices, emergencyPlumberFaqs } from '../lib/links';

export default function EmergencyPlumber() {
  return (
    <>
      <SEO
        title="Emergency Plumber Glasgow | 24/7 Rapid Response Heating & Plumbing Engineer"
        description="24/7 emergency plumber in Glasgow. Burst pipes, boiler breakdown, gas leaks, blocked drains. Gas Safe registered. Rapid response. Call 0141 123 4567"
        canonical={`${DOMAIN}/plumbing/emergency-plumber`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "24/7 Emergency Plumbing Service",
          "Rapid response 24/7 emergency plumbing and heating service for burst pipes, boiler breakdowns, gas leaks, and blocked drains."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Plumbing Services", url: `${DOMAIN}/plumbing` },
          { name: "Emergency Plumber", url: `${DOMAIN}/plumbing/emergency-plumber` }
        ])}
      />

      <ServicePageTemplate
        hero={{
          title: "Emergency Plumber Glasgow",
          subtitle: "24/7 Emergency Plumbing & Heating Engineers – Rapid Response Across Greater Glasgow",
          description: "Plumbing and heating emergencies can cause serious damage within minutes. Whether it's a burst pipe flooding your property, a boiler breakdown in freezing weather, or a suspected gas leak, immediate professional intervention is critical. Upgrade Boilers & Bathrooms provides rapid response emergency plumbing services in Glasgow, delivered by fully qualified, Gas Safe registered engineers with over 20 years of experience.",
          breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Plumbing', href: '/plumbing' },
            { label: 'Emergency Plumber', href: '/emergency-plumber' }
          ]
        }}

        contentBlocks={[
          {
            heading: "Burst Pipes & Major Water Leaks",
            backgroundColor: 'white',
            imageUrl: "https://images.pexels.com/photos/5632611/pexels-photo-5632611.jpeg?auto=compress&cs=tinysrgb&w=800",
            imagePosition: "right",
            imageAlt: "Burst pipe water leak emergency",
            content: (
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  A burst pipe is one of the most damaging plumbing emergencies. Water can escape at high pressure, soaking floors, ceilings, walls and electrical systems in a very short time.
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-lg mb-3">Common causes of burst pipes in Glasgow:</h3>
                  <ul className="space-y-2 text-slate-700">
                    {[
                      'Frozen pipework during winter',
                      'Corroded copper pipe',
                      'High water pressure',
                      'Poor previous plumbing work',
                      'DIY drilling into hidden pipework'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">What to do immediately:</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      'Turn off your main stopcock',
                      'Switch off your boiler',
                      'Drain the system by opening cold taps',
                      'Contain water where possible'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                        <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Our emergency engineers will:</h4>
                    <ul className="space-y-3 text-slate-700">
                      {[
                        'Locate and isolate the damaged section',
                        'Repair or replace the affected pipework',
                        'Check for secondary leaks',
                        'Advise on drying and further protection'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-slate-900 font-semibold mt-6">Fast response prevents structural damage and mould growth.</p>
                  </div>
                </div>
              </div>
            )
          },
          {
            heading: "Emergency Boiler Breakdown",
            backgroundColor: 'slate-50',
            imageUrl: "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=800",
            imagePosition: "right",
            imageAlt: "Boiler heating system repair",
            content: (
              <div>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  A failed boiler during winter is not just inconvenient — it can become a health and safety issue.
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Signs of a serious boiler fault:</h3>
                  <ul className="space-y-3 text-slate-700">
                    {[
                      'No heating or hot water',
                      'Loud banging or kettling noises',
                      'Water leaking from the boiler',
                      'Error codes on display',
                      'Smell of gas'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Zap className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-lg text-slate-700 mb-6">
                  We diagnose and repair all major brands including Worcester Bosch, Ideal, Viessmann, Baxi and Glow-worm.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="font-bold text-lg mb-3">Where possible, we carry common components such as:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Pressure relief valves',
                      'Expansion vessels',
                      'Pumps',
                      'PCB boards',
                      'Thermostats'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-slate-700 mt-6">
                  If your boiler is beyond repair, we can arrange urgent boiler replacement. See our <Link to="/boilers/repairs" className="text-blue-600 hover:text-blue-800 font-semibold underline">boiler repair</Link> and <Link to="/boilers/installation" className="text-blue-600 hover:text-blue-800 font-semibold underline">boiler installation</Link> services for more details.
                </p>
              </div>
            )
          },
          {
            heading: "Severely Blocked Toilets & Drain Backups",
            backgroundColor: 'white',
            imageUrl: "https://images.pexels.com/photos/3944657/pexels-photo-3944657.jpeg?auto=compress&cs=tinysrgb&w=800",
            imagePosition: "left",
            imageAlt: "Drain and blockage inspection",
            content: (
              <div>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  An overflowing toilet or backed-up drain can create contamination risks and property damage.
                </p>
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Causes of emergency blockages:</h3>
                  <ul className="space-y-3 text-slate-700">
                    {[
                      'Wet wipes and sanitary products',
                      'Heavy paper build-up',
                      'Collapsed drain pipe',
                      'Tree root intrusion',
                      'Foreign objects flushed accidentally'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Our engineers will:</h3>
                  <ul className="space-y-2 text-slate-700">
                    {[
                      'Assess severity',
                      'Attempt clearance using professional equipment',
                      'Identify if deeper drainage inspection is required'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-700 mt-6">
                    Recurring blockages may indicate a larger drain issue requiring CCTV inspection. See our <Link to="/plumbing" className="text-blue-600 hover:text-blue-800 font-semibold underline">plumbing services</Link> for more details.
                  </p>
                </div>
              </div>
            )
          },
          {
            heading: "Gas Leaks & Carbon Monoxide Risk",
            backgroundColor: 'slate-50',
            content: (
              <div className="bg-red-600 text-white rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Gas Leaks & Carbon Monoxide Risk
                    </h2>
                    <p className="text-xl text-red-50 font-semibold">Gas leaks are extremely dangerous and require immediate action.</p>
                  </div>
                </div>
                <div className="bg-red-700 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Signs of a gas leak:</h3>
                  <ul className="space-y-2">
                    {[
                      'Smell of sulphur or "rotten eggs"',
                      'Hissing sound near gas appliance',
                      'Dizziness, nausea or headaches',
                      'Yellow instead of blue boiler flame'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">If you suspect a gas leak:</h3>
                  <ul className="space-y-2">
                    {[
                      'Turn off the gas at the meter (if safe)',
                      'Do not use electrical switches',
                      'Open windows and doors',
                      'Extinguish naked flames',
                      'Call 0800 111 999 immediately'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Flame className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-lg text-red-50">
                  Once safe, contact us to inspect appliances and ensure your system is compliant and secure. All gas work is carried out by fully Gas Safe registered engineers.
                </p>
              </div>
            )
          },
          {
            heading: "Heating System Failure & Radiator Leaks",
            backgroundColor: 'white',
            imageUrl: "https://images.pexels.com/photos/5632633/pexels-photo-5632633.jpeg?auto=compress&cs=tinysrgb&w=800",
            imagePosition: "right",
            imageAlt: "Heating system radiator repair",
            content: (
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Loss of heating can occur due to multiple issues affecting your entire system or individual components.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
                  <p className="font-bold text-lg mb-3">Common heating failures:</p>
                  <ul className="space-y-2 text-slate-700">
                    {[
                      'Circulation pump failure',
                      'Airlocks',
                      'Frozen condensate pipes',
                      'Zone valve faults',
                      'Faulty thermostats',
                      'Low system pressure'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Wrench className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8 mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Radiator leaks often stem from:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Corroded panels',
                      'Loose bleed valves',
                      'Failed TRVs',
                      'Sludge build-up'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                        <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-slate-700">
                  We diagnose heating system faults quickly and aim to restore warmth and hot water as soon as possible. See our <Link to="/heating" className="text-blue-600 hover:text-blue-800 font-semibold underline">heating services</Link> and <Link to="/heating/radiator-repairs" className="text-blue-600 hover:text-blue-800 font-semibold underline">radiator repairs</Link> for more information.
                </p>
              </div>
            )
          },
          {
            heading: "Leaking Appliances & Internal Pipe Failures",
            backgroundColor: 'slate-50',
            content: (
              <div>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Emergency leaks aren't always obvious. We frequently attend properties with:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Washing machine hose bursts',
                    'Dishwasher leaks',
                    'Fridge water line failures',
                    'Leaks beneath kitchen sinks',
                    'Hidden pipework inside walls'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                      <Droplet className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-slate-700 font-semibold mt-8">
                  Early intervention prevents long-term structural damage.
                </p>
              </div>
            )
          },
          {
            heading: "Frozen Pipes in Glasgow Winters",
            backgroundColor: 'white',
            imageUrl: "https://images.pexels.com/photos/4239087/pexels-photo-4239087.jpeg?auto=compress&cs=tinysrgb&w=800",
            imagePosition: "left",
            imageAlt: "Frozen pipes winter emergency",
            content: (
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Frozen pipes are a common emergency during cold snaps. When water freezes, it expands and can split pipework internally — even if no external crack is visible.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">We:</h3>
                  <ul className="space-y-3 text-slate-700">
                    {[
                      'Safely thaw frozen pipes',
                      'Inspect for fractures',
                      'Repair damaged sections',
                      'Advise on insulation improvements'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-900 font-semibold mt-6">Prevention is always cheaper than repair.</p>
                </div>
              </div>
            )
          }
        ]}

        process={{
          heading: "Our Emergency Plumbing Process",
          steps: [
            {
              step: 1,
              title: "Immediate call handling with advice"
            },
            {
              step: 2,
              title: "Rapid dispatch of qualified engineer"
            },
            {
              step: 3,
              title: "Full system assessment"
            },
            {
              step: 4,
              title: "Immediate repair where possible"
            },
            {
              step: 5,
              title: "Safe isolation and follow-up quotation if specialist parts required"
            }
          ]
        }}

        whyChooseUs={
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Choose Upgrade for Emergency Plumbing in Glasgow?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                '20+ Years Experience',
                '24/7 Emergency Response',
                'Gas Safe Registered Engineers',
                'Fully Equipped Service Vehicles',
                'Clear & Transparent Pricing',
                '12-Month Workmanship Guarantee'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-50 p-5 rounded-lg shadow-sm border border-slate-200">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-900 text-white rounded-xl p-8 text-center">
              <p className="text-2xl font-bold">
                We focus on resolving the issue properly — not just applying a temporary fix.
              </p>
            </div>
          </div>
        }

        areas={{
          heading: "Areas We Cover in Glasgow",
          intro: "24/7 emergency response across Greater Glasgow including:",
          areas: [
            'G1', 'G2', 'G3', 'G4', 'G5', 'G11', 'G12', 'G13', 'G20', 'G21', 'G31', 'G32',
            'G41', 'G42', 'G43', 'G44', 'G45', 'G46', 'G51', 'G52', 'G53', 'G61', 'G62', 'G64'
          ]
        }}

        faqs={emergencyPlumberFaqs}

        finalCTA={{
          heading: "Call an Emergency Plumber in Glasgow Now",
          description: "If you're experiencing a plumbing or heating emergency, act quickly. Contact Upgrade Boilers & Bathrooms now for rapid, professional emergency plumbing services across Glasgow.",
          isDark: true
        }}
      />

      <RelatedServices services={emergencyPlumberRelatedServices} title="Other Emergency Services We Provide" />
    </>
  );
}
