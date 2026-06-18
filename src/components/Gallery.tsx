'use client';

import { useEffect, useRef } from 'react';
import styles from './Gallery.module.css';

const galleryItems = [
  { src: '/hero-houseboat.png', alt: 'Luxury houseboat on Dal Lake at sunrise', span: 'large' },
  { src: '/interior-luxury.png', alt: 'Ornate carved interior of a Kashmiri houseboat', span: 'small' },
  { src: '/houseboat-deck.png', alt: 'Private deck with mountain views', span: 'small' },
  { src: '/shikara-sunset.png', alt: 'Shikara boat at golden sunset on Dal Lake', span: 'medium' },
  { src: '/wazwan-dining.png', alt: 'Traditional Kashmiri Wazwan feast', span: 'medium' },
  { src: '/valley-experiences.png', alt: 'Horseback trek through Himalayan meadows', span: 'small' },
  { src: '/dal-lake-aerial.png', alt: 'Aerial view of Dal Lake with houseboats', span: 'small' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.gallery} id="gallery" ref={sectionRef}>
      {/* Header */}
      <div className={`${styles.galleryHeader} reveal`}>
        <span className="section-number">06 / Visual Journey</span>
        <h2 className="section-title">
          A Glimpse Into <em style={{ fontStyle: 'italic', color: 'var(--color-accent-gold)' }}>Paradise</em>
        </h2>
      </div>

      {/* Mosaic Grid */}
      <div className={styles.mosaicGrid}>
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`${styles.mosaicItem} ${styles[`span-${item.span}`]} reveal`}
            style={{ transitionDelay: `${i * 0.1}s` }}
            id={`gallery-item-${i}`}
          >
            <div className="white-placeholder">
              <span className="white-placeholder-label">Gallery Image</span>
            </div>
            <div className={styles.mosaicOverlay}>
              <div className={styles.mosaicCaption}>{item.alt}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
