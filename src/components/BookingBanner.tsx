'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './BookingBanner.module.css';

export default function BookingBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    guests: '2',
    houseboat: 'Any Room',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.booking} id="booking" ref={sectionRef}>
      <div className={styles.bookingBg}>
        <div className={styles.bookingPattern} />
      </div>

      <div className={styles.bookingInner}>
        <div className={`${styles.bookingHeader} reveal`}>
          <span className="section-eyebrow" style={{ color: 'rgba(201,169,110,0.9)' }}>Reserve Your Stay</span>
          <div className="section-divider" />
          <h2 className="section-title light">Check Availability</h2>
          <p className={styles.bookingSubtitle}>
            Every stay is curated. Dates are limited. Begin your Kashmir journey today.
          </p>
        </div>

        <div className={`${styles.bookingForm} reveal`}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="checkin-date">Arrival Date</label>
              <input
                id="checkin-date"
                type="date"
                className={styles.formInput}
                value={formData.checkin}
                onChange={(e) => setFormData({ ...formData, checkin: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="checkout-date">Departure Date</label>
              <input
                id="checkout-date"
                type="date"
                className={styles.formInput}
                value={formData.checkout}
                onChange={(e) => setFormData({ ...formData, checkout: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="guests-select">Guests</label>
              <select
                id="guests-select"
                className={styles.formInput}
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="room-select">Room / Suite</label>
              <select
                id="room-select"
                className={styles.formInput}
                value={formData.houseboat}
                onChange={(e) => setFormData({ ...formData, houseboat: e.target.value })}
              >
                <option value="Any Room">Any Room</option>
                <option value="The Maharaja Suite">The Maharaja Suite</option>
                <option value="The Mughal Room">The Mughal Room</option>
                <option value="The Shalimar Room">The Shalimar Room</option>
              </select>
            </div>
          </div>

          <button 
            className={styles.checkAvailBtn} 
            id="check-availability-btn"
            onClick={() => {
              window.location.href = `/booking?room=${encodeURIComponent(formData.houseboat || 'Any Room')}`;
            }}
          >
            <span>Check Availability</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Trust Badges */}
        <div className={`${styles.trustRow} reveal`}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🔒</span>
            <span>Secure Booking</span>
          </div>
          <div className={styles.trustDot} />
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>✓</span>
            <span>Free Cancellation (48hrs)</span>
          </div>
          <div className={styles.trustDot} />
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📞</span>
            <span>24/7 Concierge Support</span>
          </div>
          <div className={styles.trustDot} />
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⭐</span>
            <span>Best Rate Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
