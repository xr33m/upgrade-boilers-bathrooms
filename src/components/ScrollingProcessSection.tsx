import { useEffect, useRef, useState } from 'react';
import { Video as LucideIcon, ArrowDown } from 'lucide-react';

interface ProcessStep {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ScrollingProcessSectionProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  accentColor?: 'blue' | 'green' | 'orange' | 'teal' | 'red';
}

export default function ScrollingProcessSection({
  title,
  subtitle,
  steps,
  accentColor = 'blue'
}: ScrollingProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const colorSchemes = {
    blue: {
      gradient: 'from-primary to-blue-800',
      bg: 'bg-primary',
      text: 'text-primary',
      border: 'border-primary',
      glow: 'shadow-blue-500/50',
      bgLight: 'bg-primary-50',
      borderLight: 'border-blue-200'
    },
    green: {
      gradient: 'from-green-600 to-green-800',
      bg: 'bg-secondary',
      text: 'text-secondary',
      border: 'border-green-600',
      glow: 'shadow-green-500/50',
      bgLight: 'bg-green-50',
      borderLight: 'border-green-200'
    },
    orange: {
      gradient: 'from-orange-600 to-orange-800',
      bg: 'bg-accent-600',
      text: 'text-accent',
      border: 'border-orange-600',
      glow: 'shadow-orange-500/50',
      bgLight: 'bg-orange-50',
      borderLight: 'border-orange-200'
    },
    teal: {
      gradient: 'from-teal-600 to-teal-800',
      bg: 'bg-teal-600',
      text: 'text-teal-600',
      border: 'border-teal-600',
      glow: 'shadow-teal-500/50',
      bgLight: 'bg-teal-50',
      borderLight: 'border-teal-200'
    },
    red: {
      gradient: 'from-red-600 to-red-800',
      bg: 'bg-red-600',
      text: 'text-red-600',
      border: 'border-red-600',
      glow: 'shadow-red-500/50',
      bgLight: 'bg-red-50',
      borderLight: 'border-red-200'
    }
  };

  const colors = colorSchemes[accentColor];

  useEffect(() => {
    const observers = stepsRef.current.map((stepEl, index) => {
      if (!stepEl) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveStep(index);
            }
          });
        },
        {
          threshold: [0.5, 0.75, 1],
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      observer.observe(stepEl);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isPast = activeStep > index;

            return (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className="relative mb-24 md:mb-32 last:mb-0"
              >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className={`relative flex-shrink-0 transition-all duration-700 ${
                    isActive ? 'scale-110' : 'scale-100'
                  }`}>
                    <div className={`absolute inset-0 ${colors.bg} rounded-full blur-2xl transition-opacity duration-700 ${
                      isActive ? 'opacity-40' : 'opacity-0'
                    }`}></div>

                    <div className={`relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center shadow-2xl transition-all duration-700 ${
                      isActive ? `${colors.glow} shadow-2xl` : 'shadow-lg'
                    }`}>
                      <Icon
                        className="w-16 h-16 md:w-20 md:h-20 text-white"
                        strokeWidth={1.5}
                      />

                      <div className={`absolute -top-4 -right-4 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-4 ${colors.border} transition-all duration-700 ${
                        isActive ? 'scale-110' : 'scale-100'
                      }`}>
                        <span className={`text-2xl md:text-3xl font-bold ${colors.text}`}>
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`flex-1 text-center md:text-left transition-all duration-700 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-4'
                  }`}>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors duration-700 ${
                      isActive ? colors.text : 'text-slate-700'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-12 md:mt-16">
                    <div className={`transition-all duration-700 ${
                      isPast ? colors.text : 'text-slate-300'
                    }`}>
                      <ArrowDown
                        className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-700 ${
                          isActive ? 'animate-bounce' : ''
                        }`}
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 flex flex-col items-center">
          <div className={`h-2 w-32 md:w-48 ${colors.bg} rounded-full mb-8`}></div>
          <p className="text-center text-lg md:text-xl text-slate-600 max-w-2xl">
            Ready to get started? Contact us today for expert service you can trust.
          </p>
        </div>
      </div>
    </section>
  );
}
