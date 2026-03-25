import { MapPin } from 'lucide-react';
import { GLASGOW_AREAS, ServiceArea } from '../data/areas';

interface AreasWeCoverProps {
  title?: string;
  subtitle?: string;
  areas?: ServiceArea[];
  showMap?: boolean;
  bgColor?: 'white' | 'slate' | 'dark';
  accentColor?: 'blue' | 'green' | 'orange' | 'teal' | 'red';
  className?: string;
}

export default function AreasWeCover({
  title = 'Areas We Cover',
  subtitle,
  areas = GLASGOW_AREAS,
  showMap = true,
  bgColor = 'white',
  accentColor = 'blue',
  className = ''
}: AreasWeCoverProps) {
  const bgColorClasses = {
    white: 'bg-white',
    slate: 'bg-slate-50',
    dark: 'bg-slate-900 text-white'
  };

  const accentColorClasses = {
    blue: {
      icon: 'text-blue-600',
      iconBg: 'bg-blue-600',
      border: 'border-blue-200',
      bg: 'bg-blue-50'
    },
    green: {
      icon: 'text-green-600',
      iconBg: 'bg-green-600',
      border: 'border-green-200',
      bg: 'bg-green-50'
    },
    orange: {
      icon: 'text-orange-600',
      iconBg: 'bg-orange-600',
      border: 'border-orange-200',
      bg: 'bg-orange-50'
    },
    teal: {
      icon: 'text-teal-600',
      iconBg: 'bg-teal-600',
      border: 'border-teal-200',
      bg: 'bg-teal-50'
    },
    red: {
      icon: 'text-red-600',
      iconBg: 'bg-red-600',
      border: 'border-red-200',
      bg: 'bg-red-50'
    }
  };

  const colors = accentColorClasses[accentColor];
  const textColor = bgColor === 'dark' ? 'text-white' : 'text-slate-900';
  const subtitleColor = bgColor === 'dark' ? 'text-slate-300' : 'text-slate-700';

  return (
    <section className={`py-12 md:py-16 ${bgColorClasses[bgColor]} ${className}`}>
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-3 md:mb-4 ${textColor}`}>
                  {title}
                </h2>
                {subtitle && (
                  <p className={`text-lg md:text-xl ${subtitleColor}`}>
                    {subtitle}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {areas.map((area, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-4 rounded-lg ${colors.bg} border ${colors.border}`}
                  >
                    <MapPin className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                    <div>
                      <p className={`font-semibold ${textColor}`}>{area.name}</p>
                      {area.detail && (
                        <p className={`text-sm ${subtitleColor}`}>{area.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {showMap && (
              <div className="relative order-first lg:order-last">
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
                      title="Glasgow Service Area Map"
                    ></iframe>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 pointer-events-none"></div>

                    <div className="absolute bottom-0 right-0 w-1/2 md:w-1/2 pointer-events-none">
                      <img
                        src="/upgrade_-plumbing-and-heating.webp"
                        alt="Upgrade Plumbing and Heating Van"
                        className="w-full h-auto drop-shadow-2xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
