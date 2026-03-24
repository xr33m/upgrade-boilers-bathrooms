export interface RelatedService {
  label: string;
  path: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const serviceLinks = {
  boilers: {
    hub: '/boilers',
    installation: '/boilers/installation',
    servicing: '/boilers/servicing',
    repairs: '/boilers/repairs',
    servicePlans: '/boilers/service-plans',
    cover: '/boilers/boiler-cover',
  },
  heating: {
    hub: '/heating',
    radiatorRepairs: '/heating/radiator-repairs',
    gasFireRepairs: '/heating/gas-fire-repairs',
    powerFlushing: '/heating/power-flushing',
    airSourceHeatPumps: '/heating/air-source-heat-pumps',
    underfloorHeating: '/heating/underfloor-heating',
    gasEngineer: '/heating/gas-engineer',
    heatingEngineer: '/heating/heating-engineer',
    gasLeak: '/heating/gas-leak',
  },
  plumbing: {
    hub: '/plumbing',
    emergency: '/plumbing/emergency-plumber',
    repairs: '/plumbing/plumber-repairs',
    tapRepairs: '/plumbing/tap-repairs',
    toiletRepairs: '/plumbing/toilet-repairs',
    hotWaterTanks: '/plumbing/hot-water-tanks',
    coldWaterTanks: '/plumbing/cold-water-tanks',
    castIronPipes: '/plumbing/cast-iron-pipes-drainage',
    leadPipeReplacement: '/plumbing/lead-pipe-replacement',
    showerRepairs: '/plumbing/shower-repairs',
  },
  bathrooms: '/bathroom-installations',
  landlords: {
    hub: '/landlords',
    gasSafety: '/landlords/gas-safety-certificates',
    leadTesting: '/landlords/lead-testing',
    legionella: '/landlords/legionella-risk-assessments',
    patTesting: '/landlords/pat-testing',
    propertyManagers: '/landlords/property-managers',
    privateLandlords: '/landlords/private-landlords',
  },
  areas: {
    bearsden: '/areas/plumber-bearsden',
    eastKilbride: '/areas/plumber-east-kilbride',
    southside: '/areas/plumber-glasgow-southside',
    paisley: '/areas/plumber-paisley',
  },
  main: {
    home: '/',
    services: '/services',
    contact: '/contact',
    about: '/about',
    pricing: '/pricing',
    faqs: '/faqs',
    reviews: '/reviews',
  },
};

export const boilerRelatedServices: RelatedService[] = [
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'New boiler installation and replacements' },
  { label: 'Boiler Repairs', path: serviceLinks.boilers.repairs, description: '24/7 emergency boiler repairs' },
  { label: 'Boiler Servicing', path: serviceLinks.boilers.servicing, description: 'Annual boiler maintenance and servicing' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'Central heating systems and upgrades' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency plumbing services' },
];

export const heatingRelatedServices: RelatedService[] = [
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'New boiler installation' },
  { label: 'Boiler Repairs', path: serviceLinks.boilers.repairs, description: '24/7 emergency boiler repairs' },
  { label: 'Radiator Repairs', path: serviceLinks.heating.radiatorRepairs, description: 'Radiator replacement and repairs' },
  { label: 'Power Flushing', path: serviceLinks.heating.powerFlushing, description: 'System power flushing service' },
  { label: 'Underfloor Heating', path: serviceLinks.heating.underfloorHeating, description: 'Underfloor heating installation' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency assistance' },
];

export const plumbingRelatedServices: RelatedService[] = [
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency plumbing' },
  { label: 'Boiler Repairs', path: serviceLinks.boilers.repairs, description: 'Emergency boiler repairs' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'Central heating solutions' },
  { label: 'Bathroom Installations', path: serviceLinks.bathrooms, description: 'Complete bathroom fitting' },
  { label: 'Tap & Toilet Repairs', path: serviceLinks.plumbing.toiletRepairs, description: 'Quick repair services' },
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'New boiler installation' },
];

export const bathroomRelatedServices: RelatedService[] = [
  { label: 'Plumbing Services', path: serviceLinks.plumbing.hub, description: 'All plumbing work' },
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'Hot water solutions' },
  { label: 'Tap Repairs', path: serviceLinks.plumbing.tapRepairs, description: 'Tap installation and repair' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency service' },
];

