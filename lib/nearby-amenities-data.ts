import type { FAQItem } from '@/components/seo/FAQSection';
import { SUN_CITY_SUMMERLIN } from '@/lib/community-config';

export type AmenityCategoryId =
  | 'healthcare'
  | 'golf'
  | 'parks'
  | 'recreation'
  | 'grocery'
  | 'restaurants'
  | 'cafes'
  | 'fitness'
  | 'pharmacies'
  | 'shopping'
  | 'parking'
  | 'schools';

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  placeTypes: string[];
  /** Omit from default chip row for 55+ sites */
  hiddenByDefault?: boolean;
};

/** Category order tuned for Sun City Summerlin (55+ active adult). */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  { id: 'healthcare', label: 'Healthcare', placeTypes: ['hospital', 'doctor'] },
  { id: 'golf', label: 'Golf', placeTypes: ['golf_course'] },
  { id: 'parks', label: 'Parks', placeTypes: ['park'] },
  { id: 'recreation', label: 'Recreation', placeTypes: ['community_center', 'sports_complex'] },
  { id: 'grocery', label: 'Grocery', placeTypes: ['grocery_store', 'supermarket'] },
  { id: 'restaurants', label: 'Restaurants', placeTypes: ['restaurant'] },
  { id: 'cafes', label: 'Cafes', placeTypes: ['cafe', 'bakery'] },
  { id: 'fitness', label: 'Fitness', placeTypes: ['gym', 'fitness_center'] },
  { id: 'pharmacies', label: 'Pharmacies', placeTypes: ['pharmacy'] },
  { id: 'shopping', label: 'Shopping', placeTypes: ['shopping_mall', 'department_store'] },
  { id: 'parking', label: 'Parking', placeTypes: ['parking'] },
  { id: 'schools', label: 'Schools', placeTypes: ['school'], hiddenByDefault: true },
];

export type CuratedPlace = {
  id: string;
  name: string;
  category: AmenityCategoryId;
  address: string;
  lat: number;
  lng: number;
  schemaType: string;
  note?: string;
};

/** Verified anchors for fallback map markers and ItemList schema (public addresses). */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    id: 'community',
    name: SUN_CITY_SUMMERLIN.name,
    category: 'recreation',
    address: 'Del Webb Boulevard corridor, Las Vegas, NV 89134',
    lat: SUN_CITY_SUMMERLIN.center.lat,
    lng: SUN_CITY_SUMMERLIN.center.lng,
    schemaType: 'Place',
    note: '55+ gated active adult community',
  },
  {
    id: 'palm-valley-golf',
    name: 'Palm Valley Golf Course',
    category: 'golf',
    address: '9201 Del Webb Boulevard, Las Vegas, NV 89134',
    lat: 36.2087,
    lng: -115.2916,
    schemaType: 'GolfCourse',
  },
  {
    id: 'highland-falls-golf',
    name: 'Highland Falls Golf Course',
    category: 'golf',
    address: '9400 Del Webb Boulevard, Las Vegas, NV 89134',
    lat: 36.2095,
    lng: -115.2968,
    schemaType: 'GolfCourse',
  },
  {
    id: 'eagle-crest-golf',
    name: 'Eagle Crest Golf Course',
    category: 'golf',
    address: '9400 Del Webb Boulevard, Las Vegas, NV 89134',
    lat: 36.2118,
    lng: -115.294,
    schemaType: 'GolfCourse',
  },
  {
    id: 'pinnacle-clubhouse',
    name: 'Pinnacle Clubhouse',
    category: 'recreation',
    address: '11111 Desert Pines Street, Las Vegas, NV 89134',
    lat: 36.2132,
    lng: -115.2975,
    schemaType: 'SportsActivityLocation',
    note: 'Starbright Theatre and community events',
  },
  {
    id: 'summerlin-hospital',
    name: 'Summerlin Hospital Medical Center',
    category: 'healthcare',
    address: '657 North Town Center Drive, Las Vegas, NV 89144',
    lat: 36.1742,
    lng: -115.3334,
    schemaType: 'Hospital',
  },
  {
    id: 'centennial-hills-hospital',
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    address: '6900 North Durango Drive, Las Vegas, NV 89149',
    lat: 36.2875,
    lng: -115.291,
    schemaType: 'Hospital',
  },
  {
    id: 'downtown-summerlin',
    name: 'Downtown Summerlin',
    category: 'shopping',
    address: '1980 Festival Plaza Drive, Las Vegas, NV 89135',
    lat: 36.1496,
    lng: -115.3337,
    schemaType: 'ShoppingCenter',
  },
  {
    id: 'albertsons-charleston',
    name: 'Albertsons',
    category: 'grocery',
    address: '9550 West Charleston Boulevard, Las Vegas, NV 89117',
    lat: 36.1582,
    lng: -115.2958,
    schemaType: 'GroceryStore',
  },
  {
    id: 'whole-foods-summerlin',
    name: 'Whole Foods Market',
    category: 'grocery',
    address: '8850 West Charleston Boulevard, Las Vegas, NV 89117',
    lat: 36.1594,
    lng: -115.2865,
    schemaType: 'GroceryStore',
  },
];

