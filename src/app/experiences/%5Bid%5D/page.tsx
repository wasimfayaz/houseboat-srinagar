import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../detail.module.css';

interface ExperienceData {
  title: string;
  icon: string;
  duration: string;
  tags: string[];
  desc: string;
  details: string;
  price: string;
  inclusions: string[];
  image: string;
  itinerary?: { time: string; title: string; desc: string }[];
}

const experiencesData: Record<string, ExperienceData> = {
  'shikara-journey': {
    title: 'Sunrise Shikara Journey',
    icon: '✦',
    duration: '2–3 Hours',
    tags: ['Private', 'Guided', 'Photography'],
    desc: 'Glide silently at dawn through the floating gardens and flower markets of Dal Lake. Watch Srinagar come alive in morning gold.',
    details: 'The morning mist rising off Nagin Lake as you board your private shikara is a memory that will stay with you forever. Led by a local boatman whose family has lived on the waters for generations, you will weave through historic wooden bridges, explore hidden canals, and witness the unique commerce of the floating vegetable and flower markets.',
    price: '[PRICE] / couple',
    inclusions: ['Private handcrafted Shikara boat', 'Local English-speaking boat guide', 'Freshly brewed Kahwa tea served on board', 'Blankets and traditional Kangri heaters (seasonal)'],
    image: '/shikara-sunset.png',
    itinerary: [
      { time: '05:30 AM', title: 'Embarkation from [YOUR HOUSEBOAT NAME]', desc: 'Board the cushioned shikara directly from our private wooden deck, wrapping up in warm blankets as the lake remains asleep.' },
      { time: '06:00 AM', title: 'Floating Markets', desc: 'Arrive at the canal intersections where local farmers gather in their boats to trade morning harvest vegetables, flowers, and goods.' },
      { time: '07:15 AM', title: 'Lotus Gardens & Canals', desc: 'Navigate the quiet backwaters, passing floating reed gardens and local artisan settlements along the banks.' },
      { time: '08:00 AM', title: 'Return & Breakfast', desc: 'Arrive back at [YOUR HOUSEBOAT NAME] for a traditional breakfast on the dining deck.' }
    ]
  },
  'wazwan-experience': {
    title: 'Royal Wazwan Feast',
    icon: '✦',
    duration: '3 Hours',
    tags: ['Exclusive', 'Cultural', 'Chef\'s Table'],
    desc: 'Our master Waza chef prepares a 12-course Kashmiri royal banquet on your private deck. An ancient culinary art, yours alone.',
    details: 'The Wazwan is the absolute height of Kashmiri cultural celebration—an intricate feast prepared over open deodar-wood fires. Led by our head chef (Waza), this private banquet on the houseboat\'s sun deck features 12 signature dishes. Prepared using organic mountain spices and served in traditional hand-carved copper Trami plates, it is a culinary ritual of the highest order.',
    price: '[PRICE] / guest',
    inclusions: ['12-course traditional Wazwan menu', 'Private deck dining setup with silk cushions', 'Chef narration of culinary history', 'Custom non-alcoholic Kashmiri beverages'],
    image: '/wazwan-dining.png',
    itinerary: [
      { time: '07:00 PM', title: 'Tash-t-Nari Cleansing Ritual', desc: 'Begin with the traditional hand-washing ceremony at the table using a copper jug and basin.' },
      { time: '07:15 PM', title: 'The Trami Service', desc: 'The large copper plate is unveiled, served with fine basmati rice topped with seekh kababs, methi maaz, and tabak maaz.' },
      { time: '08:00 PM', title: 'Main Courses', desc: 'Dishes like Rista, Rogan Josh, and Lahabi Kabab are served sequentially by our attendants.' },
      { time: '09:00 PM', title: 'The Grand Finale', desc: 'The meal concludes with Gustaba (velvety cardamom meatballs in yogurt sauce) followed by hot saffron Kahwa.' }
    ]
  },
  'valley-trek': {
    title: 'Himalayan Valley Trek',
    icon: '✦',
    duration: 'Full Day',
    tags: ['Adventure', 'Guided', 'Exclusive'],
    desc: 'Journey into Gulmarg or Sonamarg with your private mountain guide. Alpine meadows, glaciers, and silence that goes on forever.',
    details: 'Step off the water and head into the high altitude wonderland of Kashmir. We provide a chauffeured private 4x4 vehicle to transport you directly to Sonamarg ("Meadow of Gold") or Gulmarg. There, you will meet your certified mountain guide for a tailored day hike through towering pine forests, over rushing glacial streams, and into alpine meadows surrounded by jagged snow peaks.',
    price: '[PRICE] / couple',
    inclusions: ['Private 4x4 SUV transportation from/to Dal Gate', 'Certified professional mountain guide', 'Premium packed gourmet picnic lunch', 'All park entries, permissions, and permits'],
    image: '/valley-experiences.png',
    itinerary: [
      { time: '08:00 AM', title: 'Departure from Dal Gate', desc: 'Meet your chauffeur at the shoreline jetty for a scenic drive along the Sindh River valley.' },
      { time: '10:30 AM', title: 'Trailhead Briefing', desc: 'Arrive at the high meadows, gear up, and begin a custom-paced trek tailored to your fitness level.' },
      { time: '01:00 PM', title: 'Meadow Picnic Lunch', desc: 'Enjoy a premium, multi-course packed lunch alongside a glacial stream overlooking the Thajiwas Glacier.' },
      { time: '05:30 PM', title: 'Sunset Return', desc: 'Arrive back at [YOUR HOUSEBOAT NAME] in time for evening tea as the sun sets behind the Zabarwan range.' }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exp = experiencesData[id];
  return {
    title: exp ? `${exp.title} | [YOUR HOUSEBOAT NAME]` : 'Experience Not Found | [YOUR HOUSEBOAT NAME]',
    description: exp ? exp.desc : 'Experience unique activities in Srinagar, Kashmir.',
  };
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exp = experiencesData[id];

  if (!exp) {
    return (
      <main className={styles.detailPage}>
        <Navbar />
        <div className={styles.detailContainer}>
          <div className={styles.notFound}>
            <h1 className={styles.notFoundTitle}>Experience Not Found</h1>
            <p className={styles.notFoundText}>The experience route you are trying to visit does not exist.</p>
            <Link href="/experiences" className="btn-primary">
              <span>Back to Experiences</span>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.detailPage}>
      <Navbar />
      
      <div className={styles.detailContainer}>
        {/* Back Link */}
        <Link href="/experiences" className={styles.backLink}>
          ← Back to Experiences
        </Link>

        {/* Main Card */}
        <article className={styles.mainContent}>
          {/* Header section */}
          <div className={styles.headerRow}>
            <div className={styles.icon}>{exp.icon}</div>
            <span className={styles.duration}>{exp.duration}</span>
          </div>

          <h1 className={styles.title}>{exp.title}</h1>

          <div className={styles.tags}>
            {exp.tags.map((tag, i) => (
              <span key={i} className={styles.tag}>{tag}</span>
            ))}
          </div>

          {/* Main Experience Image */}
          <div className={styles.imagePlaceholder}>
            <img src={exp.image} alt={exp.title} className={styles.detailImg} />
          </div>

          {/* Description details */}
          <p className={styles.bodyText}>{exp.details}</p>

          <div className={styles.sectionDivider} />

          {/* Itinerary Section */}
          {exp.itinerary && (
            <div>
              <h2 className={styles.subtitle}>Suggested Timeline</h2>
              <div className={styles.itineraryList}>
                {exp.itinerary.map((item, i) => (
                  <div key={i} className={styles.itineraryItem}>
                    <div className={styles.time}>{item.time}</div>
                    <div className={styles.itineraryContent}>
                      <h3 className={styles.itineraryTitle}>{item.title}</h3>
                      <p className={styles.itineraryDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.sectionDivider} />
            </div>
          )}

          {/* Inclusions Section */}
          <div>
            <h2 className={styles.subtitle}>What is Included</h2>
            <div className={styles.inclusionsGrid}>
              {exp.inclusions.map((item, i) => (
                <div key={i} className={styles.inclusionItem}>
                  <span className={styles.bullet}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Booking Card */}
        <div className={styles.pricingCard}>
          <div>
            <div className={styles.priceLabel}>Experience Rate</div>
            <div className={styles.priceVal}>{exp.price}</div>
          </div>
          <Link href="/booking" className="btn-gold">
            <span>Inquire to Book</span>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
