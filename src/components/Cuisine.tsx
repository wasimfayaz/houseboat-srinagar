'use client';

import { useEffect, useRef } from 'react';
import styles from './Cuisine.module.css';

const dishes = [
  {
    name: 'Rogan Josh',
    desc: 'Slow-cooked lamb in Kashmiri spices — saffron, fennel, cardamom. A Mughal masterwork.',
    emoji: '🍖',
  },
  {
    name: 'Gushtaba',
    desc: 'Delicate meatballs in a creamy yogurt sauce — the final, celebratory dish of every Wazwan feast.',
    emoji: '🥣',
  },
  {
    name: 'Kashmiri Kahwa',
    desc: 'Saffron-steeped green tea with crushed almonds and cardamom. Served in a traditional samovar.',
    emoji: '🍵',
  },
  {
    name: 'Haak Saag',
    desc: 'Wild Kashmiri greens cooked with mustard oil and whole spices. Pure, clean, and unforgettable.',
    emoji: '🥬',
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
            <div className="white-placeholder">
              <span className="white-placeholder-label">Wazwan Cuisine</span>
            </div>
            <div className={styles.cuisineImageOverlay} />
          </div>
          <div className={styles.cuisineFloatCard}>
            <div className={styles.cuisineFloatIcon}>✦</div>
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
            ✦ All meals are freshly prepared · Dietary needs accommodated · Private dining available
          </div>
        </div>
      </div>
    </section>
  );
}
