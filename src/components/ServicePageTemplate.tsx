import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants/business';
import AreasWeCover from './AreasWeCover';
import { GLASGOW_POSTCODES } from '../data/areas';
import { AnimatedSection, FadeIn, AnimatedCard } from './AnimatedSection';

interface HeroSection {
  title: string;
  subtitle: string;
  description?: string;
  breadcrumbs: Array<{ label: string; href: string }>;
}

interface ProblemSection {
  heading: string;
  intro?: string;
  problems: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  gridColumns?: number;
}

interface ContentBlock {
  heading: string;
  content: React.ReactNode;
  backgroundColor?: 'white' | 'slate-50' | 'blue-50';
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  imageAlt?: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description?: string;
}

interface ProcessSectionData {
  heading: string;
  subtitle?: string;
  steps: ProcessStep[];
}

interface AreasSection {
  heading: string;
  intro?: string;
  areas: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

interface CTASection {
  heading: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  isDark?: boolean;
}

interface ServicePageProps {
  hero: HeroSection;
  introduction?: React.ReactNode;
  problems?: ProblemSection;
  contentBlocks?: ContentBlock[];
  whyChooseUs?: React.ReactNode;
  process?: ProcessSectionData;
  areas?: AreasSection;
  faqs?: FAQItem[];
  finalCTA: CTASection;
}

export default function ServicePageTemplate({
  hero,
  introduction,
  problems,
  contentBlocks,
  whyChooseUs,
  process,
  areas,
  faqs,
  finalCTA,
}: ServicePageProps) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-200 flex flex-wrap gap-2">
              {hero.breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span className="mx-1">/</span>}
                  <Link to={crumb.href} className="hover:text-white transition">
                    {crumb.label}
                  </Link>
                </React.Fragment>
              ))}
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 font-semibold leading-relaxed">
              {hero.subtitle}
            </p>
            {hero.description && (
              <p className="text-lg text-blue-50 mb-8 leading-relaxed">
                {hero.description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 hover:scale-105 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 hover:scale-105 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      {introduction && (
        <AnimatedSection variant="white" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                {introduction}
              </FadeIn>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* PROBLEMS / SERVICE BREAKDOWN SECTION */}
      {problems && (
        <AnimatedSection variant={problems.gridColumns === 1 ? 'white' : 'light-grey'} className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  {problems.heading}
                </h2>
                {problems.intro && (
                  <p className="text-lg text-slate-700 mb-12 leading-relaxed font-semibold">
                    {problems.intro}
                  </p>
                )}
              </FadeIn>
              <div className={`grid gap-6 ${
                problems.gridColumns === 1
                  ? 'grid-cols-1'
                  : `grid-cols-1 md:grid-cols-${problems.gridColumns || 2} lg:grid-cols-${problems.gridColumns || 2}`
              }`}>
                {problems.problems.map((problem, idx) => (
                  <AnimatedCard
                    key={idx}
                    delay={idx * 100}
                    className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm"
                  >
                    {problem.icon && (
                      <div className="mb-4">
                        {problem.icon}
                      </div>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {problem.description}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* CONTENT BLOCKS SECTION */}
      {contentBlocks && contentBlocks.map((block, idx) => {
        const variant = block.backgroundColor === 'slate-50' ? 'light-grey' :
                       block.backgroundColor === 'blue-50' ? 'blue' : 'white';
        return (
          <AnimatedSection
            key={idx}
            variant={variant}
            className="py-12 md:py-16"
          >
            <div className="container mx-auto px-4">
              <div className={`max-w-6xl mx-auto ${block.imageUrl ? 'grid md:grid-cols-2 gap-8 items-center' : ''}`}>
                {block.imagePosition === 'right' && block.imageUrl && (
                  <FadeIn direction="right" className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg order-2">
                    <img
                      src={block.imageUrl}
                      alt={block.imageAlt || block.heading}
                      className="w-full h-full object-cover"
                    />
                  </FadeIn>
                )}
                <FadeIn direction={block.imagePosition === 'right' ? 'left' : 'right'}>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    {block.heading}
                  </h2>
                  <div className="text-lg text-slate-700 leading-relaxed space-y-4">
                    {block.content}
                  </div>
                </FadeIn>
                {block.imagePosition === 'left' && block.imageUrl && (
                  <FadeIn direction="left" className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={block.imageUrl}
                      alt={block.imageAlt || block.heading}
                      className="w-full h-full object-cover"
                    />
                  </FadeIn>
                )}
              </div>
            </div>
          </AnimatedSection>
        );
      })}

      {/* WHY CHOOSE US SECTION */}
      {whyChooseUs && (
        <AnimatedSection variant="white" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {whyChooseUs}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* PROCESS SECTION */}
      {process && (
        <AnimatedSection variant="light-grey" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeIn className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  {process.heading}
                </h2>
                {process.subtitle && (
                  <p className="text-slate-700 text-lg">
                    {process.subtitle}
                  </p>
                )}
              </FadeIn>
              <div className="space-y-6">
                {process.steps.map((item, idx) => (
                  <AnimatedCard
                    key={item.step}
                    delay={idx * 150}
                    className="flex items-start gap-6 bg-white p-8 rounded-lg shadow-sm border border-slate-200"
                  >
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-slate-700 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* AREAS SECTION */}
      {areas && (
        <AreasWeCover
          title={areas.heading}
          subtitle={areas.intro}
          areas={areas.areas.map(area => ({ name: area }))}
          accentColor="blue"
        />
      )}

      {/* FAQ SECTION */}
      {faqs && faqs.length > 0 && (
        <AnimatedSection variant="light-grey" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                  Frequently Asked Questions
                </h2>
              </FadeIn>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <AnimatedCard
                    key={idx}
                    delay={idx * 100}
                    className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-200"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* FINAL CTA SECTION */}
      <AnimatedSection
        variant={finalCTA.isDark ? 'blue' : 'white'}
        className="py-12 md:py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {finalCTA.heading}
              </h2>
              <p className={`text-xl mb-8 leading-relaxed ${
                finalCTA.isDark ? 'text-blue-100' : 'text-slate-700'
              }`}>
                {finalCTA.description}
              </p>
            </FadeIn>
            <FadeIn delay={200} className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:scale-105 ${
                  finalCTA.isDark
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <Phone className="w-6 h-6" />
                {finalCTA.primaryButtonText || BUSINESS_INFO.phone}
              </a>
              {finalCTA.secondaryButtonText && (
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:scale-105 ${
                    finalCTA.isDark
                      ? 'bg-white hover:bg-gray-100 text-blue-900'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {finalCTA.secondaryButtonText}
                </Link>
              )}
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
