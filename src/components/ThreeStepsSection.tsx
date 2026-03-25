import { useEffect, useRef, useState } from 'react';
import { ClipboardCheck, Calendar, Wrench, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Step({ number, icon, title, description, delay }: StepProps) {
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
            {icon}
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

export default function ThreeStepsSection() {
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
            4 EASY STEPS
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            How{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Upgrade Boilers & Bathrooms
            </span>
            {' '}Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12 mb-10 md:mb-16">
          <Step
            number="1"
            icon={<ClipboardCheck size={64} strokeWidth={1.5} />}
            title="Send Request"
            description="You can apply through the form and we will contact you, or give us a call."
            delay={200}
          />

          <Step
            number="2"
            icon={<Calendar size={64} strokeWidth={1.5} />}
            title="Setting the Time"
            description="After the request, we set a convenient date and time that works for you."
            delay={400}
          />

          <Step
            number="3"
            icon={<Wrench size={64} strokeWidth={1.5} />}
            title="Site Visit"
            description="If we can't fix the issue then and there, we'll arrange a suitable time."
            delay={600}
          />

          <Step
            number="4"
            icon={<Truck size={64} strokeWidth={1.5} />}
            title="Fix and Install"
            description="We'll carry out the work and ensure no mess is left behind."
            delay={800}
          />
        </div>

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
