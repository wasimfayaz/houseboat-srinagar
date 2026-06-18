'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Parallax Background */}
      <div className={styles.heroBg} ref={parallaxRef}>
        <div className="white-placeholder">
          <span className="white-placeholder-label">Hero Background Placeholder</span>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className={styles.overlayBottom} />
      <div className={styles.overlayLeft} />
      <div className={styles.overlaySky} />

      {/* Floating Badges */}
      <div className={styles.badge} id="hero-rating-badge">
        <span className={styles.badgeStar}>★</span>
        <div>
          <div className={styles.badgeTitle}>Award-Winning</div>
          <div className={styles.badgeSub}>Luxury Stay 2024</div>
        </div>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>01 &nbsp;/&nbsp; NAGIN LAKE, SRINAGAR</span>

          <h1 className={styles.heroTitle}>
            Where Heaven<br />
            <em>Meets the Water</em>
          </h1>

          <p className={styles.heroDesc}>
            Float above the mirror of the Himalayas in an exclusively crafted deodar sanctuary,
            where centuries of Kashmiri heritage surround your every moment.
          </p>

          <div className={styles.heroCtas}>
            <Link href="/booking" className={styles.ctaPrimary} id="hero-book-btn">
              <span>Reserve Your Sanctuary</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="#houseboats" className={styles.ctaSecondary} id="hero-explore-btn">
              <span>Explore The Rooms</span>
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>35+</span>
              <span className={styles.statLabel}>Years of Heritage</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Happy Guests</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>4.9★</span>
              <span className={styles.statLabel}>Guest Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>

      {/* Bottom wave */}
      <div className={styles.waveBottom}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#faf6ef"/>
        </svg>
      </div>
    </section>
  );
}
