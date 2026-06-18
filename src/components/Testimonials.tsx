'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: '[GUEST NAME]',
    location: '[GUEST LOCATION]',
    rating: 5,
    text: '[GUEST REVIEW TEXT — Replace with an authentic testimonial from a real guest who stayed at your houseboat. Describe their experience, what they loved most, and why they would recommend it to others.]',
    stay: '[ROOM NAME] · [NUMBER] Nights',
    avatar: 'G',
  },
  {
    id: 2,
    name: '[GUEST NAME]',
    location: '[GUEST LOCATION]',
    rating: 5,
    text: '[GUEST REVIEW TEXT — Replace with an authentic testimonial from a real guest. Share their unique experience and what made their stay special.]',
    stay: '[ROOM NAME] · [NUMBER] Nights',
    avatar: 'G',
  },
  {
    id: 3,
    name: '[GUEST NAME]',
    location: '[GUEST LOCATION]',
    rating: 5,
    text: '[GUEST REVIEW TEXT — Replace with an authentic testimonial describing the ambience, hospitality, cuisine, and overall experience at your houseboat.]',
    stay: '[ROOM NAME] · [NUMBER] Nights',
    avatar: 'G',
  },
  {
    id: 4,
    name: '[GUEST NAME]',
    location: '[GUEST LOCATION]',
    rating: 5,
    text: '[GUEST REVIEW TEXT — Replace with a real guest review highlighting exceptional service, views, food, or any standout aspect of their stay.]',
    stay: '[ROOM NAME] · [NUMBER] Nights',
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
          <span className={styles.tBadgeNum}>[RATING]</span>
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
          <span className={styles.tBadgeNum}>[RATING]</span>
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
          <span className={styles.tBadgeNum}>[REVIEWS]+</span>
          <div>
            <div className={styles.tBadgeStars}>Reviews</div>
            <div className={styles.tBadgeSource}>Verified Guests</div>
          </div>
        </div>
      </div>
    </section>
  );
}
