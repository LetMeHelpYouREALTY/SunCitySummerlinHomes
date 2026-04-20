import type { Metadata } from 'next';
import MarketHubPage from '@/components/MarketHubPage';

export const metadata: Metadata = {
  title: 'Las Vegas Market Report | Dr. Jan Duffy',
  description:
    'Review the current Sun City Summerlin and Las Vegas market report with practical guidance for buyers, sellers, and relocation clients.',
  alternates: { canonical: '/market-report' },
};

export default function MarketReportPage() {
  return (
    <MarketHubPage
      breadcrumbLabel="Market Report"
      eyebrow="Monthly Perspective"
      title="Sun City Summerlin Market Report"
      summary="Use this market report for a practical read on local pricing behavior, time-on-market expectations, and opportunities for both buyers and sellers in the current cycle."
      sections={[
        {
          title: 'Pricing behavior',
          text: 'Pricing outcomes are increasingly tied to micro-location, condition, and feature match. Well-positioned homes continue to attract qualified attention.',
          bullets: [
            'Review recent sold comparables from the last 30-60 days first.',
            'Account for upgrades, lot orientation, and floor plan utility in value.',
            'Avoid over-relying on broad metro averages when setting list strategy.',
          ],
        },
        {
          title: 'Time on market expectations',
          text: 'Days on market vary widely by segment and price point. Prepared listings and realistic expectations shorten market time significantly.',
          bullets: [
            'Pre-list prep often improves showing-to-offer conversion.',
            'Early buyer feedback in week one should guide tactical adjustments.',
            'Price reductions work best when paired with refreshed positioning.',
          ],
        },
        {
          title: 'Buyer leverage versus competition',
          text: 'Some segments offer negotiating flexibility while others remain competitive. Buyers who are financially prepared can capitalize faster.',
          bullets: [
            'Target inventory tiers with higher stale-listing ratios for leverage.',
            'Keep pre-approval and proof of funds current before active touring.',
            'Use neighborhood-specific offer strategy rather than one-size-fits-all.',
          ],
        },
        {
          title: 'What to do next',
          text: 'Whether buying or selling, your strongest move is to convert market signals into a clear action plan based on your timeline.',
          bullets: [
            'Sellers: finalize pricing and prep checklist before launch date.',
            'Buyers: shortlist priority communities and set decision criteria now.',
            'Relocators: align target move window with inventory seasonality.',
          ],
        },
      ]}
    />
  );
}
