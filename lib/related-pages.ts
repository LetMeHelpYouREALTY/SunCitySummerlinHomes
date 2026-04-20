export type RelatedPage = {
  href: string;
  title: string;
  description: string;
};

const relatedPagesMap: Record<string, RelatedPage[]> = {
  '/guides': [
    {
      href: '/guides/buyers',
      title: 'Buyer Guide',
      description: 'Step-by-step guidance for purchasing in Sun City Summerlin.',
    },
    {
      href: '/guides/sellers',
      title: 'Seller Guide',
      description: 'Pricing, prep, and launch strategy for sellers.',
    },
    {
      href: '/guides/relocation',
      title: 'Relocation Guide',
      description: 'How to move smoothly into Las Vegas 55+ living.',
    },
    {
      href: '/guides/market-strategy',
      title: 'Market Strategy Guide',
      description: 'How to use local market signals in your decision plan.',
    },
  ],
  '/guides/buyers': [
    {
      href: '/search',
      title: 'Search Homes',
      description: 'Browse active listings and refine by your criteria.',
    },
    {
      href: '/community',
      title: 'Community Overview',
      description: 'Explore amenities, lifestyle, and local convenience.',
    },
    {
      href: '/guides/sellers',
      title: 'Seller Guide',
      description: 'Planning to buy and sell? See seller strategy steps.',
    },
    {
      href: '/contact',
      title: 'Book Buyer Consultation',
      description: 'Talk with Dr. Jan Duffy about your timeline and goals.',
    },
  ],
  '/guides/sellers': [
    {
      href: '/market-report',
      title: 'Market Report',
      description: 'Review local price and inventory context before listing.',
    },
    {
      href: '/guides/market-strategy',
      title: 'Market Strategy Guide',
      description: 'Turn current market conditions into a listing plan.',
    },
    {
      href: '/guides/relocation',
      title: 'Relocation Guide',
      description: 'Coordinate your next move while selling confidently.',
    },
    {
      href: '/contact',
      title: 'Request Seller Strategy Call',
      description: 'Get a custom pricing and launch roadmap.',
    },
  ],
  '/guides/relocation': [
    {
      href: '/service-area',
      title: 'Service Area',
      description: 'Compare nearby neighborhoods and zip code options.',
    },
    {
      href: '/zipcodes',
      title: 'Zip Code Directory',
      description: 'Identify areas aligned with your lifestyle priorities.',
    },
    {
      href: '/guides/buyers',
      title: 'Buyer Guide',
      description: 'Use a proven process to purchase with confidence.',
    },
    {
      href: '/contact',
      title: 'Relocation Consultation',
      description: 'Get local guidance for your move timeline and plan.',
    },
  ],
  '/guides/market-strategy': [
    {
      href: '/market-update',
      title: 'Weekly Market Update',
      description: 'Track near-term shifts affecting timing and leverage.',
    },
    {
      href: '/market-insights',
      title: 'Market Insights',
      description: 'Understand broader trends shaping local demand.',
    },
    {
      href: '/guides/sellers',
      title: 'Seller Guide',
      description: 'Apply market signals to pricing and launch decisions.',
    },
    {
      href: '/guides/buyers',
      title: 'Buyer Guide',
      description: 'Use market context to improve offer strategy.',
    },
  ],
};

export function getRelatedPages(path: string): RelatedPage[] {
  return relatedPagesMap[path] ?? relatedPagesMap['/guides'];
}
