import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Houseboats from '@/components/Houseboats';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Sanctuaries & Rooms | Nagin Nest Houseboat Kashmir",
  description: "Explore the Maharaja Suite, the Mughal Room, and the Shalimar Room. Handcrafted deodar woodwork, private decks, and luxury heritage stay on Nagin Lake.",
};

export default function RoomsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        sectionNumber="03 / Sanctuaries" 
        title="Our Guest Rooms & Suites" 
        subtitle="Nagin Nest is a single handcrafted deodar wood houseboat featuring three private guest sanctuaries, custom designed for ultimate tranquility." 
      />
      <Houseboats />
      <BookingBanner />
      <Footer />
    </main>
  );
}