export const AMENITIES_FAQ: FAQItem[] = [
  {
    question: `What grocery stores are near ${SUN_CITY_SUMMERLIN.name}?`,
    answer:
      `Major grocers along Charleston Boulevard and in Downtown Summerlin serve the area west of the Strip; many residents also use delivery services from the same corridors.`,
  },
  {
    question: `How far is ${SUN_CITY_SUMMERLIN.name} from the Las Vegas Strip?`,
    answer:
      `Driving time to the central Strip is typically on the order of 25–35 minutes depending on traffic and your exit—plan extra time for weekend evenings.`,
  },
  {
    question: `Are there hospitals near ${SUN_CITY_SUMMERLIN.name}?`,
    answer:
      `Summerlin Hospital Medical Center and Centennial Hills Hospital Medical Center are commonly used by northwest Las Vegas residents, including Sun City Summerlin.`,
  },
  {
    question: `Does ${SUN_CITY_SUMMERLIN.name} have its own golf courses?`,
    answer:
      `Yes—Palm Valley, Highland Falls, and Eagle Crest are the three on-site courses managed for the community.`,
  },
  {
    question: `Where do residents shop and dine outside the community?`,
    answer:
      `Downtown Summerlin and Charleston Boulevard retail clusters are the usual destinations for restaurants, services, and big-box shopping.`,
  },
  {
    question: `How close is Harry Reid International Airport?`,
    answer:
      `Approximate drive time to Harry Reid International Airport is often 30–45 minutes via the 215 Beltway and I-15, depending on time of day.`,
  },
  {
    question: `Is medical care easy to reach from ${SUN_CITY_SUMMERLIN.name}?`,
    answer:
      `Northwest Las Vegas has multiple clinics, urgent care, and hospital campuses; many specialists also maintain offices in Summerlin and Centennial Hills.`,
  },
  {
    question: `Can I walk or golf-cart to amenities inside ${SUN_CITY_SUMMERLIN.name}?`,
    answer:
      `Yes—internal trails and golf-cart paths connect neighborhoods to recreation centers and courses; outside errands usually require a car.`,
  },
];

export type AmenityContentSection = {
  id: AmenityCategoryId | 'commute';
  heading: string;
  paragraphs: string[];
};

export const AMENITY_CONTENT_SECTIONS: AmenityContentSection[] = [
  {
    id: 'healthcare',
    heading: 'Healthcare near Sun City Summerlin',
    paragraphs: [
      'Summerlin Hospital Medical Center on North Town Center Drive and Centennial Hills Hospital on North Durango Drive are two full-service hospitals northwest Las Vegas residents rely on.',
      'Urgent care, primary care, and specialty clinics are concentrated along Charleston Boulevard, Rampart Boulevard, and in the Downtown Summerlin medical office corridor.',
    ],
  },
  {
    id: 'golf',
    heading: 'Golf inside the community',
    paragraphs: [
      'Sun City Summerlin includes Palm Valley, Highland Falls, and Eagle Crest—three distinct courses with resident programs, leagues, and dining at several clubhouses.',
      'Golf-cart-friendly paths make it practical to reach courses and recreation centers without leaving the gated community.',
    ],
  },
  {
    id: 'parks',
    heading: 'Parks and outdoor recreation',
    paragraphs: [
      'Within Sun City Summerlin, walking trails, pickleball courts, and landscaped common areas support daily activity.',
      'Nearby Summerlin parks and trail systems connect to the broader master-planned community for longer walks and events.',
    ],
  },
  {
    id: 'recreation',
    heading: 'Community recreation centers',
    paragraphs: [
      'Four major clubhouses—including Pinnacle with the Starbright Theatre—host fitness studios, pools, classes, and social clubs.',
      'Resident-led clubs cover everything from woodworking and ceramics to card groups and performing arts.',
    ],
  },
  {
    id: 'grocery',
    heading: 'Grocery and everyday errands',
    paragraphs: [
      'Charleston Boulevard grocers such as Albertsons and Whole Foods Market are routine stops for Sun City Summerlin households.',
      'Downtown Summerlin adds specialty food, pharmacy, and home-goods options in one walkable district.',
    ],
  },
  {
    id: 'restaurants',
    heading: 'Dining options',
    paragraphs: [
      'On-site and neighborhood restaurants along Del Webb Boulevard serve residents who want a short drive for coffee or dinner.',
      'Downtown Summerlin and Red Rock Resort dining expand choices for guests and special occasions.',
    ],
  },
  {
    id: 'shopping',
    heading: 'Shopping and services',
    paragraphs: [
      'Downtown Summerlin is the primary regional shopping hub with national retailers, local boutiques, and professional services.',
      'Charleston Boulevard big-box and home-improvement stores cover furniture, electronics, and renovation supplies.',
    ],
  },
  {
    id: 'commute',
    heading: 'Approximate drive times (traffic varies)',
    paragraphs: [
      'Downtown Summerlin: often 10–20 minutes by car.',
      'Las Vegas Strip resort corridor: often 25–35 minutes.',
      'Harry Reid International Airport: often 30–45 minutes via the 215 Beltway.',
    ],
  },
];
