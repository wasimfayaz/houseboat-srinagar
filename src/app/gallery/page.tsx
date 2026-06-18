import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Gallery from '@/components/Gallery';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Photo Gallery | [YOUR HOUSEBOAT NAME]",
  description: "Browse the visual beauty of Kashmir. Exquisite woodcarvings, majestic Himalayan backdrops, and tranquil lake waters captured in images.",
};

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        sectionNumber="06 / Visual Journey" 
        title="A Glimpse Into Paradise" 
        subtitle="Explore our handcrafted rooms, scenic decks, and the beautiful landscape of Dal and Nagin Lake." 
      />
      <Gallery />
      <BookingBanner />
      <Footer />
    </main>
  );
}
