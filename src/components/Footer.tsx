'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  rooms: [
    { label: 'The Maharaja Suite', href: '/booking' },
    { label: 'The Mughal Room', href: '/booking' },
    { label: 'The Shalimar Room', href: '/booking' },
  ],
  experiences: [
    { label: 'Shikara Journeys', href: '/experiences/shikara-journey' },
    { label: 'Wazwan Feast', href: '/experiences/wazwan-experience' },
    { label: 'Himalayan Treks', href: '/experiences/valley-trek' },
    { label: 'All Experiences', href: '/experiences' },
  ],
  visit: [
    { label: 'How to Reach', href: '/visit/how-to-reach' },
    { label: 'Best Season', href: '/visit/best-season' },
    { label: 'Kashmir Guide', href: '/visit/guide' },
    { label: 'FAQs', href: '/visit/faq' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerTop}>
        {/* Brand Column */}
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <span className={styles.footerLogoIcon}>✦</span>
            <div>
              <div className={styles.footerLogoMain}>Nagin Nest</div>
              <div className={styles.footerLogoSub}>Luxury Houseboat · Kashmir</div>
            </div>
          </div>
          <p className={styles.footerTagline}>
            Where the Himalayas meet the water — a floating sanctuary of Kashmiri elegance,
            carrying five decades of heritage into every stay.
          </p>
          <div className={styles.footerContact}>
            <div className={styles.footerContactItem}>
              <span style={{ color: 'var(--color-accent-gold)', marginRight: '4px', fontWeight: 500 }}>T:</span>
              <span>+91 194 247 0000</span>
            </div>
            <div className={styles.footerContactItem}>
              <span style={{ color: 'var(--color-accent-gold)', marginRight: '4px', fontWeight: 500 }}>E:</span>
              <span>stay@naginnest.com</span>
            </div>
            <div className={styles.footerContactItem}>
              <span style={{ color: 'var(--color-accent-gold)', marginRight: '4px', fontWeight: 500 }}>A:</span>
              <span>Dal Gate, Srinagar, Kashmir 190001</span>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Link Columns */}
        <div className={styles.footerLinks}>
          <div className={styles.footerCol}>
            <h3 className={styles.footerColTitle}>Guest Rooms</h3>
            <ul className={styles.footerList}>
              {footerLinks.rooms.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3 className={styles.footerColTitle}>Experiences</h3>
            <ul className={styles.footerList}>
              {footerLinks.experiences.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3 className={styles.footerColTitle}>Plan Your Visit</h3>
            <ul className={styles.footerList}>
              {footerLinks.visit.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Book CTA */}
        <div className={styles.footerCta}>
          <div className={styles.footerCtaBox}>
            <h3 className={styles.footerCtaTitle}>
              Begin Your<br />Kashmir Story
            </h3>
            <p className={styles.footerCtaText}>
              Limited rooms available on board. Reserve your dates before they are claimed.
            </p>
            <Link href="/booking" className={styles.footerCtaBtn} id="footer-book-btn">
              Book Your Stay
            </Link>
            <div className={styles.footerCtaBadge}>
              <span>✦</span>
              <span>Best rate guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Nagin Nest Houseboats · Srinagar, Kashmir. All rights reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy" className={styles.footerBottomLink}>Privacy Policy</Link>
            <span className={styles.footerBottomDot}>·</span>
            <Link href="/terms" className={styles.footerBottomLink}>Terms of Service</Link>
            <span className={styles.footerBottomDot}>·</span>
            <Link href="/cookies" className={styles.footerBottomLink}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
