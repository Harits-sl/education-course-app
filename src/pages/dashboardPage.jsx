import NewsLetter from '../components/organisms/NewsLetter';
import Hero from '../components/organisms/Hero';
import Navbar from '../components/organisms/Navbar';
import VideoCollection from '../components/organisms/VideoCollection';
import Footer from '../components/organisms/Footer';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoCollection />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}