export const landlordRelatedServices: RelatedService[] = [
  { label: 'Gas Safety Certificates', path: serviceLinks.landlords.gasSafety, description: 'Annual Gas Safety checks' },
  { label: 'Boiler Servicing', path: serviceLinks.boilers.servicing, description: 'Landlord boiler servicing' },
  { label: 'Lead Testing', path: serviceLinks.landlords.leadTesting, description: 'Lead pipe and water testing' },
  { label: 'Legionella Assessments', path: serviceLinks.landlords.legionella, description: 'Legionella risk assessments' },
];

export const emergencyPlumberRelatedServices: RelatedService[] = [
  { label: 'Plumbing Services', path: serviceLinks.plumbing.hub, description: 'All plumbing services' },
  { label: 'Boiler Repairs', path: serviceLinks.boilers.repairs, description: '24/7 boiler emergency' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'Heating system emergencies' },
  { label: 'Toilet Repairs', path: serviceLinks.plumbing.toiletRepairs, description: 'Emergency toilet repairs' },
];

export const boilerRepairsRelatedServices: RelatedService[] = [
  { label: 'Boiler Servicing', path: serviceLinks.boilers.servicing, description: 'Prevent future breakdowns' },
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'Boiler replacement' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'Central heating solutions' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency help' },
];

export const radiatorRepairsRelatedServices: RelatedService[] = [
  { label: 'Power Flushing', path: serviceLinks.heating.powerFlushing, description: 'System cleaning service' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'Heating system upgrades' },
  { label: 'Boiler Repairs', path: serviceLinks.boilers.repairs, description: 'Boiler emergency service' },
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'New boiler installation' },
];

export const powerFlushingRelatedServices: RelatedService[] = [
  { label: 'Radiator Repairs', path: serviceLinks.heating.radiatorRepairs, description: 'Radiator replacement' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'Full heating solutions' },
  { label: 'Boiler Servicing', path: serviceLinks.boilers.servicing, description: 'Boiler maintenance' },
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'New boiler installation' },
];

export const toiletRepairsRelatedServices: RelatedService[] = [
  { label: 'Plumbing Services', path: serviceLinks.plumbing.hub, description: 'All plumbing services' },
  { label: 'Tap Repairs', path: serviceLinks.plumbing.tapRepairs, description: 'Tap replacement' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency help' },
  { label: 'Bathroom Installations', path: serviceLinks.bathrooms, description: 'Bathroom upgrades' },
];

export const tapRepairsRelatedServices: RelatedService[] = [
  { label: 'Toilet Repairs', path: serviceLinks.plumbing.toiletRepairs, description: 'Toilet repair service' },
  { label: 'Plumbing Services', path: serviceLinks.plumbing.hub, description: 'All plumbing work' },
  { label: 'Bathroom Installations', path: serviceLinks.bathrooms, description: 'Bathroom remodeling' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency service' },
];

export const hotWaterTanksRelatedServices: RelatedService[] = [
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'New boiler installation' },
  { label: 'Plumbing Services', path: serviceLinks.plumbing.hub, description: 'All plumbing services' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency help' },
  { label: 'Bathroom Installations', path: serviceLinks.bathrooms, description: 'Bathroom fitting' },
];

export const boilerInstallationRelatedServices: RelatedService[] = [
  { label: 'Boiler Servicing', path: serviceLinks.boilers.servicing, description: 'Annual maintenance plan' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'Heating system upgrades' },
  { label: 'Gas Safety Certificates', path: serviceLinks.landlords.gasSafety, description: 'Landlord requirement' },
  { label: 'Boiler Cover Plans', path: serviceLinks.boilers.cover, description: 'Protection plans' },
];

export const boilerServicingRelatedServices: RelatedService[] = [
  { label: 'Boiler Repairs', path: serviceLinks.boilers.repairs, description: 'Emergency repair service' },
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'Boiler replacement' },
  { label: 'Gas Safety Certificates', path: serviceLinks.landlords.gasSafety, description: 'Annual requirement' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'System upgrades' },
];

export const gasLeakRelatedServices: RelatedService[] = [
  { label: 'Gas Engineer', path: serviceLinks.heating.gasEngineer, description: 'Specialist engineer' },
  { label: 'Boiler Repairs', path: serviceLinks.boilers.repairs, description: 'Emergency repairs' },
  { label: 'Gas Safety Certificates', path: serviceLinks.landlords.gasSafety, description: 'Safety checks' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'Heating solutions' },
];

export const airSourceHeatPumpsRelatedServices: RelatedService[] = [
  { label: 'Underfloor Heating', path: serviceLinks.heating.underfloorHeating, description: 'Complementary heating' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'Heating solutions' },
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'Alternative systems' },
  { label: 'Power Flushing', path: serviceLinks.heating.powerFlushing, description: 'System maintenance' },
];

