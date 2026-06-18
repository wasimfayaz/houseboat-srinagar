import styles from './MobileStats.module.css';

export default function MobileStats() {
  return (
    <section className={styles.mobileStats} id="mobile-stats" aria-label="Key statistics">
      <div className={styles.grid}>
        <div className={styles.stat}>
          <span className={styles.num}>Years</span>
          <span className={styles.label}>Years of Heritage</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.num}>Guests+</span>
          <span className={styles.label}>Happy Guests</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.num}>
            Rating
            <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--color-accent-gold)" stroke="none" style={{ flexShrink: 0 }}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </span>
          <span className={styles.label}>Guest Rating</span>
        </div>
      </div>
    </section>
  );
}
