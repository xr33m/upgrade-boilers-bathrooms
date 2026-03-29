import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, ArrowRight, MapPin, Mail, Star } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';
import WhyChooseUs from '../components/WhyChooseUs';
import ThreeStepsSection from '../components/ThreeStepsSection';
import BrandsSection from '../components/BrandsSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ReviewsSection from '../components/ReviewsSection';
import { AnimatedSection, FadeIn } from '../components/AnimatedSection';

export default function Home() {
  return (
    <>
      <SEO
        title="Plumbers Glasgow | Boiler Installation & Heating Services 24/7"
        description="Glasgow's trusted plumbing and heating experts. Gas Safe registered engineers for boiler installation, repairs, servicing, emergency plumbing & heating. Available 24/7. Free quotes. Call 07523 172416"
        canonical={`${DOMAIN}/`}
        schema={generateLocalBusinessSchema()}
      />

      <section className="relative overflow-hidden -mt-[8.5rem] md:-mt-[9.5rem] pt-[8.5rem] md:pt-[9.5rem] pb-8 md:pb-24 lg:pb-32 min-h-[85vh] md:min-h-screen lg:min-h-[75vh] xl:min-h-[80vh] flex items-end md:items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-no-repeat bg-[center_20%] md:bg-[70%_center] lg:bg-[75%_center]" style={{ backgroundImage: 'url(/hero-home-upgrade.webp)', backgroundSize: 'cover' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-primary/30"></div>
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent opacity-60 pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 md:px-4 relative z-10 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 max-w-2xl text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 mb-3 md:mb-6 justify-center md:justify-start">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-6 leading-tight text-white">
                  <span className="text-secondary">Local</span> Plumber in Glasgow
                  <span className="hidden md:inline"> – 24/7 Repairs & Installations</span>
                </h1>

                <p className="text-sm md:text-xl text-white/90 mb-4 md:mb-8 max-w-xl leading-relaxed mx-auto md:mx-0">
                  Professional plumbing repairs, boiler servicing & emergency call-outs. Gas Safe registered engineers.
                </p>

                <div className="flex flex-row gap-2 mb-4 md:hidden justify-center">
                  <a
                    href="tel:07523172416"
                    className="bg-accent hover:bg-accent-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg"
                  >
                    Call Now
                  </a>
                  <Link
                    to="/contact"
                    className="bg-white hover:bg-gray-100 text-slate-900 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg"
                  >
                    Book Online
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-8 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 text-xs md:text-base text-white bg-white/10 backdrop-blur-sm px-2.5 md:px-4 py-1.5 md:py-2 rounded-lg border border-white/20">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
                    <span>24/7 Service</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs md:text-base text-white bg-white/10 backdrop-blur-sm px-2.5 md:px-4 py-1.5 md:py-2 rounded-lg border border-white/20">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
                    <span>Free Quotes</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs md:text-base text-white bg-white/10 backdrop-blur-sm px-2.5 md:px-4 py-1.5 md:py-2 rounded-lg border border-white/20">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
                    <span>12mo Guarantee</span>
                  </div>
                </div>

                <div className="hidden md:flex gap-4">
                  <a
                    href="tel:07523172416"
                    className="bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ease-out shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    Call Now
                  </a>
                  <Link
                    to="/contact"
                    className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ease-out shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    Book Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection variant="white">
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection variant="light-grey" className="py-12 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
                Professional Plumbing & Heating Services
              </h2>
              <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto px-2">
                Comprehensive plumbing and heating solutions for homes and businesses across Glasgow
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <Link to="/boilers" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary to-primary-700">
                  <img
                    src="/boiler-services-upgrade-home.webp"
                    alt="Boiler Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">Boiler Services</h3>
                  <p className="text-gray-700 text-sm mb-3">Professional boiler installation, servicing, repairs and maintenance. Gas Safe registered engineers ensure your heating system runs efficiently and safely.</p>
                  <div className="flex items-center text-primary font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link to="/heating" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent to-accent-600">
                  <img
                    src="/heating-systems-upgrade-home.webp"
                    alt="Heating Systems"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition">Heating Systems</h3>
                  <p className="text-gray-700 text-sm mb-3">Complete central heating solutions including radiators, underfloor heating, heat pumps, and system upgrades. Keep your home warm and comfortable all year round.</p>
                  <div className="flex items-center text-accent font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link to="/plumbing" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-500 to-primary">
                  <img
                    src="/plumbing-services-upgrade-home.webp"
                    alt="Plumbing Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">Plumbing Services</h3>
                  <p className="text-gray-700 text-sm mb-3">24/7 emergency plumbing, leak repairs, pipe installations, tap and toilet repairs. Fast response times and reliable solutions for all your plumbing needs.</p>
                  <div className="flex items-center text-primary font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link to="/bathroom-installations" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary to-secondary-600">
                  <img
                    src="/bathroom-installations-upgrade-home.webp"
                    alt="Bathroom Installations"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary-600 transition">Bathroom Installations</h3>
                  <p className="text-gray-700 text-sm mb-3">Full bathroom design, supply, and installation services. From modern suites to traditional styles, we create beautiful and functional bathrooms.</p>
                  <div className="flex items-center text-secondary-600 font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link to="/landlords" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out group">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary to-secondary-600">
                  <img
                    src="/landlord-services-upgrade-home.webp"
                    alt="Landlord Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary-600 transition">Landlord Services</h3>
                  <p className="text-gray-700 text-sm mb-3">Gas safety certificates, PAT testing, legionella risk assessments, and lead testing. Stay compliant with all landlord safety regulations.</p>
                  <div className="flex items-center text-secondary-600 font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-gradient-to-br from-accent to-accent-600 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition text-white group relative">
                <img
                  src="/emergency-plumber-upgrade-home.webp"
                  alt="Emergency Plumber"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition duration-500"
                />
                <div className="relative p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2">24/7 Emergency Service</h3>
                  <p className="text-white mb-4">Available day and night for urgent plumbing and heating emergencies across Glasgow.</p>
                  <span className="font-bold text-xl">{BUSINESS_INFO.phone}</span>
                </div>
              </a>
            </div>

            <FadeIn className="text-center" delay={200}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 hover:scale-105 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="white">
        <ReviewsSection />
      </AnimatedSection>

      <AnimatedSection variant="light-grey">
        <WhyChooseUs />
      </AnimatedSection>

      <AnimatedSection variant="white">
        <ThreeStepsSection />
      </AnimatedSection>

      <AnimatedSection variant="light-grey">
        <BrandsSection />
      </AnimatedSection>

      <AnimatedSection variant="blue" className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                  Need Assistance?
                </h2>
                <p className="text-lg md:text-xl text-slate-300">
                  Contact us today or drop us a message!
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Address</h3>
                    <p className="text-slate-300">
                      24 Clarion Cres, Knightswood,<br />
                      Glasgow G13 3LG
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Phone</h3>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-300 hover:text-secondary transition text-lg">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-300 hover:text-secondary transition">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-[350px] md:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223689.62917641258!2d-4.4296999!3d55.8641694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow!5e0!3m2!1sen!2suk!4v1708094400000!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-70"
                  ></iframe>

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 pointer-events-none"></div>

                  <div className="absolute bottom-0 right-0 w-1/2 md:w-1/2 pointer-events-none">
                    <img
                      src="/upgrade_-plumbing-and-heating.webp"
                      alt="Upgrade Plumbing and Heating"
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="white">
        <FAQSection />
      </AnimatedSection>

      <AnimatedSection variant="blue" className="py-12 md:py-16">
        <div className="container mx-auto px-3 md:px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Need a Plumber or Heating Engineer in Glasgow?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote. Our friendly team is ready to help with all your plumbing and heating needs.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white hover:bg-gray-100 text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg flex items-center justify-center gap-2 transition shadow-lg">
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-lg">{BUSINESS_INFO.phone}</span>
            </a>
            <Link to="/contact" className="bg-primary hover:bg-primary-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition shadow-lg border-2 border-white">
              Request Free Quote
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
