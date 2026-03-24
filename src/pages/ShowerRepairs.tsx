import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, AlertTriangle, Droplet, Shield, Wrench, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants/business';

export default function ShowerRepairs() {
  return (
    <>
      <SEO
        title="Shower Repairs & Installation Glasgow | Fix Leaking & Broken Showers"
        description="Professional shower repairs & installation in Glasgow. Fix leaking showers, low pressure, temperature issues, electric showers. Expert repairs for Mira, Triton, Bristan. Call 0141 123 4567"
        canonical="https://upgradeboilersandbathrooms.com/plumbing/shower-repairs"
      />

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-cyan-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/plumbing" className="hover:text-white">Plumbing</Link>
              <span className="mx-2">/</span>
              <span>Shower Repairs</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Shower Repairs and Installation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-6 font-semibold">
              Professional Shower Repair & Installation for Glasgow Homes
            </p>
            <p className="text-lg text-cyan-50 mb-8 leading-relaxed max-w-2xl">
              Need to get your shower repaired or a new one installed? Issues like a leaking shower, a problematic shower head, needing a shower pump replaced or even installing a replacement shower? Upgrade are reliable local Glasgow plumbers, and are experts in repairing and installing showers from Mira, Triton, Bristan, Ideal Standard, Grohe, and many more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-cyan-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              What Types of Shower Repairs Are We Called Out To?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Are you finding that your shower isn't as hot as it used to be? Have you noticed your shower's water pressure dropping? Maybe you're dealing with a leak or perhaps you're thinking of upgrading to a new rainfall showerhead. Whatever you're looking for, it's important to find the right local plumber.
                </p>
                <div className="bg-cyan-50 rounded-xl p-8 border-2 border-cyan-200 mb-6">
                  <p className="text-slate-700 font-semibold mb-4">Glasgow based Upgrade Plumbers are:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Fully insured</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>SNIPEF registered</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Ready to help with all shower issues</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3407857/pexels-photo-3407857.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional shower repair and maintenance"
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
              Shower Head Replacements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3407858/pexels-photo-3407858.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Shower head replacement options"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  When replacing a shower head, please bear in mind that there are lots of different designs on the market to choose from, so it's important to find the right fit.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">Good news:</p>
                  <p className="text-slate-700 mb-4">
                    Replacing a shower head is normally quite straightforward and can be done without any specific tools or plumbing knowledge.
                  </p>
                  <p className="text-slate-700 text-sm">
                    Either give it a try yourself (if you're a confident DIYer) or get a good local plumber like Upgrade to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Fixing Low Water Pressure in a Shower
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Lots of things can cause low water pressure in your shower, from blockages in the pipes to issues with the main water supply. If your shower uses a pump, low water pressure may be due to the pump not being powered on.
                </p>
                <div className="bg-amber-50 rounded-xl p-8 border-2 border-amber-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">Quick troubleshooting steps:</p>
                  <ol className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-cyan-600 text-white rounded-full text-sm font-bold flex-shrink-0">1</span>
                      <span>Ensure the switch or plug for your shower pump is turned on</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-cyan-600 text-white rounded-full text-sm font-bold flex-shrink-0">2</span>
                      <span>Make sure your stopcock is open</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-cyan-600 text-white rounded-full text-sm font-bold flex-shrink-0">3</span>
                      <span>Check for leaks when you open up your stopcock again</span>
                    </li>
                  </ol>
                </div>
                <p className="text-slate-700 text-sm">
                  If your low water pressure persists, give Upgrade a shout and we will help.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3407859/pexels-photo-3407859.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Shower water pressure testing"
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
              No Hot Water Coming From My Shower
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3407860/pexels-photo-3407860.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Thermostatic shower valve repair"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Mixer Showers</h3>
                  <p className="text-slate-700 leading-relaxed">
                    If there's no hot water coming from your shower, it could be due to a few different reasons. It could be a faulty thermostatic mixing valve, a broken diverter valve or a boiler fault. If you have a mixer shower, blocked or damaged cartridges are a common culprit. If it's a newly installed shower, it could mean your pipes are crossed, in which case contact your plumber.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Electric Showers</h3>
                  <p className="text-slate-700 mb-4">
                    If you have an electric shower and this issue occurs, most of the time it is cheaper and easier to just replace the shower unit 'like for like'.
                  </p>
                  <p className="text-slate-700 text-sm">
                    Old pipes could also be the root cause so it's best to speak to professional plumbers to diagnose and fix the problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Fix a Leaking Shower
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Leaking showers, if left unattended, can cause serious damage to a property. Shower connections, shower valves or cartridges are amongst the most common leaks we come across. Silicon sealant and deteriorated grout lines can also cause leaks and severe water damage.
                </p>
                <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">Prevention tips:</p>
                  <p className="text-slate-700 mb-4">
                    Most of the time, maintaining your shower area like keeping the grout lines and silicon sealant clean and in good condition will prevent bigger leaks happening.
                  </p>
                  <p className="text-slate-700 text-sm">
                    Give Upgrade a call and our plumbers will help diagnose the shower leak problem and undertake the repair for you.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3407861/pexels-photo-3407861.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Leaking shower repair and sealant"
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
              Sealant & Silicon Repairs
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3407862/pexels-photo-3407862.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Shower sealant and grout maintenance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Over time, the sealant or better known as 'silicon seal' or grout between tiles may wear out, leading to potential leaks and mould growth.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">Important reminder:</p>
                  <p className="text-slate-700 mb-4">
                    You should ensure your silicon sealants and grout are maintained regularly, as if they fail and lead to a leak, it may invalid your property insurance.
                  </p>
                  <p className="text-slate-700 text-sm">
                    Regular maintenance is a small investment that protects your home from costly water damage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Replacement Shower Installation
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Sometimes fitting a new shower is more cost effective than ongoing fixes, particularly if it is an older model and getting spare parts is becoming a challenge!
                </p>
                <div className="bg-cyan-50 rounded-xl p-8 border-2 border-cyan-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">Expert guidance included:</p>
                  <p className="text-slate-700 mb-4">
                    Choosing a replacement shower might feel like a daunting task. We can advise you on the best type of shower model for you based on your current water supply system, pipework and budget, so that you end up with a new shower that fully meets your needs.
                  </p>
                  <p className="text-slate-700 text-sm font-semibold">
                    We supply and install showers from great brands such as Mira, Triton, Bristan, Ideal Standard and Grohe to name a few.
                  </p>
                </div>
                <p className="text-slate-700 font-semibold">
                  Our SNIPEF registered plumbers are experts in shower installations.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3407863/pexels-photo-3407863.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern shower installation in bathroom"
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
              Is It Cheaper to Fix an Electric Shower or Replace It?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3407864/pexels-photo-3407864.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Electric shower replacement decision"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Deciding whether to fix or replace your electric shower is something we are asked frequently.
                </p>
                <div className="bg-amber-50 rounded-xl p-8 border-2 border-amber-200 mb-6">
                  <p className="text-slate-700 mb-4 font-semibold">Consider these factors:</p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white rounded-full text-sm font-bold flex-shrink-0">1</span>
                      <span>Minor repairs (showerhead/button) are usually cheaper to fix</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white rounded-full text-sm font-bold flex-shrink-0">2</span>
                      <span>Many electric shower parts need to be ordered from manufacturer (delays)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white rounded-full text-sm font-bold flex-shrink-0">3</span>
                      <span>Old/serious issues can cost as much as a new shower</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white rounded-full text-sm font-bold flex-shrink-0">4</span>
                      <span>Newer showers are more efficient and have better features</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <p className="text-slate-700 font-semibold mb-2">Most homeowners choose replacement</p>
                  <p className="text-slate-700 text-sm mb-3">
                    This is the longer-term solution. Most homeowners choose to replace their electric shower as they opt for the longer term solution. It's also vital to make sure the electrical installation to your shower is safe.
                  </p>
                  <p className="text-slate-700 text-sm font-semibold">
                    Typical cost: Around £360 to replace your electric shower 'like for like' with a Mira or Triton electric shower
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 md:p-12 rounded-xl shadow-lg border-2 border-cyan-200 mb-16">
              <blockquote className="text-lg text-slate-700 italic mb-4 leading-relaxed">
                "We're so happy we picked Upgrade! The engineers came and fixed up the new shower and it looks amazing. We're so happy we found a reliable and super professional plumbing service and will definitely choose them again in the future."
              </blockquote>
              <p className="text-slate-700 font-semibold">Rachel | Homeowner, Glasgow</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              How Much Does It Typically Cost to Repair a Shower?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Cost Range</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  The cost to fix a broken shower can vary widely based on the nature of the problem.
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm font-bold flex-shrink-0">✓</span>
                    <span><strong>Minor repairs:</strong> £50-£150 (showerhead, leak fixes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-600 text-white rounded-full text-sm font-bold flex-shrink-0">!</span>
                    <span><strong>Major repairs:</strong> £200-£1,000+ (full unit replacement)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Factors That Affect Cost</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span><strong>Parts availability:</strong> Ordering can cause delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span><strong>Age & model:</strong> Older showers harder to find parts for</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span><strong>Accessibility:</strong> Cramped spaces or hidden valves increase time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span><strong>New access points:</strong> Future-proofing for easier repairs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Choose Upgrade for Your Shower Repairs?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-cyan-50 rounded-xl p-8 border-2 border-cyan-200">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900">Our Expertise</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  We specialise in repairing and replacing showers from all major brands including Mira, Triton, Bristan, Ideal Standard, and Grohe.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>SNIPEF registered plumbers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Expert shower installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Fast, reliable service</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900">What You Get</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  For shower repairs or replacements in Glasgow, you need a plumbing company that responds swiftly to your call, arrives without delay, and handles repairs professionally.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Rapid response & diagnosis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>12-month aftercare guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Parts available in our vans</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 md:p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                How Our Shower Repair Service Works
              </h3>
              <ol className="space-y-4">
                {[
                  'Send us photos of your shower via WhatsApp for a free initial diagnosis',
                  'Our senior engineers review your photos and provide an accurate quotation',
                  'Accept the quote and complete our simple booking form',
                  'Our team processes payment and schedules your repair appointment',
                  'Our plumber completes your shower repair and provides feedback link'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-cyan-600 text-white rounded-full font-bold flex-shrink-0">{index + 1}</span>
                    <span className="text-lg text-slate-700 mt-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 md:p-12 rounded-xl shadow-lg border-2 border-cyan-200 mb-16">
              <blockquote className="text-lg text-slate-700 italic mb-4 leading-relaxed">
                "The plumber was excellent. Explained what he was doing, and repaired the broken shower quickly and professionally."
              </blockquote>
              <p className="text-slate-700 font-semibold">John | Homeowner, Glasgow</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Shower Repairs & Installation – Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Can you repair most electric showers?',
                  answer: 'You can repair most electric showers, although depending on the age and condition of the shower, it can be quicker and cheaper to replace your electric shower if it becomes faulty. When choosing a replacement electric shower, you must ensure the kW output of the shower is going to operate safely with the electrical supply. Take advice from an approved electrician if in doubt.'
                },
                {
                  question: 'How long does it take to replace a shower?',
                  answer: 'The time it takes for a plumber to replace a shower depends on the complexity of the job. If it\'s a direct swap of a similar shower without any major adjustments to plumbing or electrics, it might take anywhere from 1 to 3 hours. However, if the plumber needs to adjust plumbing, move fixtures, or if there are unforeseen issues, it could take a day or more. Always ask to get a quote prior to starting.'
                },
                {
                  question: 'Can I fix my shower myself?',
                  answer: 'Some minor issues, like changing a showerhead, can be a DIY task. For more significant problems, especially those related to plumbing or electrical components, it\'s best to hire a professional.'
                },
                {
                  question: 'Do I need a plumber or electrician?',
                  answer: 'A plumber is typically the tradesperson who fixes showers. However, if the issue is related to the electrical aspects of the shower, like in an electric shower, an electrician might be required. For tiling or structural issues, a bathroom fitter or tiler might be needed.'
                },
                {
                  question: 'Do I need a professional to replace a shower?',
                  answer: 'Yes, in most cases, you will need a plumber to replace a shower, especially if it involves adjusting or replacing the plumbing. If the replacement involves electrical work, such as with electric showers, you might also need an electrician. For simple replacements, like changing the showerhead, you could do it yourself if you are confident and have the right tools.'
                },
                {
                  question: 'How often should I replace my showerhead?',
                  answer: 'On average, shower heads should be replaced every 6-8 years. However, if you notice issues with water flow, mould growth, or if the showerhead is visibly worn out, it might be time for a replacement. You can clean your shower head by removing it from the shower hose and steeping into warm soapy water.'
                },
                {
                  question: 'What about low water pressure?',
                  answer: 'This might involve cleaning out blockages, replacing faulty valves (cartridges), or even upgrading your plumbing system to a newer mains pressure unvented hot water system.'
                },
                {
                  question: 'Can my shower be repaired or must it be replaced?',
                  answer: 'If parts are available then yes, however depending on the age and condition of your shower, it may be more cost effective and quicker to replace for a new shower. Take advice from a professional tradesperson for advice, it may save you money.'
                },
                {
                  question: 'Why is my shower leaking?',
                  answer: 'This could be due to worn-out seals, faulty plumbing, or issues with the showerhead or tray. It\'s important to get the issue looked at by a plumber and fix the leaking shower promptly.'
                },
                {
                  question: 'Am I covered by a warranty?',
                  answer: 'Yes, you will receive a 12 month guarantee on our labour and your shower parts will be covered for the length of your manufacturer\'s warranty.'
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

      <section className="py-12 md:py-16 bg-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Shower Fixed?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            If you are ready to get your shower repair or shower replacement carried out by Upgrade Boilers & Bathrooms, contact us today or call us on the number below.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-cyan-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
