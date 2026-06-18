'use client';

import { useState, useEffect } from 'react';
import styles from './AnnouncementBanner.module.css';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only check localStorage and modify class on client side to avoid hydration mismatch
    const isDismissed = localStorage.getItem('announcement-dismissed');
    if (!isDismissed) {
      setIsVisible(true);
      document.body.classList.add('has-announcement');
    }
  }, []);

  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem('announcement-dismissed', 'true');
    document.body.classList.remove('has-announcement');
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner} id="announcement-banner">
      <div className={styles.bannerInner}>
        <a 
          href="https://wa.me/919596390069?text=Hi%20Wasim,%20I'm%20interested%20in%20purchasing%20or%20customizing%20the%20houseboat%20website%20template."
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.bannerLink}
        >
          <span className={styles.bannerText}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
              <line x1="7" y1="7" x2="7.01" y2="7"/>
            </svg>
            <strong>Purchase This Website</strong>: This is a premium website template. Customize or buy this site by contacting developer <strong>Wasim Pakhtoon</strong> on WhatsApp: <strong>+91 9596390069</strong>
          </span>
        </a>
        <button className={styles.closeBtn} onClick={dismissBanner} aria-label="Dismiss notice">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
