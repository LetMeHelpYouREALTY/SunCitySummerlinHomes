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
  /** Verified street line for display and schema streetAddress */
  streetAddress: string;
  postalCode: string;
  lat: number;
  lng: number;
  schemaType: string;
  /** Official source used to verify name and address */
  sourceUrl: string;
  note?: string;
};

/** Verified anchors for fallback markers and ItemList schema (primary-source addresses). */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    id: 'community',
    name: SUN_CITY_SUMMERLIN.name,
    category: 'recreation',
    streetAddress: '9107 Del Webb Boulevard',
    postalCode: '89134',
    lat: SUN_CITY_SUMMERLIN.center.lat,
    lng: SUN_CITY_SUMMERLIN.center.lng,
    schemaType: 'Place',
    sourceUrl: 'https://suncitysummerlin.com/',
    note: '55+ master-planned community (association office address)',
  },
  {
    id: 'palm-valley-golf',
    name: 'Palm Valley Golf Club',
    category: 'golf',
    streetAddress: '9201 Del Webb Boulevard',
    postalCode: '89134',
    lat: 36.2087,
    lng: -115.2916,
    schemaType: 'GolfCourse',
    sourceUrl: 'https://www.golfsummerlin.com/palm_valley/',
  },
  {
    id: 'highland-falls-golf',
    name: 'Highland Falls Golf Club',
    category: 'golf',
    streetAddress: '10201 Sun City Boulevard',
    postalCode: '89134',
    lat: 36.2142,
    lng: -115.2985,
    schemaType: 'GolfCourse',
    sourceUrl: 'https://www.golfsummerlin.com/highland_falls/',
  },
  {
    id: 'eagle-crest-golf',
    name: 'Eagle Crest Golf Club',
    category: 'golf',
    streetAddress: '2203 Thomas W. Ryan Boulevard',
    postalCode: '89134',
    lat: 36.19904,
    lng: -115.33408,
    schemaType: 'GolfCourse',
    sourceUrl: 'https://www.golfsummerlin.com/eagle_crest/',
  },
  {
    id: 'pinnacle-clubhouse',
    name: 'Pinnacle Community Center',
    category: 'recreation',
    streetAddress: '2215 Thomas W. Ryan Boulevard',
    postalCode: '89134',
    lat: 36.1992,
    lng: -115.3338,
    schemaType: 'SportsActivityLocation',
    sourceUrl: 'https://suncitysummerlin.com/Explore/Amenities/Pinnacle',
    note: 'Starbright Theatre and community programs',
  },
  {
    id: 'summerlin-hospital',
    name: 'Summerlin Hospital Medical Center',
    category: 'healthcare',
    streetAddress: '657 North Town Center Drive',
    postalCode: '89144',
    lat: 36.1742,
    lng: -115.3334,
    schemaType: 'Hospital',
    sourceUrl: 'https://www.summerlinhospital.com/',
  },
  {
    id: 'centennial-hills-hospital',
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    streetAddress: '6900 North Durango Drive',
    postalCode: '89149',
    lat: 36.2875,
    lng: -115.291,
    schemaType: 'Hospital',
    sourceUrl: 'https://www.centennialhillshospital.com/',
  },
  {
    id: 'downtown-summerlin',
    name: 'Downtown Summerlin',
    category: 'shopping',
    streetAddress: '1980 Festival Plaza Drive',
    postalCode: '89135',
    lat: 36.1496,
    lng: -115.3337,
    schemaType: 'ShoppingCenter',
    sourceUrl: 'https://www.downtownsummerlin.com/',
  },
  {
    id: 'smiths-charleston',
    name: "Smith's Food and Drug",
    category: 'grocery',
    streetAddress: '9851 West Charleston Boulevard',
    postalCode: '89117',
    lat: 36.1585,
    lng: -115.299,
    schemaType: 'GroceryStore',
    sourceUrl: 'https://www.smithsfoodanddrug.com/stores/details/706/00347',
  },
  {
    id: 'whole-foods-summerlin',
    name: 'Whole Foods Market',
    category: 'grocery',
    streetAddress: '2475 South Town Center Drive',
    postalCode: '89135',
    lat: 36.1458,
    lng: -115.3312,
    schemaType: 'GroceryStore',
    sourceUrl: 'https://www.wholefoodsmarket.com/stores/summerlin',
  },
];

export const AMENITIES_FAQ: FAQItem[] = [
  {
    question: `What grocery stores are near ${SUN_CITY_SUMMERLIN.name}?`,
    answer:
      `Smith's on West Charleston Boulevard and Whole Foods Market in Downtown Summerlin (South Town Center Drive) are common stops; many residents also use delivery from the same corridors.`,
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
      `Yes—Palm Valley, Highland Falls, and Eagle Crest are the three on-site courses operated as part of Golf Summerlin.`,
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
      'Recreation centers such as Pinnacle (home to the Starbright Theatre) host fitness studios, pools, classes, and social clubs.',
      'Resident-led clubs cover everything from woodworking and ceramics to card groups and performing arts.',
    ],
  },
  {
    id: 'grocery',
    heading: 'Grocery and everyday errands',
    paragraphs: [
      "Smith's Food and Drug on West Charleston Boulevard and Whole Foods Market in Downtown Summerlin are routine stops for Sun City Summerlin households.",
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
