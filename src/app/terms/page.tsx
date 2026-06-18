import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Terms of Service | Nagin Nest Houseboats",
  description: "Terms and conditions for booking and staying on board Nagin Nest Houseboats.",
};

export default function TermsPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 24px 60px' }}>
        <Link href="/" style={{ color: 'var(--color-accent-gold)', display: 'inline-flex', gap: '8px', textTransform: 'uppercase', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', marginBottom: '32px' }}>
          ← Back to Home
        </Link>
        <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)', padding: '48px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--color-deep-teal)', fontWeight: 300, marginBottom: '24px' }}>Terms of Service</h1>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '20px' }}>
              Welcome to Nagin Nest Houseboats. By booking a room or staying on board our floating sanctuary, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-teal)', marginTop: '32px', marginBottom: '16px', fontWeight: 500 }}>Reservations & Payments</h2>
            <p style={{ marginBottom: '20px' }}>
              All reservations must be confirmed by payment deposit. Standard check-in is at 12:00 PM, and check-out is at 10:00 AM. Direct direct booking guarantees the best rates.
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-teal)', marginTop: '32px', marginBottom: '16px', fontWeight: 500 }}>Conduct on Board</h2>
            <p style={{ marginBottom: '20px' }}>
              Our houseboats are wooden heritage properties. Out of respect for safety and our fellow guests, smoking is strictly prohibited inside the bedrooms or wooden lounges. Quiet hours are from 10:30 PM to 7:00 AM.
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-teal)', marginTop: '32px', marginBottom: '16px', fontWeight: 500 }}>Cancellations</h2>
            <p style={{ marginBottom: '20px' }}>
              Cancellations made 14 days or more before arrival receive a full refund. Cancellations made within 14 days are subject to standard deposit forfeit policies.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
