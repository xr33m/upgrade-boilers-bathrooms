import { Link } from 'react-router-dom';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface Brand {
  name: string;
  logo: string;
}

interface ProcessSectionProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  relatedServices?: Array<{
    label: string;
    path: string;
  }>;
  brands?: Brand[];
}

export default function ProcessSection({
  title,
  subtitle,
  steps,
  relatedServices,
  brands
}: ProcessSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          <div className="space-y-4 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-slate-200"
              >
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {brands && brands.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-lg p-8 mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">
                Brands We Service
              </h3>
              <div className="flex flex-wrap gap-6 justify-center items-center">
                {brands.map((brand, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {relatedServices && relatedServices.length > 0 && (
            <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Related Services
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-primary hover:text-blue-800 font-semibold hover:underline flex items-center gap-2"
                  >
                    <span>→</span>
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
