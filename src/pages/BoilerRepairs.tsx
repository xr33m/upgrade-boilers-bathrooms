import React from 'react';
import { CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import ServicePageTemplate from '../components/ServicePageTemplate';
import ProcessSection from '../components/ProcessSection';
import RelatedServices from '../components/RelatedServices';
import { boilerRepairsRelatedServices, boilerRepairsFaqs } from '../lib/links';
import GasSafeInline from '../components/GasSafeInline';

export default function BoilerRepairs() {
  return (
    <>
      <SEO
        title="Boiler Repairs Glasgow | 24/7 Emergency Boiler Repair Service"
        description="Fast boiler repairs in Glasgow. 24/7 emergency service. Gas Safe engineers repair all boiler makes. Same-day appointments. 12 month guarantee. Call 0141 123 4567"
        canonical={`${DOMAIN}/boilers/repairs`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Boiler Repairs",
          "24/7 emergency boiler repair service by Gas Safe engineers. Fast repairs for all boiler makes and models with 12 month guarantees."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Boiler Services", url: `${DOMAIN}/boilers` },
          { name: "Boiler Repairs", url: `${DOMAIN}/boilers/repairs` }
        ])}
      />

      <ServicePageTemplate
        hero={{
          title: "Emergency Boiler Repairs in Glasgow",
          subtitle: <span>Fast, reliable boiler repairs from <span className="inline-flex items-center gap-1"><GasSafeInline size="sm" className="brightness-0 invert" /> Gas Safe registered</span> engineers. Available 24/7 for emergency breakdowns. Same-day appointments and 12 month guarantee on all repairs.</span>,
          breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Boilers', href: '/boilers' },
            { label: 'Repairs', href: '/boilers/repairs' }
          ]
        }}

        introduction={
          <div>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-red-900 mb-2">Boiler Broken Down?</h2>
                  <p className="text-slate-700">
                    Don't suffer in the cold. Our emergency boiler repair service is available 24 hours a day, 7 days a week. We aim to have an engineer with you within 2 hours for emergency call-outs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }

        problems={{
          heading: "Common Boiler Problems We Fix",
          problems: [
            {
              icon: <Wrench className="w-6 h-6 text-primary" />,
              title: "No Heating or Hot Water",
              description: "Caused by thermostat issues, airlocks, broken diaphragms, or faulty motorized valves."
            },
            {
              icon: <Wrench className="w-6 h-6 text-primary" />,
              title: "Boiler Losing Pressure",
              description: "Usually caused by leaks in the system or faulty pressure relief valves."
            },
            {
              icon: <Wrench className="w-6 h-6 text-primary" />,
              title: "Strange Noises",
              description: "Banging, whistling, or gurgling sounds from kettling, air in system, or pump failure."
            },
            {
              icon: <Wrench className="w-6 h-6 text-primary" />,
              title: "Boiler Keeps Switching Off",
              description: "Low pressure, thermostat problems, closed valves, or pump circulation issues."
            },
            {
              icon: <Wrench className="w-6 h-6 text-primary" />,
              title: "Radiators Not Heating",
              description: "Caused by sludge buildup, air in radiators, or faulty circulation pump."
            },
            {
              icon: <Wrench className="w-6 h-6 text-primary" />,
              title: "Boiler Leaking Water",
              description: "Corroded pipes, damaged seals, or faulty pressure valves need immediate attention."
            },
            {
              icon: <Wrench className="w-6 h-6 text-primary" />,
              title: "Error Codes Displayed",
              description: "Fault codes indicate specific problems. We diagnose and fix all error codes quickly."
            },
            {
              icon: <Wrench className="w-6 h-6 text-primary" />,
              title: "Pilot Light Goes Out",
              description: "Broken thermocouples, debris in pilot light, or draught issues on older boilers."
            }
          ],
          gridColumns: 2
        }}

        contentBlocks={[
          {
            heading: "Our Boiler Repair Service",
            backgroundColor: 'white',
            content: (
              <div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-primary-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Fast Response</h3>
                    <p className="text-slate-700">Emergency call-outs within 2 hours. Same-day appointments for non-urgent repairs.</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Fixed Right First Time</h3>
                    <p className="text-slate-700">Our vans stock common parts so we can complete most repairs on the first visit.</p>
                  </div>
                  <div className="text-center p-6 bg-primary-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">12 Month Guarantee</h3>
                    <p className="text-slate-700">All repairs backed by our comprehensive 12 month parts and labour warranty.</p>
                  </div>
                </div>

                <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">Transparent Pricing</h3>
                  <p className="text-slate-700 mb-4">
                    We provide upfront quotes before starting any work. No hidden costs, no surprises. You'll know exactly what you're paying before we begin the repair.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Standard call-out fee: £60 (Mon-Fri, 8am-6pm)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Evening & weekend call-out: £85</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Emergency call-out: £120 (24/7 availability)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Call-out fee deducted if you proceed with repair</span>
                    </li>
                  </ul>
                </div>
              </div>
            )
          },
          {
            heading: "All Boiler Makes & Models Repaired",
            backgroundColor: 'slate-50',
            content: (
              <div>
                <p className="mb-6">
                  Our Gas Safe registered engineers are trained and experienced in repairing all major boiler brands:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Worcester Bosch', 'Vaillant', 'Ideal', 'Baxi', 'Glow-worm', 'Potterton', 'Viessmann', 'Alpha'].map(brand => (
                    <div key={brand} className="bg-white p-4 rounded-lg text-center font-semibold text-slate-700 border border-slate-200">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            heading: "When to Repair vs Replace Your Boiler",
            backgroundColor: 'white',
            content: (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-green-900">Consider Repairing If:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Your boiler is less than 8 years old</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>This is the first major fault</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>The repair cost is under £400</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Your boiler has been regularly serviced</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-900">Consider Replacing If:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Your boiler is over 12 years old</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Frequent breakdowns and repairs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Repair costs exceed £500</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Rising energy bills from inefficiency</span>
                    </li>
                  </ul>
                </div>
              </div>
            )
          }
        ]}

        process={{
          heading: "How Upgrade Boilers & Bathrooms Repairs Your Boiler",
          subtitle: "Emergency response with transparent pricing and guaranteed workmanship",
          steps: [
            {
              step: 1,
              title: "Emergency Call",
              description: "Contact us 24/7 for immediate help. Our team assesses your situation and dispatches an engineer within 2 hours for emergency calls."
            },
            {
              step: 2,
              title: "Professional Diagnosis",
              description: "Our Gas Safe engineer arrives with diagnostic equipment to identify the exact problem with your boiler quickly and accurately."
            },
            {
              step: 3,
              title: "Transparent Quote",
              description: "We explain the issue and provide a fixed price before work begins. No surprises, no hidden fees, just clear and honest pricing."
            },
            {
              step: 4,
              title: "Expert Repair",
              description: "We complete the repair using quality parts and professional techniques. Most repairs are completed on the first visit with a 12-month guarantee."
            }
          ]
        }}

        faqs={boilerRepairsFaqs}

        finalCTA={{
          heading: "Need Emergency Boiler Repair?",
          description: "Don't wait in the cold. Our emergency engineers are available 24/7 to get your heating back on quickly.",
          isDark: true
        }}
      />

      <RelatedServices services={boilerRepairsRelatedServices} title="Prevent Future Breakdowns with Our Services" />
    </>
  );
}
