'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Seasons.module.css';

const seasons = [
  {
    id: 'spring',
    season: 'Spring',
    months: 'March — May',
    emoji: '✦',
    tagline: 'The Valley Blooms',
    desc: 'Cherry blossoms and tulips blanket the valley. Dal Lake is calm, mild temperatures, and the famous Srinagar Tulip Garden — the largest in Asia — is in full colour.',
    highlights: ['Tulip Garden visits', 'Perfect photography weather', 'Mild 12–22°C', 'Low crowds'],
    color: '#b8e0c0',
    accent: '#4a8a5a',
  },
  {
    id: 'summer',
    season: 'Summer',
    months: 'June — August',
    emoji: '✦',
    tagline: 'The Peak Season',
    desc: 'The most popular time to visit — warm days, cool nights, and the lake at its most vibrant. Houseboats fill quickly. The valley is lush emerald green at every turn.',
    highlights: ['Peak season magic', 'Shikara at sunset', 'Pleasant 20–30°C', 'All experiences open'],
    color: '#fde68a',
    accent: '#b45309',
  },
  {
    id: 'autumn',
    season: 'Autumn',
    months: 'September — November',
    emoji: '✦',
    tagline: 'The Golden Hour',
    desc: 'Many consider autumn the most spectacular season in Kashmir. Chinar trees blaze red and amber. The light is extraordinary. Fewer tourists, more stillness, pure magic.',
    highlights: ['Chinar colours', 'Golden light photography', 'Cool 10–20°C', 'Saffron harvest'],
    color: '#fed7aa',
    accent: '#c2410c',
  },
  {
    id: 'winter',
    season: 'Winter',
    months: 'December — February',
    emoji: '✦',
    tagline: 'Snow on the Water',
    desc: 'A frozen, magical world. Snow-dusted houseboats, mist over the lake at dawn, and the solitude that only winter can give. Gulmarg skiing is at its best. An extraordinary experience.',
    highlights: ['Snowfall on the lake', 'Gulmarg skiing nearby', 'Cold 0–8°C', 'Ultimate seclusion'],
    color: '#bfdbfe',
    accent: '#1d4ed8',
  },
];

export default function Seasons() {
  const [active, setActive] = useState(1); // default to summer
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
            <div className={styles.seasonBigEmoji} style={{ color: 'var(--color-accent-gold)' }}>✦</div>
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
