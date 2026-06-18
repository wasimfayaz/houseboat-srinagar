import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Houseboats from '@/components/Houseboats';
import Amenities from '@/components/Amenities';
import Cuisine from '@/components/Cuisine';
import Experiences from '@/components/Experiences';
import Seasons from '@/components/Seasons';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import BookingBanner from '@/components/BookingBanner';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import StickyBook from '@/components/StickyBook';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <StickyBook />
      <Navbar />
      <Hero />
      <Intro />
      <Houseboats />
      <Amenities />
      <Cuisine />
      <Experiences />
      <Seasons />
      <Gallery />
      <Testimonials />
      <BookingBanner />
      <Footer />
    </main>
  );
}
