import { Award, Headphones, Phone, Star, Users, BadgeCheck } from 'lucide-react';
import { Waves } from './Waves';

const benefits = [
  {
    icon: Award,
    title: 'Quality Of Workmanship'
  },
  {
    icon: Headphones,
    title: 'Aftersales Care'
  },
  {
    icon: Phone,
    title: 'Emergency Call Outs'
  },
  {
    icon: Star,
    title: 'Fully Satisfied'
  },
  {
    icon: Users,
    title: 'Fully Equipped Team'
  },
  {
    icon: BadgeCheck,
    title: 'Experts In The Industry'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Waves
          backgroundColor="#0B3C5D"
          strokeColor="#C8A96A"
          pointerSize={0.5}
        />
      </div>

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg text-white">
            Why Choose Upgrade
          </h2>
          <p className="text-base md:text-lg text-white max-w-3xl mx-auto drop-shadow-md font-semibold bg-black/20 backdrop-blur-sm rounded-xl py-3 px-4">
            Top-quality Glasgow plumbing & heating services with stress-free solutions for all your needs
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:grid md:grid-cols-3 gap-8 md:gap-0 items-center">
            <div className="space-y-12 md:text-right">
              <div className="flex items-center gap-4 md:flex-row-reverse md:justify-start justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/30 to-white/10 backdrop-blur-md border-4 border-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/50">
                  <Award className="w-10 h-10 text-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                </div>
                <div className="md:text-right text-center">
                  <h3 className="text-lg font-bold text-white bg-black/70 rounded-lg px-3 py-2 inline-block">Quality Of Workmanship</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 md:flex-row-reverse md:justify-start justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/30 to-white/10 backdrop-blur-md border-4 border-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/50">
                  <Headphones className="w-10 h-10 text-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                </div>
                <div className="md:text-right text-center">
                  <h3 className="text-lg font-bold text-white bg-black/70 rounded-lg px-3 py-2 inline-block">Aftersales Care</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 md:flex-row-reverse md:justify-start justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/30 to-white/10 backdrop-blur-md border-4 border-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/50">
                  <Phone className="w-10 h-10 text-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                </div>
                <div className="md:text-right text-center">
                  <h3 className="text-lg font-bold text-white bg-black/70 rounded-lg px-3 py-2 inline-block">Emergency Call Outs</h3>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-secondary blur-3xl opacity-60 animate-pulse"></div>
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-slate-900 via-black to-slate-900 flex items-center justify-center shadow-2xl relative z-10 border-2 border-slate-700">
                  <img
                    src="/upgrade-logo-removebg-preview.webp"
                    alt="Upgrade Boilers and Bathrooms"
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/30 to-white/10 backdrop-blur-md border-4 border-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/50">
                  <Star className="w-10 h-10 text-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white bg-black/70 rounded-lg px-3 py-2 inline-block">Fully Satisfied</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/30 to-white/10 backdrop-blur-md border-4 border-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/50">
                  <Users className="w-10 h-10 text-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white bg-black/70 rounded-lg px-3 py-2 inline-block">Fully Equipped Team</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/30 to-white/10 backdrop-blur-md border-4 border-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/50">
                  <BadgeCheck className="w-10 h-10 text-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white bg-black/70 rounded-lg px-3 py-2 inline-block">Experts In The Industry</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="grid grid-cols-3 gap-3 mb-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500/30 to-white/10 backdrop-blur-md border-2 border-amber-400 flex items-center justify-center mb-2 shadow-md shadow-secondary/50">
                      <Icon className="w-7 h-7 text-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                    </div>
                    <h3 className="text-sm font-bold leading-tight px-2 py-1 text-white bg-black/70 rounded inline-block">
                      {benefit.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center pt-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-secondary blur-2xl opacity-60 animate-pulse"></div>
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-900 via-black to-slate-900 flex items-center justify-center shadow-2xl relative z-10 border-2 border-slate-700">
                  <img
                    src="/upgrade-logo-removebg-preview.webp"
                    alt="Upgrade Boilers and Bathrooms"
                    className="w-28 h-28 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
