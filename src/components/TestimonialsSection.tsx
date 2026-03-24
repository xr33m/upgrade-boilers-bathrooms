import { useState } from 'react';
import { Star } from 'lucide-react';
import { reviews as staticReviews, Review } from '../data/reviews';

export function TestimonialsSection() {
  const [reviews] = useState<Review[]>(staticReviews);

  function renderStars(rating: number) {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
            }`}
          />
        ))}
      </div>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  const columns = [
    reviews.slice(0, Math.ceil(reviews.length / 3)),
    reviews.slice(Math.ceil(reviews.length / 3), Math.ceil((reviews.length * 2) / 3)),
    reviews.slice(Math.ceil((reviews.length * 2) / 3)),
  ];

  const TestimonialCard = ({ review }: { review: Review }) => (
    <div className="p-6 rounded-3xl border border-slate-200 shadow-lg shadow-amber-600/5 w-full max-w-xs bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex-shrink-0">
      <div className="flex gap-1 mb-4">
        {renderStars(review.rating)}
      </div>
      <p className="text-slate-700 text-sm leading-relaxed mb-6 line-clamp-4">
        "{review.comment}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
          {review.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-slate-900 text-sm truncate">{review.name}</div>
          <div className="text-xs text-slate-500 truncate">{review.service}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl space-y-12">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Trusted by Thousands of Glasgow Homes
          </h2>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Real feedback from customers who rely on us for their plumbing and heating needs
          </p>
        </div>

        <div className="relative h-[600px] md:h-[500px] lg:h-[400px] overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(-50%);
              }
            }
            .testimonial-column {
              animation: scroll 30s linear infinite;
            }
            .testimonial-column:hover {
              animation-play-state: paused;
            }
            .testimonial-column-slow {
              animation-duration: 40s;
            }
            .testimonial-column-fast {
              animation-duration: 25s;
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-6 h-full">
                <div
                  className={`testimonial-column ${
                    colIndex === 0
                      ? 'testimonial-column-slow'
                      : colIndex === 1
                        ? ''
                        : 'testimonial-column-fast'
                  }`}
                >
                  {[...Array(2)].map((_, repeatIndex) => (
                    <div key={repeatIndex} className="flex flex-col gap-6">
                      {column.map((review) => (
                        <TestimonialCard key={`${review.id}-${repeatIndex}`} review={review} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="flex flex-col items-center gap-8 pt-8">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-600 text-center">
              <span className="font-semibold text-slate-900">
                {(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)} out of 5 stars
              </span>
              <br />
              <span className="text-sm">from {reviews.length} verified customers</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
              Certified & Trusted
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <img
                  src="/gas-safe.webp"
                  alt="Gas Safe Registered"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/water-safe.webp"
                  alt="Water Safe Approved"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
