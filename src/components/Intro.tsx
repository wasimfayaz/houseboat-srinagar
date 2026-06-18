'use client';

import { useEffect, useRef } from 'react';
import styles from './Intro.module.css';

const pillars = [
  {
    icon: '✦',
    title: 'Century-Old Craft',
    desc: 'Every houseboat is hand-carved by master artisans whose families have perfected Kashmiri deodar woodwork for generations.',
  },
  {
    icon: '✦',
    title: 'Pure Dal Air',
    desc: 'Wake to mist over the Himalayas. Breathe crisp mountain air as morning light dances on the glassy water below your window.',
  },
  {
    icon: '✦',
    title: 'Royal Wazwan Table',
    desc: 'Feast on a private multi-course Wazwan — Kashmir\'s ancient royal banquet tradition — curated by our master Waza chef.',
  },
  {
    icon: '✦',
    title: 'Shikara at Your Door',
    desc: 'Your personal shikara and guide are always ready — for floating gardens, flower markets, or a moonlit glide across the lake.',
  },
];

export default function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.intro} ref={sectionRef} id="about">
      {/* Top intro text */}
      <div className={styles.introTop}>
        <div className={`${styles.introTopInner} reveal`}>
          <span className="section-number">01 / Philosophy</span>
          <h2 className={`section-title ${styles.introTitle}`}>
            A Living Palace on Kashmir's<br />
            <em>Most Sacred Waters</em>
          </h2>
          <p className={styles.introText}>
            Nagin Nest is not a hotel — it is an exclusively crafted floating heritage home,
            a masterpiece of cedar and walnut carved by master craftsmen who learned their art
            from their fathers, and their fathers before them. Here, time slows. The mountains listen.
            And the lake holds you as its most honoured guest.
          </p>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className={styles.pillarsSection}>
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`${styles.pillar} reveal`}
              style={{ transitionDelay: `${i * 0.12}s` }}
              id={`pillar-${i}`}
            >
              <div className={styles.pillarIcon}>{pillar.icon}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Split Feature */}
      <div className={styles.splitFeature}>
        <div className={`${styles.splitImage} reveal-left`}>
          <div className="white-placeholder">
            <span className="white-placeholder-label">Dal Lake Aerial View</span>
          </div>
          <div className={styles.splitImageOverlay} />
          <div className={styles.splitImageTag}>
            <span>Dal Lake, Srinagar</span>
            <span>1,700m above sea level</span>
          </div>
        </div>

        <div className={`${styles.splitContent} reveal-right`}>
          <span className="section-number">02 / Heritage</span>
          <h2 className={`section-title ${styles.splitTitle}`}>
            5,000 Years of Floating Culture
          </h2>
          <p className={styles.splitText}>
            Dal Lake has cradled Kashmiri civilisation since ancient times. Mughal emperors
            declared it "Paradise on Earth." British officers, smitten by its beauty but barred from
            owning land, commissioned the first houseboats in the 1880s — and thus began a tradition
            that now lives on in our care.
          </p>
          <p className={styles.splitText}>
            Each Nagin Nest houseboat is individually registered, insured, and maintained to the
            highest standards — preserving authentic craftsmanship while delivering every modern luxury.
          </p>
          <div className={styles.splitFeatures}>
            {['Hand-carved deodar cedar interiors', 'Private sun deck with mountain views', '24-hour personal butler', 'Curated shikara experiences'].map((f, i) => (
              <div key={i} className={styles.splitFeatureItem}>
                <span className={styles.checkmark}>✦</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
