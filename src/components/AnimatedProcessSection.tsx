import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Video as LucideIcon } from 'lucide-react';

interface ProcessStep {
  step: number;
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface Brand {
  name: string;
  logo: string;
}

interface AnimatedProcessSectionProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  relatedServices?: Array<{
    label: string;
    path: string;
  }>;
  brands?: Brand[];
  accentColor?: 'blue' | 'green' | 'orange' | 'teal' | 'red';
  bgColor?: 'white' | 'slate' | 'gradient';
}

export default function AnimatedProcessSection({
  title,
  subtitle,
  steps,
  relatedServices,
  brands,
  accentColor = 'blue',
  bgColor = 'slate'
}: AnimatedProcessSectionProps) {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const colorSchemes = {
    blue: {
      primary: 'bg-primary',
      secondary: 'bg-primary-50',
      text: 'text-primary',
      border: 'border-primary',
      borderLight: 'border-blue-200',
      hover: 'hover:bg-primary-700',
      glow: 'shadow-blue-500/30'
    },
    green: {
      primary: 'bg-secondary',
      secondary: 'bg-green-50',
      text: 'text-secondary',
      border: 'border-green-600',
      borderLight: 'border-green-200',
      hover: 'hover:bg-secondary-600',
      glow: 'shadow-green-500/30'
    },
    orange: {
      primary: 'bg-accent-600',
      secondary: 'bg-orange-50',
      text: 'text-accent',
      border: 'border-orange-600',
      borderLight: 'border-orange-200',
      hover: 'hover:bg-orange-700',
      glow: 'shadow-orange-500/30'
    },
    teal: {
      primary: 'bg-teal-600',
      secondary: 'bg-teal-50',
      text: 'text-teal-600',
      border: 'border-teal-600',
      borderLight: 'border-teal-200',
      hover: 'hover:bg-teal-700',
      glow: 'shadow-teal-500/30'
    },
    red: {
      primary: 'bg-red-600',
      secondary: 'bg-red-50',
      text: 'text-red-600',
      border: 'border-red-600',
      borderLight: 'border-red-200',
      hover: 'hover:bg-red-700',
      glow: 'shadow-red-500/30'
    }
  };

  const colors = colorSchemes[accentColor];

  const bgClasses = {
    white: 'bg-white',
    slate: 'bg-slate-50',
    gradient: 'bg-gradient-to-b from-slate-50 via-white to-slate-50'
  };

  useEffect(() => {
    const observers = stepRefs.current.map((stepEl, index) => {
      if (!stepEl) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSteps(prev => new Set(prev).add(index));
              }, index * 150);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(stepEl);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className={`py-12 md:py-16 ${bgClasses[bgColor]}`}>
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

          <div className="space-y-6 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.has(index);

              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className={`flex items-start gap-6 bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 ${colors.borderLight} transition-all duration-700 transform ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-12'
                  } hover:shadow-xl hover:scale-[1.02]`}
                >
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 ${colors.primary} rounded-full blur-xl opacity-30 transition-opacity duration-500 ${
                      isVisible ? 'opacity-30' : 'opacity-0'
                    }`}></div>

                    <div className={`relative ${colors.primary} ${colors.hover} text-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center font-bold text-2xl md:text-3xl transition-all duration-500 shadow-lg ${
                      isVisible ? colors.glow : ''
                    }`}>
                      {Icon ? (
                        <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                      ) : (
                        step.step
                      )}
                    </div>

                    {Icon && (
                      <div className={`absolute -bottom-2 -right-2 ${colors.primary} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm border-2 border-white shadow-md`}>
                        {step.step}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xl md:text-2xl font-bold text-slate-900 mb-3 transition-colors duration-500 ${
                      isVisible ? colors.text : 'text-slate-700'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {brands && brands.length > 0 && (
            <div className="bg-white border-2 border-slate-200 rounded-xl p-8 mb-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Brands We Work With
              </h3>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                {brands.map((brand, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {relatedServices && relatedServices.length > 0 && (
            <div className={`${colors.secondary} border-l-4 ${colors.border} p-6 md:p-8 rounded-lg shadow-md`}>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Related Services
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className={`${colors.text} hover:underline font-semibold flex items-center gap-2 group transition-all`}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
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
