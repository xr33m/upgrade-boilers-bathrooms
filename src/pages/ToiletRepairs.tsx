import { Link } from 'react-router-dom';
import { Phone, AlertTriangle, Droplet, Clock, CheckCircle2, Wrench, MapPin, PhoneCall } from 'lucide-react';
import SEO from '../components/SEO';
import AreasWeServe from '../components/AreasWeServe';
import { BUSINESS_INFO } from '../constants/business';

export default function ToiletRepairs() {
  return (
    <>
      <SEO
        title="Toilet Repairs Glasgow | Emergency Toilet Repair Plumbers for Blocked, Leaking & Running Toilets"
        description="Professional toilet repairs in Glasgow. Fix blocked, leaking, running & overflowing toilets. 24/7 emergency service. Gas Safe registered plumbers. Call 0141 123 4567"
        canonical="https://upgradeboilersandbathrooms.com/plumbing/toilet-repairs"
      />

      <AreasWeServe />

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Toilet Repairs Glasgow – Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'How quickly can you repair my toilet?',
                  answer: 'We aim to attend as quickly as possible, with many repairs completed the same day.'
                },
                {
                  question: 'Why does my toilet keep running after flushing?',
                  answer: 'This is usually caused by a faulty fill valve, flush valve or worn washer inside the cistern.'
                },
                {
                  question: 'Can you fix a blocked toilet?',
                  answer: 'Yes. Most minor blockages can be cleared quickly. More serious drainage issues may require additional investigation.'
                },
                {
                  question: 'How long does a toilet repair take?',
                  answer: 'Most standard repairs are completed within 1–2 hours.'
                },
                {
                  question: 'Do you offer emergency toilet repair in Glasgow?',
                  answer: 'Yes. We provide urgent plumbing services for serious toilet faults.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book a Toilet Repair in Glasgow
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If your toilet is leaking, blocked, overflowing or not flushing properly, contact us today for professional toilet repairs in Glasgow.
          </p>
          <p className="text-2xl font-bold mb-8">Fast diagnosis. Clear pricing. Reliable workmanship.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
