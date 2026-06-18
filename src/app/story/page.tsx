import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Intro from '@/components/Intro';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Our Story & Heritage | [YOUR HOUSEBOAT NAME]",
  description: "Learn about the heritage of [YOUR HOUSEBOAT NAME]. Handcrafted deodar wood structures, traditional history, and generations of warm hospitality.",
};

export default function StoryPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        sectionNumber="02 / Heritage" 
        title="A Living Floating Palace" 
        subtitle="[YOUR HOUSEBOAT NAME] represents a rich history of Kashmir's classic water culture and floating heritage." 
      />
      <Intro />
      <BookingBanner />
      <Footer />
    </main>
  );
}
