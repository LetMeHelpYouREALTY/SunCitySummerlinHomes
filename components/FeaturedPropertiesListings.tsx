'use client';

import Link from 'next/link';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import { realScoutFeaturedPriceTiers } from '@/lib/realscout-config';
import styles from '@/styles/Home.module.css';

export default function FeaturedPropertiesListings() {
  return (
    <section className={styles.propertiesSection} aria-label="Featured properties by price range">
      <h2 className={styles.sectionTitle}>Featured Properties</h2>
      <div className={styles.featuredListingsStack}>
        {realScoutFeaturedPriceTiers.map((tier) => (
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
      <div className={styles.viewAllContainer}>
        <Link href="/properties" className={styles.viewAllButton}>
          View All Properties
        </Link>
      </div>
    </section>
  );
}
