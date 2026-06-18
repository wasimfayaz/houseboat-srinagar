'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './booking.module.css';

export default function BookingPage() {
  const [room, setRoom] = useState('Any Room');
  const [mealPlan, setMealPlan] = useState('Any Meal Plan');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const roomParam = params.get('room');
      if (roomParam) {
        setRoom(roomParam);
      }
    }
  }, []);

  const handleWhatsAppChat = () => {
    const phoneNumber = '[WHATSAPP NUMBER]';
    const message = `Hi! I would like to book a stay at [YOUR HOUSEBOAT NAME].\n\nRoom selection: ${room}\nMeal plan selection: ${mealPlan}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className={styles.bookingPage}>
      <Navbar />
      
      <div className={styles.bookingContainer}>
        {/* Header Section */}
        <header className={styles.headerSection}>
          <h1 className={styles.title}>Reserve Your Sanctuary</h1>
          <p className={styles.subtitle}>
            Choose your preferred way to book. For personalized requests and
            the best rates, we recommend booking directly with us.
          </p>
        </header>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Direct Booking Card (Left) */}
          <div className={`${styles.card} ${styles.directCard}`}>
            <span className={styles.recommendedBadge}>Recommended</span>
            <h2 className={styles.cardTitle}>Direct Booking</h2>
            <p className={styles.cardDesc}>
              Connect directly with our reservation desk via WhatsApp. Enjoy personalized service, custom itinerary planning, and exclusive direct-booking offers.
            </p>

            {/* Select Room */}
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>Select Room</label>
              <div className={styles.selectWrapper}>
                <select 
                  className={styles.selectInput}
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option value="Any Room">Any Room</option>
                  <option value="The Maharaja Suite">The Maharaja Suite</option>
                  <option value="The Mughal Room">The Mughal Room</option>
                  <option value="The Shalimar Room">The Shalimar Room</option>
                </select>
                <div className={styles.selectArrow}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Select Meal Plan */}
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>Select Meal Plan</label>
              <div className={styles.selectWrapper}>
                <select 
                  className={styles.selectInput}
                  value={mealPlan}
                  onChange={(e) => setMealPlan(e.target.value)}
                >
                  <option value="Any Meal Plan">Any Meal Plan</option>
                  <option value="Breakfast Only (CP)">Breakfast Only (CP)</option>
                  <option value="Half Board - Breakfast & Dinner (MAP)">Half Board - Breakfast & Dinner (MAP)</option>
                  <option value="Full Board - All Meals (AP)">Full Board - All Meals (AP)</option>
                  <option value="Royal Wazwan Culinary Experience">Royal Wazwan Culinary Experience</option>
                </select>
                <div className={styles.selectArrow}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <button 
              className={styles.whatsappBtn}
              onClick={handleWhatsAppChat}
            >
              <svg className={styles.whatsappIcon} width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.019 14.12 1.012 11.5 1.011c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.387 1.357 4.85l-.994 3.63 3.77-.978L6.647 19.16zM17.47 14.397c-.3-.149-1.777-.878-2.046-.977-.27-.097-.467-.149-.662.15-.195.297-.759.957-.93 1.157-.173.199-.344.223-.644.075-.3-.15-1.264-.467-2.41-1.485-.89-.796-1.492-1.779-1.667-2.078-.175-.3-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.298.3-.497.098-.198.05-.371-.025-.521-.075-.149-.662-1.595-.908-2.187-.24-.575-.48-.497-.66-.505-.17-.008-.364-.01-.56-.01-.195 0-.514.074-.783.37-.268.297-1.024 1.002-1.024 2.447 0 1.445 1.051 2.839 1.198 3.037.147.2 2.07 3.162 5.014 4.434.7.303 1.25.484 1.677.619.704.224 1.344.193 1.85.118.563-.083 1.777-.726 2.025-1.429.248-.702.248-1.303.173-1.429-.076-.127-.272-.2-.572-.349z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Online Partners Card (Right) */}
          <div className={`${styles.card} ${styles.partnersCard}`}>
            <h2 className={styles.cardTitle}>Online Partners</h2>
            <p className={styles.cardDesc}>
              Prefer to book through your favorite travel platform? We are listed on all major OTAs for your convenience.
            </p>

            {/* Partner Links */}
            <div className={styles.partnerLinks}>
              <a 
                href="https://www.booking.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.partnerBtn}
              >
                <span>Booking.com</span>
                <svg className={styles.partnerIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
              <a 
                href="https://www.vio.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.partnerBtn}
              >
                <span>Vio.com</span>
                <svg className={styles.partnerIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>

            <div className={styles.divider} />

            {/* Assistance Section */}
            <div className={styles.assistanceSection}>
              <div className={styles.assistanceLabel}>Need Assistance?</div>
              <a href="tel:[PHONE NUMBER]" className={styles.assistancePhone}>
                [PHONE NUMBER]
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
