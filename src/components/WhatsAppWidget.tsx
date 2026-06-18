'use client';

import styles from './WhatsAppWidget.module.css';

export default function WhatsAppWidget() {
  return (
    <a 
      href="https://wa.me/919596390069?text=Hi%20Wasim,%20I'm%20interested%20in%20purchasing%20or%20customizing%20the%20houseboat%20website%20template."
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.widget}
      id="whatsapp-floating-widget"
      aria-label="Contact developer on WhatsApp"
    >
      <div className={styles.widgetContent}>
        <div className={styles.iconWrapper}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </div>
        <span className={styles.widgetText}>Buy Template &amp; Customize
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </a>
  );
}
