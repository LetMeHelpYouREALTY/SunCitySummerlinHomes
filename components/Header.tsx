'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { phone } from "@/lib/site-contact";
import ScheduleButton from "@/components/ScheduleButton";

const Header = () => {
  const pathname = usePathname() ?? '';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if a link is active
  const isActive = (path: string) => {
    return pathname === path ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;
  };

  const isDropdownActive = (paths: string[]) => {
    return paths.some((p) => pathname === p || pathname.startsWith(`${p}/`))
      ? `${styles.dropdownButton} ${styles.activeLink}`
      : styles.dropdownButton;
  };

  const isDropdownItemActive = (path: string) => {
    return pathname === path ? `${styles.dropdownItem} ${styles.activeLink}` : styles.dropdownItem;
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
            <p className={styles.logo}>Sun City Summerlin</p>
            <div className={styles.subLogoContainer}>
              <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.headerLogo} />
              <p className={styles.subLogo}>Dr. Jan Duffy, REALTOR® | 55+ Specialist</p>
            </div>
          </div>
        </div>

        <div className={styles.headerRight}>
          <nav className={styles.nav} aria-label="Primary navigation">
            <div
              id="primary-nav-links"
              className={isMobileMenuOpen ? `${styles.navLinks} ${styles.navLinksActive}` : styles.navLinks}
            >
              <Link href="/" className={isActive('/')}><span>Home</span></Link>

              <div className={styles.navDropdown}>
                <button type="button" className={isDropdownActive(['/properties', '/search'])} aria-haspopup="true">
                  Properties <span className={styles.chevronIcon}>▼</span>
                </button>
                <div className={styles.dropdownContent}>
                  <Link href="/properties" className={isDropdownItemActive('/properties')}>Featured Listings</Link>
                  <Link href="/search" className={isDropdownItemActive('/search')}>Search Properties</Link>
                  <Link href="/properties/golf-course" className={isDropdownItemActive('/properties/golf-course')}>Golf Course Homes</Link>
                  <Link href="/properties/new-listings" className={isDropdownItemActive('/properties/new-listings')}>New Listings</Link>
                </div>
              </div>

              <Link href="/services" className={isActive('/services')}><span>Services</span></Link>

              <div className={styles.navDropdown}>
                <button type="button" className={isDropdownActive(['/community', '/lifestyle', '/amenities'])} aria-haspopup="true">
                  Community <span className={styles.chevronIcon}>▼</span>
                </button>
                <div className={styles.dropdownContent}>
                  <Link href="/community" className={isDropdownItemActive('/community')}>About Sun City</Link>
                  <Link href="/lifestyle" className={isDropdownItemActive('/lifestyle')}>Lifestyle</Link>
                  <Link href="/amenities" className={isDropdownItemActive('/amenities')}>Amenities</Link>
                  <Link href="/map" className={isDropdownItemActive('/map')}>Map</Link>
                </div>
              </div>

              <div className={styles.navDropdown}>
                <button type="button" className={isDropdownActive(['/zipcodes'])} aria-haspopup="true">
                  Location <span className={styles.chevronIcon}>▼</span>
                </button>
                <div className={styles.dropdownContent}>
                  <Link href="/zipcodes" className={isDropdownItemActive('/zipcodes')}>Zip Codes</Link>
                  <Link href="/zipcodes/89134" className={isDropdownItemActive('/zipcodes/89134')}>89134 Area</Link>
                  <Link href="/zipcodes/89144" className={isDropdownItemActive('/zipcodes/89144')}>89144 Area</Link>
                </div>
              </div>

              <Link href="/neighborhoods" className={isActive('/neighborhoods')}><span>Neighborhoods</span></Link>

              <div className={styles.navDropdown}>
                <button type="button" className={isDropdownActive(['/about', '/faq', '/service-area'])} aria-haspopup="true">
                  About <span className={styles.chevronIcon}>▼</span>
                </button>
                <div className={styles.dropdownContent}>
                  <Link href="/about" className={isDropdownItemActive('/about')}>About Dr. Jan</Link>
                  <Link href="/faq" className={isDropdownItemActive('/faq')}>FAQ</Link>
                  <Link href="/service-area" className={isDropdownItemActive('/service-area')}>Service area</Link>
                </div>
              </div>

              <Link href="/blog" className={isActive('/blog')}><span>Blog</span></Link>
              <Link href="/market-report" className={isActive('/market-report')}><span>Market</span></Link>
              <Link href="/guides" className={isActive('/guides')}><span>Guides</span></Link>
              <Link href="/estate-collection" className={isActive('/estate-collection')}><span>Estates</span></Link>
              <Link href="/testimonials" className={isActive('/testimonials')}><span>Testimonials</span></Link>
              <Link href="/contact" className={isActive('/contact')}><span>Contact</span></Link>

              {/* These links are already in the dropdown menus above, so removing duplicates */}
            </div>
          </nav>

          <div className={styles.headerActions}>
            <ScheduleButton
              type="button"
              className={styles.scheduleHeaderButton}
              aria-label="Schedule a 15-minute conversation with Dr. Jan Duffy"
            >
              Schedule
            </ScheduleButton>
            <a href={phone.telHref} className={styles.phoneButton}>
              <span className={styles.phoneIcon}>📞</span>
              <span className={styles.phoneNumber}>{phone.display}</span>
            </a>
            <button 
              className={styles.mobileMenuButton} 
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              aria-controls="primary-nav-links"
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