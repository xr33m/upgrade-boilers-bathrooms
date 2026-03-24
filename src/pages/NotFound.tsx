import { Link } from 'react-router-dom';
import { Home, Phone, AlertTriangle } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Back to Glasgow Plumbing Services"
        description="Page not found. Return to Upgrade Boilers and Bathrooms home page or contact us for plumbing, heating and boiler services in Glasgow available 24/7."
        canonical={`${DOMAIN}/404`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Page Not Found", url: `${DOMAIN}/404` }
        ])}
      />

      <section className="min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 text-white flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-24 h-24 text-orange-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Page Not Found
          </h1>

          <div className="text-6xl md:text-7xl font-bold mb-6 text-orange-400">
            404
          </div>

          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            Sorry, we can't find the page you're looking for. It may have been moved or deleted. Let us help you find what you need.
          </p>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-cyan-200">
              Here are some helpful links:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              View Services
            </Link>
          </div>

          <div className="bg-slate-800 bg-opacity-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Emergency Plumbing Help?</h3>
            <p className="text-cyan-100 mb-6">
              If you need immediate assistance with a plumbing or heating emergency, don't hesitate to contact us directly.
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              <Phone className="w-5 h-5" />
              Call Now: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
