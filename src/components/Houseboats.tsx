'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Houseboats.module.css';

const rooms = [
  {
    id: 'room-1',
    name: '[ROOM NAME 1]',
    category: '[ROOM CATEGORY]',
    tagline: '[ROOM TAGLINE OR SHORT DESCRIPTION]',
    price: '[PRICE]',
    unit: '/ night',
    features: ['[Feature 1]', '[Feature 2]', '[Feature 3]', '[Feature 4]'],
    badge: 'Most Popular',
    image: '/maharaja-suite.png',
  },
  {
    id: 'room-2',
    name: '[ROOM NAME 2]',
    category: '[ROOM CATEGORY]',
    tagline: '[ROOM TAGLINE OR SHORT DESCRIPTION]',
    price: '[PRICE]',
    unit: '/ night',
    features: ['[Feature 1]', '[Feature 2]', '[Feature 3]', '[Feature 4]'],
    badge: null,
    image: '/mughal-room.png',
  },
  {
    id: 'room-3',
    name: '[ROOM NAME 3]',
    category: '[ROOM CATEGORY]',
    tagline: '[ROOM TAGLINE OR SHORT DESCRIPTION]',
    price: '[PRICE]',
    unit: '/ night',
    features: ['[Feature 1]', '[Feature 2]', '[Feature 3]', '[Feature 4]'],
    badge: 'Romantic',
    image: '/shalimar-room.png',
  },
];

export default function Houseboats() {
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
    <section className={styles.houseboats} id="houseboats" ref={sectionRef}>
      <div className={styles.hbTop}>
        <div className={`${styles.hbTopLeft} reveal-left`}>
          <span className="section-number">03 / Guest Rooms</span>
          <h2 className={`section-title ${styles.hbTitle}`}>
            Exquisite <em>Guest Rooms</em>
          </h2>
        </div>
        <div className={`${styles.hbTopRight} reveal-right`}>
          <p className={styles.hbDesc}>
            [YOUR HOUSEBOAT NAME] features [NUMBER] exclusive guest rooms on board, each thoughtfully designed
            to offer privacy, heritage craftsmanship, and breathtaking lake views.
          </p>
          <Link href="/booking" className={styles.viewAll} id="view-all-houseboats">
            <span>Book Your Stay</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      <div className={styles.hbGrid}>
        {rooms.map((room, i) => (
          <div
            key={room.id}
            className={`${styles.hbCard} reveal`}
            style={{ transitionDelay: `${i * 0.15}s` }}
            id={`houseboat-card-${room.id}`}
          >
            {/* Image */}
            <div className={styles.hbCardImage}>
              <img 
                src={room.image} 
                alt={room.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div className={styles.hbImageOverlay} />
              {room.badge && (
                <div className={styles.hbBadge}>{room.badge}</div>
              )}
              <div className={styles.hbCardPrice}>
                <span className={styles.priceNum}>{room.price}</span>
                <span className={styles.priceUnit}>{room.unit}</span>
              </div>
            </div>

            {/* Content */}
            <div className={styles.hbCardContent}>
              <span className={styles.hbCategory}>{room.category}</span>
              <h3 className={styles.hbName}>{room.name}</h3>
              <p className={styles.hbTagline}>{room.tagline}</p>

              <div className={styles.hbFeatures}>
                {room.features.map((f, fi) => (
                  <span key={fi} className={styles.hbFeature}>
                    {f}
                  </span>
                ))}
              </div>

              <div className={styles.hbCardActions}>
                <Link href={`/booking?room=${encodeURIComponent(room.name)}`} className={styles.hbDetails}>
                  Room Details
                </Link>
                <Link href={`/booking?room=${encodeURIComponent(room.name)}`} className={styles.hbBook} id={`book-${room.id}`}>
                  Book Room
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
