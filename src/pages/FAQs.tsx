import { Link } from 'react-router-dom';
import { Phone, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SEO, { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-slate-50 hover:bg-slate-100 transition flex justify-between items-center gap-4"
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          <p className="text-slate-700">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const faqs = [
    { question: "How often should I service my boiler?", answer: "We recommend annual boiler servicing to maintain efficiency, safety, and warranty validity. Regular servicing can prevent breakdowns, reduce energy bills, and extend your boiler's lifespan." },
    { question: "How long does a boiler installation take?", answer: "A standard boiler replacement typically takes 1-2 days including removal, installation, connection, and testing." },
    { question: "What is the lifespan of a boiler?", answer: "Modern boilers typically last 10-15 years with proper maintenance. Regular servicing can help maximize your boiler's lifespan." },
    { question: "Why is my boiler making strange noises?", answer: "Common causes include air in the system (gurgling), limescale buildup (kettling), pump issues (humming), or low water pressure (banging)." },
    { question: "What should I do if my boiler breaks down?", answer: "Check thermostat settings and boiler pressure. If problems persist, call us for 24/7 emergency callout service." },
    { question: "How quickly can you respond to emergencies?", answer: "We offer 24/7 emergency plumbing services and aim to reach you within 1-2 hours for urgent issues." },
    { question: "Do you charge a callout fee?", answer: "For scheduled appointments, there's no callout fee. Emergency charges may apply but are waived if you proceed with repairs." },
    { question: "Are your engineers Gas Safe registered?", answer: "Yes, all our engineers are fully Gas Safe registered and carry ID cards at all times." },
    { question: "What is a Gas Safety Certificate?", answer: "A Gas Safety Certificate (CP12) confirms all gas appliances have been checked and are safe. Landlords must obtain one annually." },
    { question: "How do you charge for services?", answer: "We offer fixed prices for standard services and provide transparent quotes before starting work." }
  ];

  return (
    <>
      <SEO
        title="Plumbing FAQs Glasgow | Answers to Common Heating & Boiler Questions"
        description="Frequently asked questions about plumbing, heating, boilers and gas services in Glasgow. Get answers from our Gas Safe registered engineers about installation, repairs, emergency callouts and pricing."
        canonical={`${DOMAIN}/faqs`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO schema={generateFAQSchema(faqs)} />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "FAQs", url: `${DOMAIN}/faqs` }
        ])}
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about our plumbing and heating services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Boiler & Heating FAQs</h2>
            <div className="space-y-4 mb-12">
              <FAQItem
                question="How often should I service my boiler?"
                answer="We recommend annual boiler servicing to maintain efficiency, safety, and warranty validity. Regular servicing can prevent breakdowns, reduce energy bills, and extend your boiler's lifespan. Many manufacturers require annual servicing to keep warranties active."
              />
              <FAQItem
                question="How long does a boiler installation take?"
                answer="A standard boiler replacement typically takes 1-2 days. This includes removing the old boiler, installing the new one, connecting pipework, and testing the system. More complex installations with significant pipework changes may take longer."
              />
              <FAQItem
                question="What is the lifespan of a boiler?"
                answer="Modern boilers typically last 10-15 years with proper maintenance. Regular servicing and prompt repairs can help maximize your boiler's lifespan. If your boiler is over 10 years old and requiring frequent repairs, replacement may be more cost-effective."
              />
              <FAQItem
                question="Why is my boiler making strange noises?"
                answer="Common causes include air in the system (gurgling), limescale buildup (kettling), pump issues (humming), or low water pressure (banging). These issues require professional diagnosis and repair. Contact us for a thorough inspection."
              />
              <FAQItem
                question="What should I do if my boiler breaks down?"
                answer="First, check the thermostat settings and boiler pressure. Ensure the pilot light is on and try resetting the boiler. If the problem persists, call us immediately. We offer 24/7 emergency callout service for urgent heating issues."
              />
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Plumbing FAQs</h2>
            <div className="space-y-4 mb-12">
              <FAQItem
                question="How quickly can you respond to emergencies?"
                answer="We offer 24/7 emergency plumbing services and aim to reach you within 1-2 hours for urgent issues like burst pipes, major leaks, or complete heating system failures. Call us immediately for emergency assistance."
              />
              <FAQItem
                question="Do you charge a callout fee?"
                answer="For scheduled appointments, there's no callout fee. Emergency callouts may have a service charge, but this is waived if you proceed with the repair work. We always provide transparent pricing before starting any work."
              />
              <FAQItem
                question="How do I know if I have a water leak?"
                answer="Signs include unexpectedly high water bills, damp patches on walls or ceilings, reduced water pressure, running water sounds when taps are off, or a constantly running water meter. If you suspect a leak, contact us immediately to prevent damage."
              />
              <FAQItem
                question="Can you help with insurance claims?"
                answer="Yes, we can provide detailed reports and documentation for insurance claims related to water damage, burst pipes, or boiler failures. We work with most insurance companies and can liaise directly with them if needed."
              />
              <FAQItem
                question="Do you offer guarantees on your work?"
                answer="Yes, all our work is fully guaranteed. We provide warranties on parts and labor, with specific terms depending on the type of work completed. Installation work typically comes with a 12-month labor guarantee, and parts carry manufacturer warranties."
              />
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Gas Safety FAQs</h2>
            <div className="space-y-4 mb-12">
              <FAQItem
                question="Are your engineers Gas Safe registered?"
                answer="Yes, all our engineers are fully Gas Safe registered and carry their ID cards at all times. Gas Safe registration is a legal requirement for anyone working on gas appliances in the UK. You can verify our registration on the Gas Safe Register website."
              />
              <FAQItem
                question="What is a Gas Safety Certificate?"
                answer="A Gas Safety Certificate (CP12) is a legal document that confirms all gas appliances in a property have been checked and are safe to use. Landlords are legally required to obtain one annually. We provide Gas Safety Certificates for landlords and homeowners."
              />
              <FAQItem
                question="What should I do if I smell gas?"
                answer="If you smell gas: Turn off the gas supply at the meter, open windows and doors, don't use electrical switches or naked flames, evacuate the property if necessary, and call the National Gas Emergency Service on 0800 111 999. Then contact us for repairs once the emergency service gives the all-clear."
              />
              <FAQItem
                question="How often do gas appliances need checking?"
                answer="Gas appliances should be serviced annually. Landlords must have an annual Gas Safety Check by law. Regular servicing ensures appliances operate safely and efficiently, preventing dangerous carbon monoxide leaks and other hazards."
              />
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Payment & Pricing FAQs</h2>
            <div className="space-y-4 mb-12">
              <FAQItem
                question="How do you charge for services?"
                answer="Pricing depends on the type of work. We offer fixed prices for standard services like boiler servicing and installations. For repairs and diagnostics, we provide a transparent quote before starting work. There are no hidden fees."
              />
              <FAQItem
                question="What payment methods do you accept?"
                answer="We accept cash, bank transfers, and all major credit and debit cards. Payment is typically due on completion of work. For larger projects, we can arrange payment plans or stage payments."
              />
              <FAQItem
                question="Do you offer free quotes?"
                answer="Yes, we provide free, no-obligation quotes for all work. For complex projects, we'll arrange a site visit to assess your requirements and provide an accurate quotation."
              />
              <FAQItem
                question="Are there any hidden costs?"
                answer="No, we believe in transparent pricing. Our quotes include all labor, materials, and disposal costs. Any additional work required will be discussed and approved by you before we proceed."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Give us a call and we'll be happy to help
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
