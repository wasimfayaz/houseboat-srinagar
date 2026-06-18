import styles from './WebsiteCTA.module.css';

export default function WebsiteCTA() {
  return (
    <section className={styles.section} id="website-cta" aria-label="Purchase this website">
      <div className={styles.inner}>
        {/* Icon */}
        <div className={styles.iconWrap} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <path d="M8 21h8M12 17v4"/>
          </svg>
        </div>

        <h2 className={styles.heading}>Interested in a Website Like This?</h2>
        <p className={styles.text}>
          This website can be customized with your branding, photos, services, pricing, and contact information.
        </p>
        <a
          href="https://wa.me/[WHATSAPP NUMBER]"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
          id="website-cta-learn-more"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4M12 16h.01"/>
          </svg>
          <span>Purchase This Website</span>
        </a>
      </div>
    </section>
  );
}
