import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RelatedService } from '../lib/links';

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
}

export default function RelatedServices({ services, title = "Related Services" }: RelatedServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="block p-6 bg-white border-2 border-slate-200 rounded-lg hover:border-secondary hover:shadow-lg transition group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition mb-2">
                      {service.label}
                    </h3>
                    {service.description && (
                      <p className="text-slate-600 text-sm">
                        {service.description}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
