'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  rooms: [
    { label: 'Maharaja Suite', href: '/booking' },
    { label: 'Royal Mughal Room', href: '/booking' },
    { label: 'Shalimar Suite', href: '/booking' },
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
            <span className={styles.footerLogoIcon}>
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
            <div>
              <div className={styles.footerLogoMain}>Houseboat Name</div>
              <div className={styles.footerLogoSub}>Houseboat Tagline</div>
            </div>
          </div>
          <p className={styles.footerTagline}>
            Houseboat Name — Houseboat Tagline. A floating heritage experience where
            every stay is personal, private, and unforgettable.
          </p>
          <div className={styles.footerContact}>
            <div className={styles.footerContactItem}>
              <span style={{ color: 'var(--color-accent-gold)', marginRight: '4px', fontWeight: 500 }}>T:</span>
              <span>Phone Number</span>
            </div>
            <div className={styles.footerContactItem}>
              <span style={{ color: 'var(--color-accent-gold)', marginRight: '4px', fontWeight: 500 }}>E:</span>
              <span>Email Address</span>
            </div>
            <div className={styles.footerContactItem}>
              <span style={{ color: 'var(--color-accent-gold)', marginRight: '4px', fontWeight: 500 }}>A:</span>
              <span>Address, Location</span>
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
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Best rate guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Template Announcement Banner */}
      <div className={styles.templateNotice}>
        <div className={styles.templateNoticeInner}>
          <div>
            <div className={styles.templateNoticeHeader}>
              <span className={styles.templateNoticeBadge}>Announcement</span>
              <h4 className={styles.templateNoticeTitle}>Template Available for Purchase</h4>
            </div>
            <p className={styles.templateNoticeText}>
              This website is a premium template designed for luxury houseboats, hotels, and boutique stays. 
              All photos, descriptions, guest rooms, and rates are customizable placeholders.
            </p>
            <p className={styles.templateNoticeText}>
              Designed & developed by <strong>Wasim Pakhtoon</strong>. Contact for purchase, custom branding, or complete website setup.
            </p>
          </div>
          <div className={styles.templateNoticeActions}>
            <a 
              href="https://wa.me/919596390069?text=Hi%20Wasim,%20I'm%20interested%20in%20purchasing%20or%20customizing%20the%20houseboat%20website%20template." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.templateNoticeBtn}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              WhatsApp Wasim
            </a>
          </div>
        </div>
      </div>

      {/* Template Preview Note */}
      <div className={styles.templatePreviewNote}>
        <span className={styles.templatePreviewText}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle', flexShrink: 0, opacity: 0.6 }}>
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Template Preview &mdash; All names, images, contact details, descriptions, and business information shown are placeholders for demonstration purposes. Upon purchase, all content will be replaced with your actual business details.
        </span>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} [YOUR HOUSEBOAT NAME] · [LOCATION]. All rights reserved.
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
