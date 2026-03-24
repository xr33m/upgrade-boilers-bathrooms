import { Marquee } from './Marquee';

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  {
    name: 'Worcester Bosch',
    logo: '/worcester-upgrade.webp',
  },
  {
    name: 'Ideal Heating',
    logo: '/ideal-logo.webp',
  },
  {
    name: 'Vaillant',
    logo: '/vaillant_upgrade.webp',
  },
  {
    name: 'Baxi',
    logo: '/Baxi-Large-Logo.webp',
  },
  {
    name: 'Potterton',
    logo: '/potterton_upgrade.webp',
  },
  {
    name: 'Wilo',
    logo: '/wilo_upgrade.webp',
  },
  {
    name: 'Gas Safe',
    logo: '/gassafe-upgrade.webp',
  },
  {
    name: 'City Guilds',
    logo: '/city-guilds.webp',
  },
  {
    name: 'CIPHE',
    logo: '/ciphe-log.webp',
  },
  {
    name: 'Water Safe',
    logo: '/water-safe-logo.webp',
  },
  {
    name: 'SNIPEF',
    logo: '/upgrade-snipef.webp',
  }
];

interface BrandLogoProps {
  brand: Brand;
}

function BrandLogo({ brand }: BrandLogoProps) {
  return (
    <div className="flex-shrink-0 px-6 md:px-8 h-16 md:h-20 flex items-center justify-center">
      <img
        src={brand.logo}
        alt={brand.name}
        className="max-h-10 md:max-h-14 max-w-[100px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      <div className="px-4 sm:px-6 lg:px-8 mb-2">
        <h2 className="text-center text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Affiliations & Accreditations
        </h2>
      </div>

      <Marquee speed={50} pauseOnHover className="my-0">
        {brands.map((brand) => (
          <BrandLogo key={brand.name} brand={brand} />
        ))}
      </Marquee>
    </section>
  );
}
