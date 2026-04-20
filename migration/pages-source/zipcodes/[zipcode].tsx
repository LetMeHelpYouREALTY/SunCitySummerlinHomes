import Link from 'next/link';
import styles from '@/styles/Zipcodes.module.css';
import type { ZipcodeData } from '@/lib/zipcodes-data';

export type ZipcodePageProps = {
  zipcodeData: ZipcodeData;
  nearbyZipcodes: ZipcodeData[];
};

export default function ZipcodePage({ zipcodeData, nearbyZipcodes }: ZipcodePageProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.bhsLogo} />
          <p className={styles.logo}>Sun City Summerlin Homes</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/community">Community</Link>
          <Link href="/lifestyle">Lifestyle</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/zipcodes">Zipcodes</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <div className={styles.main}>
        <div className={styles.zipcodeHeader}>
          <div className={styles.breadcrumbs}>
            <Link href="/zipcodes">Zipcodes</Link> &gt; {zipcodeData.code}
          </div>
          <h1 className={styles.pageTitle}>
            {zipcodeData.area} - {zipcodeData.code}
          </h1>
          <p className={styles.zipcodeDescription}>{zipcodeData.description}</p>
        </div>

        <div className={styles.zipcodeContent}>
          <section className={styles.neighborhoodSection}>
            <h2>About {zipcodeData.area}</h2>
            <p>
              {zipcodeData.featuredText ||
                `${zipcodeData.area} is a desirable Las Vegas neighborhood located in the ${zipcodeData.code} zipcode. Known for its ${zipcodeData.neighborhoods.join(', ')}, this area offers residents a wonderful place to call home with easy access to Las Vegas amenities.`}
            </p>

            {zipcodeData.demographics && (
              <div className={styles.demographicsBox}>
                <h3>Area Demographics</h3>
                <div className={styles.demographicsGrid}>
                  {zipcodeData.demographics.population && (
                    <div className={styles.demographicItem}>
                      <span className={styles.demographicLabel}>Population</span>
                      <span className={styles.demographicValue}>{zipcodeData.demographics.population}</span>
                    </div>
                  )}
                  {zipcodeData.demographics.medianAge && (
                    <div className={styles.demographicItem}>
                      <span className={styles.demographicLabel}>Median Age</span>
                      <span className={styles.demographicValue}>{zipcodeData.demographics.medianAge}</span>
                    </div>
                  )}
                  {zipcodeData.demographics.medianIncome && (
                    <div className={styles.demographicItem}>
                      <span className={styles.demographicLabel}>Median Income</span>
                      <span className={styles.demographicValue}>{zipcodeData.demographics.medianIncome}</span>
                    </div>
                  )}
                  {zipcodeData.demographics.homeOwnership && (
                    <div className={styles.demographicItem}>
                      <span className={styles.demographicLabel}>Home Ownership</span>
                      <span className={styles.demographicValue}>{zipcodeData.demographics.homeOwnership}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>

          <section className={styles.neighborhoodsSection}>
            <h2>Featured Neighborhoods in {zipcodeData.code}</h2>
            <div className={styles.neighborhoodsList}>
              <ul>
                {zipcodeData.neighborhoods.map((neighborhood, idx) => (
                  <li key={idx}>{neighborhood}</li>
                ))}
              </ul>
            </div>
          </section>

          {zipcodeData.amenities && (
            <section className={styles.amenitiesSection}>
              <h2>Local Amenities</h2>
              <div className={styles.amenitiesList}>
                {zipcodeData.amenities.map((amenity, idx) => (
                  <div key={idx} className={styles.amenityItem}>
                    <span className={styles.amenityIcon}>✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {zipcodeData.schools && (
            <section className={styles.schoolsSection}>
              <h2>Nearby Schools</h2>
              <div className={styles.schoolsList}>
                {zipcodeData.schools.map((school, idx) => (
                  <div key={idx} className={styles.schoolItem}>
                    <h3>{school.name}</h3>
                    <p>{school.type}</p>
                    {school.rating && <p className={styles.schoolRating}>Rating: {school.rating}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className={styles.ctaSection}>
            <h2>Find Your Dream Home in {zipcodeData.code}</h2>
            <p>
              Dr. Jan Duffy specializes in helping buyers and sellers in the {zipcodeData.area} area. With extensive
              knowledge of this zipcode and surrounding communities, Dr. Jan can help you find the perfect property.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Contact Dr. Jan
              </Link>
              <Link href="/properties" className={styles.secondaryButton}>
                View Properties
              </Link>
            </div>
          </section>

          <section className={styles.nearbyZipcodesSection}>
            <h2>Nearby Zipcodes</h2>
            <div className={styles.nearbyZipcodesGrid}>
              {nearbyZipcodes.map((z) => (
                <Link href={`/zipcodes/${z.code}`} key={z.code} className={styles.nearbyZipcodeCard}>
                  <h3>{z.area}</h3>
                  <div className={styles.zipcodeLabel}>{z.code}</div>
                  <p>{z.description.substring(0, 100)}...</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
