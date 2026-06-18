import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Houseboats from '@/components/Houseboats';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Houseboat Rooms & Suites | [YOUR HOUSEBOAT NAME]",
  description: "Explore our exclusive guest rooms. Handcrafted woodwork, private decks, and luxury heritage stay on [LOCATION].",
};

export default function RoomsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        sectionNumber="03 / Guest Rooms" 
        title="Our Guest Rooms & Suites" 
        subtitle="[YOUR HOUSEBOAT NAME] features handcrafted heritage guest rooms, custom designed for ultimate privacy and tranquility on the lake." 
      />
      <Houseboats />
      <BookingBanner />
      <Footer />
    </main>
  );
}
