import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/business';
import GasSafeBadge from './GasSafeBadge';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <img
            src="/upgrade-logo-removebg-preview.webp"
            alt="Upgrade Boilers and Bathrooms Logo"
            className="h-32 w-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Contact Us</h3>
            <div className="space-y-3">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-start gap-3 hover:text-secondary transition">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>{BUSINESS_INFO.phone}</div>
                </div>
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-start gap-3 hover:text-secondary transition">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div>{BUSINESS_INFO.email}</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div>{BUSINESS_INFO.address.street}</div>
                  <div>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postcode}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div>Mon-Fri: 8am - 6pm</div>
                  <div>Sat: 9am - 5pm</div>
                  <div className="text-accent font-semibold">24/7 Emergency Service</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/boilers" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Boiler Services</Link></li>
              <li><Link to="/boilers/installation" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Boiler Installation</Link></li>
              <li><Link to="/boilers/servicing" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Boiler Servicing</Link></li>
              <li><Link to="/boilers/repairs" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Boiler Repairs</Link></li>
              <li><Link to="/heating" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Heating Services</Link></li>
              <li><Link to="/plumbing" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Plumbing Services</Link></li>
              <li><Link to="/bathroom-installations" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Bathroom Installations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">About Us</Link></li>
              <li><Link to="/landlords" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Landlord Services</Link></li>
              <li><Link to="/reviews" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Customer Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Service Areas</h3>
            <p className="mb-3">We proudly serve:</p>
            <ul className="space-y-1">
              {BUSINESS_INFO.serviceAreas.map(area => (
                <li key={area} className="text-gray-300">{area}</li>
              ))}
            </ul>
            <div className="mt-6">
              <img
                src="/gassafe-logo-removebg-preview.webp"
                alt="Gas Safe Registered Logo"
                className="h-16 w-auto mb-4"
              />
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <a href={BUSINESS_INFO.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href={BUSINESS_INFO.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 ease-out" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Gas Safe Registered | Fully Insured | Established {BUSINESS_INFO.established}</p>
        </div>
      </div>
    </footer>
  );
}
