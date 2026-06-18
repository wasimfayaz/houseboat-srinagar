'use client';

import { useEffect, useRef } from 'react';
import styles from './Intro.module.css';

const pillars = [
  {
    title: 'Century-Old Craft',
    desc: 'Every houseboat is hand-carved by master artisans whose families have perfected Kashmiri deodar woodwork for generations.',
  },
  {
    title: 'Pure Dal Air',
    desc: 'Wake to mist over the Himalayas. Breathe crisp mountain air as morning light dances on the glassy water below your window.',
  },
  {
    title: 'Royal Wazwan Table',
    desc: 'Feast on a private multi-course Wazwan — Kashmir\'s ancient royal banquet tradition — curated by our master Waza chef.',
  },
  {
    title: 'Shikara at Your Door',
    desc: 'Your personal shikara and guide are always ready — for floating gardens, flower markets, or a moonlit glide across the lake.',
  },
];

const getPillarIcon = (index: number) => {
  switch (index) {
    case 0: // Century-Old Craft
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case 1: // Pure Dal Air
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 18a5 5 0 0 0-10 0" strokeOpacity="0.3" />
          <path d="M12 2L2 9h3v11h14V9h3L12 2z" />
        </svg>
      );
    case 2: // Royal Wazwan Table
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" fill="var(--color-accent-gold)" fillOpacity="0.1" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeOpacity="0.3" />
        </svg>
      );
    case 3: // Shikara at Your Door
      default:
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12H2M3 12l3 7h12l3-7M12 2v10" />
          <path d="M9 5l3-3 3 3" strokeOpacity="0.3" />
        </svg>
      );
  }
};

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
            [YOUR HOUSEBOAT NAME] is not just a hotel — it is an exclusively crafted floating heritage home,
            a masterpiece of cedar and walnut carved by master craftsmen who have refined their art
            over generations. Here, time slows. The mountains listen.
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
              <div className={styles.pillarIcon}>{getPillarIcon(i)}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
