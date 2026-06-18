import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Amenities from '@/components/Amenities';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Services & Comforts | [YOUR HOUSEBOAT NAME]",
  description: "Explore the comprehensive services at [YOUR HOUSEBOAT NAME]. Deluxe rooms, traditional Kashmiri dining, and heritage comforts.",
};

export default function AmenitiesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        sectionNumber="08 / Services" 
        title="Our Services & Comforts" 
        subtitle="Explore the complete hospitality offering of [YOUR HOUSEBOAT NAME], from heritage guest rooms to traditional dining and modern amenities." 
      />
      <Amenities hideCta={true} />
      <BookingBanner />
      <Footer />
    </main>
  );
}
