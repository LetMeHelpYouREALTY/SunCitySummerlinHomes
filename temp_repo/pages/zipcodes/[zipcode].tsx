
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Zipcodes.module.css";

interface ZipcodeData {
  code: string;
  area: string;
  description: string;
  neighborhoods: string[];
  featuredText?: string;
  demographics?: {
    population?: string;
    medianAge?: string;
    medianIncome?: string;
    homeOwnership?: string;
  };
  amenities?: string[];
  schools?: { name: string; type: string; rating?: string }[];
}

interface ZipcodePageProps {
  zipcodeData: ZipcodeData;
  nearbyZipcodes: ZipcodeData[];
}

const ZipcodePage: NextPage<ZipcodePageProps> = ({ zipcodeData, nearbyZipcodes }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  if (router.isFallback) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{zipcodeData.area} ({zipcodeData.code}) | Las Vegas Real Estate | Dr. Jan Duffy</title>
        <meta 
          name="description" 
          content={`Explore homes for sale in ${zipcodeData.area} (${zipcodeData.code}). ${zipcodeData.description} Contact Dr. Jan Duffy for expert real estate guidance in Las Vegas.`} 
        />
        <meta 
          name="keywords" 
          content={`${zipcodeData.code}, ${zipcodeData.area}, Las Vegas real estate, homes for sale ${zipcodeData.area}, ${zipcodeData.neighborhoods.join(', ')}, Dr Jan Duffy`} 
        />
        <link rel="canonical" href={`https://suncitysummerlin.com/zipcodes/${zipcodeData.code}`} />
        <meta property="og:title" content={`${zipcodeData.area} (${zipcodeData.code}) | Las Vegas Real Estate`} />
        <meta property="og:description" content={`${zipcodeData.description} Find your dream home in ${zipcodeData.area} with Dr. Jan Duffy.`} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.bhsLogo} />
          <p className={styles.logo}>Sun City Summerlin Homes</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/" passHref legacyBehavior><a>Home</a></Link>
          <Link href="/properties" passHref legacyBehavior><a>Properties</a></Link>
          <Link href="/community" passHref legacyBehavior><a>Community</a></Link>
          <Link href="/lifestyle" passHref legacyBehavior><a>Lifestyle</a></Link>
          <Link href="/amenities" passHref legacyBehavior><a>Amenities</a></Link>
          <Link href="/testimonials" passHref legacyBehavior><a>Testimonials</a></Link>
          <Link href="/zipcodes" passHref legacyBehavior><a>Zipcodes</a></Link>
          <Link href="/contact" passHref legacyBehavior><a>Contact</a></Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.zipcodeHeader}>
          <div className={styles.breadcrumbs}>
            <Link href="/zipcodes" passHref legacyBehavior><a>Zipcodes</a></Link> &gt; {zipcodeData.code}
          </div>
          <h1 className={styles.pageTitle}>{zipcodeData.area} - {zipcodeData.code}</h1>
          <p className={styles.zipcodeDescription}>{zipcodeData.description}</p>
        </div>

        <div className={styles.zipcodeContent}>
          <section className={styles.neighborhoodSection}>
            <h2>About {zipcodeData.area}</h2>
            <p>{zipcodeData.featuredText || `${zipcodeData.area} is a desirable Las Vegas neighborhood located in the ${zipcodeData.code} zipcode. Known for its ${zipcodeData.neighborhoods.join(', ')}, this area offers residents a wonderful place to call home with easy access to Las Vegas amenities.`}</p>
            
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
            <p>Dr. Jan Duffy specializes in helping buyers and sellers in the {zipcodeData.area} area. With extensive knowledge of this zipcode and surrounding communities, Dr. Jan can help you find the perfect property.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" passHref legacyBehavior>
                <a className={styles.primaryButton}>Contact Dr. Jan</a>
              </Link>
              <Link href="/properties" passHref legacyBehavior>
                <a className={styles.secondaryButton}>View Properties</a>
              </Link>
            </div>
          </section>

          <section className={styles.nearbyZipcodesSection}>
            <h2>Nearby Zipcodes</h2>
            <div className={styles.nearbyZipcodesGrid}>
              {nearbyZipcodes.map((zipcode) => (
                <Link 
                  href={`/zipcodes/${zipcode.code}`} 
                  passHref
                  key={zipcode.code}
                  legacyBehavior
                >
                  <a className={styles.nearbyZipcodeCard}>
                    <h3>{zipcode.area}</h3>
                    <div className={styles.zipcodeLabel}>{zipcode.code}</div>
                    <p>{zipcode.description.substring(0, 100)}...</p>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Define which zipcode pages to pre-generate
  const zipcodes = [
    "89134", "89135", "89144", "89138", "89145",
    "89148", "89117", "89128", "89129", "89149",
    "89130", "89131"
  ];

  const paths = zipcodes.map((zipcode) => ({
    params: { zipcode }
  }));

  return {
    paths,
    fallback: 'blocking' // Change to blocking to prevent client-side fallback issues
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const zipcode = params?.zipcode as stringing;

  // This is a simplified version - in a real application, you would fetch this data from an API or database
  const allZipcodeData: ZipcodeData[] = [
    {
      code: "89134",
      area: "Sun City Summerlin",
      description: "Premier 55+ community with golf courses, recreation centers, and luxury single-story homes.",
      neighborhoods: ["Sun City", "The Arbors", "Eagle Hills"],
      featuredText: "Sun City Summerlin is Las Vegas' premier 55+ active adult community, offering resort-style living with three championship golf courses, four recreation centers, and a variety of social clubs. This master-planned community features luxury single-story homes with stunning views of the Las Vegas valley and surrounding mountains.",
      demographics: {
        population: "13,500+",
        medianAge: "68",
        medianIncome: "$72,000",
        homeOwnership: "87%"
      },
      amenities: [
        "Three championship golf courses",
        "Four recreation centers with pools",
        "Tennis and pickleball courts",
        "Fitness centers and walking trails",
        "On-site shopping and dining",
        "Multiple community centers",
        "Arts and crafts studios",
        "Over 80 social clubs and activities"
      ],
      schools: [
        { name: "Lummis Elementary School", type: "Public K-5", rating: "8/10" },
        { name: "Becker Middle School", type: "Public 6-8", rating: "7/10" },
        { name: "Palo Verde High School", type: "Public 9-12", rating: "8/10" },
        { name: "Faith Lutheran Academy", type: "Private K-12", rating: "9/10" }
      ]
    },
    {
      code: "89135",
      area: "Summerlin South",
      description: "Upscale master-planned community with parks, trails, and access to Red Rock Canyon.",
      neighborhoods: ["The Ridges", "The Trails", "Red Rock Country Club"],
      demographics: {
        population: "24,500+",
        medianAge: "42",
        medianIncome: "$125,000",
        homeOwnership: "72%"
      }
    },
    {
      code: "89144",
      area: "Summerlin North",
      description: "Area with nearby schools, shopping centers, and outdoor recreation options.",
      neighborhoods: ["Tournament Hills", "The Canyons", "The Gardens"]
    },
    {
      code: "89138",
      area: "Summerlin West",
      description: "Newer development with modern homes, community parks, and desert landscape views.",
      neighborhoods: ["Reverence", "Stonebridge", "The Paseos"]
    },
    {
      code: "89145",
      area: "The Lakes",
      description: "Community centered around man-made lakes with waterfront properties.",
      neighborhoods: ["The Lakes", "Section 10", "Peccole Ranch"]
    },
    {
      code: "89148",
      area: "Spring Valley",
      description: "Diverse suburban area with a mix of housing options and convenient amenities.",
      neighborhoods: ["Rhodes Ranch", "Spanish Trail", "Chinatown"]
    },
    {
      code: "89117",
      area: "Canyon Gate",
      description: "Gated communities with golf courses and luxury homes near the Summerlin area.",
      neighborhoods: ["Canyon Gate", "Peccole Ranch", "The Lakes"]
    },
    {
      code: "89128",
      area: "Centennial Hills",
      description: "Growing northwest area with new developments and mountain views.",
      neighborhoods: ["Lone Mountain", "Desert Shores", "Painted Desert"]
    },
    {
      code: "89129",
      area: "Centennial Hills North",
      description: "Neighborhoods with parks and community centers in northwest Las Vegas.",
      neighborhoods: ["Providence", "Skye Canyon", "Elkhorn Springs"]
    },
    {
      code: "89149",
      area: "Centennial Hills West",
      description: "Expanding area with newer homes and natural desert landscape.",
      neighborhoods: ["Skye Canyon", "Iron Mountain Ranch", "Elkhorn"]
    },
    {
      code: "89130",
      area: "North Las Vegas",
      description: "Affordable housing options with easy access to the Las Vegas Strip and downtown.",
      neighborhoods: ["Aliante", "El Dorado", "Aliante Golf Club"]
    },
    {
      code: "89131",
      area: "North Las Vegas North",
      description: "Growing suburban area with new master-planned communities and amenities.",
      neighborhoods: ["Aliante", "Tule Springs", "Shadow Creek"]
    }
  ];

  // Find the current zipcode data
  const zipcodeData = allZipcodeData.find(z => z.code === zipcode) || {
    code: zipcode,
    area: "Las Vegas Area",
    description: "Explore this Las Vegas neighborhood and find your dream home.",
    neighborhoods: ["Contact for more information"]
  };

  // Get nearby zipcodes - in a real implementation, you'd determine this based on geographic proximity
  // For this example, we'll just grab 3 random ones that aren't the current one
  const nearbyZipcodes = allZipcodeData
    .filter(z => z.code !== zipcode)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return {
    props: {
      zipcodeData,
      nearbyZipcodes
    },
    // Re-generate the page at most once per day
    revalidate: 86400
  };
};

export default ZipcodePage;
