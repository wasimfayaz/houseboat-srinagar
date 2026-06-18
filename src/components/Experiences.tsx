'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Experiences.module.css';

const experiences = [
  {
    id: 'shikara-journey',
    title: 'Sunrise Shikara Journey',
    desc: 'Glide silently at dawn through the floating gardens and flower markets of Dal Lake. Watch Srinagar come alive in morning gold.',
    duration: '2–3 Hours',
    tags: ['Private', 'Guided', 'Photography'],
    image: '/shikara-sunset.png',
  },
  {
    id: 'wazwan-experience',
    title: 'Royal Wazwan Feast',
    desc: 'Our master Waza chef prepares a 12-course Kashmiri royal banquet on your private deck. An ancient culinary art, yours alone.',
    duration: '3 Hours',
    tags: ['Exclusive', 'Cultural', 'Chef\'s Table'],
    image: '/wazwan-dining.png',
  },
  {
    id: 'valley-trek',
    title: 'Himalayan Valley Trek',
    desc: 'Journey into Gulmarg or Sonamarg with your private mountain guide. Alpine meadows, glaciers, and silence that goes on forever.',
    duration: 'Full Day',
    tags: ['Adventure', 'Guided', 'Exclusive'],
    image: '/valley-experiences.png',
  },
];

const getExperienceIcon = (id: string) => {
  switch (id) {
    case 'shikara-journey':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
          <path d="M2 17c3-1.5 5 1.5 10 0s7 1.5 10 0" strokeOpacity="0.4"/>
        </svg>
      );
    case 'wazwan-experience':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0-6 6v4h12V9a6 6 0 0 0-6-6z"/>
          <path d="M2 17h20v2H2z" strokeOpacity="0.4"/>
        </svg>
      );
    case 'valley-trek':
      default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 22h20L12 2z"/>
          <path d="M2 22l6-8 4 4 6-7 4 3" strokeOpacity="0.4"/>
        </svg>
      );
  }
};

export default function Experiences() {
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
    <section className={styles.experiences} id="experiences" ref={sectionRef}>
      {/* Background */}
      <div className={styles.expBg}>
        <img src="/dal-lake-aerial.png" alt="Dal Lake aerial view" className={styles.expBgImg} />
        <div className={styles.expBgOverlay} />
      </div>

      {/* Header */}
      <div className={styles.expHeader}>
        <div className={`${styles.expHeaderInner} reveal`}>
          <span className="section-number">05 / Experiences</span>
          <h2 className="section-title">
            Beyond the Houseboat
          </h2>
          <p className={styles.expSubtitle}>
            Kashmir is a world of wonders waiting to be discovered. Our team curates
            private, unhurried experiences that let you live the valley — not just visit it.
          </p>
        </div>
      </div>

      {/* Experience Cards */}
      <div className={styles.expGrid}>
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className={`${styles.expCard} reveal`}
            style={{ transitionDelay: `${i * 0.18}s` }}
            id={`experience-${exp.id}`}
          >
            <div className={styles.expCardImage}>
              <img src={exp.image} alt={exp.title} className={styles.cardImg} />
              <div className={styles.expCardOverlay} />
            </div>

            <div className={styles.expCardContent}>
              <div className={styles.expIconRow}>
                <span className={styles.expIcon}>{getExperienceIcon(exp.id)}</span>
                <span className={styles.expDuration}>{exp.duration}</span>
              </div>
              <h3 className={styles.expTitle}>{exp.title}</h3>
              <p className={styles.expDesc}>{exp.desc}</p>
              <div className={styles.expTags}>
                {exp.tags.map((tag, ti) => (
                  <span key={ti} className={styles.expTag}>{tag}</span>
                ))}
              </div>
              <Link href={`/experiences/${exp.id}`} className={styles.expLearnMore}>
                <span>Discover</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className={`${styles.expCta} reveal`}>
        <p className={styles.expCtaText}>Each experience is fully private and tailored to your travel style.</p>
        <Link href="/experiences" className={styles.expCtaBtn} id="explore-all-experiences">
          <span>See All Experiences</span>
        </Link>
      </div>
    </section>
  );
}
