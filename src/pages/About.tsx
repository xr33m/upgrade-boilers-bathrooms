import { Link } from 'react-router-dom';
import { Phone, Award, Shield, Users, Clock, CheckCircle2 } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function About() {
  return (
    <>
      <SEO
        title="About Upgrade Boilers & Bathrooms | Glasgow Plumbing & Heating Experts"
        description="About Upgrade Boilers and Bathrooms - Glasgow's trusted plumbing and heating experts since 2010. Gas Safe registered engineers with 14+ years experience in boiler installation, repairs, servicing and heating solutions."
        canonical={`${DOMAIN}/about`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "About", url: `${DOMAIN}/about` }
        ])}
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Glasgow Premier Plumbing & Heating
            </h1>
            <p className="text-xl text-blue-100">
              Your trusted local plumbing and heating experts since {BUSINESS_INFO.established}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-4 mb-12">
              <p>
                Glasgow Premier Plumbing & Heating was founded in {BUSINESS_INFO.established} with a simple mission: to provide honest, reliable, and professional plumbing and heating services to homes and businesses across Glasgow.
              </p>
              <p>
                Over the past 14 years, we've grown from a small local business to become one of Glasgow's most trusted names in plumbing and heating. Our success is built on a foundation of quality workmanship, exceptional customer service, and a commitment to doing the job right the first time.
              </p>
              <p>
                Today, we're proud to serve thousands of satisfied customers across Glasgow and the surrounding areas. Whether it's a routine boiler service, an emergency plumbing repair, or a complete bathroom installation, our Gas Safe registered engineers bring the same level of professionalism and expertise to every job.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">14+</div>
                <div className="text-slate-700 font-semibold">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                <div className="text-slate-700 font-semibold">Happy Customers</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-slate-700 font-semibold">Customer Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-slate-700 font-semibold">Emergency Service</div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
                Why Choose Us?
              </h2>
              <p className="text-base text-slate-500 text-center mt-2 max-w-2xl mx-auto mb-12">
                Trusted by thousands of customers across Glasgow for quality workmanship, reliability, and exceptional service.
              </p>

              <div className="relative">
                <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-primary-50/50"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                  <div>
                    <div className="size-12 md:size-14 p-3 bg-primary-50 border-2 border-blue-200 rounded-lg">
                      <Shield className="w-full h-full text-primary" />
                    </div>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">Gas Safe Registered</h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">All our engineers are Gas Safe registered and fully qualified to ensure your complete safety and compliance.</p>
                    </div>
                  </div>

                  <div>
                    <div className="size-12 md:size-14 p-3 bg-green-50 border-2 border-green-200 rounded-lg">
                      <Award className="w-full h-full text-secondary" />
                    </div>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">Expert Engineers</h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">Decades of combined experience with regular training to stay current with the latest heating and plumbing technology.</p>
                    </div>
                  </div>

                  <div>
                    <div className="size-12 md:size-14 p-3 bg-primary-50 border-2 border-purple-200 rounded-lg">
                      <Users className="w-full h-full text-primary-600" />
                    </div>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">Customer Focused</h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">We treat every home as if it were our own. Respectful, clean, and professional service is our standard.</p>
                    </div>
                  </div>

                  <div>
                    <div className="size-12 md:size-14 p-3 bg-orange-50 border-2 border-orange-200 rounded-lg">
                      <Clock className="w-full h-full text-accent" />
                    </div>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">24/7 Emergency Service</h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">We're here when you need us most, including evenings, weekends, and holidays. Fast response guaranteed.</p>
                    </div>
                  </div>

                  <div>
                    <div className="size-12 md:size-14 p-3 bg-cyan-50 border-2 border-cyan-200 rounded-lg">
                      <CheckCircle2 className="w-full h-full text-cyan-600" />
                    </div>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">Quality Guaranteed</h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">All work backed by 12-month parts and labour guarantee. Transparent pricing with no hidden costs.</p>
                    </div>
                  </div>

                  <div>
                    <div className="size-12 md:size-14 p-3 bg-red-50 border-2 border-red-200 rounded-lg">
                      <Shield className="w-full h-full text-red-600" />
                    </div>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">Fully Insured</h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">Comprehensive public liability insurance up to £10 million for your complete peace of mind and protection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Commitments to You
            </h2>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Transparent Pricing</h3>
                  <p className="text-slate-600">We provide clear, upfront quotes with no hidden costs. You'll know exactly what you're paying before we start work.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Quality Guarantee</h3>
                  <p className="text-slate-600">All our work is backed by a 12-month parts and labour guarantee for your complete peace of mind.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Clean & Tidy</h3>
                  <p className="text-slate-600">We respect your property. Our engineers wear protective footwear and clean up thoroughly after every job.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Fully Insured</h3>
                  <p className="text-slate-600">We carry comprehensive public liability insurance up to £10 million for your protection.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Accreditations
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 border-2 border-slate-200 rounded-lg">
                <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                <div className="font-bold">Gas Safe Registered</div>
              </div>
              <div className="text-center p-6 border-2 border-slate-200 rounded-lg">
                <Award className="w-12 h-12 text-secondary mx-auto mb-3" />
                <div className="font-bold">Worcester Bosch Approved</div>
              </div>
              <div className="text-center p-6 border-2 border-slate-200 rounded-lg">
                <Award className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <div className="font-bold">Vaillant Certified</div>
              </div>
              <div className="text-center p-6 border-2 border-slate-200 rounded-lg">
                <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
                <div className="font-bold">Fully Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their plumbing and heating needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-primary hover:bg-primary-700 px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
