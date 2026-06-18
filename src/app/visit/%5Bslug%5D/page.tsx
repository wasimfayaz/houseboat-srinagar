import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seasons from '@/components/Seasons';
import BookingBanner from '@/components/BookingBanner';
import styles from '../visit.module.css';

interface VisitData {
  title: string;
  subtitle: string;
  seoDescription: string;
}

const visitPagesData: Record<string, VisitData> = {
  'how-to-reach': {
    title: 'How to Reach [YOUR HOUSEBOAT NAME]',
    subtitle: 'Your detailed guide to finding our floating sanctuary in [LOCATION].',
    seoDescription: 'Find details on airport transfers, flight paths to Srinagar SXR, local taxis, and the private shikara crossing to [YOUR HOUSEBOAT NAME].',
  },
  'best-season': {
    title: 'Kashmir in Every Season',
    subtitle: 'Explore the highlights of Spring, Summer, Autumn, and Winter in the valley.',
    seoDescription: 'Find the best season to visit Kashmir. Spring tulip blooms, lush summers, golden chinars in autumn, and snow skiing in winter.',
  },
  'guide': {
    title: 'Curated Srinagar Guide',
    subtitle: 'Local sightseeing, historical highlights, and secrets of Srinagar.',
    seoDescription: 'Explore the Mughal Gardens, Jamia Masjid, floating markets, and other sights near [LOCATION] with our curated Srinagar guide.',
  },
  'faq': {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about our houseboat staying experience.',
    seoDescription: 'Get answers to common queries about staying at [YOUR HOUSEBOAT NAME]: internet, heating, food, safety, and policies.',
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = visitPagesData[slug];
  return {
    title: page ? `${page.title} | [YOUR HOUSEBOAT NAME]` : 'Information Not Found | [YOUR HOUSEBOAT NAME]',
    description: page ? page.seoDescription : 'Travel planning information for Srinagar, Kashmir.',
  };
}

export default async function VisitInfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = visitPagesData[slug];

  if (!page) {
    return (
      <main className={styles.visitPage}>
        <Navbar />
        <div className={styles.visitContainer}>
          <div className={styles.contentCard} style={{ textAlign: 'center' }}>
            <h1 className={styles.title}>Information Not Found</h1>
            <p className={styles.subtitle}>The page route you are trying to visit does not exist.</p>
            <Link href="/" className="btn-primary">
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Render content based on slug
  const renderContent = () => {
    switch (slug) {
      case 'how-to-reach':
        return (
          <>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Arriving by Air (Recommended)</h2>
              <p className={styles.text}>
                Srinagar International Airport (SXR) is the primary gateway to Kashmir. It is well connected with daily direct flights from Delhi, Mumbai, Jammu, Bangalore, and Chandigarh. Flight times from Delhi are approximately 1 hour and 15 minutes.
              </p>
              <p className={styles.text}>
                The airport is located approximately 14 kilometers from our anchorage. Under normal traffic conditions, it takes about 40 to 45 minutes to reach the lake shoreline by car.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Concierge Airport Transfers</h2>
              <p className={styles.text}>
                To make your arrival seamless, we offer private, chauffeured transfers in premium sedans or SUVs. Our driver will meet you outside the arrivals gate with a name sign, assist with your luggage, and drive you directly to the lakeside boarding jetty.
              </p>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.bullet}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                  <span><strong>Airport Pickup Request:</strong> Contact us via email or WhatsApp at least 48 hours prior to arrival with your flight details.</span>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.bullet}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                  <span><strong>Rates:</strong> Included in all direct luxury booking packages. For standalone bookings, a transfer fee applies — contact us for current rates.</span>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>3. The Shikara Crossing</h2>
              <p className={styles.text}>
                Because [YOUR HOUSEBOAT NAME] is located on the lake, access is exclusively via the water. Once you arrive at the designated jetty, a private, cushioned shikara boat will be waiting to transport you across to the houseboat. The water crossing is a peaceful 5-minute glide and is available to guests 24 hours a day.
              </p>
            </div>
          </>
        );

      case 'best-season':
        return (
          <>
            <p className={styles.text} style={{ fontSize: '16px', marginBottom: '40px' }}>
              Kashmir is a destination that changes its character completely with the turning of the calendar. Whether you want to witness the spring tulips, escape the summer heat, watch the autumn leaves change, or experience a snow-laden floating paradise, [YOUR HOUSEBOAT NAME] offers a comfortable, heated sanctuary.
            </p>
            <Seasons />
          </>
        );

      case 'guide':
        return (
          <>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Historical Mughal Gardens</h2>
              <p className={styles.text}>
                Srinagar is famous for its meticulously landscaped Mughal Gardens, constructed by various emperors during the golden era of the empire:
              </p>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.bullet}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                  <span><strong>Shalimar Bagh:</strong> Built by Emperor Jahangir in 1619 for his wife Nur Jahan. It features beautiful black stone pavilions and stone water canals fed by mountain springs.</span>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.bullet}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                  <span><strong>Nishat Bagh:</strong> Known as the "Garden of Joy," this terraced garden climbs up the Zabarwan mountain face, offering magnificent, uninterrupted views of Dal Lake.</span>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.bullet}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                  <span><strong>Chashme Shahi:</strong> Built around a mountain spring, famous for its sweet mineral water which Mughal emperors used to carry back to Delhi.</span>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Old Town & Cultural Heritage</h2>
              <p className={styles.text}>
                Venture beyond the lake to explore the historic Old Town of Srinagar (known locally as Shehr-e-Khaas):
              </p>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <span className={styles.bullet}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                  <span><strong>Khanqah-e-Moula:</strong> A masterpiece of Kashmiri wooden architecture, this mosque on the banks of the Jhelum River was originally built in 1395. It is covered in intricate papier-mâché and woodcarving.</span>
                </div>
                <div className={styles.listItem}>
                  <span className={styles.bullet}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                  <span><strong>Jamia Masjid:</strong> A majestic mosque featuring 378 pillars made of solid deodar pine logs, offering an atmosphere of profound silence and peace.</span>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Local Secrets & Floating Trade</h2>
              <p className={styles.text}>
                The floating vegetable market is a must-see. Located on the interior canals of Dal Lake, local farmers assemble in wooden canoes at 5:30 AM to barter and sell fresh flowers, melons, and vegetables harvested from the lake\'s floating gardens. Our concierge team can arrange a sunrise shikara ride to experience this historic trading market firsthand.
              </p>
            </div>
          </>
        );

      case 'faq':
        return (
          <div className={styles.faqGroup}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Q: Is the houseboat stationary or does it move?</h3>
              <p className={styles.faqAnswer}>
                A: All houseboats in Srinagar, including [YOUR HOUSEBOAT NAME], are permanently anchored at their respective lake positions. They do not cruise. However, you can use our private shikara boats at any time to travel across the lake and go sightseeing.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Q: How is the room temperature regulated?</h3>
              <p className={styles.faqAnswer}>
                A: [YOUR HOUSEBOAT NAME] is fully climate-controlled. Each room features modern split air-conditioning units for summer cooling and central heating systems, oil radiators, and traditional electrical under-blankets for winter heating.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Q: Is there stable internet/Wi-Fi on board?</h3>
              <p className={styles.faqAnswer}>
                A: Yes. We have a dedicated high-speed fiber-optic broadband line with routers placed across the houseboat, ensuring complimentary, reliable Wi-Fi for all guests on board.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Q: Are meals prepared on board safe and hygienic?</h3>
              <p className={styles.faqAnswer}>
                A: Absolutely. All our food is prepared using clean, bottled mineral water for cooking, and ingredients are sourced fresh daily from local organic markets. We can easily accommodate vegetarian, vegan, gluten-free, and halal dietary requirements.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Q: Is Srinagar safe to visit for families and solo travellers?</h3>
              <p className={styles.faqAnswer}>
                A: Yes. Srinagar is a highly hospitable tourist destination. The lake communities are close-knit, friendly, and extremely protective of visitors. Our family lives on board in a separate staff wing, providing round-the-clock security and assistance.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className={styles.visitPage}>
      <Navbar />
      <div className={styles.visitContainer}>
        {/* Back Link */}
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>

        {/* Content Card */}
        <div className={styles.contentCard}>
          <h1 className={styles.title}>{page.title}</h1>
          <p className={styles.subtitle}>{page.subtitle}</p>
          <div className="section-divider" style={{ margin: '24px 0 40px' }} />
          
          {renderContent()}
        </div>
      </div>
      
      {slug !== 'best-season' && <BookingBanner />}
      <Footer />
    </main>
  );
}
