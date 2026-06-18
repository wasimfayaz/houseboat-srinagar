'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Houseboats.module.css';

const rooms = [
  {
    id: 'maharaja-suite',
    name: 'The Maharaja Suite',
    category: 'Grand Heritage Suite',
    tagline: 'The crown jewel room of Nagin Nest',
    price: '₹18,500',
    unit: '/ night',
    features: ['King Bed', 'Private Deck', 'Heritage Bath', 'Butler Call'],
    badge: 'Most Popular',
  },
  {
    id: 'mughal-room',
    name: 'The Mughal Room',
    category: 'Classic Heritage Room',
    tagline: 'Traditional carved cedar, warm comforts',
    price: '₹12,000',
    unit: '/ night',
    features: ['Queen Bed', 'Carved Cedar Wood', 'Attached Bath', 'Lake View'],
    badge: null,
  },
  {
    id: 'shalimar-room',
    name: 'The Shalimar Room',
    category: 'Deluxe Couple Sanctuary',
    tagline: 'A romantic, cozy lakeside escape',
    price: '₹9,800',
    unit: '/ night',
    features: ['Double Bed', 'Sunset Balcony', 'Attached Bath', 'Cozy Seating'],
    badge: 'Romantic',
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
            Nagin Nest is a single, custom-designed heritage houseboat. With only three private en-suite 
            guest rooms on board, we ensure absolute tranquility and personal attention.
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
              <div className="white-placeholder">
                <span className="white-placeholder-label">{room.name}</span>
              </div>
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
