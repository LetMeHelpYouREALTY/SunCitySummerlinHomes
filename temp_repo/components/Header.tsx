
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if a link is active
  const isActive = (path: string) => {
    return router.pathname === path ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;
  };

  const isDropdownActive = (paths: string[]) => {
    return paths.some(path => router.pathname.includes(path)) ? 
      `${styles.dropdownButton} ${styles.activeLink}` : styles.dropdownButton;
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);
  
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoContainer}>
          <div className={styles.logoText}>
            <h1 className={styles.logo}>Sun City Summerlin</h1>
            <div className={styles.subLogoContainer}>
              <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.headerLogo} />
              <p className={styles.subLogo}>Dr. Jan Duffy, REALTOR® | 55+ Specialist</p>
            </div>
          </div>
        </div>

        <div className={styles.headerRight}>
          <nav className={styles.nav}>
            <div className={isMobileMenuOpen ? `${styles.navLinks} ${styles.navLinksActive}` : styles.navLinks}>
              <Link href="/" className={isActive('/')}><span>Home</span></Link>
              
              <div className={styles.navDropdown}>
                <span className={isDropdownActive(['/properties', '/search'])}>
                  Properties <span className={styles.chevronIcon}>▼</span>
                </span>
                <div className={styles.dropdownContent}>
                  <Link href="/properties" className={styles.dropdownItem}>Featured Listings</Link>
                  <Link href="/search" className={styles.dropdownItem}>Search Properties</Link>
                  <Link href="/properties/golf-course" className={styles.dropdownItem}>Golf Course Homes</Link>
                  <Link href="/properties/new-listings" className={styles.dropdownItem}>New Listings</Link>
                </div>
              </div>
              
              <div className={styles.navDropdown}>
                <span className={isDropdownActive(['/community', '/lifestyle', '/amenities'])}>
                  Community <span className={styles.chevronIcon}>▼</span>
                </span>
                <div className={styles.dropdownContent}>
                  <Link href="/community" className={styles.dropdownItem}>About Sun City</Link>
                  <Link href="/lifestyle" className={styles.dropdownItem}>Lifestyle</Link>
                  <Link href="/amenities" className={styles.dropdownItem}>Amenities</Link>
                </div>
              </div>
              
              <div className={styles.navDropdown}>
                <span className={isDropdownActive(['/zipcodes'])}>
                  Location <span className={styles.chevronIcon}>▼</span>
                </span>
                <div className={styles.dropdownContent}>
                  <Link href="/zipcodes" className={styles.dropdownItem}>Zip Codes</Link>
                  <Link href="/zipcodes/89134" className={styles.dropdownItem}>89134 Area</Link>
                  <Link href="/zipcodes/89144" className={styles.dropdownItem}>89144 Area</Link>
                </div>
              </div>
              
              <Link href="/blog" className={isActive('/blog')}><span>Blog</span></Link>
              <Link href="/testimonials" className={isActive('/testimonials')}><span>Testimonials</span></Link>
              <Link href="/contact" className={isActive('/contact')}><span>Contact</span></Link>
            </div>
          </nav>

          <div className={styles.headerActions}>
            <a href="tel:7025001955" className={styles.phoneButton}>
              <span className={styles.phoneIcon}>📞</span>
              <span className={styles.phoneNumber}>(702) 500-1955</span>
            </a>
            <button 
              className={styles.mobileMenuButton} 
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <span className={isMobileMenuOpen ? styles.mobileButtonActive : ''}></span>
              <span className={isMobileMenuOpen ? styles.mobileButtonActive : ''}></span>
              <span className={isMobileMenuOpen ? styles.mobileButtonActive : ''}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
