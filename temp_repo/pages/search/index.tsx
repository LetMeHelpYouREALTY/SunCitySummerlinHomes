
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";

const PropertySearch: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [priceRange, setPriceRange] = useState([300000, 800000]);
  const [bedrooms, setBedrooms] = useState("any");
  const [bathrooms, setBathrooms] = useState("any");
  const [propertyType, setPropertyType] = useState("any");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock property data - in a real implementation, this would come from an API
  const mockProperties = [
    {
      id: 1,
      title: "Elegant Single-Story Home",
      price: 548175,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1850,
      propertyType: "Single-Story",
      address: "10243 Sun City Blvd, Las Vegas, NV 89134",
      image: "/property1.jpg",
      features: ["Golf Course View", "Patio", "Updated Kitchen"]
    },
    {
      id: 2,
      title: "Golf Course Paradise",
      price: 625000,
      bedrooms: 2,
      bathrooms: 2.5,
      sqft: 2100,
      propertyType: "Single-Story",
      address: "9876 Del Webb Blvd, Las Vegas, NV 89134",
      image: "/property2.jpg",
      features: ["Pool", "Spa", "Mountain View"]
    },
    {
      id: 3,
      title: "Contemporary Desert Oasis",
      price: 485000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1750,
      propertyType: "Patio Home",
      address: "2468 Sunshine Way, Las Vegas, NV 89134",
      image: "/property3.jpg",
      features: ["Updated Flooring", "Open Floor Plan", "Desert Landscaping"]
    }
  ];

  const handleSearch = () => {
    setIsLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const filtered = mockProperties.filter(property => {
        const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
        const matchesBeds = bedrooms === "any" || property.bedrooms === parseInt(bedrooms);
        const matchesBaths = bathrooms === "any" || property.bathrooms === parseFloat(bathrooms);
        const matchesType = propertyType === "any" || property.propertyType === propertyType;
        
        return matchesPrice && matchesBeds && matchesBaths && matchesType;
      });
      
      setSearchResults(filtered);
      setIsLoading(false);
    }, 800);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Find Your Dream Home in Sun City Summerlin | Advanced Property Search</title>
        <meta name="description" content="Search for your perfect retirement home in Sun City Summerlin Las Vegas. Filter by price, bedrooms, bathrooms, and property type with our advanced search tools." />
        <meta name="keywords" content="Sun City Summerlin homes for sale, Las Vegas 55+ community, retirement homes Las Vegas, golf course properties, single-story homes" />
        <link rel="canonical" href="https://suncitysummerlin.com/search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.bhsLogo} />
          <div className={styles.logoText}>
            <p className={styles.logo}>Sun City Summerlin Homes</p>
            <p className={styles.subLogo}>Dr. Jan Duffy, REALTOR® | 55+ Community Specialist</p>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/community">Community</Link>
          <Link href="/lifestyle">Lifestyle</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/zipcodes">Zipcodes</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className={`${styles.main} ${isVisible ? styles.fadeIn : ''}`}>
        <section className={styles.searchSection}>
          <h1 className={styles.pageTitle}>Find Your Dream Home in Sun City Summerlin</h1>
          
          <div className={styles.searchContainer}>
            <div className={styles.searchFilters}>
              <div className={styles.filterGroup}>
                <label htmlFor="priceRange">Price Range:</label>
                <div className={styles.dualSlider}>
                  <span className={styles.rangeValue}>{formatPrice(priceRange[0])}</span>
                  <input 
                    type="range" 
                    min="200000" 
                    max="1000000" 
                    step="5000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className={styles.rangeSlider}
                  />
                  <span>to</span>
                  <input 
                    type="range" 
                    min="200000" 
                    max="1000000" 
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className={styles.rangeSlider}
                  />
                  <span className={styles.rangeValue}>{formatPrice(priceRange[1])}</span>
                </div>
              </div>
              
              <div className={styles.filterRow}>
                <div className={styles.filterGroup}>
                  <label htmlFor="bedrooms">Bedrooms:</label>
                  <select 
                    id="bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="any">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                
                <div className={styles.filterGroup}>
                  <label htmlFor="bathrooms">Bathrooms:</label>
                  <select 
                    id="bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="any">Any</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3+</option>
                  </select>
                </div>
                
                <div className={styles.filterGroup}>
                  <label htmlFor="propertyType">Property Type:</label>
                  <select 
                    id="propertyType"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="any">Any</option>
                    <option value="Single-Story">Single-Story</option>
                    <option value="Patio Home">Patio Home</option>
                    <option value="Villa">Villa</option>
                    <option value="Townhome">Townhome</option>
                  </select>
                </div>
              </div>
              
              <button 
                onClick={handleSearch}
                className={styles.searchButton}
                disabled={isLoading}
              >
                {isLoading ? 'Searching...' : 'Search Properties'}
              </button>
            </div>
            
            <div className={styles.searchResults}>
              {searchResults.length > 0 ? (
                <div className={styles.resultsGrid}>
                  {searchResults.map(property => (
                    <div key={property.id} className={styles.propertyCard}>
                      <div className={styles.propertyImage}>
                        <img src={property.image} alt={property.title} />
                      </div>
                      <div className={styles.propertyInfo}>
                        <h3>{property.title}</h3>
                        <p className={styles.propertyPrice}>{formatPrice(property.price)}</p>
                        <p className={styles.propertyAddress}>{property.address}</p>
                        <div className={styles.propertyStats}>
                          <span>{property.bedrooms} bd</span>
                          <span>{property.bathrooms} ba</span>
                          <span>{property.sqft.toLocaleString()} sqft</span>
                        </div>
                        <div className={styles.propertyFeatures}>
                          {property.features.map((feature, i) => (
                            <span key={i} className={styles.featureTag}>{feature}</span>
                          ))}
                        </div>
                        <button className={styles.viewPropertyBtn}>View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  {isLoading ? (
                    <p>Searching for your perfect home...</p>
                  ) : (
                    searchResults.length === 0 && priceRange[0] !== 300000 ? (
                      <div>
                        <p>No properties match your search criteria.</p>
                        <p>Try adjusting your filters for more results.</p>
                      </div>
                    ) : (
                      <div className={styles.initialSearch}>
                        <p>Use the filters to find your dream home in Sun City Summerlin.</p>
                        <p>Dr. Jan Duffy specializes in finding the perfect match for your lifestyle.</p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section className={styles.searchTips}>
          <h2>Home Search Tips for Sun City Summerlin</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <h3>Golf Course Views</h3>
              <p>Properties along Eagle Crest, Highland Falls, or Palm Valley courses command premium prices but offer stunning views and direct golf access.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Single-Story Living</h3>
              <p>Most Sun City Summerlin homes are single-story, perfect for aging in place with accessible layouts and no stairs to navigate.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Community Location</h3>
              <p>Consider proximity to recreation centers, shopping, and medical facilities when selecting your ideal neighborhood within Sun City.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Updated Properties</h3>
              <p>Many homes have been renovated with modern finishes. Look for updated kitchens, bathrooms, and energy-efficient features.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las Vegas, and Spring Valley Nevada. S.0197614.LLC</p>
          <p>Real Estate Las Vegas, NV <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer">drjanduffy.realscout.com/onboarding</a></p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="https://www.bhhs.com/" target="_blank" rel="noopener noreferrer">BHHS.com</a>
        </div>
        <div className={styles.socialLinks}>
          <h3>Connect With Dr. Jan</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/drjanduffy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            <a href="https://www.facebook.com/DrJanDuffyRealtorCentennialHills/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">👍</a>
            <a href="https://www.pinterest.com/bhhsluxury/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">📌</a>
            <a href="https://www.youtube.com/@DrDuffy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">🎬</a>
            <a href="https://x.com/drjanduffy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://www.linkedin.com/company/lvrmembers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://www.tiktok.com/@dr.janduffy" target="_blank" rel="noopener noreferrer" aria-label="TikTok">🎵</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertySearch;
