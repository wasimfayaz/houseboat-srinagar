'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Amenities.module.css';

const serviceColumns = [
  {
    title: 'Accommodation',
    items: [
      'Deluxe Rooms',
      'Super Deluxe Rooms',
      'Family Suites',
      'Honeymoon Suites',
      'Lake View Rooms',
      'Private Houseboat Booking'
    ]
  },
  {
    title: 'Food & Dining',
    items: [
      'Lunch & Dinner',
      'Traditional Kashmiri Wazwan',
      'Vegetarian & Non-Vegetarian Options',
      'Candlelight Dinner for Couples'
    ]
  },
  {
    title: 'Comfort & Hospitality',
    items: [
      'Free Wi-Fi',
      '24/7 Room Service',
      'Hot & Cold Water'
    ]
  }
];

export default function Amenities({ hideCta = false }: { hideCta?: boolean }) {
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
    <section className={styles.amenities} id="amenities" ref={sectionRef}>
      <div className={styles.amenitiesInner}>
        <div className={`${styles.amenitiesHeader} reveal`}>
          <span className="section-eyebrow">Our Services</span>
          <div className="section-divider" style={{ margin: '16px auto' }} />
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Crafted for <em style={{ fontStyle: 'italic', color: 'var(--color-accent-gold)' }}>Every Comfort</em>
          </h2>
          <p className={styles.amenitiesDesc}>
            Every service aboard a Nagin Nest houseboat is thoughtfully chosen to deepen your connection
            with Kashmir — not to replace it.
          </p>
        </div>

        <div className={styles.servicesContainer}>
          {serviceColumns.map((col, i) => (
            <div
              key={i}
              className={`${styles.serviceRow} reveal`}
              style={{ transitionDelay: `${i * 0.12}s` }}
              id={`service-row-${i}`}
            >
              <h3 className={styles.rowTitle}>{col.title}</h3>
              <div className={styles.itemsGrid}>
                {col.items.map((item, idx) => (
                  <div key={idx} className={styles.itemCard}>
                    <span className={styles.itemBullet}>✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!hideCta && (
          <div className={`${styles.amenitiesCta} reveal`}>
            <Link href="/amenities" className={styles.exploreBtn} id="explore-amenities-btn">
              Explore All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
