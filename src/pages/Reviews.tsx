import { useState } from 'react';
import { Star } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateBreadcrumbSchema, generateReviewSchema } from '../components/SEO';
import { reviews as staticReviews } from '../data/reviews';
import { DOMAIN } from '../constants/business';
import { TestimonialsSection } from '../components/TestimonialsSection';
import GasSafeInline from '../components/GasSafeInline';

export default function Reviews() {
  const [reviews] = useState(staticReviews);

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  return (
    <>
      <SEO
        title="Customer Reviews | Upgrade Boilers Glasgow - Trusted Plumbers 5 Star"
        description="Read genuine customer reviews for Upgrade Boilers and Bathrooms. Trusted Glasgow plumbers with excellent ratings for boiler installation, repairs and heating services."
        canonical={`${DOMAIN}/reviews`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO schema={generateReviewSchema(parseFloat(averageRating), reviews.length)} />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Reviews", url: `${DOMAIN}/reviews` }
        ])}
      />

      <section className="bg-gradient-to-br from-amber-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Glasgow Homeowners
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Thousands of satisfied customers rely on us for their plumbing and heating needs
            </p>

            {reviews.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 inline-block">
                <div className="text-5xl font-bold mb-2">{averageRating}</div>
                <div className="flex justify-center mb-2 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-amber-300 text-amber-300"
                    />
                  ))}
                </div>
                <div className="text-amber-100">Based on {reviews.length} verified reviews</div>
              </div>
            )}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Why Customers Choose Us
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Always On Time</h3>
                  <p className="text-slate-600">Punctuality is our promise. We respect your schedule and arrive when we say we will.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Expert Engineers</h3>
                  <p className="text-slate-600"><span className="inline-flex items-center gap-1"><GasSafeInline size="xs" /> Gas Safe registered</span> with years of experience. Every job completed to the highest standards with guarantees.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Honest Pricing</h3>
                  <p className="text-slate-600">No hidden fees or surprise charges. We provide transparent quotes upfront.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Local Experts</h3>
                  <p className="text-slate-600">Based in Glasgow, we know the area and the specific needs of local homes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
