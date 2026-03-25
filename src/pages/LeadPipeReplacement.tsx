import { Link } from 'react-router-dom';
import { Phone, AlertTriangle, CheckCircle2, Shield, Droplet, Wrench, MapPin, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function LeadPipeReplacement() {
  return (
    <>
      <SEO
        title="Lead Pipe Replacement & Repairs Glasgow | Safe Lead Water Pipe Removal"
        description="Lead pipe replacement and repairs in Glasgow. Safe removal and replacement of lead water pipes. Lead testing services. Protect your health. Call 0141 123 4567"
        canonical="https://upgradeboilersandbathrooms.com/plumbing/lead-pipe-replacement"
      />

      <section className="bg-gradient-to-br from-amber-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-amber-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/plumbing" className="hover:text-white">Plumbing</Link>
              <span className="mx-2">/</span>
              <span>Lead Pipe Replacement</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Lead Pipe Replacement and Repairs
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-6 font-semibold">
              Safe Lead Water Pipe Removal & Replacement for Older Glasgow Properties
            </p>
            <p className="text-lg text-amber-50 mb-8 leading-relaxed max-w-2xl">
              Many older Glasgow properties have lead pipes. If you've found a leaking lead pipe or are looking to upgrade your ageing plumbing, our local plumbers can help. Get in touch today for lead pipe replacement or repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-amber-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-0.5" />
                  <h2 className="text-2xl font-bold text-red-900">Why Replace Lead Pipes?</h2>
                </div>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  Lead pipes can contaminate your drinking water, posing serious health risks especially to children and pregnant women. Lead exposure can affect brain development, cause learning difficulties, and lead to other health problems.
                </p>
                <p className="text-slate-700 font-semibold mb-4">
                  If your property was built before 1970, you may have lead water pipes that should be replaced.
                </p>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <p className="text-slate-700 text-sm">
                    Not all lead pipe concerns require immediate replacement. If you're unsure about the safety of your water supply, we can arrange for lead water testing to be completed by one of our plumbers.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632407/pexels-photo-5632407.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Lead water pipe identification and removal"
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
              Got a Leaking Lead Water Pipe? Here's What to Do
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632408/pexels-photo-5632408.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional lead pipe leak repair"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Most of the lead pipework jobs we handle involve repairs, not full replacements. Whether it's a leak under the kitchen floor or a split pipe in your Glasgow tenement, our plumbers are experienced in providing fast, effective lead pipe leak repairs.
                </p>
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">We use proven repair methods to:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Stop leaks and restore water flow</li>
                    <li>• Keep disruption to a minimum</li>
                    <li>• Access and patch pipework without major excavation</li>
                  </ul>
                </div>
                <p className="text-slate-700 font-semibold mb-4">
                  We're always upfront: repairs are often a temporary solution. If the pipework is deteriorating, we'll let you know and advise when replacement is the better long-term option.
                </p>
                <p className="text-slate-700 text-sm">
                  In some cases, lead pipes are connected to older cast iron drainage systems. If you're dealing with both, we can also assist with cast iron pipework repairs.
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
              When Should You Replace a Lead Water Pipe?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Replacing lead pipes doesn't mean tearing your house apart. Our team uses non-invasive methods wherever possible and always explains the process clearly before work begins.
                </p>
                <div className="bg-amber-50 rounded-xl p-8 border-2 border-amber-200">
                  <p className="text-slate-700 mb-4 font-semibold">What to expect:</p>
                  <ol className="space-y-3 text-slate-700">
                    {[
                      'On-site assessment of your pipework and supply route',
                      'Safe removal and disposal of any lead materials',
                      'Installation of new WRAS-approved plastic or copper pipework',
                      'Reconnection to your internal water system with minimal disruption',
                      'Full testing and certification'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white rounded-full text-sm font-bold flex-shrink-0">{index + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632409/pexels-photo-5632409.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="New lead-free water pipe installation process"
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
              Installing Lead-Free Pipework in Older Glasgow Homes
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632410/pexels-photo-5632410.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Lead water tank removal and replacement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Old lead cold water tanks may still be found in attic spaces or above bathrooms in many Glasgow properties. These are a serious concern for drinking water safety and should be removed immediately.
                </p>
                <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">We can safely:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Disconnect and remove lead water storage tanks</li>
                    <li>• Replace with sealed, insulated plastic water tanks</li>
                    <li>• Install WRAS-standard compliant systems</li>
                  </ul>
                </div>
                <p className="text-slate-700 font-semibold">
                  For older properties in Glasgow, we can install a completely new water supply line using modern, WRAS-approved materials.
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
              How to Identify Lead Pipes
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                { title: 'Color', desc: 'Lead pipes are dull grey and don\'t shine when scratched' },
                { title: 'Softness', desc: 'Lead is soft and can be easily scratched with a coin' },
                { title: 'Age', desc: 'Homes built before 1970 are more likely to have lead pipes' },
                { title: 'Joints', desc: 'Lead pipes have bulbous, wiped solder joints' },
                { title: 'Location', desc: 'Check pipes entering your property and under kitchen sinks' },
                { title: 'Testing', desc: 'We can arrange professional lead water testing if you\'re unsure' }
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{index + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-slate-700">{item.desc}</p>
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
              Do You Need to Test Your Water Supply for Lead?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Not all lead pipe concerns require immediate replacement to new plastic or copper pipes. If you're unsure about the safety of your water supply, we can arrange for lead water test to be completed by one of our plumbers.
                </p>
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">Professional lead testing is especially helpful if:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Your pipework is concealed</li>
                    <li>• You're unsure what material was used</li>
                    <li>• You're a landlord ensuring compliance</li>
                    <li>• You have young children or pregnant women</li>
                  </ul>
                </div>
                <p className="text-slate-700 text-sm font-semibold">
                  We offer professional lead testing services to check for the presence of lead and provide clear guidance based on the results.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632411/pexels-photo-5632411.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Lead water testing and analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Choose Upgrade for Lead Pipe Replacement in Glasgow?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-amber-50 rounded-xl p-8 border-2 border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900">Certified Specialists</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  We're WaterSafe approved plumbers and part of SNIPEF. Our plumbers have been thoroughly assessed to ensure quality repairs and replacement of lead pipes.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Over 50 years combined experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Fully insured work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Clear quotes with no surprises</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900">What You Get</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Not every plumber wants to, or can, fix or replace lead pipes. You're in safe hands with us.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Honest advice from local experts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Rapid response for leaks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>12-month workmanship guarantee</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Our Lead Pipe Replacement Process
              </h3>
              <ol className="space-y-4">
                {[
                  'On-site assessment of your pipework and supply route',
                  'Safe removal and disposal of any lead materials',
                  'Installation of new WRAS-approved plastic or copper pipework',
                  'Reconnection to your internal water system with minimal disruption',
                  'Full testing and certification of the new system'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-amber-600 text-white rounded-full font-bold flex-shrink-0">{index + 1}</span>
                    <span className="text-lg text-slate-700 mt-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Lead Pipe Repairs & Replacement – Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'How do I know if I have lead pipes?',
                  answer: 'If your home was built before 1970 and has grey or dull silver pipework, it could be lead. We can inspect and confirm one way or the other. You can send us a picture via WhatsApp and let one of our Glasgow plumbers take a look for free.'
                },
                {
                  question: 'Are lead pipes illegal?',
                  answer: 'Not currently illegal, but they\'re no longer approved for drinking water. Any new work must meet modern regulations.'
                },
                {
                  question: 'Is my landlord responsible for lead pipes?',
                  answer: 'If you\'re renting out a property, you must ensure safe drinking water. Lead pipe replacement is often needed for compliance. Scottish Water may also be able to advise.'
                },
                {
                  question: 'Are your repairs guaranteed?',
                  answer: 'Yes, all work is covered by our 12 month workmanship guarantee and is carried out by approved engineers.'
                },
                {
                  question: 'What do you replace lead pipes with?',
                  answer: 'We typically use WRAS-approved plastic or copper pipe, depending on site conditions and layout.'
                },
                {
                  question: 'Is lead pipe replacement urgent?',
                  answer: 'Lead exposure is a serious health concern, especially for children and pregnant women. We recommend prompt assessment and replacement.'
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

      <section className="py-12 md:py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Concerned About Lead Pipes?
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Get a free assessment and quote for lead pipe replacement. Protect your family's health today. Contact Upgrade Boilers & Bathrooms for professional lead pipe repairs and replacements across Glasgow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-amber-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
