import { Link } from 'react-router-dom';
import { Phone, Flame, Wrench, Droplet, Bath, UserCheck, Clock, Shield, ThermometerSun, Zap, Home, FileText } from 'lucide-react';
import SEO, { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../components/SEO';
import { BUSINESS_INFO, DOMAIN } from '../constants/business';

export default function Services() {
  const serviceCategories = [
    {
      title: 'Boiler Services',
      icon: Flame,
      color: 'blue',
      description: 'Expert boiler installation, servicing, repairs and maintenance from Gas Safe registered engineers.',
      services: [
        { name: 'Boiler Installation', link: '/boilers/installation', description: 'New boiler fitting with up to 10-year warranty' },
        { name: 'Boiler Servicing', link: '/boilers/servicing', description: 'Annual boiler maintenance and safety checks' },
        { name: 'Boiler Repairs', link: '/boilers/repairs', description: 'Fast fault diagnosis and professional repairs' },
        { name: 'Service Plans', link: '/boilers/service-plans', description: 'Annual cover with priority call-outs' },
      ]
    },
    {
      title: 'Heating Services',
      icon: Wrench,
      color: 'orange',
      description: 'Complete heating solutions including central heating, radiators, underfloor heating and heat pumps.',
      services: [
        { name: 'Boiler Cover', link: '/heating/boiler-cover', description: 'Comprehensive boiler breakdown cover' },
        { name: 'Gas Engineer', link: '/heating/gas-engineer', description: 'Gas Safe registered gas engineers' },
        { name: 'Heating Engineer', link: '/heating/heating-engineer', description: 'Central heating specialists' },
        { name: 'Gas Leak Detection', link: '/heating/gas-leak', description: 'Emergency gas leak repairs' },
        { name: 'Underfloor Heating', link: '/heating/underfloor-heating', description: 'Electric and water-based systems' },
        { name: 'Gas Fire Repairs', link: '/heating/gas-fire-repairs', description: 'Gas fire servicing and repairs' },
        { name: 'Air Source Heat Pumps', link: '/heating/air-source-heat-pumps', description: 'Eco-friendly heating solutions' },
        { name: 'Radiator Repairs', link: '/heating/radiator-repairs', description: 'Radiator installation and repair' },
        { name: 'Power Flushing', link: '/heating/power-flushing', description: 'Heating system cleaning' },
      ]
    },
    {
      title: 'Plumbing Services',
      icon: Droplet,
      color: 'cyan',
      description: 'Comprehensive plumbing services from emergency repairs to complete installations.',
      services: [
        { name: 'Emergency Plumber', link: '/plumbing/emergency-plumber', description: '24/7 emergency plumbing service' },
        { name: 'Plumber Repairs', link: '/plumbing/plumber-repairs', description: 'General plumbing repairs' },
        { name: 'Tap Repairs', link: '/plumbing/tap-repairs', description: 'Tap installation and leak repairs' },
        { name: 'Toilet Repairs', link: '/plumbing/toilet-repairs', description: 'Toilet repairs and replacements' },
        { name: 'Hot Water Tanks', link: '/plumbing/hot-water-tanks', description: 'Hot water cylinder services' },
        { name: 'Cold Water Tanks', link: '/plumbing/cold-water-tanks', description: 'Cold water tank installation' },
        { name: 'Cast Iron Pipes', link: '/plumbing/cast-iron-pipes-drainage', description: 'Cast iron pipe replacement' },
        { name: 'Lead Pipe Replacement', link: '/plumbing/lead-pipe-replacement', description: 'Lead pipe removal and replacement' },
        { name: 'Shower Repairs', link: '/plumbing/shower-repairs', description: 'Shower repair and installation' },
      ]
    },
    {
      title: 'Bathroom Installations',
      icon: Bath,
      color: 'purple',
      description: 'Complete bathroom design and installation from concept to completion.',
      services: [
        { name: 'Full Bathroom Installation', link: '/bathroom-installations', description: 'Complete bathroom refurbishment' },
      ]
    },
    {
      title: 'Landlord Services',
      icon: UserCheck,
      color: 'green',
      description: 'Specialist services for landlords including gas safety certificates and compliance.',
      services: [
        { name: 'Gas Safety Certificates', link: '/landlords/gas-safety-certificates', description: 'CP12 landlord gas certificates' },
        { name: 'Lead Testing', link: '/landlords/lead-testing', description: 'Water lead content testing' },
        { name: 'Legionella Assessments', link: '/landlords/legionella-risk-assessments', description: 'Legionella risk assessments' },
        { name: 'PAT Testing', link: '/landlords/pat-testing', description: 'Portable appliance testing' },
      ]
    },
  ];

  const colorClasses = {
    blue: {
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      hoverIconBg: 'group-hover:bg-blue-600',
      hoverIconColor: 'group-hover:text-white',
      border: 'border-blue-200',
      hoverBorder: 'hover:border-blue-500',
      textColor: 'text-blue-600',
      hoverText: 'group-hover:text-blue-600'
    },
    orange: {
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      hoverIconBg: 'group-hover:bg-orange-600',
      hoverIconColor: 'group-hover:text-white',
      border: 'border-orange-200',
      hoverBorder: 'hover:border-orange-500',
      textColor: 'text-orange-600',
      hoverText: 'group-hover:text-orange-600'
    },
    cyan: {
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      hoverIconBg: 'group-hover:bg-cyan-600',
      hoverIconColor: 'group-hover:text-white',
      border: 'border-cyan-200',
      hoverBorder: 'hover:border-cyan-500',
      textColor: 'text-cyan-600',
      hoverText: 'group-hover:text-cyan-600'
    },
    purple: {
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      hoverIconBg: 'group-hover:bg-purple-600',
      hoverIconColor: 'group-hover:text-white',
      border: 'border-purple-200',
      hoverBorder: 'hover:border-purple-500',
      textColor: 'text-purple-600',
      hoverText: 'group-hover:text-purple-600'
    },
    green: {
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      hoverIconBg: 'group-hover:bg-green-600',
      hoverIconColor: 'group-hover:text-white',
      border: 'border-green-200',
      hoverBorder: 'hover:border-green-500',
      textColor: 'text-green-600',
      hoverText: 'group-hover:text-green-600'
    },
  };

  return (
    <>
      <SEO
        title="Plumbing & Heating Services Glasgow | Boilers, Repairs, Installation"
        description="Complete plumbing and heating services in Glasgow including boiler installation & repairs, central heating, emergency plumbing, bathrooms and landlord services. Gas Safe registered. 24/7 emergency available."
        canonical={`${DOMAIN}/services`}
        schema={generateLocalBusinessSchema()}
      />
      <SEO
        schema={generateBreadcrumbSchema([
          { name: "Home", url: DOMAIN },
          { name: "Services", url: `${DOMAIN}/services` }
        ])}
      />

      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Complete Range of Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Professional plumbing and heating services across Glasgow. Gas Safe registered engineers delivering quality workmanship with 12-month guarantees.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                to="/contact"
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = colorClasses[category.color as keyof typeof colorClasses];

              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border-2 border-slate-200">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-8 h-8 ${colors.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">
                        {category.title}
                      </h2>
                      <p className="text-slate-600 text-lg">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.link}
                        className={`bg-white p-5 rounded-lg border-2 ${colors.border} ${colors.hoverBorder} hover:shadow-md transition group`}
                      >
                        <h3 className={`font-bold text-slate-900 mb-2 ${colors.hoverText} transition`}>
                          {service.name}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-xl text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                24/7 Emergency Services
              </h2>
              <p className="text-xl mb-6 text-red-100">
                Immediate response for plumbing and heating emergencies. Available day and night across Glasgow.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-white hover:bg-red-50 text-red-700 px-8 py-4 rounded-lg font-bold text-xl inline-flex items-center gap-2 transition shadow-lg"
              >
                <Phone className="w-6 h-6" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Choose Our Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Gas Safe Registered</h3>
                <p className="text-slate-600">
                  All our engineers are fully Gas Safe registered and hold relevant industry qualifications.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">12-Month Guarantee</h3>
                <p className="text-slate-600">
                  All our work is covered by a comprehensive 12-month workmanship guarantee.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Fast Response</h3>
                <p className="text-slate-600">
                  We aim to respond to all emergency calls within 60-90 minutes across Glasgow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. Our friendly team is ready to help with all your plumbing and heating needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition shadow-lg"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg border-2 border-white"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
