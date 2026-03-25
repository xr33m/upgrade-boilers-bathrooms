export interface ServiceArea {
  name: string;
  detail?: string;
  postcode?: string;
}

export const GLASGOW_AREAS: ServiceArea[] = [
  { name: 'Glasgow City Centre', detail: 'G1–G5 postcodes' },
  { name: 'West End', detail: 'G11–G13 postcodes' },
  { name: 'Southside', detail: 'G41–G46 postcodes' },
  { name: 'East End', detail: 'G31–G33 postcodes' },
  { name: 'North Glasgow', detail: 'G20–G23 postcodes' },
  { name: 'Bearsden & Milngavie', detail: 'North of the city' },
  { name: 'East Kilbride', detail: 'South Lanarkshire' },
  { name: 'Paisley', detail: 'West of Glasgow' },
  { name: 'Greater Glasgow', detail: 'Surrounding areas' }
];

export const GLASGOW_POSTCODES: ServiceArea[] = [
  { name: 'G1', postcode: 'G1' },
  { name: 'G2', postcode: 'G2' },
  { name: 'G3', postcode: 'G3' },
  { name: 'G4', postcode: 'G4' },
  { name: 'G5', postcode: 'G5' },
  { name: 'G11', postcode: 'G11' },
  { name: 'G12', postcode: 'G12' },
  { name: 'G13', postcode: 'G13' },
  { name: 'G20', postcode: 'G20' },
  { name: 'G21', postcode: 'G21' },
  { name: 'G31', postcode: 'G31' },
  { name: 'G32', postcode: 'G32' },
  { name: 'G41', postcode: 'G41' },
  { name: 'G42', postcode: 'G42' },
  { name: 'G43', postcode: 'G43' },
  { name: 'G44', postcode: 'G44' },
  { name: 'G45', postcode: 'G45' },
  { name: 'G46', postcode: 'G46' },
  { name: 'G51', postcode: 'G51' },
  { name: 'G52', postcode: 'G52' },
  { name: 'G53', postcode: 'G53' },
  { name: 'G61', postcode: 'G61' },
  { name: 'G62', postcode: 'G62' },
  { name: 'G64', postcode: 'G64' }
];
