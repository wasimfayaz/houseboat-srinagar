import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Cookies Policy | [YOUR HOUSEBOAT NAME]",
  description: "Learn how we use cookies to improve your booking experience.",
};

export default function CookiesPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 24px 60px' }}>
        <Link href="/" style={{ color: 'var(--color-accent-gold)', display: 'inline-flex', gap: '8px', textTransform: 'uppercase', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', marginBottom: '32px' }}>
          ← Back to Home
        </Link>
        <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)', padding: '48px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--color-deep-teal)', fontWeight: 300, marginBottom: '24px' }}>Cookies Policy</h1>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '20px' }}>
              We use minimal cookies on our website to optimize your browsing and booking experience.
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-teal)', marginTop: '32px', marginBottom: '16px', fontWeight: 500 }}>What are cookies?</h2>
            <p style={{ marginBottom: '20px' }}>
              Cookies are small text files stored on your browser to remember information like form entries or selection preferences.
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-teal)', marginTop: '32px', marginBottom: '16px', fontWeight: 500 }}>How we use them</h2>
            <p style={{ marginBottom: '20px' }}>
              We use performance cookies to analyze user flows and functional cookies to remember details like your preferred room selection when you transition to our Booking page.
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-teal)', marginTop: '32px', marginBottom: '16px', fontWeight: 500 }}>Disabling Cookies</h2>
            <p style={{ marginBottom: '20px' }}>
              You can easily block or delete cookies through your browser settings. However, doing so may affect some site functionalities like saving your selected room preferences.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
