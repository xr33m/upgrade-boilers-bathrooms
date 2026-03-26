import { useState, useEffect } from 'react';
import { Phone, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';

export function StickyBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    window.location.href = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;
  };

  const handleQuoteClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-primary-700 shadow-2xl border-t-2 border-secondary backdrop-blur-sm transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={handleCallClick}
            className="flex items-center gap-2 bg-white text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-50 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out group"
            aria-label="Call now"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm sm:text-base">Call Now</span>
          </button>

          <button
            onClick={handleQuoteClick}
            className="flex items-center gap-2 bg-accent text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:bg-accent-600 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out group"
            aria-label="Get a quote"
          >
            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm sm:text-base">Get Quote Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
