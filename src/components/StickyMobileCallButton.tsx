import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';

export default function StickyMobileCallButton() {
  return (
    <a
      href={`tel:${BUSINESS_INFO.phone}`}
      className="fixed bottom-4 right-4 md:hidden z-40 bg-accent hover:bg-accent-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 active:scale-95"
      aria-label="Call now"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
