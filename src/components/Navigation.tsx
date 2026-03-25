import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const areas = [
  'Anniesland',
  'Baillieston',
  'Battlefield',
  'Bearsden',
  'Bishopbriggs',
  'Blackburn',
  'Blantyre',
  'Burnside',
  'Cambuslang',
  'Clydebank',
  'East Kilbride',
  'Giffnock',
  'Glasgow',
  'Glasgow Southside',
  'Glasgow West End',
  'Hamilton',
  'Kings Park',
  'Motherwell',
  'Newton Mearns',
  'Paisley',
  'Pollokshields',
  'Rutherglen',
  'Scotstoun',
  'Shawlands',
  'Strathbungo',
  'Uddingston'
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="px-4 md:px-6 py-4 md:py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/upgrade-logo-removebg-preview.webp"
              alt="Upgrade Logo"
              className="h-16 md:h-24 w-auto"
            />
          </Link>

          <button
            className="bg-secondary text-white p-2 hover:bg-secondary-600 hover:scale-110 rounded-lg transition-all duration-300 ease-out ml-auto font-semibold shadow-lg hover:shadow-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="backdrop-blur-md bg-primary/95 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
            <div className="flex flex-col gap-1">
              <Link
                to="/services"
                className="py-3 px-4 text-white hover:bg-white/10 hover:scale-105 rounded-lg transition-all duration-300 ease-out font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>

              <div className="py-1" />

              <div className="py-3 px-4 text-secondary font-semibold text-lg">Boilers</div>
              <Link to="/boilers/installation" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Boiler Installation</Link>
              <Link to="/boilers/servicing" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Boiler Servicing</Link>
              <Link to="/boilers/service-plans" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Service Plans</Link>
              <Link to="/boilers/repairs" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Boiler Repairs</Link>

              <div className="py-1" />

              <div className="py-3 px-4 text-secondary font-semibold text-lg">Heating</div>
              <Link to="/heating/boiler-cover" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Boiler Cover</Link>
              <Link to="/boilers/repairs" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Boiler Repair</Link>
              <Link to="/heating/gas-engineer" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Gas Engineer</Link>
              <Link to="/heating/heating-engineer" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Heating Engineer</Link>
              <Link to="/heating/gas-leak" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Gas Leak</Link>
              <Link to="/heating/underfloor-heating" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Underfloor Heating</Link>
              <Link to="/heating/gas-fire-repairs" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Gas Fire Repairs & Servicing</Link>
              <Link to="/heating/air-source-heat-pumps" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Air Source Heat Pumps</Link>
              <Link to="/heating/radiator-repairs" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Radiator Repairs & Installations</Link>
              <Link to="/heating/power-flushing" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Power Flushing</Link>

              <div className="py-1" />

              <div className="py-3 px-4 text-secondary font-semibold text-lg">Plumbing</div>
              <Link to="/plumbing/emergency-plumber" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Emergency Plumber</Link>
              <Link to="/plumbing/plumber-repairs" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Plumber Repairs</Link>
              <Link to="/plumbing/tap-repairs" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Tap Repairs</Link>
              <Link to="/plumbing/toilet-repairs" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Toilet Repairs</Link>
              <Link to="/plumbing/hot-water-tanks" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Hot Water Tanks</Link>
              <Link to="/plumbing/cold-water-tanks" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Cold Water Tanks</Link>
              <Link to="/plumbing/cast-iron-pipes-drainage" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Cast Iron Pipes</Link>
              <Link to="/plumbing/lead-pipe-replacement" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Lead Pipe Replacement</Link>
              <Link to="/plumbing/shower-repairs" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Shower Repairs</Link>

              <div className="py-1" />

              <Link
                to="/bathroom-installations"
                className="py-3 px-4 text-white hover:bg-white/10 hover:scale-105 rounded-lg transition-all duration-300 ease-out font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Bathrooms
              </Link>

              <div className="py-1" />

              <div className="py-3 px-4 text-secondary font-semibold text-lg">Areas Served</div>
              <div className="grid grid-cols-2 gap-1 px-4">
                {areas.map((area) => (
                  <Link
                    key={area}
                    to="/areas-served"
                    className="py-2 pl-4 text-white hover:text-secondary transition text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {area}
                  </Link>
                ))}
              </div>

              <div className="py-1" />

              <div className="py-3 px-4 text-secondary font-semibold text-lg">Landlords</div>
              <Link to="/landlords/gas-safety-certificates" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Gas Safety Certificates</Link>
              <Link to="/landlords/lead-testing" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Lead Testing</Link>
              <Link to="/landlords/legionella-risk-assessments" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Legionella Risk Assessments</Link>
              <Link to="/landlords/pat-testing" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>PAT Testing</Link>

              <div className="py-1" />

              <Link
                to="/reviews"
                className="py-3 px-4 text-white hover:bg-white/10 hover:scale-105 rounded-lg transition-all duration-300 ease-out font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </Link>

              <div className="py-1" />

              <div className="py-3 px-4 text-secondary font-semibold text-lg">Help</div>
              <Link to="/faqs" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>FAQs</Link>
              <Link to="/pricing" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>Pricing</Link>
              <Link to="/about" className="py-2 pl-8 text-white hover:text-secondary hover:translate-x-2 transition-all duration-300 ease-out" onClick={() => setIsOpen(false)}>About Us</Link>

              <div className="py-1" />

              <Link
                to="/contact"
                className="py-3 px-4 bg-accent hover:bg-accent-600 hover:scale-105 hover:shadow-xl rounded-lg transition-all duration-300 ease-out font-semibold text-lg text-white text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
