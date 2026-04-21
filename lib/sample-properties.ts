/**
 * Representative sample homes for UI and static /properties/[id] pages.
 * Not live MLS data — always pair with visible disclaimer + RealScout/office feed.
 */
export type SampleProperty = {
  id: string;
  title: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  features: string[];
  isNew?: boolean;
};

export const SAMPLE_PROPERTIES: SampleProperty[] = [
  {
    id: 'prop1',
    title: 'Elegant Single-Story Villa',
    price: 548175,
    address: '1234 Sun Valley Dr, Las Vegas, NV 89134',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    image: '/property1.jpg',
    features: ['Golf Course View', 'Pool'],
    isNew: true,
  },
  {
    id: 'prop2',
    title: 'Modern Desert Retreat',
    price: 615000,
    address: '5678 Canyon Ridge Ln, Las Vegas, NV 89134',
    bedrooms: 2,
    bathrooms: 2.5,
    sqft: 2100,
    image: '/property2.jpg',
    features: ['Single Story', 'Renovated'],
  },
  {
    id: 'prop3',
    title: 'Spacious Golf Course Home',
    price: 729000,
    address: '9101 Fairway View Dr, Las Vegas, NV 89134',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2600,
    image: '/property3.jpg',
    features: ['Premium View', 'Large Lot'],
  },
  {
    id: 'prop4',
    title: 'Charming Villa with Mountain Views',
    price: 499000,
    address: '2468 Red Rock Way, Las Vegas, NV 89134',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1650,
    image: '/property1.jpg',
    features: ['Mountain View', 'Updated Kitchen'],
    isNew: true,
  },
  {
    id: 'prop5',
    title: 'Luxurious Desert Oasis',
    price: 875000,
    address: '1357 Palm Spring Ct, Las Vegas, NV 89134',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2800,
    image: '/property2.jpg',
    features: ['Premium Lot', 'Custom Design'],
  },
  {
    id: 'prop6',
    title: 'Cozy Single Family Home',
    price: 425000,
    address: '3691 Vista Dr, Las Vegas, NV 89134',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1450,
    image: '/property3.jpg',
    features: ['Great Value', 'Move-in Ready'],
  },
];

export function getSamplePropertyById(id: string): SampleProperty | undefined {
  return SAMPLE_PROPERTIES.find((p) => p.id === id);
}

export function getSamplePropertyIds(): string[] {
  return SAMPLE_PROPERTIES.map((p) => p.id);
}
