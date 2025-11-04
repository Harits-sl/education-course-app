import Hero from '../components/organisms/Hero';
import Navbar from '../components/organisms/Navbar';
import VideoCollection from '../components/organisms/VideoCollection';

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* <!-- START VIDEO COLLECTION --> */}
        <VideoCollection />
        {/* <!-- END VIDEO COLLECTION --> */}

        {/* <!-- START BANNER NEWSLETTER --> */}
        <section
          id="banner-newsletter"
          className="container"
        >
          <div className="wrapper-newsletter">
            <p className="newsletter text-light-secondary">NEWSLETTER</p>
            <h3 className="title-letter text-light-primary">Mau Belajar Lebih Banyak?</h3>
            <p className="desc-letter text-light-primary">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik
              hariesok.id
            </p>
            <form className="form-newsletter">
              <input
                type="email"
                className="input-newsletter text-dark-primary"
                placeholder="Masukan Emailmu"
                required
              />
              <button
                className="btn-newsletter main-secondary-background text-light-primary"
                type="submit"
              >
                Subcribe
              </button>
            </form>
          </div>
        </section>
        {/* <!-- END BANNER NEWSLETTER --> */}
      </main>
    </>
  );
}
