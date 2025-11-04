import NewsLetter from '../components/organisms/NewsLetter';
import Hero from '../components/organisms/Hero';
import Navbar from '../components/organisms/Navbar';
import VideoCollection from '../components/organisms/VideoCollection';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoCollection />

        {/* <!-- START BANNER NEWSLETTER --> */}
        <NewsLetter />
        {/* <!-- END BANNER NEWSLETTER --> */}
      </main>
    </>
  );
}
