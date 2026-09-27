import { address } from '@/lib/site-contact';

/** Community-focused FAQ copy — no invented fees, prices, or school ratings. */
export const communityFaqItems = [
  {
    q: 'What is Sun City Summerlin?',
    a: 'Sun City Summerlin is an active adult community in the Las Vegas area designed for residents who want golf, recreation centers, clubs, and a 55+ lifestyle in Summerlin.',
  },
  {
    q: 'Who can buy a home in Sun City Summerlin?',
    a: 'Sun City Summerlin is an age-restricted active adult community. If you are unsure whether you meet the community requirements, ask during a consultation before you tour homes.',
  },
  {
    q: 'How do I search for homes in the community?',
    a: 'Use the property search and featured listings on this site to browse available homes, then contact Dr. Jan Duffy when you want to schedule showings or discuss next steps.',
  },
  {
    q: 'What should I know before relocating to Las Vegas?',
    a: 'Plan time for in-person or virtual tours, understand your timeline, and bring questions about floor plans, HOA documents, and how the community fits your daily routine.',
  },
] as const;

export const agentFaqItems = [
  {
    q: 'What areas does Dr. Jan Duffy serve?',
    a: 'Sun City Summerlin and the broader Las Vegas Valley, with a specialty in 55+ communities and Summerlin-area homes.',
  },
  {
    q: 'How do I schedule a showing?',
    a: 'Call the office number listed on this site or use the contact page to request a showing or a consultation.',
  },
  {
    q: 'Do you help with relocation?',
    a: 'Yes. Many clients relocate to Las Vegas for retirement. Dr. Jan Duffy can help you plan tours, timing, and next steps.',
  },
  {
    q: 'Where is the office located?',
    a: `The office address is ${address.singleLine}. Use the contact page for a map and directions.`,
  },
  {
    q: 'How can I verify licensing?',
    a: 'Nevada real estate license information is shown in the site footer and on the About page. You can also verify credentials with the Nevada Real Estate Division.',
  },
  {
    q: 'What should I bring to a buyer consultation?',
    a: 'Bring your questions, preferred timeline, budget range, and any must-have home features (single story, golf proximity, HOA preferences, etc.).',
  },
  {
    q: 'Do you work with sellers?',
    a: 'Yes. Listing services include pricing guidance, marketing preparation, and negotiation support aligned with your goals.',
  },
  {
    q: 'Is Sun City Summerlin only for seniors?',
    a: 'Sun City Summerlin is an active adult community with age restrictions. If you are unsure whether you qualify, ask during your consultation.',
  },
  {
    q: 'How quickly can I get a response?',
    a: 'For the fastest response, call during posted business hours. Email inquiries are typically answered as soon as possible during business days.',
  },
  {
    q: 'Can I browse listings online?',
    a: 'Yes. Use the search and properties sections of this site to explore listings and connect when you are ready for the next step.',
  },
] as const;

export function getFaqPageJsonLd(
  items: ReadonlyArray<{ q: string; a: string }> = communityFaqItems,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function getAgentFaqPageJsonLd() {
  return getFaqPageJsonLd([...agentFaqItems]);
}
