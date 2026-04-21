'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from '@/styles/Home.module.css';
import { phone } from '@/lib/site-contact';
import ScheduleButton from '@/components/ScheduleButton';
import { realScoutHomeSearchUrl } from '@/lib/realscout-config';

const MOBILE_NAV_MAX_PX = 768;

const NAV_PANEL = {
  properties: 'nav-disclosure-properties',
  community: 'nav-disclosure-community',
  location: 'nav-disclosure-location',
  about: 'nav-disclosure-about',
} as const;

type DropdownKey = keyof typeof NAV_PANEL;

export type NavMenuItem = {
  href: string;
  pathKey: string;
  label: string;
};

type NavDisclosureProps = {
  disclosureId: DropdownKey;
  label: string;
  paths: string[];
  isOpen: boolean;
  /** Opens this dropdown (desktop); used with ArrowDown/ArrowUp from the trigger. */
  onOpen: () => void;
  onToggle: () => void;
  isDropdownActive: (paths: string[]) => string;
  isDropdownItemActive: (path: string) => string;
  items: NavMenuItem[];
  /** Mobile full-screen nav: submenus are always visible; use simpler focus (no blur-close). */
  forceExpanded: boolean;
  onNavActivate: () => void;
  onClose: () => void;
};

function NavDisclosure({
  disclosureId,
  label,
  paths,
  isOpen,
  onOpen,
  onToggle,
  isDropdownActive,
  isDropdownItemActive,
  items,
  forceExpanded,
  onNavActivate,
  onClose,
}: NavDisclosureProps) {
  const panelId = NAV_PANEL[disclosureId];
  const btnId = `${panelId}-toggle`;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pendingFocusLastRef = useRef(false);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const effectiveOpen = isOpen || forceExpanded;
  const expandedAttr: 'true' | 'false' = effectiveOpen ? 'true' : 'false';
  const dataOpenAttr: 'true' | 'false' = effectiveOpen ? 'true' : 'false';
  const useRovingMenu = effectiveOpen && !forceExpanded;

  const focusMenuitem = useCallback((index: number) => {
    const n = items.length;
    if (n === 0) return;
    const idx = ((index % n) + n) % n;
    activeIndexRef.current = idx;
    setActiveIndex(idx);
    requestAnimationFrame(() => {
      const list = menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]');
      list?.[idx]?.focus();
    });
  }, [items.length]);

  useEffect(() => {
    if (!isOpen || forceExpanded) return;
    const idx = pendingFocusLastRef.current ? items.length - 1 : 0;
    pendingFocusLastRef.current = false;
    activeIndexRef.current = idx;
    setActiveIndex(idx);
    const id = requestAnimationFrame(() => {
      const list = menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]');
      list?.[idx]?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [isOpen, forceExpanded, items.length]);

  useEffect(() => {
    if (!isOpen || forceExpanded) return;
    const onCap = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      const menu = menuRef.current;
      if (!menu?.contains(document.activeElement)) return;
      e.preventDefault();
      e.stopPropagation();
      onClose();
      buttonRef.current?.focus();
    };
    document.addEventListener('keydown', onCap, true);
    return () => document.removeEventListener('keydown', onCap, true);
  }, [isOpen, forceExpanded, onClose]);

  const onMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!useRovingMenu) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        focusMenuitem(activeIndexRef.current + 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusMenuitem(activeIndexRef.current - 1);
        break;
      case 'Home':
        e.preventDefault();
        focusMenuitem(0);
        break;
      case 'End':
        e.preventDefault();
        focusMenuitem(items.length - 1);
        break;
      default:
        break;
    }
  };

  const onMenuBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!isOpen || forceExpanded) return;
    const next = e.relatedTarget;
    if (next instanceof Node && menuRef.current?.contains(next)) return;
    if (next instanceof Node && buttonRef.current?.contains(next)) return;
    onClose();
  };

  const onButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (forceExpanded) return;
    if (e.key === 'ArrowDown' && !isOpen) {
      e.preventDefault();
      pendingFocusLastRef.current = false;
      onOpen();
      return;
    }
    if (e.key === 'ArrowUp' && !isOpen) {
      e.preventDefault();
      pendingFocusLastRef.current = true;
      onOpen();
    }
  };

  return (
    <div
      className={styles.navDropdown}
      data-dropdown-root={disclosureId}
      data-open={dataOpenAttr}
    >
      <button
        ref={buttonRef}
        type="button"
        id={btnId}
        className={isDropdownActive(paths)}
        aria-expanded={expandedAttr}
        aria-controls={panelId}
        aria-haspopup="menu"
        onClick={onToggle}
        onKeyDown={onButtonKeyDown}
      >
        {label}{' '}
        <span className={styles.chevronIcon} aria-hidden="true">
          ▼
        </span>
      </button>
      <div
        ref={menuRef}
        id={panelId}
        className={styles.dropdownContent}
        role="menu"
        aria-labelledby={btnId}
        onKeyDown={onMenuKeyDown}
        onBlur={onMenuBlur}
      >
        {items.map((item, i) => {
          const isExternal = /^https?:\/\//i.test(item.href);
          const className = isDropdownItemActive(item.pathKey);
          const rovingProps = {
            role: 'menuitem' as const,
            className,
            tabIndex: useRovingMenu ? (i === activeIndex ? 0 : -1) : 0,
            onClick: onNavActivate,
            onFocus: () => {
              if (useRovingMenu) {
                activeIndexRef.current = i;
                setActiveIndex(i);
              }
            },
          };
          return isExternal ? (
            <a
              key={`${item.href}-${item.label}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              {...rovingProps}
            >
              {item.label}
            </a>
          ) : (
            <Link key={item.href} href={item.href} {...rovingProps}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname() ?? '';
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navPanelRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<DropdownKey | null>(null);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const closeDropdown = useCallback(() => {
    setOpenDropdownId(null);
  }, []);

  const onNavActivate = useCallback(() => {
    setOpenDropdownId(null);
    closeMobileMenu();
  }, [closeMobileMenu]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((open) => {
      const next = !open;
      if (next) setOpenDropdownId(null);
      return next;
    });
  }, []);

  const toggleDropdown = useCallback((id: DropdownKey) => {
    setOpenDropdownId((cur) => (cur === id ? null : id));
  }, []);

  const openDropdown = useCallback((id: DropdownKey) => {
    setOpenDropdownId(id);
  }, []);

  const mobileMenuExpanded: 'true' | 'false' = isMobileMenuOpen ? 'true' : 'false';

  useEffect(() => {
    queueMicrotask(() => {
      closeMobileMenu();
      setOpenDropdownId(null);
    });
  }, [pathname, closeMobileMenu]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (isMobileMenuOpen) {
        e.preventDefault();
        closeMobileMenu();
        menuButtonRef.current?.focus();
        return;
      }
      if (openDropdownId) {
        e.preventDefault();
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen, openDropdownId, closeMobileMenu]);

  useEffect(() => {
    if (!openDropdownId) return;
    const onDocMouseDown = (e: MouseEvent) => {
      const root = document.querySelector(`[data-dropdown-root="${openDropdownId}"]`);
      if (root && e.target instanceof Node && !root.contains(e.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, [openDropdownId]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    if (typeof window === 'undefined' || window.innerWidth > MOBILE_NAV_MAX_PX) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen || !navPanelRef.current) return;
    if (typeof window !== 'undefined' && window.innerWidth > MOBILE_NAV_MAX_PX) return;
    const firstFocusable = navPanelRef.current.querySelector<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const id = window.requestAnimationFrame(() => firstFocusable?.focus());
    return () => window.cancelAnimationFrame(id);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_NAV_MAX_PX && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      if (window.innerWidth <= MOBILE_NAV_MAX_PX) {
        setOpenDropdownId(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const isActive = (path: string) =>
    pathname === path ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;

  const isDropdownActive = (paths: string[]) =>
    paths.some((p) => pathname === p || pathname.startsWith(`${p}/`))
      ? `${styles.dropdownButton} ${styles.activeLink}`
      : styles.dropdownButton;

  const isDropdownItemActive = (path: string) =>
    pathname === path ? `${styles.dropdownItem} ${styles.activeLink}` : styles.dropdownItem;

  return (
    <header className={styles.siteNav} data-app-header>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logoHomeLink} aria-label="Sun City Summerlin — Home">
          <div className={styles.logoContainer}>
            <div className={styles.logoText}>
              <p className={styles.logo}>Sun City Summerlin</p>
              <div className={styles.subLogoContainer}>
                <Image
                  src="/bhhs-quality-seal-black.png"
                  alt=""
                  width={34}
                  height={34}
                  className={styles.headerLogo}
                  sizes="34px"
                />
                <p className={styles.subLogo}>Dr. Jan Duffy, REALTOR® | 55+ Specialist</p>
              </div>
            </div>
          </div>
        </Link>

        <div className={styles.headerRight}>
          <nav className={styles.nav} aria-label="Primary navigation">
            <div
              ref={navPanelRef}
              id="primary-nav-links"
              className={
                isMobileMenuOpen ? `${styles.navLinks} ${styles.navLinksActive}` : styles.navLinks
              }
            >
              <Link href="/" className={isActive('/')} onClick={onNavActivate}>
                <span>Home</span>
              </Link>

              <NavDisclosure
                disclosureId="properties"
                label="Properties"
                paths={['/properties', '/search']}
                isOpen={openDropdownId === 'properties'}
                onOpen={() => openDropdown('properties')}
                onToggle={() => toggleDropdown('properties')}
                isDropdownActive={isDropdownActive}
                isDropdownItemActive={isDropdownItemActive}
                forceExpanded={isMobileMenuOpen}
                onNavActivate={onNavActivate}
                onClose={closeDropdown}
                items={[
                  { href: '/properties', pathKey: '/properties', label: 'Featured Listings' },
                  { href: realScoutHomeSearchUrl, pathKey: '/search', label: 'Search Properties' },
                  { href: realScoutHomeSearchUrl, pathKey: '/search', label: 'Golf Course Homes' },
                  { href: realScoutHomeSearchUrl, pathKey: '/search', label: 'New Listings' },
                ]}
              />

              <Link href="/services" className={isActive('/services')} onClick={onNavActivate}>
                <span>Services</span>
              </Link>

              <NavDisclosure
                disclosureId="community"
                label="Community"
                paths={['/community', '/lifestyle', '/amenities']}
                isOpen={openDropdownId === 'community'}
                onOpen={() => openDropdown('community')}
                onToggle={() => toggleDropdown('community')}
                isDropdownActive={isDropdownActive}
                isDropdownItemActive={isDropdownItemActive}
                forceExpanded={isMobileMenuOpen}
                onNavActivate={onNavActivate}
                onClose={closeDropdown}
                items={[
                  { href: '/community', pathKey: '/community', label: 'About Sun City' },
                  { href: '/lifestyle', pathKey: '/lifestyle', label: 'Lifestyle' },
                  { href: '/amenities', pathKey: '/amenities', label: 'Amenities' },
                  { href: '/map', pathKey: '/map', label: 'Map' },
                ]}
              />

              <NavDisclosure
                disclosureId="location"
                label="Location"
                paths={['/zipcodes']}
                isOpen={openDropdownId === 'location'}
                onOpen={() => openDropdown('location')}
                onToggle={() => toggleDropdown('location')}
                isDropdownActive={isDropdownActive}
                isDropdownItemActive={isDropdownItemActive}
                forceExpanded={isMobileMenuOpen}
                onNavActivate={onNavActivate}
                onClose={closeDropdown}
                items={[
                  { href: '/zipcodes', pathKey: '/zipcodes', label: 'Zip Codes' },
                  { href: '/zipcodes/89134', pathKey: '/zipcodes/89134', label: '89134 Area' },
                  { href: '/zipcodes/89144', pathKey: '/zipcodes/89144', label: '89144 Area' },
                ]}
              />

              <Link href="/neighborhoods" className={isActive('/neighborhoods')} onClick={onNavActivate}>
                <span>Neighborhoods</span>
              </Link>

              <NavDisclosure
                disclosureId="about"
                label="About"
                paths={['/about', '/faq', '/service-area']}
                isOpen={openDropdownId === 'about'}
                onOpen={() => openDropdown('about')}
                onToggle={() => toggleDropdown('about')}
                isDropdownActive={isDropdownActive}
                isDropdownItemActive={isDropdownItemActive}
                forceExpanded={isMobileMenuOpen}
                onNavActivate={onNavActivate}
                onClose={closeDropdown}
                items={[
                  { href: '/about', pathKey: '/about', label: 'About Dr. Jan' },
                  { href: '/faq', pathKey: '/faq', label: 'FAQ' },
                  { href: '/service-area', pathKey: '/service-area', label: 'Service area' },
                ]}
              />

              <Link href="/blog" className={isActive('/blog')} onClick={onNavActivate}>
                <span>Blog</span>
              </Link>
              <Link href="/market-report" className={isActive('/market-report')} onClick={onNavActivate}>
                <span>Market</span>
              </Link>
              <Link href="/guides" className={isActive('/guides')} onClick={onNavActivate}>
                <span>Guides</span>
              </Link>
              <Link href="/estate-collection" className={isActive('/estate-collection')} onClick={onNavActivate}>
                <span>Estates</span>
              </Link>
              <Link href="/testimonials" className={isActive('/testimonials')} onClick={onNavActivate}>
                <span>Testimonials</span>
              </Link>
              <Link href="/contact" className={isActive('/contact')} onClick={onNavActivate}>
                <span>Contact</span>
              </Link>
            </div>
          </nav>

          <div className={styles.headerActions}>
            <ScheduleButton
              type="button"
              className={styles.scheduleHeaderButton}
              aria-label="Schedule a 15-minute conversation with Dr. Jan Duffy"
              onClick={closeDropdown}
            >
              Schedule
            </ScheduleButton>
            <a href={phone.telHref} className={styles.phoneButton} onClick={closeDropdown}>
              <span className={styles.phoneIcon} aria-hidden="true">
                📞
              </span>
              <span className={styles.phoneNumber}>{phone.display}</span>
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className={styles.mobileMenuButton}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuExpanded}
              aria-controls="primary-nav-links"
              onClick={toggleMobileMenu}
            >
              <span className={isMobileMenuOpen ? styles.mobileButtonActive : ''} />
              <span className={isMobileMenuOpen ? styles.mobileButtonActive : ''} />
              <span className={isMobileMenuOpen ? styles.mobileButtonActive : ''} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
