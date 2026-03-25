import { Link } from 'react-router-dom';
import { Phone, Wrench, ClipboardCheck, FileText, AlertCircle } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import GasSafeBadge from '../components/GasSafeBadge';
import RelatedServices from '../components/RelatedServices';
import { boilerRelatedServices } from '../lib/links';

export default function Boilers() {
  return (
    <>
      <SEO
        title="Boiler Services Glasgow | Installation, Repairs & Servicing"
        description="Professional boiler services in Glasgow. Gas Safe engineers for new boiler installation, repairs, annual servicing and maintenance. Free quotes. Call 0141 123 4567"
        canonical={`${DOMAIN}/boilers`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateServiceSchema(
          "Boiler Services",
          "Expert boiler installation, repairs, servicing and maintenance by Gas Safe registered engineers. New boiler installations from leading manufacturers, annual servicing, emergency repairs, and boiler cover plans."
        )}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` },
          { name: "Boiler Services", url: `${DOMAIN}/boilers` }
        ])}
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Boiler Services in Glasgow
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Expert boiler installation, repairs, servicing and maintenance by Gas Safe registered engineers. Serving Glasgow homes and businesses with reliable, efficient heating solutions.
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Boiler Solutions for Your Home
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From new installations to emergency repairs, we provide comprehensive boiler services backed by Gas Safe certification and years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Link to="/boilers/installation" className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-secondary">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition">
                  <Wrench className="w-8 h-8 text-primary group-hover:text-white transition" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition">Boiler Installation</h3>
                  <p className="text-slate-600">New boiler installations from leading manufacturers. Energy-efficient models to reduce your heating bills.</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Free home surveys and quotes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Worcester Bosch, Vaillant, Ideal certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Up to 10 year warranties available</span>
                </li>
              </ul>
              <span className="text-primary font-semibold group-hover:underline">Learn more about installation →</span>
            </Link>

            <Link to="/boilers/servicing" className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-green-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition">
                  <ClipboardCheck className="w-8 h-8 text-secondary group-hover:text-white transition" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition">Boiler Servicing</h3>
                  <p className="text-slate-600">Annual boiler services to keep your heating system running safely and efficiently year-round.</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Comprehensive safety checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Maintain manufacturer warranties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Improve efficiency and reduce bills</span>
                </li>
              </ul>
              <span className="text-secondary font-semibold group-hover:underline">Learn more about servicing →</span>
            </Link>

            <Link to="/boilers/service-plans" className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-purple-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition">
                  <FileText className="w-8 h-8 text-primary-600 group-hover:text-white transition" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition">Boiler Service Plans</h3>
                  <p className="text-slate-600">Affordable monthly plans with annual servicing, priority call-outs and exclusive discounts.</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Annual service included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Priority emergency response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>10% discount on repairs</span>
                </li>
              </ul>
              <span className="text-primary-600 font-semibold group-hover:underline">View service plans →</span>
            </Link>

            <Link to="/boilers/repairs" className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-slate-200 hover:border-red-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition">
                  <AlertCircle className="w-8 h-8 text-red-600 group-hover:text-white transition" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition">Boiler Repairs</h3>
                  <p className="text-slate-600">Fast, reliable boiler repairs. Emergency call-outs available 24/7 for heating breakdowns.</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Same-day emergency repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>All boiler makes and models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>12-month parts and labour guarantee</span>
                </li>
              </ul>
              <span className="text-red-600 font-semibold group-hover:underline">Learn more about repairs →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Our Boiler Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <GasSafeBadge size="small" showText={false} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Gas Safe Registered</h3>
                    <p className="text-slate-600">All our engineers are Gas Safe registered and fully qualified to work on your boiler safely and legally.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Manufacturer Approved</h3>
                <p className="text-slate-600">Certified installers for Worcester Bosch, Vaillant, Ideal, and other leading boiler brands.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Extended Warranties</h3>
                <p className="text-slate-600">Access to manufacturer warranties of up to 10 years on new boiler installations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-slate-600">Honest, upfront quotes with no hidden costs. You'll know exactly what you're paying before we start.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Boiler Help? We're Here 24/7
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Whether you need a new boiler, annual service, or emergency repair, our Gas Safe engineers are ready to help.
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

      <RelatedServices services={boilerRelatedServices} title="Explore More Heating & Plumbing Services" />
    </>
  );
}
