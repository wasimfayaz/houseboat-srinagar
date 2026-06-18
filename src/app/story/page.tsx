import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Intro from '@/components/Intro';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Our Story & Floating Heritage | Nagin Nest Houseboats",
  description: "Learn about the heritage of Nagin Nest Houseboats. Handcrafted deodar wood structures, Mughal history influences, and generations of traditional hospitality.",
};

export default function StoryPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        sectionNumber="02 / Heritage" 
        title="A Living Floating Palace" 
        subtitle="Crafted in deodar cedar, Nagin Nest represents a rich history of Srinagar's classic water culture." 
      />
      <Intro />
      <BookingBanner />
      <Footer />
    </main>
  );
}
