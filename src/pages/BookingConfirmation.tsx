import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function BookingConfirmation() {
  const [bookingData, setBookingData] = useState<{
    name: string;
    email: string;
    phone: string;
  } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('bookingData');
    if (stored) {
      setBookingData(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <SEO
        title="Booking Confirmed | Thank You"
        description="Your booking has been confirmed. We'll contact you within 2 hours to confirm your appointment."
        canonical={`${DOMAIN}/booking-confirmation`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Contact", url: `${DOMAIN}/contact` },
          { name: "Booking Confirmed", url: `${DOMAIN}/booking-confirmation` }
        ])}
      />

      <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 md:py-24">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <CheckCircle className="w-24 h-24 md:w-32 md:h-32 text-secondary relative" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Booking Confirmed!
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Thank you for choosing Upgrade Boilers and Bathrooms
            </p>

            {bookingData && (
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12 border-l-4 border-green-500">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Booking Details</h2>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Name:</span>
                    <span className="font-semibold text-slate-900">{bookingData.name}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Email:</span>
                    <span className="font-semibold text-slate-900">{bookingData.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Phone:</span>
                    <span className="font-semibold text-slate-900">{bookingData.phone}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-primary-50 rounded-xl p-8 md:p-12 mb-12 border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What Happens Next?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 mb-1">We'll Call Within 2 Hours</h4>
                    <p className="text-slate-600">Our team will contact you to confirm your appointment and discuss your requirements in detail.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 mb-1">Get a Free Quote</h4>
                    <p className="text-slate-600">We'll provide a transparent, competitive quote with no hidden costs or obligations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 mb-1">Confirmation Email</h4>
                    <p className="text-slate-600">You'll receive a confirmation email with our contact details and appointment information.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-8 mb-12 border border-orange-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Need to Reach Us Immediately?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-600">
                Available 24/7 for emergency calls. Standard calls Monday-Saturday.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition text-lg"
              >
                Return to Home
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
