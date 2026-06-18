'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Arjun & Priya Mehta',
    location: 'Mumbai, India',
    rating: 5,
    text: 'We stayed for our honeymoon and still talk about it every single day. Waking up to the mist rising off Dal Lake, with carved cedar all around us — there is simply nothing like it in the world. The Wazwan dinner on our private deck was the most memorable meal of our lives.',
    stay: 'Royal Cedar Houseboat · 5 Nights',
    avatar: 'A',
  },
  {
    id: 2,
    name: 'James & Eleanor Whitfield',
    location: 'London, United Kingdom',
    rating: 5,
    text: 'We have stayed at luxury properties across Asia, from Bali to the Maldives. Nagin Nest is in a category entirely of its own. The personal butler, the shikara rides at sunrise, the absolute quiet — it is the most restorative experience we have ever had as travellers.',
    stay: 'Naltar Retreat · 7 Nights',
    avatar: 'J',
  },
  {
    id: 3,
    name: 'Fatima Al-Hassan',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'I came to Kashmir expecting beauty, but Nagin Nest gave me something I did not anticipate: genuine peace. The craftsmanship of the houseboat interior left me speechless. Every carving tells a story. The team treated us like family from the very first moment.',
    stay: 'Nagin Pearl · 4 Nights',
    avatar: 'F',
  },
  {
    id: 4,
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    text: 'As a photographer, I have been chasing light all my life. Dal Lake at dawn, seen from the deck of our houseboat, is the most extraordinary light I have ever photographed. The staff arranged a private shikara for my sunrise shoots every morning. Absolutely exceptional service.',
    stay: 'Royal Cedar Houseboat · 6 Nights',
    avatar: 'D',
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
                <span key={i} className={styles.tStar}>★</span>
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
          <span className={styles.tBadgeNum}>4.9</span>
          <div>
            <div className={styles.tBadgeStars}>★★★★★</div>
            <div className={styles.tBadgeSource}>TripAdvisor</div>
          </div>
        </div>
        <div className={styles.tBadgeDivider} />
        <div className={styles.tBadge}>
          <span className={styles.tBadgeNum}>9.8</span>
          <div>
            <div className={styles.tBadgeStars}>★★★★★</div>
            <div className={styles.tBadgeSource}>Booking.com</div>
          </div>
        </div>
        <div className={styles.tBadgeDivider} />
        <div className={styles.tBadge}>
          <span className={styles.tBadgeNum}>500+</span>
          <div>
            <div className={styles.tBadgeStars}>Reviews</div>
            <div className={styles.tBadgeSource}>Verified Guests</div>
          </div>
        </div>
      </div>
    </section>
  );
}
