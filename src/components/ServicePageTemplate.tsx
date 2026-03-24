import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants/business';

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
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      {introduction && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {introduction}
            </div>
          </div>
        </section>
      )}

      {/* PROBLEMS / SERVICE BREAKDOWN SECTION */}
      {problems && (
        <section className={`py-12 md:py-16 ${problems.gridColumns === 1 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {problems.heading}
              </h2>
              {problems.intro && (
                <p className="text-lg text-slate-700 mb-12 leading-relaxed font-semibold">
                  {problems.intro}
                </p>
              )}
              <div className={`grid gap-6 ${
                problems.gridColumns === 1
                  ? 'grid-cols-1'
                  : `grid-cols-1 md:grid-cols-${problems.gridColumns || 2} lg:grid-cols-${problems.gridColumns || 2}`
              }`}>
                {problems.problems.map((problem, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CONTENT BLOCKS SECTION */}
      {contentBlocks && contentBlocks.map((block, idx) => (
        <section
          key={idx}
          className={`py-12 md:py-16 bg-${block.backgroundColor || 'white'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`max-w-6xl mx-auto ${block.imageUrl ? 'grid md:grid-cols-2 gap-8 items-center' : ''}`}>
              {block.imagePosition === 'right' && block.imageUrl && (
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg order-2">
                  <img
                    src={block.imageUrl}
                    alt={block.imageAlt || block.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  {block.heading}
                </h2>
                <div className="text-lg text-slate-700 leading-relaxed space-y-4">
                  {block.content}
                </div>
              </div>
              {block.imagePosition === 'left' && block.imageUrl && (
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={block.imageUrl}
                    alt={block.imageAlt || block.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* WHY CHOOSE US SECTION */}
      {whyChooseUs && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {whyChooseUs}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS SECTION */}
      {process && (
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                {process.heading}
              </h2>
              {process.subtitle && (
                <p className="text-center text-slate-700 text-lg mb-12">
                  {process.subtitle}
                </p>
              )}
              <div className="space-y-6">
                {process.steps.map((item) => (
                  <div
                    key={item.step}
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AREAS SECTION */}
      {areas && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {areas.heading}
              </h2>
              {areas.intro && (
                <p className="text-lg text-slate-700 mb-8">
                  {areas.intro}
                </p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {areas.areas.map((area, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center"
                  >
                    <p className="text-slate-800 font-semibold">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ SECTION */}
      {faqs && faqs.length > 0 && (
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-200"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA SECTION */}
      <section
        className={`py-12 md:py-16 ${
          finalCTA.isDark
            ? 'bg-blue-900 text-white'
            : 'bg-white text-slate-900'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                finalCTA.isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {finalCTA.heading}
            </h2>
            <p
              className={`text-xl mb-8 leading-relaxed ${
                finalCTA.isDark ? 'text-blue-100' : 'text-slate-700'
              }`}
            >
              {finalCTA.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg ${
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
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg ${
                    finalCTA.isDark
                      ? 'bg-white hover:bg-gray-100 text-blue-900'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {finalCTA.secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
