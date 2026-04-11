import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO, { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const form = e.target as HTMLFormElement;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });

        setTimeout(() => {
          navigate('/booking-confirmation');
        }, 1500);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit form. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Glasgow Plumbers | Free Quote & Emergency Service 24/7"
        description="Contact Upgrade Boilers and Bathrooms for a free plumbing and heating quote. Emergency service available 24/7. Call 07523 172416 or use our online contact form for fast response."
        canonical={`${DOMAIN}/contact`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Contact", url: `${DOMAIN}/contact` }
        ])}
      />

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              Free quotes, expert advice, and fast response times. We're here to help with all your plumbing and heating needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-8">
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-start gap-4 p-6 bg-primary-50 rounded-lg hover:bg-primary-100 transition group">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-700 transition">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Phone</div>
                      <div className="text-2xl font-bold text-primary">{BUSINESS_INFO.phone}</div>
                      <div className="text-sm text-slate-600 mt-1">24/7 Emergency Line Available</div>
                    </div>
                  </a>

                  <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                    <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Email</div>
                      <div className="text-lg text-slate-700">{BUSINESS_INFO.email}</div>
                      <div className="text-sm text-slate-600 mt-1">We respond within 2 hours</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
                    <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Address</div>
                      <div className="text-slate-700">{BUSINESS_INFO.address.street}</div>
                      <div className="text-slate-700">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postcode}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
                    <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Opening Hours</div>
                      <div className="text-slate-700">Monday - Friday: 8:00am - 5:00pm</div>
                      <div className="text-slate-700">Saturday: Emergency call out available</div>
                      <div className="text-slate-700">Sunday: Emergency call out available</div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Service Areas</h3>
                  <p className="text-slate-700 mb-2">We proudly serve the following areas:</p>
                  <div className="text-slate-700">
                    {BUSINESS_INFO.serviceAreas.join(', ')}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Request a Free Quote
                </h2>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                    Thank you! Your message has been sent successfully. Redirecting...
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/xqegorya"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block font-semibold mb-2 text-slate-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-secondary outline-none transition"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-semibold mb-2 text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-secondary outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-semibold mb-2 text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-secondary outline-none transition"
                      placeholder="0141 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block font-semibold mb-2 text-slate-700">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-secondary outline-none transition"
                    >
                      <option value="">Please select...</option>
                      <option value="boiler-installation">Boiler Installation</option>
                      <option value="boiler-servicing">Boiler Servicing</option>
                      <option value="boiler-repair">Boiler Repair</option>
                      <option value="heating">Heating Services</option>
                      <option value="plumbing">Plumbing Services</option>
                      <option value="bathroom">Bathroom Installation</option>
                      <option value="landlord">Landlord Services</option>
                      <option value="emergency">Emergency Call-Out</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-semibold mb-2 text-slate-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-secondary outline-none transition resize-none"
                      placeholder="Please provide details about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary-700 disabled:bg-primary-400 text-white font-bold py-4 rounded-lg transition text-lg"
                  >
                    {loading ? 'Submitting...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-slate-600 text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your details with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
