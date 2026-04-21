export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
  /** Plain-text article body (no fabricated statistics beyond excerpt). */
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: '2023 Sun City Summerlin Real Estate Market Trends',
    excerpt:
      'The latest market analysis shows continued demand for Sun City Summerlin properties, with prices increasing by 8.5% year-over-year despite broader market fluctuations.',
    date: 'October 15, 2023',
    author: 'Dr. Jan Duffy',
    image: '/property1.jpg',
    category: 'Market Trends',
    slug: '2023-market-trends',
    content: [
      'Sun City Summerlin remains one of the Las Vegas Valley’s most sought-after 55+ communities. Buyers often prioritize single-level living, clubhouse access, and proximity to golf and medical services.',
      'If you are buying or selling, rely on current MLS data and a licensed agent rather than any single article. Dr. Jan Duffy can walk you through inventory, pricing, and timing based on today’s market.',
    ],
  },
  {
    id: 2,
    title: 'Top 5 Renovations That Increase Home Value in Sun City Summerlin',
    excerpt:
      'Looking to sell your Sun City Summerlin home for top dollar? These five strategic renovations have consistently shown the highest ROI in our 55+ community.',
    date: 'September 28, 2023',
    author: 'Dr. Jan Duffy',
    image: '/property2.jpg',
    category: 'Home Improvement',
    slug: 'top-renovations-home-value',
    content: [
      'Kitchen and primary bath updates, flooring, paint, and energy-efficient windows are often discussed with sellers before listing. The right scope depends on your floor plan, competition, and timeline.',
      'Before spending on upgrades, ask what buyers in your micro-market already expect. A short consultation can help you spend where it matters.',
    ],
  },
  {
    id: 3,
    title: 'Understanding HOA Rules: A Guide for New Sun City Summerlin Residents',
    excerpt:
      'Moving to Sun City Summerlin? Here is everything you need to know about the community HOA regulations, fees, and governance structure.',
    date: 'September 12, 2023',
    author: 'Dr. Jan Duffy',
    image: '/property3.jpg',
    category: 'Community Living',
    slug: 'hoa-rules-guide',
    content: [
      'HOA fees, rules, and reserves vary by association. Always review the official resale documents, budget, and meeting minutes during escrow—not only marketing summaries.',
      'Dr. Jan Duffy can point you to the right questions for your lender and HOA contact so there are no surprises after closing.',
    ],
  },
  {
    id: 4,
    title: 'Golf Course Living: Pros and Cons in Sun City Summerlin',
    excerpt:
      'While golf course properties offer stunning views and convenient access to recreation, there are important considerations before purchasing one in our community.',
    date: 'August 25, 2023',
    author: 'Dr. Jan Duffy',
    image: '/golf-course.jpg',
    category: 'Lifestyle',
    slug: 'golf-course-living',
    content: [
      'Golf-front homes may offer views and walkability to the course, but also deserve a look at privacy, maintenance, and insurance questions that are unique to each lot.',
      'Touring at different times of day helps you judge sunlight, noise, and how the outdoor space fits your lifestyle.',
    ],
  },
  {
    id: 5,
    title:
      'Moving from California to Sun City Summerlin: Tax Benefits and Lifestyle Changes',
    excerpt:
      'Many of my clients relocate from California to enjoy Nevada’s tax advantages and Sun City’s amenities. Here’s what you should know about the transition.',
    date: 'August 10, 2023',
    author: 'Dr. Jan Duffy',
    image: '/community-center.jpg',
    category: 'Relocation',
    slug: 'california-nevada-relocation',
    content: [
      'Relocating involves housing, healthcare, vehicle registration, and often estate planning questions. Work with qualified professionals for tax and legal advice specific to your situation.',
      'Dr. Jan Duffy helps many out-of-state buyers preview neighborhoods remotely and plan efficient in-person tours when you are ready.',
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
