'use client';

import { useEffect, useRef } from 'react';
import styles from './Cuisine.module.css';

const dishes = [
  {
    name: 'Rogan Josh',
    desc: 'Slow-cooked lamb in Kashmiri spices — saffron, fennel, cardamom. A Mughal masterwork.',
  },
  {
    name: 'Gushtaba',
    desc: 'Delicate meatballs in a creamy yogurt sauce — the final, celebratory dish of every Wazwan feast.',
  },
  {
    name: 'Kashmiri Kahwa',
    desc: 'Saffron-steeped green tea with crushed almonds and cardamom. Served in a traditional samovar.',
  },
  {
    name: 'Haak Saag',
    desc: 'Wild Kashmiri greens cooked with mustard oil and whole spices. Pure, clean, and unforgettable.',
  },
];

export default function Cuisine() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.cuisine} id="cuisine" ref={sectionRef}>
      <div className={styles.cuisineInner}>
        {/* Left: Image */}
        <div className={`${styles.cuisineImageWrap} reveal-left`}>
          <div className={styles.cuisineImage}>
            <img 
              src="/wazwan-dining.png" 
              alt="Traditional Kashmiri Wazwan Feast" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div className={styles.cuisineImageOverlay} />
          </div>
          <div className={styles.cuisineFloatCard}>
            <div className={styles.cuisineFloatIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                <path d="M7 2v20"/>
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
              </svg>
            </div>
            <div>
              <div className={styles.cuisineFloatTitle}>Wazwan Heritage</div>
              <div className={styles.cuisineFloatText}>Over 30 dishes · Cooked over wood fire · Served on hand-beaten copper</div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className={`${styles.cuisineContent} reveal-right`}>
          <span className="section-number">04 / Dining</span>
          <h2 className={`section-title ${styles.cuisineTitle}`}>
            The Wazwan — <br />
            <em>Kashmir's Ancient Feast</em>
          </h2>
          <p className={styles.cuisineDesc}>
            Dating back to the 15th century, the Wazwan is Kashmir's greatest culinary gift to the world.
            A multi-course banquet once reserved for royalty and grand celebrations, it is now prepared
            exclusively for our guests by our master Waza chef — a tradition keeper of the highest order.
          </p>

          <div className={styles.dishGrid}>
            {dishes.map((dish, i) => {
              const romanNumerals = ['I', 'II', 'III', 'IV'];
              return (
                <div
                  key={i}
                  className={`${styles.dishCard} reveal`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className={styles.dishHeader}>
                    <span className={styles.dishNumber}>{romanNumerals[i]} &nbsp;·&nbsp;</span>
                    <h4 className={styles.dishName}>{dish.name}</h4>
                  </div>
                  <p className={styles.dishDesc}>{dish.desc}</p>
                </div>
              );
            })}
          </div>

          <div className={styles.cuisineNote}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0 }}>
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            All meals are freshly prepared · Dietary needs accommodated · Private dining available
          </div>
        </div>
      </div>
    </section>
  );
}
