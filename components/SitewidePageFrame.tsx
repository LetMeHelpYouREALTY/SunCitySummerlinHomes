'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { gbpLinks, phone } from '@/lib/site-contact';

type RouteContent = {
  eyebrow: string;
  title: string;
  summary: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

const fallbackContent: RouteContent = {
  eyebrow: 'Sun City Summerlin Real Estate',
  title: 'Local Guidance for 55+ Home Goals',
  summary:
    'Get clear, local guidance for buying or selling in Sun City Summerlin with Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties.',
  primaryHref: '/contact',
  primaryLabel: 'Talk with Dr. Jan',
  secondaryHref: '/search',
  secondaryLabel: 'Browse Homes',
};

const routeContentMap: Record<string, RouteContent> = {
  '/': {
    eyebrow: 'Premier 55+ Living in Las Vegas',
    title: 'Sun City Summerlin Homes and Lifestyle',
    summary:
      'Explore homes, neighborhood insights, and retirement-focused real estate guidance tailored to Sun City Summerlin and nearby Summerlin communities.',
    primaryHref: '/search',
    primaryLabel: 'Start Home Search',
    secondaryHref: '/contact',
    secondaryLabel: 'Schedule Consultation',
  },
  '/about': {
    eyebrow: 'Meet Your Local Expert',
    title: 'About Dr. Jan Duffy',
    summary:
      'Learn about Dr. Jan Duffy’s local expertise, market approach, and client-first strategy for 55+ buyers and sellers in the Las Vegas valley.',
    primaryHref: '/contact',
    primaryLabel: 'Connect with Dr. Jan',
    secondaryHref: '/testimonials',
    secondaryLabel: 'Read Client Stories',
  },
  '/contact': {
    eyebrow: 'Direct, Local Support',
    title: 'Contact Dr. Jan Duffy',
    summary:
      'Call, email, or request a consultation for buying, selling, downsizing, and relocation support in Sun City Summerlin and surrounding areas.',
    primaryHref: '/search',
    primaryLabel: 'Search Available Homes',
    secondaryHref: '/services',
    secondaryLabel: 'Explore Services',
  },
  '/services': {
    eyebrow: 'End-to-End Representation',
    title: 'Real Estate Services for 55+ Homeowners',
    summary:
      'From strategic listing prep to relocation guidance, receive personalized service built around your timeline, goals, and lifestyle priorities.',
    primaryHref: '/services/offerings',
    primaryLabel: 'View Service Offerings',
    secondaryHref: '/contact',
    secondaryLabel: 'Book Strategy Call',
  },
  '/service-area': {
    eyebrow: 'Hyperlocal Market Knowledge',
    title: 'Sun City Summerlin and Las Vegas Service Area',
    summary:
      'Get neighborhood-level guidance across Summerlin, Henderson, North Las Vegas, and nearby communities with market context that supports confident decisions.',
    primaryHref: '/zipcodes',
    primaryLabel: 'Explore Zip Codes',
    secondaryHref: '/neighborhoods',
    secondaryLabel: 'View Neighborhoods',
  },
  '/properties': {
    eyebrow: 'Active and Featured Listings',
    title: 'Sun City Summerlin Properties',
    summary:
      'Browse listings aligned to your budget, accessibility needs, and preferred lifestyle, including golf course and single-story home opportunities.',
    primaryHref: '/search',
    primaryLabel: 'Refine Your Search',
    secondaryHref: '/contact',
    secondaryLabel: 'Request Private Tour',
  },
  '/search': {
    eyebrow: 'Smart Home Search',
    title: 'Search Sun City Summerlin Homes',
    summary:
      'Filter by price, features, and home style to quickly identify listings that match your 55+ lifestyle priorities and long-term plans.',
    primaryHref: '/contact',
    primaryLabel: 'Get Listing Alerts',
    secondaryHref: '/properties',
    secondaryLabel: 'View Featured Homes',
  },
  '/community': {
    eyebrow: 'Community Highlights',
    title: 'Sun City Summerlin Community Guide',
    summary:
      'Discover amenities, clubs, recreation centers, and day-to-day lifestyle details that make Sun City Summerlin one of Las Vegas’ top 55+ communities.',
    primaryHref: '/amenities',
    primaryLabel: 'Explore Amenities',
    secondaryHref: '/map',
    secondaryLabel: 'View Community Map',
  },
  '/lifestyle': {
    eyebrow: 'Active Adult Living',
    title: 'Lifestyle in Sun City Summerlin',
    summary:
      'See what daily life looks like for residents, from recreation and social events to neighborhood convenience and wellness-focused living.',
    primaryHref: '/community',
    primaryLabel: 'See Community Details',
    secondaryHref: '/contact',
    secondaryLabel: 'Discuss Your Move',
  },
  '/amenities': {
    eyebrow: 'Resort-Style Features',
    title: 'Amenities in Sun City Summerlin',
    summary:
      'Review golf, fitness, clubhouse, and recreation offerings that support an active, social, and convenient 55+ lifestyle in Las Vegas.',
    primaryHref: '/community',
    primaryLabel: 'Community Overview',
    secondaryHref: '/properties',
    secondaryLabel: 'Find Homes Nearby',
  },
  '/map': {
    eyebrow: 'Location and Access',
    title: 'Interactive Sun City Summerlin Map',
    summary:
      'Visualize neighborhoods, amenities, and nearby destinations to choose the section of Sun City Summerlin that best fits your lifestyle goals.',
    primaryHref: '/neighborhoods',
    primaryLabel: 'Browse Neighborhoods',
    secondaryHref: '/contact',
    secondaryLabel: 'Plan an Area Tour',
  },
  '/zipcodes': {
    eyebrow: 'Local Market by Area',
    title: 'Las Vegas Zip Code Guide',
    summary:
      'Compare key zip codes for pricing, lifestyle, and home inventory so you can focus your search on areas that match your priorities.',
    primaryHref: '/zipcodes/89134',
    primaryLabel: 'View 89134 Insights',
    secondaryHref: '/search',
    secondaryLabel: 'Search by Preferences',
  },
  '/neighborhoods': {
    eyebrow: 'Neighborhood-Focused Search',
    title: 'Sun City Summerlin Neighborhoods',
    summary:
      'Evaluate neighborhood personality, nearby amenities, and housing styles to find the right fit for your next chapter in Las Vegas.',
    primaryHref: '/neighborhoods/del-webb-north-ranch',
    primaryLabel: 'See Del Webb North Ranch',
    secondaryHref: '/contact',
    secondaryLabel: 'Discuss Best-Fit Areas',
  },
  '/testimonials': {
    eyebrow: 'Client Success Stories',
    title: 'What Clients Say About Dr. Jan Duffy',
    summary:
      'Read real client experiences from buyers and sellers who benefited from local strategy, strong communication, and expert market guidance.',
    primaryHref: '/contact',
    primaryLabel: 'Start Your Plan',
    secondaryHref: '/about',
    secondaryLabel: 'Learn More About Dr. Jan',
  },
  '/faq': {
    eyebrow: 'Clear Answers, Faster Decisions',
    title: 'Sun City Summerlin Real Estate FAQ',
    summary:
      'Get practical answers to the most common buying, selling, and relocation questions for 55+ real estate in the Las Vegas area.',
    primaryHref: '/contact',
    primaryLabel: 'Ask a Specific Question',
    secondaryHref: '/services',
    secondaryLabel: 'Review Service Options',
  },
  '/blog': {
    eyebrow: 'Market and Lifestyle Insights',
    title: 'Sun City Summerlin Real Estate Blog',
    summary:
      'Stay current with neighborhood updates, market trends, and practical guidance to support smart home decisions in Las Vegas.',
    primaryHref: '/search',
    primaryLabel: 'Search Current Listings',
    secondaryHref: '/contact',
    secondaryLabel: 'Get Local Advice',
  },
  '/market-report': {
    eyebrow: 'Monthly Local Snapshot',
    title: 'Sun City Summerlin Market Report',
    summary:
      'Review current local market patterns with practical guidance for pricing, timing, and negotiation strategy in Sun City Summerlin and nearby Las Vegas communities.',
    primaryHref: '/market-update',
    primaryLabel: 'Read Weekly Update',
    secondaryHref: '/contact',
    secondaryLabel: 'Request Custom Analysis',
  },
  '/market-update': {
    eyebrow: 'Weekly Market Intelligence',
    title: 'Las Vegas Weekly Market Update',
    summary:
      'Track near-term listing activity, buyer behavior, and seller opportunities so you can make timely real estate decisions with confidence.',
    primaryHref: '/market-insights',
    primaryLabel: 'View Strategic Insights',
    secondaryHref: '/contact',
    secondaryLabel: 'Get Weekly Guidance',
  },
  '/market-insights': {
    eyebrow: 'Strategic Market Themes',
    title: 'Las Vegas Market Insights',
    summary:
      'Understand the broader demand, inventory, and relocation trends shaping Sun City Summerlin and surrounding Las Vegas neighborhoods.',
    primaryHref: '/market-report',
    primaryLabel: 'Open Market Report',
    secondaryHref: '/contact',
    secondaryLabel: 'Talk Strategy',
  },
  '/guides': {
    eyebrow: 'Actionable Playbooks',
    title: 'Real Estate Guides for Better Decisions',
    summary:
      'Use practical buyer, seller, relocation, and market-strategy guides to move forward with a clear plan in Sun City Summerlin and Las Vegas.',
    primaryHref: '/guides/buyers',
    primaryLabel: 'Start Buyer Guide',
    secondaryHref: '/guides/sellers',
    secondaryLabel: 'Open Seller Guide',
  },
  '/guides/buyers': {
    eyebrow: 'Buyer Playbook',
    title: 'Buy with Local Strategy',
    summary:
      'Follow a structured process for search, evaluation, and offer execution in Sun City Summerlin to reduce uncertainty and improve outcomes.',
    primaryHref: '/search',
    primaryLabel: 'Browse Listings',
    secondaryHref: '/contact',
    secondaryLabel: 'Get Buyer Guidance',
  },
  '/guides/sellers': {
    eyebrow: 'Seller Playbook',
    title: 'Sell with Stronger Positioning',
    summary:
      'Prepare, price, and launch with a strategy designed for current buyer behavior in Sun City Summerlin and nearby Las Vegas neighborhoods.',
    primaryHref: '/market-report',
    primaryLabel: 'Review Market Report',
    secondaryHref: '/contact',
    secondaryLabel: 'Request Seller Plan',
  },
  '/guides/relocation': {
    eyebrow: 'Relocation Playbook',
    title: 'Move with Confidence',
    summary:
      'Plan your relocation timeline, neighborhood shortlist, and transaction steps for a smoother move into Sun City Summerlin.',
    primaryHref: '/zipcodes',
    primaryLabel: 'Explore Zip Codes',
    secondaryHref: '/contact',
    secondaryLabel: 'Talk Relocation Strategy',
  },
  '/guides/market-strategy': {
    eyebrow: 'Market Playbook',
    title: 'Use Market Signals Effectively',
    summary:
      'Translate weekly and monthly market data into practical decisions for buying, selling, and timing in Las Vegas.',
    primaryHref: '/market-update',
    primaryLabel: 'Read Weekly Update',
    secondaryHref: '/market-insights',
    secondaryLabel: 'See Strategic Insights',
  },
  '/estate-collection': {
    eyebrow: 'Luxury Showcase Pattern',
    title: 'Estate Collection',
    summary:
      'Explore premium listing categories with a luxury-first presentation model adapted from top-tier high-end agent websites.',
    primaryHref: '/properties',
    primaryLabel: 'Browse Featured Properties',
    secondaryHref: '/contact',
    secondaryLabel: 'Request Curated Access',
  },
  '/prestige-neighborhoods': {
    eyebrow: 'Neighborhood Collection Pattern',
    title: 'Prestige Neighborhoods',
    summary:
      'Compare high-signal neighborhood profiles using a concise collection model designed to speed up local area selection.',
    primaryHref: '/neighborhoods',
    primaryLabel: 'Open Neighborhood Hub',
    secondaryHref: '/contact',
    secondaryLabel: 'Get Area Guidance',
  },
  '/media-highlights': {
    eyebrow: 'Authority Proof Pattern',
    title: 'Media Highlights',
    summary:
      'Review authority and credibility highlights that reinforce trust before high-intent buyer and seller decisions.',
    primaryHref: '/about',
    primaryLabel: 'View Agent Profile',
    secondaryHref: '/contact',
    secondaryLabel: 'Start Strategy Call',
  },
};

function getRouteContent(pathname: string): RouteContent {
  if (pathname.startsWith('/zipcodes/')) {
    return {
      eyebrow: 'Zip Code Spotlight',
      title: `Living in ${pathname.replace('/zipcodes/', '')}`,
      summary:
        'Review home options, nearby amenities, and neighborhood context in this Las Vegas zip code to narrow your search with confidence.',
      primaryHref: '/search',
      primaryLabel: 'Search This Area',
      secondaryHref: '/contact',
      secondaryLabel: 'Request Area Guidance',
    };
  }

  if (pathname.startsWith('/services/')) {
    return {
      eyebrow: 'Specialized Real Estate Support',
      title: 'Service Expertise Tailored to Your Goals',
      summary:
        'Access focused support for buying, selling, relocation, and luxury goals with strategy tailored to Sun City Summerlin and nearby markets.',
      primaryHref: '/contact',
      primaryLabel: 'Book a Service Consultation',
      secondaryHref: '/services',
      secondaryLabel: 'Back to All Services',
    };
  }

  return routeContentMap[pathname] ?? fallbackContent;
}

export default function SitewidePageFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/';
  const content = getRouteContent(pathname);

  return (
    <div className="sitewide-frame">
      <section className="sitewide-intro" aria-label="Page introduction">
        <div className="sitewide-intro-inner">
          <p className="sitewide-eyebrow">{content.eyebrow}</p>
          <h2 className="sitewide-title">{content.title}</h2>
          <p className="sitewide-summary">{content.summary}</p>
          <div className="sitewide-actions">
            <Link href={content.primaryHref} className="sitewide-primary-action">
              {content.primaryLabel}
            </Link>
            <Link href={content.secondaryHref} className="sitewide-secondary-action">
              {content.secondaryLabel}
            </Link>
          </div>
          <div className="sitewide-quick-contact">
            <a href={phone.telHref}>Call {phone.display}</a>
            <a href={gbpLinks.directions} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
            <a href={gbpLinks.profile} target="_blank" rel="noopener noreferrer">
              Read Google Reviews
            </a>
          </div>
        </div>
      </section>

      {children}

      <section className="sitewide-bottom-cta" aria-label="Bottom call to action">
        <div className="sitewide-bottom-cta-inner">
          <p className="sitewide-bottom-label">Need local, no-pressure guidance?</p>
          <h2>Get a personalized Sun City Summerlin strategy call.</h2>
          <p>
            Talk directly with Dr. Jan Duffy about timing, pricing, and next steps for your
            move in Las Vegas.
          </p>
          <div className="sitewide-actions">
            <Link href="/contact" className="sitewide-primary-action">
              Schedule Your Call
            </Link>
            <a href={phone.telHref} className="sitewide-secondary-action">
              Call {phone.display}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
