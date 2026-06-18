import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Houseboats from '@/components/Houseboats';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Houseboat Rooms & Suites | Houseboat Name",
  description: "Explore our exclusive guest rooms. Handcrafted woodwork, private decks, and luxury heritage stay on Location.",
};

export default function RoomsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        sectionNumber="03 / Guest Rooms" 
        title="Our Guest Rooms & Suites" 
        subtitle="Houseboat Name features handcrafted heritage guest rooms, custom designed for ultimate privacy and tranquility on the lake." 
      />
      <Houseboats />
      <BookingBanner />
      <Footer />
    </main>
  );
}
