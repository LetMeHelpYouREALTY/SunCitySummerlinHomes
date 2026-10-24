/** Single Calendly event used sitewide for private 15-minute conversations */
export const CALENDLY_EVENT_URL =
  'https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation';

/** Calendly events by page intent (scheduling_url values from the Calendly API). */
export const CALENDLY_EVENTS = {
  conversation: CALENDLY_EVENT_URL,
  seller: 'https://calendly.com/drjanduffy/listing-consultation',
  buyer: 'https://calendly.com/drjanduffy/buyer-consultation-30-min',
  tour: 'https://calendly.com/drjanduffy/showing',
} as const;

const SELLER_PATHS = ['/services/selling-agent', '/guides/sellers'];
const BUYER_PATHS = ['/services/buying-agent', '/guides/buyers'];
const TOUR_PATHS = ['/properties', '/search', '/estate-collection', '/neighborhoods', '/zipcodes'];

const matches = (pathname: string, paths: string[]) =>
  paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));

/**
 * Calendly URL for the page's intent, tagged with UTM. utm_source is the bare
 * domain so the Calendly → FUB Worker can map the booking to this site.
 */
export function calendlyUrlFor(pathname: string, medium: string): string {
  const event = matches(pathname, SELLER_PATHS)
    ? CALENDLY_EVENTS.seller
    : matches(pathname, BUYER_PATHS)
      ? CALENDLY_EVENTS.buyer
      : matches(pathname, TOUR_PATHS)
        ? CALENDLY_EVENTS.tour
        : CALENDLY_EVENTS.conversation;
  const url = new URL(event);
  url.searchParams.set('hide_gdpr_banner', '1');
  url.searchParams.set('utm_source', 'suncitysummerlinhomesforsale.com');
  url.searchParams.set('utm_medium', medium);
  url.searchParams.set('utm_campaign', pathname === '/' ? 'home' : pathname.slice(1));
  return url.toString();
}
