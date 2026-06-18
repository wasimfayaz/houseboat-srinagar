import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Cuisine from '@/components/Cuisine';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Dining & Cuisine | [YOUR HOUSEBOAT NAME]",
  description: "Experience the royal Kashmiri culinary tradition on [LOCATION]. Multi-course traditional meals prepared by our master chef.",
};

export default function DiningPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        sectionNumber="04 / Dining" 
        title="The Kashmiri Culinary Table" 
        subtitle="Savor the royal Wazwan heritage menu freshly prepared on board by our master chef, served on hand-beaten copper." 
      />
      <Cuisine />
      <BookingBanner />
      <Footer />
    </main>
  );
}
