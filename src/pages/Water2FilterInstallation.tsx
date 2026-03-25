import { Link } from 'react-router-dom';
import { Phone, Droplet, CheckCircle2, Shield, Leaf, Zap, AlertTriangle, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import AreasWeServe from '../components/AreasWeServe';
import { BUSINESS_INFO } from '../constants/business';

export default function Water2FilterInstallation() {
  return (
    <>
      <SEO
        title="Water2 Filter Installation Glasgow | Under-Sink Drinking Water Filter"
        description="Professional Water2 under-sink water filter installation in Glasgow. Cleaner, better tasting drinking water. Remove chlorine, sediment, heavy metals. £250 fully fitted."
        canonical="https://upgradeboilersandbathrooms.com/plumbing/water2-filter-installation"
      />

      <AreasWeServe />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Water2 Filter Installation Glasgow – FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Does the Water2 filter remove lead?',
                  answer: 'Yes — it significantly reduces lead levels in drinking water. This is particularly important for older properties in Glasgow with lead pipework or solder connections.'
                },
                {
                  question: 'Will it improve taste?',
                  answer: 'Yes — chlorine reduction improves taste and smell significantly. Most customers notice an immediate improvement in their drinking water quality.'
                },
                {
                  question: 'Does it remove bacteria?',
                  answer: 'It provides high-level mechanical reduction of bacteria and parasites through its advanced multi-stage filtration system.'
                },
                {
                  question: 'How long does installation take?',
                  answer: 'Usually under 60 minutes. We aim for quick, clean installations with minimal disruption to your kitchen.'
                },
                {
                  question: 'Do I need a plumber to install it?',
                  answer: 'Yes — professional installation ensures correct connection to your water supply, leak-free fitting, and proper system testing before we leave.'
                },
                {
                  question: 'Can I install it myself?',
                  answer: 'While some customers attempt DIY installation, we recommend professional fitting to ensure proper connections, correct pressure settings, and to avoid potential water damage.'
                },
                {
                  question: 'What about water pressure after installation?',
                  answer: 'Water pressure typically remains excellent. We test the system before leaving to ensure optimal flow and pressure are maintained.'
                },
                {
                  question: 'How much do replacement filters cost?',
                  answer: 'Replacement cartridges are very affordable. Contact us for current pricing — we can also supply them directly or arrange replacement at your next visit.'
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
            Ready to Upgrade Your Drinking Water?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If you want cleaner, better tasting tap water in your Glasgow home, contact Upgrade Boilers & Bathrooms today. Professional installation. Cleaner water. Better taste.
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
