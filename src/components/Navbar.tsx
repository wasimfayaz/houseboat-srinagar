'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/dining', label: 'Dining' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const showSolid = !isHome || scrolled;

  return (
    <>
      <header className={`${styles.navbar} ${showSolid ? styles.scrolled : ''}`}>
        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}>
                <path d="M2 20c3-1.5 5-1.5 8 0s5 1.5 8 0 4-1.5 6 0" />
                <path d="M3 14h18l-2 3.5H5L3 14z" fill="currentColor" fillOpacity="0.1" />
                <path d="M5 14v-5h12v5" />
                <path d="M4 9l6.5-3.5 6.5 3.5" />
                <rect x="7" y="10.5" width="2.5" height="3" rx="0.3" />
                <circle cx="13.5" cy="11.5" r="1" />
                <line x1="19.5" y1="14" x2="19.5" y2="8.5" />
                <path d="M19.5 8.5l2.5 1.25-2.5 1.25" />
              </svg>
            </span>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>Houseboat Name</span>
              <span className={styles.logoSub}>Houseboat Tagline</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className={styles.navRight}>
            <Link href="/booking" className={styles.bookBtn} id="navbar-book-btn">
              <span>Book Your Stay</span>
            </Link>
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              id="hamburger-btn"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booking" className={styles.mobileBookBtn} onClick={() => setMenuOpen(false)}>
            Book Your Stay
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
