'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Experiences.module.css';

const experiences = [
  {
    id: 'shikara-journey',
    icon: '✦',
    title: 'Sunrise Shikara Journey',
    desc: 'Glide silently at dawn through the floating gardens and flower markets of Dal Lake. Watch Srinagar come alive in morning gold.',
    duration: '2–3 Hours',
    tags: ['Private', 'Guided', 'Photography'],
    image: '/shikara-sunset.png',
  },
  {
    id: 'wazwan-experience',
    icon: '✦',
    title: 'Royal Wazwan Feast',
    desc: 'Our master Waza chef prepares a 12-course Kashmiri royal banquet on your private deck. An ancient culinary art, yours alone.',
    duration: '3 Hours',
    tags: ['Exclusive', 'Cultural', 'Chef\'s Table'],
    image: '/wazwan-dining.png',
  },
  {
    id: 'valley-trek',
    icon: '✦',
    title: 'Himalayan Valley Trek',
    desc: 'Journey into Gulmarg or Sonamarg with your private mountain guide. Alpine meadows, glaciers, and silence that goes on forever.',
    duration: 'Full Day',
    tags: ['Adventure', 'Guided', 'Exclusive'],
    image: '/valley-experiences.png',
  },
];

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
        <div className="white-placeholder">
          <span className="white-placeholder-label">Experiences Background</span>
        </div>
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
              <div className="white-placeholder">
                <span className="white-placeholder-label">{exp.title}</span>
              </div>
              <div className={styles.expCardOverlay} />
            </div>

            <div className={styles.expCardContent}>
              <div className={styles.expIconRow}>
                <span className={styles.expIcon}>{exp.icon}</span>
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
