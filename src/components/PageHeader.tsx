'use client';

import styles from './PageHeader.module.css';

interface PageHeaderProps {
  sectionNumber: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({ sectionNumber, title, subtitle }: PageHeaderProps) {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.inner}>
        <span className="section-number">{sectionNumber}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className="section-divider" style={{ margin: '24px auto 0' }} />
      </div>
    </header>
  );
}
