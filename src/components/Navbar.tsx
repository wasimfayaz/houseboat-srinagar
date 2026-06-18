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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-accent-gold)' }}>
                <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" strokeOpacity="0.4"/>
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
