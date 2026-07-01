'use client';

import Link from 'next/link';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import {
  realScoutFeaturedPriceTiers,
  type RealScoutPriceTier,
} from '@/lib/realscout-config';
import styles from '@/styles/Home.module.css';

type FeaturedPropertiesListingsProps = {
  title?: string;
  tiers?: readonly RealScoutPriceTier[];
  showViewAll?: boolean;
  viewAllHref?: string;
  viewAllLabel?: string;
  id?: string;
};

export default function FeaturedPropertiesListings({
  title = 'Featured Properties',
  tiers = realScoutFeaturedPriceTiers,
  showViewAll = true,
  viewAllHref = '/properties',
  viewAllLabel = 'View All Properties',
  id,
}: FeaturedPropertiesListingsProps) {
  return (
    <section
      id={id}
      className={styles.propertiesSection}
      aria-label={title}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.featuredListingsStack}>
        {tiers.map((tier) => (
          <article key={tier.label} className={styles.featuredTier}>
            <header className={styles.featuredTierHeader}>
              <h3 className={styles.featuredTierTitle}>{tier.label}</h3>
              <p className={styles.featuredTierRange}>{tier.description}</p>
            </header>
            <div className={styles.featuredTierWidget} suppressHydrationWarning>
              <RealScoutOfficeListings priceMin={tier.priceMin} priceMax={tier.priceMax} />
            </div>
          </article>
        ))}
      </div>
      {showViewAll ? (
        <div className={styles.viewAllContainer}>
          <Link href={viewAllHref} className={styles.viewAllButton}>
            {viewAllLabel}
          </Link>
        </div>
      ) : null}
    </section>
  );
}
