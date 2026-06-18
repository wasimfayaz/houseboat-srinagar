import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Experiences from '@/components/Experiences';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Curated Kashmiri Experiences | [YOUR HOUSEBOAT NAME]",
  description: "Immerse yourself in Srinagar's timeless culture. Sunrise shikara journeys, traditional Wazwan feasts, and guided Himalayan treks.",
};

export default function ExperiencesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        sectionNumber="05 / Experiences" 
        title="Beyond the Houseboat" 
        subtitle="Kashmir is a world of wonders waiting to be discovered. Our team curates private, unhurried experiences that let you live the valley — not just visit it." 
      />
      <Experiences />
      <BookingBanner />
      <Footer />
    </main>
  );
}
