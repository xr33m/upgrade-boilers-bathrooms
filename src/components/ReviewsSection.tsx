import { useEffect, useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase, Review } from '../lib/supabase';

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-full flex-shrink-0" style={{ minWidth: '100%' }}>
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-slate-100 relative overflow-hidden h-full flex flex-col">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-5"></div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>

          <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 flex-grow">
            "{review.comment}"
          </p>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
              {review.name.charAt(0)}
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-sm font-bold text-slate-900">{review.name}</h3>
              <p className="text-sm text-slate-500">{review.service || 'Verified customer'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    setVisibleCards(1);
  }, []);

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

  useEffect(() => {
    if (reviews.length <= visibleCards) return;

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, reviews.length - visibleCards + 1));
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [reviews.length, visibleCards]);

  async function fetchReviews() {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      const reviewsData = data || [];
      setReviews(reviewsData);

      if (reviewsData.length > 0) {
        const totalRating = reviewsData.reduce((sum, review) => sum + (review.rating || 5), 0);
        setAverageRating(totalRating / reviewsData.length);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  }

  function handleNext() {
    const maxIndex = Math.max(0, reviews.length - visibleCards);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  }

  if (loading || reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{
      background: `linear-gradient(135deg, #1e293b 0%, #1e3a8a 50%, #0f172a 100%), url(/glasgow-skyline.webp)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundAttachment: 'fixed',
      backgroundBlendMode: 'multiply'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-blue-900/50 to-slate-950/70 z-10"></div>

      <div className="absolute inset-0 opacity-30 z-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-3 md:px-4 relative z-30">
        <div className="max-w-5xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-8 md:mb-10 transition-all duration-1000 transform opacity-100 translate-y-0`}
          >
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-xs md:text-sm text-yellow-400 font-semibold tracking-wider uppercase mb-3">
                Testimonials
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 visible">
                What Clients Say About Us
              </h2>
              <p className="text-base md:text-lg text-slate-300">
                We are trusted by hundred's of satisfied customers
              </p>
            </div>

          </div>

          <div className="relative mb-8 z-30 group px-4 md:px-0">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handlePrevious}
              className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-yellow-400 rounded-full p-3 shadow-lg border border-white transition-all duration-300 hover:shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900" />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-yellow-400 rounded-full p-3 shadow-lg border border-white transition-all duration-300 hover:shadow-xl hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6 text-slate-900" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            {Array.from({ length: Math.max(1, reviews.length - visibleCards + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-400 w-7'
                    : 'bg-white/30 w-2.5 hover:bg-white/50'
                }`}
                aria-label={`Go to carousel position ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