export const underfloorHeatingRelatedServices: RelatedService[] = [
  { label: 'Air Source Heat Pumps', path: serviceLinks.heating.airSourceHeatPumps, description: 'Renewable heating' },
  { label: 'Heating Services', path: serviceLinks.heating.hub, description: 'Complete heating solutions' },
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'Hybrid systems' },
  { label: 'Bathroom Installations', path: serviceLinks.bathrooms, description: 'Bathroom heating' },
];

export const leadPipeReplacementRelatedServices: RelatedService[] = [
  { label: 'Lead Testing', path: serviceLinks.landlords.leadTesting, description: 'Water quality testing' },
  { label: 'Plumbing Services', path: serviceLinks.plumbing.hub, description: 'All plumbing work' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency service' },
  { label: 'Cast Iron Pipes', path: serviceLinks.plumbing.castIronPipes, description: 'Drainage solutions' },
];

export const castIronPipesRelatedServices: RelatedService[] = [
  { label: 'Lead Pipe Replacement', path: serviceLinks.plumbing.leadPipeReplacement, description: 'Pipe replacement' },
  { label: 'Plumbing Services', path: serviceLinks.plumbing.hub, description: 'All plumbing services' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency help' },
  { label: 'Toilet Repairs', path: serviceLinks.plumbing.toiletRepairs, description: 'Drainage work' },
];

export const coldWaterTanksRelatedServices: RelatedService[] = [
  { label: 'Hot Water Tanks', path: serviceLinks.plumbing.hotWaterTanks, description: 'Water heating systems' },
  { label: 'Plumbing Services', path: serviceLinks.plumbing.hub, description: 'All plumbing services' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency help' },
  { label: 'Boiler Installation', path: serviceLinks.boilers.installation, description: 'Integrated systems' },
];

export const showerRepairsRelatedServices: RelatedService[] = [
  { label: 'Bathroom Installations', path: serviceLinks.bathrooms, description: 'Full bathroom fitting' },
  { label: 'Tap Repairs', path: serviceLinks.plumbing.tapRepairs, description: 'Water system repairs' },
  { label: 'Plumbing Services', path: serviceLinks.plumbing.hub, description: 'All plumbing work' },
  { label: 'Emergency Plumber', path: serviceLinks.plumbing.emergency, description: '24/7 emergency service' },
];

export const boilerInstallationFaqs: FAQ[] = [
  {
    question: 'How much does a new boiler cost in Glasgow?',
    answer: 'Costs depend on boiler type, output and installation complexity. Typical installations range from £1,800 to £3,500 including VAT. Contact us for a personalised quotation based on your property.'
  },
  {
    question: 'How long does boiler installation take?',
    answer: 'Most standard combi boiler replacements are completed within one day. System or regular boiler installations may take 1-2 days depending on complexity.'
  },
  {
    question: 'What warranty do I get?',
    answer: 'You receive a 12-month workmanship guarantee from us, plus manufacturer warranties up to 12 years depending on the boiler model selected.'
  },
  {
    question: 'Do I need a power flush?',
    answer: 'In many cases, yes. We assess system condition during the survey and recommend power flushing if sludge or debris is present.'
  }
];

export const boilerServicingFaqs: FAQ[] = [
  {
    question: 'How often should I have my boiler serviced?',
    answer: 'We recommend annual servicing to maintain efficiency, prevent breakdowns, and comply with warranty requirements. Many landlords are legally required to service boilers annually.'
  },
  {
    question: 'What does a boiler service include?',
    answer: 'Our comprehensive service includes inspection, cleaning, testing, safety checks, and a detailed report. We ensure your boiler operates at peak efficiency and safely.'
  },
  {
    question: 'How long does a boiler service take?',
    answer: 'A typical boiler service takes 1-2 hours depending on boiler type and condition. Most services can be completed in a single visit.'
  },
  {
    question: 'Will servicing reduce my energy bills?',
    answer: 'Yes. A well-maintained boiler operates more efficiently, reducing fuel consumption and lowering your heating bills significantly.'
  },
  {
    question: 'Can you provide Landlord Gas Safety Certificates?',
    answer: 'Yes. We provide CP12 Gas Safety Certificates required by law. Servicing includes the safety check needed for the certificate.'
  }
];

export const boilerRepairsFaqs: FAQ[] = [
  {
    question: 'Do you offer 24/7 emergency boiler repairs?',
    answer: 'Yes. We provide 24/7 emergency boiler repair services across Glasgow. Call us anytime - we aim to respond within 60-90 minutes.'
  },
  {
    question: 'How much do boiler repairs cost?',
    answer: 'Repair costs depend on the fault and parts needed. We provide free diagnosis and a quoted price before proceeding with work.'
  },
  {
    question: 'What should I do if my boiler breaks down?',
    answer: 'Turn off the boiler, check for obvious issues (like pilot light), then call us immediately. Keep your boiler manual handy if possible.'
  },
  {
    question: 'Is it better to repair or replace my boiler?',
    answer: 'If your boiler is over 15 years old or repairs exceed 50% of replacement cost, replacement is usually more cost-effective. We advise based on your specific situation.'
  },
  {
    question: 'Are repairs guaranteed?',
    answer: 'Yes. All repairs include a 12-month workmanship guarantee covering labour on the repaired components.'
  }
];

export const emergencyPlumberFaqs: FAQ[] = [
  {
    question: 'How quickly can you respond to emergency calls?',
    answer: 'We aim to respond to emergency plumbing calls within 60-90 minutes of your call, depending on your location and current workload.'
  },
  {
    question: 'What counts as a plumbing emergency?',
    answer: 'Burst pipes, major leaks, boiler breakdown, no hot water, gas leaks, blocked drains, and water flooding are all emergency situations requiring immediate attention.'
  },
  {
    question: 'Do you charge extra for emergency call-outs?',
    answer: 'We may charge a call-out fee depending on the time and nature of the emergency. This is discussed when you call. Urgent repairs are essential to prevent property damage.'
  },
  {
    question: 'What should I do before the engineer arrives?',
    answer: 'For burst pipes: turn off your stopcock. For boiler issues: switch it off. For gas leaks: leave the property and call us from outside. Minimize water damage where safe.'
  },
  {
    question: 'Are you available at weekends and holidays?',
    answer: 'Yes. We operate 24/7 including weekends and bank holidays for emergency plumbing and heating issues.'
  }
];

export const plumbingRepairsFaqs: FAQ[] = [
  {
    question: 'What plumbing repairs do you handle?',
    answer: 'We repair leaks, burst pipes, tap drips, toilet issues, drainage problems, water tank faults, and most other plumbing problems.'
  },
  {
    question: 'Can you fix a leak the same day?',
    answer: 'In most cases, yes. Once we diagnose the issue, we can usually repair it the same day or arrange an urgent follow-up visit.'
  },
  {
    question: 'How do you locate hidden leaks?',
    answer: 'We use specialist leak detection equipment to trace leaks without unnecessary damage to walls or floors.'
  },
  {
    question: 'Do you offer a guarantee on repairs?',
    answer: 'Yes. All plumbing repairs include a 12-month workmanship guarantee on labour.'
  },
  {
    question: 'What causes most plumbing problems?',
    answer: 'Corrosion, high water pressure, poor installation, frozen pipes, tree root intrusion, and wear-and-tear are common causes.'
  }
];

export const tapRepairsFaqs: FAQ[] = [
  {
    question: 'Can you repair a dripping tap?',
    answer: 'Yes. A persistent drip wastes thousands of litres annually and increases your water bill. We quickly repair or replace faulty taps.'
  },
  {
    question: 'How much does tap repair cost?',
    answer: 'Simple repairs typically cost £60-£150 including labour and parts. Full tap replacement ranges from £100-£300 depending on the tap model.'
  },
  {
    question: 'What causes tap leaks?',
    answer: 'Worn washers, cartridge faults, mineral deposits, and corrosion are the most common causes of dripping taps.'
  },
  {
    question: 'Do you install modern taps?',
    answer: 'Yes. We install modern, water-efficient taps in any style to match your bathroom or kitchen design.'
  },
  {
    question: 'Can you upgrade my taps?',
    answer: 'Absolutely. We can replace old taps with contemporary designs, including mixer taps, sensor taps, and designer models.'
  }
];

export const toiletRepairsFaqs: FAQ[] = [
  {
    question: 'Why is my toilet running constantly?',
    answer: 'Usually a faulty fill valve or flush mechanism. This wastes water and increases bills. We quickly diagnose and repair the issue.'
  },
  {
    question: 'Can you fix a blocked toilet?',
    answer: 'Yes. We use specialist equipment to clear blockages without damaging your toilet or pipes.'
  },
  {
    question: 'Do you replace toilets?',
    answer: 'Yes. We install modern, water-efficient toilet suites in any style or size to suit your bathroom.'
  },
  {
    question: 'What causes toilet leaks?',
    answer: 'Cracked cisterns, worn flush mechanisms, faulty seals, and water inlet valve problems are common causes.'
  },
  {
    question: 'Is toilet repair urgent?',
    answer: 'Yes. Toilet issues can lead to significant water waste. We offer same-day repairs for most problems.'
  }
];

export const hotWaterTanksFaqs: FAQ[] = [
  {
    question: 'How do I know if my hot water tank needs replacing?',
    answer: 'Signs include: no hot water, slow heating, leaks, rust stains, or strange noises. If your tank is over 15 years old, replacement is advisable.'
  },
  {
    question: 'What types of hot water tanks do you install?',
    answer: 'We install traditional cylinders, unvented cylinders, combination systems, and modern thermal storage tanks suited to your property.'
  },
  {
    question: 'How long does hot water tank replacement take?',
    answer: 'Most installations take 4-8 hours depending on the existing system and pipework condition.'
  },
  {
    question: 'Can I upgrade to a better hot water system?',
    answer: 'Yes. We help you choose between traditional tanks, combi boilers, heat pumps, and solar thermal systems based on your needs and budget.'
  },
  {
    question: 'Do you offer guarantees on new tanks?',
    answer: 'Yes. We provide 12-month workmanship guarantees plus manufacturer warranties typically covering 5-10 years.'
  }
];

export const coldWaterTanksFaqs: FAQ[] = [
  {
    question: 'What is a cold water tank used for?',
    answer: 'Cold water tanks store mains water for use throughout your property. They supply toilets, showers, and sometimes heating systems in traditional setups.'
  },
  {
    question: 'How often should cold water tanks be cleaned?',
    answer: 'We recommend professional cleaning every 2-3 years to prevent contamination and maintain water quality.'
  },
  {
    question: 'Do modern properties need cold water tanks?',
    answer: 'No. Modern combi boilers and unvented cylinders eliminate the need for tanks, saving loft space and improving water pressure.'
  },
  {
    question: 'What causes cold water tank problems?',
    answer: 'Common issues include leaks, algae growth, blockages, corrosion, and frozen pipes in winter.'
  },
  {
    question: 'Can you upgrade to a modern system?',
    answer: 'Yes. We can remove old cold water tanks and upgrade to a modern system without tanks, improving efficiency and space.'
  }
];

export const showerRepairsFaqs: FAQ[] = [
  {
    question: 'Why is my shower not hot enough?',
    answer: 'Issues include: blocked shower head, thermostat fault, boiler problem, or broken mixing valve. We diagnose and fix these quickly.'
  },
  {
    question: 'Can you repair thermostatic showers?',
    answer: 'Yes. We repair and replace thermostatic shower valves that maintain consistent water temperature and pressure.'
  },
  {
    question: 'Do you install new showers?',
    answer: 'Absolutely. We install everything from simple shower heads to complex multi-jet, steam, and rainfall showers.'
  },
  {
    question: 'What causes low water pressure in showers?',
    answer: 'Causes include: limescale blockage, worn cartridges, mains pressure issues, or system imbalance. We can diagnose and fix these.'
  },
  {
    question: 'Can you upgrade my shower?',
    answer: 'Yes. We install modern shower systems including digital controls, body jets, rainfall heads, and luxury spa-style installations.'
  }
];

export const radiatorRepairsFaqs: FAQ[] = [
  {
    question: 'Why is my radiator not heating?',
    answer: 'Common causes: air trapped inside, blocked pipes, thermostat fault, or system imbalance. We quickly identify and fix the issue.'
  },
  {
    question: 'Do you replace individual radiators?',
    answer: 'Yes. We replace single radiators or upgrade your entire heating system with modern, efficient models.'
  },
  {
    question: 'How do I balance my heating system?',
    answer: 'We can manually balance radiators or recommend a power flush to clean the system and optimize heat distribution.'
  },
  {
    question: 'Can you install designer radiators?',
    answer: 'Yes. We install stylish vertical, horizontal, and designer radiators to suit any room aesthetic.'
  },
  {
    question: 'What causes radiator leaks?',
    answer: 'Corrosion, loose connections, cracked bodies, or faulty valves cause leaks. We repair or replace as needed.'
  }
];

export const powerFlushingFaqs: FAQ[] = [
  {
    question: 'What is power flushing?',
    answer: 'Power flushing circulates a chemical cleaner through your heating system under high pressure, removing sludge and improving efficiency.'
  },
  {
    question: 'How long does power flushing take?',
    answer: 'Typically 6-8 hours depending on system size and how much sludge is present.'
  },
  {
    question: 'Will power flushing reduce my bills?',
    answer: 'Yes. Removing sludge improves boiler and radiator efficiency, often reducing fuel bills by 10-20%.'
  },
  {
    question: 'When should I have power flushing done?',
    answer: 'Before new boiler installation, if radiators have cold spots, or if your boiler is over 10 years old with reduced efficiency.'
  },
  {
    question: 'Is power flushing worth the cost?',
    answer: 'Yes. For old systems, power flushing often prevents expensive boiler replacement and improves performance significantly.'
  }
];

export const bathroomInstallationsFaqs: FAQ[] = [
  {
    question: 'How much does a complete bathroom installation cost?',
    answer: 'Costs vary widely from £3,000 for basic suites to £15,000+ for luxury installations. We provide free design consultations and detailed quotes.'
  },
  {
    question: 'How long does bathroom installation take?',
    answer: 'Most bathrooms take 2-4 weeks from start to finish, depending on complexity and whether structural changes are needed.'
  },
  {
    question: 'Can you design my bathroom?',
    answer: 'Yes. We work with you to design functional, beautiful bathrooms that maximize space and match your style preferences.'
  },
  {
    question: 'Do you handle all the plumbing work?',
    answer: 'Yes. We manage all plumbing, waste pipes, heating connections, ventilation, and waterproofing as part of the full installation.'
  },
  {
    question: 'Can you install luxury bathrooms?',
    answer: 'Absolutely. From designer fixtures to rainfall showers, heated towel rails, and custom layouts - we create stunning bathrooms.'
  }
];

export const gasSafetyFaqs: FAQ[] = [
  {
    question: 'How long does a CP12 take?',
    answer: '30–60 minutes depending on appliance count.'
  },
  {
    question: 'Can tenants arrange it?',
    answer: 'No. The landlord or letting agent must arrange it.'
  },
  {
    question: 'What if it fails?',
    answer: 'Repairs must be completed and a new inspection carried out.'
  },
  {
    question: 'How long is a CP12 valid?',
    answer: '12 months.'
  },
  {
    question: 'Can I do it early?',
    answer: 'Yes — up to 2 months before expiry.'
  }
];

export const leadTestingFaqs: FAQ[] = [
  {
    question: 'Is lead in water pipes dangerous?',
    answer: 'Yes. Lead exposure, especially for children and pregnant women, can cause serious health problems. Testing and replacement is important.'
  },
  {
    question: 'How do I know if I have lead pipes?',
    answer: 'Lead pipes are dull grey, soft, and easily scratched. We can inspect your system professionally or provide a water test.'
  },
  {
    question: 'How much does lead pipe replacement cost?',
    answer: 'Costs depend on the extent of pipework needing replacement. We provide free surveys and detailed quotes.'
  },
  {
    question: 'How long does lead pipe replacement take?',
    answer: 'Most replacements take 1-3 days depending on the amount of pipework involved.'
  },
  {
    question: 'Is lead replacement urgent?',
    answer: 'Yes. We recommend replacement, especially if children or pregnant women live in the property.'
  }
];

export const legionellaFaqs: FAQ[] = [
  {
    question: 'What is legionella?',
    answer: 'Legionella is a bacteria that grows in warm water systems and can cause serious respiratory illness if inhaled.'
  },
  {
    question: 'Who needs a legionella assessment?',
    answer: 'Landlords and business owners with water systems, especially those with complex pipework, tanks, or hot water systems.'
  },
  {
    question: 'What does an assessment involve?',
    answer: 'We inspect water systems, identify risks, test water temperatures, and provide recommendations to prevent legionella growth.'
  },
  {
    question: 'How often are assessments needed?',
    answer: 'Typically annually or when systems change. We can set up regular assessment contracts for ongoing compliance.'
  },
  {
    question: 'What if risks are found?',
    answer: 'We recommend and can implement solutions such as tank cleaning, temperature adjustments, or system modifications.'
  }
];

export const patTestingFaqs: FAQ[] = [
  {
    question: 'Is PAT testing a legal requirement?',
    answer: 'Not explicitly named in law, but strongly recommended under the Repairing Standard to demonstrate electrical safety compliance.'
  },
  {
    question: 'What appliances must be tested?',
    answer: 'Any portable appliance supplied by the landlord.'
  },
  {
    question: 'How long does testing take?',
    answer: 'Typically 30–90 minutes depending on appliance quantity.'
  },
  {
    question: 'Can it be combined with CP12?',
    answer: 'Yes — and many landlords choose to do so.'
  },
  {
    question: 'Do tenants arrange PAT tests?',
    answer: 'No. The landlord or letting agent is responsible.'
  }
];

export const propertyManagersFaqs: FAQ[] = [
  {
    question: 'How quickly can you respond to emergency calls?',
    answer: 'We prioritise property managers. Same-day or emergency appointments available. We aim for rapid response to minimize tenant disruption and protect your reputation.'
  },
  {
    question: 'Can you handle all compliance certifications in one visit?',
    answer: 'Yes. Our Gas Safe engineers can complete CP12, boiler servicing, PAT testing, legionella assessments, and lead testing in a single visit, saving time and coordination.'
  },
  {
    question: 'Do you work with key safes and secure access?',
    answer: 'Yes. Our fully insured engineers can collect keys from your office, use key safes, access void properties, and communicate directly with tenants.'
  },
  {
    question: 'What documentation do you provide?',
    answer: 'Detailed photographic job reports with before/after photos, clear fault explanations, work completed, recommendations, and transparent pricing forwarded directly to landlords.'
  },
  {
    question: 'Do you offer portfolio support agreements?',
    answer: 'Yes. We provide structured landlord compliance packages with bulk scheduling, portfolio tracking, consistent engineer allocation, and predictable pricing for multiple properties.'
  }
];

export const privateLandlordsFaqs: FAQ[] = [
  {
    question: 'What is your Landlord Promise?',
    answer: 'We remind you before safety certifications expire, pre-book renewal appointments, provide structured documentation, communicate clearly, handle tenant coordination, and keep properties clean. Compliance made simple.'
  },
  {
    question: 'Can all certifications be done in one visit?',
    answer: 'Yes. Our Gas Safe engineers can complete CP12, boiler servicing, PAT testing, legionella assessments, and lead testing in a single appointment, reducing disruption and keeping paperwork consistent.'
  },
  {
    question: 'How much do safety certifications cost?',
    answer: 'CP12 Gas Safety Certificates start from £65, PAT testing from £3.50 per appliance (min £45), Legionella assessments from £150, and Lead testing from £95. Package discounts available.'
  },
  {
    question: 'What are the legal requirements for landlords in Glasgow?',
    answer: 'Annual CP12 gas safety certificates are legally required. PAT testing, legionella assessments, and lead water testing are strongly recommended under the Repairing Standard to ensure tenant safety.'
  },
  {
    question: 'Do you provide emergency repairs?',
    answer: 'Yes. We operate 6 days per week with emergency response available. Out-of-hours call-out is £170 inc VAT for the first hour, then £85 per additional half hour.'
  }
];
