'use client';

import { useState } from 'react';
import styles from './TemplateBadge.module.css';

export default function TemplateBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Floating Badge */}
      {!isMinimized && (
        <div className={styles.badge} id="template-floating-badge">
          <button className={styles.minimizeBtn} onClick={() => setIsMinimized(true)} aria-label="Minimize badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div className={styles.badgeContent}>
            <span className={styles.goldStar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
            </span>
            <h5 className={styles.badgeTitle}>Purchase This Website</h5>
            <p className={styles.badgeDesc}>Purchase this website or request customization.</p>
            <button className={styles.viewDetailsBtn} onClick={openModal}>
              View Details
            </button>
          </div>
        </div>
      )}

      {/* Minimized Icon Badge */}
      {isMinimized && (
        <button 
          className={styles.restoreBtn} 
          onClick={() => setIsMinimized(false)}
          aria-label="Restore template notice"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
              <line x1="7" y1="7" x2="7.01" y2="7"/>
            </svg>
            Purchase This Website
        </button>
      )}

      {/* Premium Modal */}
      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={closeModal} aria-label="Close modal">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className={styles.modalHeader}>
              <span className={styles.modalStar}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
              </span>
              <h3 className={styles.modalTitle}>Purchase This Website Template</h3>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalText}>
                This is a premium website template available for purchase. All images, content, and property details 
                shown are demonstration placeholders. Upon purchase, the website can be customized with your branding, 
                photos, services, pricing, and business information. Additional features and modifications can also 
                be provided upon request.
              </p>
            </div>
            <div className={styles.modalFooter}>
              <a 
                href="https://wa.me/919596390069?text=Hi%20Wasim,%20I'm%20interested%20in%20purchasing%20or%20customizing%20the%20houseboat%20website%20template." 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.primaryBtn}
              >
                Contact Developer
              </a>
              <a 
                href="https://wa.me/919596390069?text=Hi%20Wasim,%20I'd%20like%20to%20request%20a%20demo%20or%20learn%20more%20about%20the%20customization%20options." 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.secondaryBtn}
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
