export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
  created_at: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    rating: 5,
    comment: 'Excellent service from start to finish. The team installed our new boiler quickly and professionally. Very happy with the result and the price was competitive.',
    service: 'Boiler Installation',
    created_at: '2024-03-15'
  },
  {
    id: '2',
    name: 'John Davidson',
    rating: 5,
    comment: 'Called them out for an emergency leak on a Sunday. They arrived within an hour and fixed the problem efficiently. Highly recommend their emergency service.',
    service: 'Emergency Plumbing',
    created_at: '2024-03-12'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    rating: 5,
    comment: 'Professional and reliable. Had our annual boiler service done and they identified a potential issue before it became a problem. Great preventive work.',
    service: 'Boiler Servicing',
    created_at: '2024-03-10'
  },
  {
    id: '4',
    name: 'David Wilson',
    rating: 5,
    comment: 'Fantastic bathroom installation. The team was clean, tidy and completed the work ahead of schedule. The quality is outstanding.',
    service: 'Bathroom Installation',
    created_at: '2024-03-08'
  },
  {
    id: '5',
    name: 'Lisa Campbell',
    rating: 5,
    comment: 'Very impressed with their heating system upgrade. They explained everything clearly and the new system is so much more efficient. Worth every penny.',
    service: 'Heating Systems',
    created_at: '2024-03-05'
  },
  {
    id: '6',
    name: 'Michael Brown',
    rating: 5,
    comment: 'Needed a Gas Safety Certificate for my rental property. Quick, thorough and reasonably priced. Will definitely use again for all my landlord needs.',
    service: 'Gas Safety Certificate',
    created_at: '2024-03-01'
  },
  {
    id: '7',
    name: 'Rachel Anderson',
    rating: 5,
    comment: 'Outstanding workmanship on our radiator installation. The engineers were polite, professional and left everything spotless. Highly recommend.',
    service: 'Radiator Installation',
    created_at: '2024-02-28'
  },
  {
    id: '8',
    name: 'James McGregor',
    rating: 5,
    comment: 'Had a power flush done and the difference in heating efficiency is remarkable. Great service and fair pricing.',
    service: 'Power Flushing',
    created_at: '2024-02-25'
  },
  {
    id: '9',
    name: 'Claire Roberts',
    rating: 5,
    comment: 'Excellent tap repair service. Quick response, professional work and very reasonable price. Will use them again.',
    service: 'Tap Repairs',
    created_at: '2024-02-22'
  }
];
