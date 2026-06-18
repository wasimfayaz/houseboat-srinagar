'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Seasons.module.css';

const SpringIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12"/>
    <path d="M12 7c0-2.76 2.24-5 5-5 0 3.5-2.5 5-5 5z"/>
    <path d="M12 7C12 4.24 9.76 2 7 2c0 3.5 2.5 5 5 5z"/>
    <path d="M12 13c2.21 0 4-1.79 4-4"/>
    <path d="M12 13c-2.21 0-4-1.79-4-4"/>
    <line x1="12" y1="22" x2="12" y2="18"/>
  </svg>
);

const SummerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="4"/>
    <line x1="12" y1="20" x2="12" y2="22"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="2" y1="12" x2="4" y2="12"/>
    <line x1="20" y1="12" x2="22" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const AutumnIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const WinterIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M17 7l-5-5-5 5"/>
    <path d="M17 17l-5 5-5-5"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M7 7l-5 5 5 5"/>
    <path d="M17 7l5 5-5 5"/>
  </svg>
);

const seasons = [
  {
    id: 'spring',
    season: 'Spring',
    months: 'March — May',
    tagline: 'The Valley Blooms',
    desc: 'Cherry blossoms and tulips blanket the valley. Dal Lake is calm, mild temperatures, and the famous Srinagar Tulip Garden — the largest in Asia — is in full colour.',
    highlights: ['Tulip Garden visits', 'Perfect photography weather', 'Mild 12–22°C', 'Low crowds'],
    color: '#b8e0c0',
    accent: '#4a8a5a',
    icon: <SpringIcon />,
  },
  {
    id: 'summer',
    season: 'Summer',
    months: 'June — August',
    tagline: 'The Peak Season',
    desc: 'The most popular time to visit — warm days, cool nights, and the lake at its most vibrant. Houseboats fill quickly. The valley is lush emerald green at every turn.',
    highlights: ['Peak season magic', 'Shikara at sunset', 'Pleasant 20–30°C', 'All experiences open'],
    color: '#fde68a',
    accent: '#b45309',
    icon: <SummerIcon />,
  },
  {
    id: 'autumn',
    season: 'Autumn',
    months: 'September — November',
    tagline: 'The Golden Hour',
    desc: 'Many consider autumn the most spectacular season in Kashmir. Chinar trees blaze red and amber. The light is extraordinary. Fewer tourists, more stillness, pure magic.',
    highlights: ['Chinar colours', 'Golden light photography', 'Cool 10–20°C', 'Saffron harvest'],
    color: '#fed7aa',
    accent: '#c2410c',
    icon: <AutumnIcon />,
  },
  {
    id: 'winter',
    season: 'Winter',
    months: 'December — February',
    tagline: 'Snow on the Water',
    desc: 'A frozen, magical world. Snow-dusted houseboats, mist over the lake at dawn, and the solitude that only winter can give. Gulmarg skiing is at its best. An extraordinary experience.',
    highlights: ['Snowfall on the lake', 'Gulmarg skiing nearby', 'Cold 0–8°C', 'Ultimate seclusion'],
    color: '#bfdbfe',
    accent: '#1d4ed8',
    icon: <WinterIcon />,
  },
];

export default function Seasons() {
  const [active, setActive] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const s = seasons[active];

  return (
    <section className={styles.seasons} ref={sectionRef} id="seasons">
      <div className={`${styles.seasonsHeader} reveal`}>
        <span className="section-eyebrow">When to Visit</span>
        <div className="section-divider" style={{ margin: '16px auto' }} />
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Kashmir in Every <em style={{ fontStyle: 'italic', color: 'var(--color-accent-gold)' }}>Season</em>
        </h2>
        <p className={styles.seasonHeaderDesc}>
          Each season transforms Kashmir into an entirely different paradise.
          There is no wrong time — only different kinds of beautiful.
        </p>
      </div>

      {/* Season Tabs */}
      <div className={`${styles.seasonTabs} reveal`}>
        {seasons.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.seasonTab} ${i === active ? styles.seasonTabActive : ''}`}
            onClick={() => setActive(i)}
            id={`season-tab-${s.id}`}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span className={styles.seasonTabDot} style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.accent, display: 'inline-block' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span className={styles.seasonTabName}>{s.season}</span>
              <span className={styles.seasonTabMonths}>{s.months}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Season Content */}
      <div className={`${styles.seasonContent} reveal`} key={active}>
        <div className={styles.seasonContentInner}>
          <div className={styles.seasonLeft}>
            <div className={styles.seasonBigEmoji}>
              {s.icon}
            </div>
            <h3 className={styles.seasonTitle}>{s.tagline}</h3>
            <p className={styles.seasonDesc}>{s.desc}</p>
          </div>
          <div className={styles.seasonRight}>
            {s.highlights.map((h, i) => (
              <div key={i} className={styles.seasonHighlight}>
                <span className={styles.seasonHighlightDot} style={{ background: s.accent }} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
