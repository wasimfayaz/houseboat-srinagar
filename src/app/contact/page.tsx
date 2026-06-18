'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import styles from './contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API. Here we simulate success.
    setSubmitted(true);
  };

  return (
    <main className={styles.contactPage}>
      <Navbar />
      <PageHeader 
        sectionNumber="07 / Contact" 
        title="Reach Our Concierge Desk" 
        subtitle="We are here to help you plan your perfect floating getaway. Contact us by phone, email, or direct WhatsApp chat." 
      />

      <div className={styles.contactContainer}>
        <div className={styles.contactGrid}>
          {/* Info Section (Left) */}
          <div className={styles.infoCol}>
            <div>
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              <p className={styles.description}>
                Whether you have questions about our rooms, dining packages, or planning your flight to Srinagar, our family is on call to assist you personally.
              </p>
            </div>

            <div className={styles.contactInfoCard}>
              {/* WhatsApp */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon} style={{ fontSize: '16px', fontWeight: 600 }}>W</div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Instant Messaging</span>
                  <a 
                    href="https://wa.me/918899779869?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20staying%20at%20Nagin%20Nest." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.infoValue}
                    style={{ textDecoration: 'underline', color: 'var(--color-accent-gold)' }}
                  >
                    Chat on WhatsApp
                  </a>
                  <span className={styles.infoSub}>Active 24/7 for booking inquiries</span>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon} style={{ fontSize: '16px', fontWeight: 600 }}>T</div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Phone Enquiries</span>
                  <a href="tel:+918899779869" className={styles.infoValue}>
                    +91 88997 79869
                  </a>
                  <span className={styles.infoSub}>Reservations Desk & Guest Services</span>
                </div>
              </div>

              {/* Email */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon} style={{ fontSize: '16px', fontWeight: 600 }}>E</div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Email</span>
                  <a href="mailto:stay@naginnest.com" className={styles.infoValue}>
                    stay@naginnest.com
                  </a>
                  <span className={styles.infoSub}>For corporate bookings & travel agents</span>
                </div>
              </div>

              {/* Location */}
              <div className={styles.infoItem}>
                <div className={styles.infoIcon} style={{ fontSize: '16px', fontWeight: 600 }}>A</div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Our Anchorage</span>
                  <span className={styles.infoValue}>
                    Nagin Lake, Srinagar, Kashmir 190001
                  </span>
                  <span className={styles.infoSub}>Access via private Shikara crossing</span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className={styles.mapSection}>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapOverlay} />
                <div className={styles.mapPlaceholderInner}>
                  <span className={styles.mapPin} style={{ color: 'var(--color-accent-gold)', fontSize: '24px' }}>✦</span>
                  <h3 className={styles.mapPlaceholderTitle}>Nagin Lake Anchorage</h3>
                  <p className={styles.mapPlaceholderDesc}>Srinagar, Jammu & Kashmir 190001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section (Right) */}
          <div className={styles.formCol}>
            {!submitted ? (
              <>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Send a Message</h2>
                  <p className={styles.formSubtitle}>We will respond to your query within 4 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  {/* Name */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      className={styles.formInput}
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  {/* Email */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className={styles.formInput}
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  {/* Phone */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      className={styles.formInput}
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Your Message</label>
                    <textarea 
                      required 
                      className={styles.formTextarea}
                      placeholder="How can we help you plan your stay?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className={styles.submitBtn}>
                    <span>Send Message</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h2 className={styles.successTitle}>Thank You, {formData.name}</h2>
                <p className={styles.successText}>
                  Your message has been sent to our concierge desk. We will get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }} 
                  className={styles.submitBtn}
                  style={{ marginTop: '20px' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
