import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type SectionVariant = 'white' | 'light-grey' | 'blue';

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  delay?: number;
}

const variantStyles: Record<SectionVariant, string> = {
  'white': 'bg-white text-gray-900',
  'light-grey': 'bg-gray-50 text-gray-900',
  'blue': 'bg-blue-600 text-white',
};

export function AnimatedSection({
  children,
  variant = 'white',
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 transition-all duration-1000 ease-out ${variantStyles[variant]} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  hoverEffect = true,
}: AnimatedCardProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${
        hoverEffect ? 'hover:scale-105 hover:shadow-2xl' : ''
      } ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  const transformMap = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(40px)',
    right: 'translateX(-40px)',
    none: 'translate(0)',
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : transformMap[direction],
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
