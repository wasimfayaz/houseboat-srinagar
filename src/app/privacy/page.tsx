import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Privacy Policy | Nagin Nest Houseboats",
  description: "Our privacy policy details how we handle guest data for reservations and stays.",
};

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 24px 60px' }}>
        <Link href="/" style={{ color: 'var(--color-accent-gold)', display: 'inline-flex', gap: '8px', textTransform: 'uppercase', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', marginBottom: '32px' }}>
          ← Back to Home
        </Link>
        <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)', padding: '48px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--color-deep-teal)', fontWeight: 300, marginBottom: '24px' }}>Privacy Policy</h1>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '20px' }}>
              At Nagin Nest Houseboats, we are committed to safeguarding the privacy of our guests. This Policy explains how we collect, use, and store your personal information when you book or stay with us.
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-teal)', marginTop: '32px', marginBottom: '16px', fontWeight: 500 }}>Information Collection</h2>
            <p style={{ marginBottom: '20px' }}>
              We collect details provided by you during reservation, including your name, email, phone number, government-issued identification (required by local tourist authorities), and payment references.
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-teal)', marginTop: '32px', marginBottom: '16px', fontWeight: 500 }}>Usage of Information</h2>
            <p style={{ marginBottom: '20px' }}>
              Your details are used strictly to process bookings, plan custom culinary and experience programs, communicate reservation updates, and comply with security regulations. We never sell or share your data with third-party advertisers.
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-teal)', marginTop: '32px', marginBottom: '16px', fontWeight: 500 }}>Security</h2>
            <p style={{ marginBottom: '20px' }}>
              All digital booking records are stored securely, and hardcopy registers required by local law are stored in secured concierge files.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
