import { MapPin } from 'lucide-react';

const areas = [
  { name: 'Glasgow City Centre', postcode: 'G1–G5' },
  { name: 'West End', postcode: 'G11–G13' },
  { name: 'Southside', postcode: 'G41–G46' },
  { name: 'East Glasgow', postcode: 'G31–G32' },
  { name: 'Bearsden & Milngavie', postcode: '' },
  { name: 'East Kilbride', postcode: '' },
  { name: 'Paisley & Surrounding Areas', postcode: '' }
];

export default function AreasWeServe() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <MapPin className="w-10 h-10 text-blue-600" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Areas We Cover
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Providing professional plumbing and heating services across Glasgow and surrounding areas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
            <div className="grid sm:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="group bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:-translate-y-1 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {area.name}
                      </h3>
                      {area.postcode && (
                        <p className="text-sm text-slate-600">{area.postcode}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 h-[450px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143130.0939777289!2d-4.331550766296386!3d55.86219324658037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C%20UK!5e0!3m2!1sen!2suk!4v1647890123456!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Glasgow Service Area Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center shadow-xl">
            <p className="text-white text-lg md:text-xl font-semibold mb-2">
              Don't see your area listed?
            </p>
            <p className="text-blue-100 text-base md:text-lg">
              Give us a call on <a href="tel:01412370963" className="text-white font-bold hover:underline">0141 237 0963</a> – we may still be able to help
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
