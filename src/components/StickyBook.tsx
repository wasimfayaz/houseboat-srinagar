'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './StickyBook.module.css';

export default function StickyBook() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      href="/booking"
      className={`${styles.stickyBtn} ${visible ? styles.visible : ''}`}
      id="sticky-book-btn"
      aria-label="Book now"
    >
      <span className={styles.stickyText}>BOOK NOW</span>
    </Link>
  );
}
