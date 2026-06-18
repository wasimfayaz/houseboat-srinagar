'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Guest Name',
    location: 'Guest Location',
    rating: 5,
    text: 'An absolutely magical stay. The handcrafted wood interiors and the stunning view of the lake from our private deck were breathtaking. The service was impeccable, and the traditional food served on board was exceptional.',
    stay: 'Maharaja Suite · 3 Nights',
    avatar: 'G',
  },
  {
    id: 2,
    name: 'Guest Name',
    location: 'Guest Location',
    rating: 5,
    text: 'A perfect blend of heritage charm and modern luxury. The en-suite bathroom with a hot tub and the cozy room heating made our winter stay incredibly comfortable. We loved waking up to the peaceful lake view.',
    stay: 'Royal Mughal Room · 2 Nights',
    avatar: 'G',
  },
  {
    id: 3,
    name: 'Guest Name',
    location: 'Guest Location',
    rating: 5,
    text: 'Unbelievable hospitality and serene atmosphere. Sitting on the balcony sipping local Kahwa tea while watching the sunset was the highlight of our trip. Highly recommended for couples seeking a peaceful getaway.',
    stay: 'Shalimar Suite · 4 Nights',
    avatar: 'G',
  },
  {
    id: 4,
    name: 'Guest Name',
    location: 'Guest Location',
    rating: 5,
    text: 'Stunning craftsmanship throughout the houseboat. The staff was incredibly warm and attentive, anticipating our every need. The rooms are spacious, clean, and offer top-tier comfort.',
    stay: 'Maharaja Suite · 2 Nights',
    avatar: 'G',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setActive(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoplay();
  };

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

  const t = testimonials[active];

  return (
    <section className={styles.testimonials} ref={sectionRef} id="testimonials">
      {/* Header */}
      <div className={`${styles.tHeader} reveal`}>
        <span className="section-eyebrow">Guest Stories</span>
        <div className="section-divider" />
        <h2 className="section-title">
          Words from Our <em style={{ fontStyle: 'italic', color: 'var(--color-accent-gold)' }}>Honoured Guests</em>
        </h2>
      </div>

      {/* Testimonial Display */}
      <div className={styles.tDisplay}>
        <div className={styles.tQuoteMark}>&ldquo;</div>

        <div className={styles.tContent} key={active}>
          <p className={styles.tText}>{t.text}</p>

          <div className={styles.tAuthor}>
            <div className={styles.tAvatar}>{t.avatar}</div>
            <div className={styles.tAuthorInfo}>
              <div className={styles.tName}>{t.name}</div>
              <div className={styles.tLocation}>{t.location}</div>
              <div className={styles.tStay}>{t.stay}</div>
            </div>
            <div className={styles.tRating}>
              {Array.from({ length: t.rating }).map((_, i) => (
                                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent-gold)" stroke="var(--color-accent-gold)" strokeWidth="1" className={styles.tStar}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.tNav}>
          <div className={styles.tDots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.tDot} ${i === active ? styles.tDotActive : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Testimonial ${i + 1}`}
                id={`testimonial-dot-${i}`}
              />
            ))}
          </div>
          <div className={styles.tCounter}>
            <span className={styles.tCountActive}>{String(active + 1).padStart(2, '0')}</span>
            <span className={styles.tCountSep}>/</span>
            <span className={styles.tCountTotal}>{String(testimonials.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Review Platform Badges */}
      <div className={`${styles.tBadges} reveal`}>
        <div className={styles.tBadge}>
          <span className={styles.tBadgeNum}>Rating</span>
          <div>
            <div className={styles.tBadgeStars}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="var(--color-accent-gold)" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <div className={styles.tBadgeSource}>TripAdvisor</div>
          </div>
        </div>
        <div className={styles.tBadgeDivider} />
        <div className={styles.tBadge}>
          <span className={styles.tBadgeNum}>Rating</span>
          <div>
            <div className={styles.tBadgeStars}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="var(--color-accent-gold)" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <div className={styles.tBadgeSource}>Booking.com</div>
          </div>
        </div>
        <div className={styles.tBadgeDivider} />
        <div className={styles.tBadge}>
          <span className={styles.tBadgeNum}>Reviews+</span>
          <div>
            <div className={styles.tBadgeStars}>Reviews</div>
            <div className={styles.tBadgeSource}>Verified Guests</div>
          </div>
        </div>
      </div>
    </section>
  );
}
