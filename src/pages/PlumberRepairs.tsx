import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, AlertTriangle, CheckCircle2, MapPin, FileText, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { BUSINESS_INFO } from '../constants/business';
import { plumbingRepairsFaqs } from '../lib/links';

export default function PlumberRepairs() {
  return (
    <>
      <SEO
        title="Plumbing Repairs Glasgow | Fast, Reliable Repairs from Qualified Engineers"
        description="Professional plumbing repairs in Glasgow. Leaking pipes, broken toilets, faulty showers, radiator issues. 90% fixed first visit. 12-month guarantee. Call 0141 123 4567"
        canonical="https://upgradeboilersandbathrooms.com/plumbing/plumber-repairs"
      />

      <ServicePageTemplate
        hero={{
          title: "Plumbing Repairs in Glasgow",
          subtitle: "Fast, reliable plumbing repairs across Glasgow. From leaking pipes and broken toilets to faulty showers and radiator issues, our experienced plumbing and heating engineers deliver long-lasting solutions with transparent pricing and a 12-month workmanship guarantee.",
          breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Plumbing', href: '/plumbing' },
            { label: 'Repairs', href: '/plumbing/plumber-repairs' }
          ]
        }}

        introduction={
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Professional Plumbing Repairs Across Glasgow
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Plumbing problems rarely give you warning. A dripping pipe can turn into water damage. A broken toilet can disrupt your whole household. Low water pressure can make daily routines frustrating.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Our Glasgow plumbing repair team handles everything from minor leaks to complex system faults. We work across traditional tenements, sandstone townhouses, new-build flats and family homes throughout the city.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              If you're facing an urgent issue, visit our <Link to="/emergency-plumber" className="text-blue-600 hover:text-blue-800 font-semibold underline">Emergency Plumber Glasgow</Link> page for immediate assistance.
            </p>
          </div>
        }

        problems={{
          heading: "Types of Plumbing Repairs We Handle",
          intro: "Bathrooms, kitchens, and heating systems are the most common sources of plumbing call-outs. We specialise in all repair types across Glasgow properties.",
          problems: [
            {
              title: "Bathroom Plumbing Repairs",
              description: "Toilet repairs, shower issues, tap problems, and leaking seals. We diagnose and repair efficiently to prevent further damage."
            },
            {
              title: "Shower Repairs",
              description: "Low pressure, fluctuating temperatures, leaking trays, faulty mixer valves or electric shower issues. We repair most systems on the first visit."
            },
            {
              title: "Tap Repairs",
              description: "Dripping taps, stiff handles, worn cartridges and poor water flow. We repair or replace faulty components to restore proper function."
            },
            {
              title: "Hot Water & Tank Repairs",
              description: "Hot water cylinders, unvented systems, cold water tanks, immersion heaters, expansion vessels and faulty thermostats."
            },
            {
              title: "Burst Pipe Repairs",
              description: "Fast isolation and permanent repair solutions to prevent further water damage to your property."
            },
            {
              title: "Lead Pipe Repairs",
              description: "Temporary and permanent solutions, with advice on full replacement where necessary."
            }
          ],
          gridColumns: 2
        }}

        contentBlocks={[
          {
            heading: "Pipework & Leak Repairs",
            backgroundColor: 'slate-50',
            content: (
              <div>
                <p className="mb-6 font-semibold">
                  Older Glasgow properties often suffer from ageing pipework and corrosion.
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-red-600 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Burst Pipe Repairs</h3>
                    <p className="text-slate-700">Fast isolation and permanent repair solutions.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-l-4 border-green-600 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Leak Detection</h3>
                    <p className="text-slate-700">Hidden leaks behind walls or under floors located and resolved with minimal disruption.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Lead Pipe Repairs</h3>
                    <p className="text-slate-700">Temporary and permanent solutions, with advice on full replacement where necessary.</p>
                    <p className="text-slate-700 mt-4">Learn more about <Link to="/lead-pipe-replacement" className="text-blue-600 hover:text-blue-800 font-semibold underline">lead pipe replacement services</Link>.</p>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mt-6">
                  <p className="text-slate-700 leading-relaxed">
                    For major water emergencies, visit our <Link to="/emergency-plumber" className="text-blue-600 hover:text-blue-800 font-semibold underline">24/7 Emergency Plumbing</Link> page.
                  </p>
                </div>
              </div>
            )
          },
          {
            heading: "Radiator & Heating System Repairs",
            backgroundColor: 'white',
            content: (
              <div>
                <p className="mb-6 font-semibold">
                  Cold spots? Noisy pipes? Radiator leaks? We repair:
                </p>
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 mb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Radiator valves',
                      'Pressure issues',
                      'Leaking joints',
                      'System balancing faults'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  If your boiler is causing the issue, see our <Link to="/heating" className="text-blue-600 hover:text-blue-800 font-semibold underline">Central Heating Services in Glasgow</Link> page.
                </p>
              </div>
            )
          },
          {
            heading: "Drainage & Appliance Plumbing Repairs",
            backgroundColor: 'slate-50',
            content: (
              <div>
                <p className="mb-6 font-semibold">
                  Blocked waste pipes and appliance leaks are common in both flats and family homes.
                </p>
                <div className="bg-white rounded-xl p-8 border-2 border-slate-200 shadow-sm">
                  <p className="text-lg font-semibold text-slate-900 mb-6">We repair:</p>
                  <div className="space-y-3">
                    {[
                      'Waste pipe leaks',
                      'Appliance water feed issues',
                      'Washing machine plumbing faults',
                      'Dishwasher leaks',
                      'External pipe problems'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          },
          {
            heading: "Plumbing Repair Costs in Glasgow",
            backgroundColor: 'white',
            content: (
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Standard plumbing repair visits start from £110.
                </p>
                <div className="bg-white rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-lg font-semibold text-slate-900 mb-6">This typically covers:</p>
                  <div className="space-y-3">
                    {[
                      'Diagnosis',
                      'Minor repair adjustments',
                      'Standard labour time'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  More complex repairs are quoted clearly before work proceeds. We believe in transparent pricing and honest advice.
                </p>
              </div>
            )
          },
          {
            heading: "Why Choose Our Glasgow Plumbing Team?",
            backgroundColor: 'slate-50',
            content: (
              <div>
                <div className="space-y-3 mb-8">
                  {[
                    'WaterSafe registered',
                    'SNIPEF accredited',
                    'Fully insured',
                    'Experienced with Glasgow property types',
                    'Backed by strong local customer reviews'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-lg border border-blue-200">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  We understand the common plumbing issues found in tenements, older sandstone buildings and modern developments across Glasgow.
                </p>
                <p className="text-lg text-slate-700 font-semibold">
                  All workmanship is covered by a 12-month guarantee.
                </p>
              </div>
            )
          }
        ]}

        faqs={plumbingRepairsFaqs}

        finalCTA={{
          heading: "Need a Reliable Plumbing Repair Specialist in Glasgow?",
          description: "Call now or book online for fast, professional service from experienced local engineers.",
          primaryButtonText: BUSINESS_INFO.phone,
          secondaryButtonText: 'Book Online',
          isDark: true
        }}
      />
    </>
  );
}
