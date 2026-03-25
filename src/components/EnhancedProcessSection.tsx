import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Video as LucideIcon } from 'lucide-react';

interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Brand {
  name: string;
  logo: string;
}

interface EnhancedProcessSectionProps {
  badgeText: string;
  title: string;
  titleHighlight: string;
  steps: ProcessStep[];
  brands?: Brand[];
  relatedServices?: Array<{
    label: string;
    path: string;
  }>;
}

function Step({
  number,
  icon: Icon,
  title,
  description,
  delay
}: ProcessStep & { delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={stepRef}
      className={`relative flex flex-col items-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-primary-500 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>

        <div className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-slate-100 via-white to-slate-50 rounded-full flex items-center justify-center shadow-2xl border-2 md:border-4 border-secondary/20 group-hover:border-secondary/40 transition-all duration-500 group-hover:scale-105">
          <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-blue-800 rounded-full flex items-center justify-center shadow-xl border-2 md:border-4 border-white text-white font-bold text-lg md:text-2xl z-10">
            {number}
          </div>

          <div className="text-primary transform group-hover:scale-110 transition-transform duration-500 [&>svg]:w-10 [&>svg]:h-10 md:[&>svg]:w-16 md:[&>svg]:h-16">
            <Icon size={64} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 text-center max-w-sm px-2">
        <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">{title}</h3>
        <p className="text-slate-300 text-sm md:text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function EnhancedProcessSection({
  badgeText,
  title,
  titleHighlight,
  steps,
  brands,
  relatedServices
}: EnhancedProcessSectionProps) {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="inline-block bg-red-50 text-red-600 px-6 py-2 rounded-full text-sm font-bold mb-4 md:mb-6">
            {badgeText}
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              {titleHighlight}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12 mb-10 md:mb-16">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={(index + 1) * 200}
            />
          ))}
        </div>

        {brands && brands.length > 0 && (
          <div className="mb-10 md:mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h3 className="text-lg font-bold text-white mb-6 text-center">
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
          </div>
        )}

        {relatedServices && relatedServices.length > 0 && (
          <div className="mb-10 md:mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h3 className="text-lg font-bold text-white mb-6 text-center">
                Related Services
              </h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-secondary hover:text-blue-200 font-semibold flex items-center gap-2 group transition-all"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-base md:text-lg font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transform"
          >
            BOOK ONLINE
          </Link>
        </div>
      </div>
    </section>
  );
}
