import { Link } from 'react-router-dom';
import { Phone, Droplet, CheckCircle2, Wrench, AlertTriangle, Zap, Shield, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import AreasWeServe from '../components/AreasWeServe';
import { BUSINESS_INFO } from '../constants/business';

export default function TapRepairs() {
  return (
    <>
      <SEO
        title="Tap Repairs & Installation Glasgow | Dripping, Leaking & Mixer Tap Specialists"
        description="Professional tap repairs in Glasgow. Fix dripping taps, mixer taps, kitchen & bathroom taps. Tap installation, washer & cartridge replacement. From £100."
        canonical="https://upgradeboilersandbathrooms.com/plumbing/tap-repairs"
      />

      <AreasWeServe />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Tap Repairs Glasgow – Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Why is my tap dripping?',
                  answer: 'Most commonly due to a worn washer or failed ceramic cartridge. Other causes include damage to the valve seat or limescale build-up inside the mechanism.'
                },
                {
                  question: 'Can I replace a tap myself?',
                  answer: 'Yes, if you\'re confident and can isolate the water fully. However, seized fittings and restricted access often make professional installation safer and cleaner.'
                },
                {
                  question: 'Why does my tap have low pressure?',
                  answer: 'Check other taps first to see if it\'s a wider plumbing issue. If it\'s isolated to one tap, it\'s usually a washer, cartridge, blocked aerator, or partially closed isolation valve.'
                },
                {
                  question: 'How long do taps last?',
                  answer: 'Typically 15–25 years depending on quality and usage. Quality branded taps with warranties last longer and are easier to maintain.'
                },
                {
                  question: 'Need a Tap Repaired in Glasgow?',
                  answer: 'If your tap is dripping, leaking or needs replacing, contact Upgrade Boilers & Bathrooms today. Fast repairs. Clean installation. Reliable plumbing.'
                },
                {
                  question: 'What about water damage under my sink?',
                  answer: 'Leaking connections or taps can cause significant damage to cabinets and flooring. We diagnose the source quickly and repair it before further damage occurs.'
                },
                {
                  question: 'Do you work on weekends and evenings?',
                  answer: 'We aim to accommodate emergency repairs where possible. Call us to discuss your specific situation and availability.'
                },
                {
                  question: 'Is there a call-out charge?',
                  answer: 'We discuss pricing transparently before work begins. Most standard tap repairs are charged as a flat rate once diagnosed.'
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

      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Tap Repaired in Glasgow?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If your tap is dripping, leaking or needs replaced, contact Upgrade Boilers & Bathrooms today. Fast repairs. Clean installation. Reliable plumbing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
