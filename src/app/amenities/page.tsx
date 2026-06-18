import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Amenities from '@/components/Amenities';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Our Services & Comforts | Nagin Nest Houseboats",
  description: "Explore the comprehensive services at Nagin Nest Houseboats on Nagin Lake. Deluxe room categories, royal Kashmiri Wazwan dining, and high-fidelity comforts.",
};

export default function AmenitiesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        sectionNumber="08 / Services" 
        title="Our Services & Comforts" 
        subtitle="Explore the complete hospitality ecosystem of Nagin Nest, from heritage suites to traditional culinary dining and modern amenities." 
      />
      <Amenities hideCta={true} />
      <BookingBanner />
      <Footer />
    </main>
  );
}
