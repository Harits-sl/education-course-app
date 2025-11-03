import Hero from '../components/organisms/Hero';
import Navbar from '../components/organisms/Navbar';

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* <!-- START VIDEO COLLECTION --> */}
        <section
          id="collection"
          className=""
        >
          <div className="text-collection container">
            <h3>Koleksi Video Pembelajaran Unggulan</h3>
            <p className="text-dark-secondary">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>
          <div className="category">
            <ul className="category-list">
              <li className="category-item active">Semua Kelas</li>
              <li className="category-item">Pemasaran</li>
              <li className="category-item">Desain</li>
              <li className="category-item">Pengembangan Diri</li>
              <li className="category-item">Bisnis</li>
            </ul>
          </div>
          <div
            id="learning"
            className="container"
          >
            <a href="#">
              <div className="card-learning">
                <img
                  src="./assets/images/learning_1.jpg"
                  alt="learning"
                />
                <h6
                  className="text-dark-primary"
                  style={{ marginBottom: '8px' }}
                >
                  Big 4 Auditor Financial Analyst
                </h6>
                <p className="text-dark-secondary">
                  Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                </p>
                <div className="author">
                  <div className="avatar">
                    <img
                      src="./assets/images/author_1.png"
                      alt=""
                    />
                  </div>
                  <div className="author-title">
                    <p className="name text-dark-primary">Jenna Ortega</p>
                    <p className="job text-dark-secondary">
                      Senior Accountant di <span>Gojek</span>
                    </p>
                  </div>
                </div>
                <div className="rating-price">
                  <div className="wrapper-star">
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_half.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                  </div>
                  <p className="rating text-dark-secondary">3.5 (86)</p>
                  <h4 className="price text-main-primary">Rp 300K</h4>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-learning">
                <img
                  src="./assets/images/learning_2.jpg"
                  alt="learning"
                />
                <h6
                  className="text-dark-primary"
                  style={{ marginBottom: '8px' }}
                >
                  Big 4 Auditor Financial Analyst
                </h6>
                <p className="text-dark-secondary">
                  Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                </p>
                <div className="author">
                  <div className="avatar">
                    <img
                      src="./assets/images/author_2.png"
                      alt=""
                    />
                  </div>
                  <div className="author-title">
                    <p className="name text-dark-primary">Jenna Ortega</p>
                    <p className="job text-dark-secondary">
                      Senior Accountant di <span>Gojek</span>
                    </p>
                  </div>
                </div>
                <div className="rating-price">
                  <div className="wrapper-star">
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_half.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                  </div>
                  <p className="rating text-dark-secondary">3.5 (86)</p>
                  <h4 className="price text-main-primary">Rp 300K</h4>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-learning">
                <img
                  src="./assets/images/learning_3.jpg"
                  alt="learning"
                />
                <h6
                  className="text-dark-primary"
                  style={{ marginBottom: '8px' }}
                >
                  Big 4 Auditor Financial Analyst
                </h6>
                <p className="text-dark-secondary">
                  Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                </p>
                <div className="author">
                  <div className="avatar">
                    <img
                      src="./assets/images/author_3.png"
                      alt=""
                    />
                  </div>
                  <div className="author-title">
                    <p className="name text-dark-primary">Jenna Ortega</p>
                    <p className="job text-dark-secondary">
                      Senior Accountant di <span>Gojek</span>
                    </p>
                  </div>
                </div>
                <div className="rating-price">
                  <div className="wrapper-star">
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_half.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                  </div>
                  <p className="rating text-dark-secondary">3.5 (86)</p>
                  <h4 className="price text-main-primary">Rp 300K</h4>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-learning">
                <img
                  src="./assets/images/learning_4.jpg"
                  alt="learning"
                />
                <h6
                  className="text-dark-primary"
                  style={{ marginBottom: '8px' }}
                >
                  Big 4 Auditor Financial Analyst
                </h6>
                <p className="text-dark-secondary">
                  Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                </p>
                <div className="author">
                  <div className="avatar">
                    <img
                      src="./assets/images/author_4.png"
                      alt=""
                    />
                  </div>
                  <div className="author-title">
                    <p className="name text-dark-primary">Jenna Ortega</p>
                    <p className="job text-dark-secondary">
                      Senior Accountant di <span>Gojek</span>
                    </p>
                  </div>
                </div>
                <div className="rating-price">
                  <div className="wrapper-star">
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_half.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                  </div>
                  <p className="rating text-dark-secondary">3.5 (86)</p>
                  <h4 className="price text-main-primary">Rp 300K</h4>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-learning">
                <img
                  src="./assets/images/learning_5.jpg"
                  alt="learning"
                />
                <h6
                  className="text-dark-primary"
                  style={{ marginBottom: '8px' }}
                >
                  Big 4 Auditor Financial Analyst
                </h6>
                <p className="text-dark-secondary">
                  Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                </p>
                <div className="author">
                  <div className="avatar">
                    <img
                      src="./assets/images/author_5.png"
                      alt=""
                    />
                  </div>
                  <div className="author-title">
                    <p className="name text-dark-primary">Jenna Ortega</p>
                    <p className="job text-dark-secondary">
                      Senior Accountant di <span>Gojek</span>
                    </p>
                  </div>
                </div>
                <div className="rating-price">
                  <div className="wrapper-star">
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_half.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                  </div>
                  <p className="rating text-dark-secondary">3.5 (86)</p>
                  <h4 className="price text-main-primary">Rp 300K</h4>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-learning">
                <img
                  src="./assets/images/learning_6.jpg"
                  alt="learning"
                />
                <h6
                  className="text-dark-primary"
                  style={{ marginBottom: '8px' }}
                >
                  Big 4 Auditor Financial Analyst
                </h6>
                <p className="text-dark-secondary">
                  Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                </p>
                <div className="author">
                  <div className="avatar">
                    <img
                      src="./assets/images/author_6.png"
                      alt=""
                    />
                  </div>
                  <div className="author-title">
                    <p className="name text-dark-primary">Jenna Ortega</p>
                    <p className="job text-dark-secondary">
                      Senior Accountant di <span>Gojek</span>
                    </p>
                  </div>
                </div>
                <div className="rating-price">
                  <div className="wrapper-star">
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_half.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                  </div>
                  <p className="rating text-dark-secondary">3.5 (86)</p>
                  <h4 className="price text-main-primary">Rp 300K</h4>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-learning">
                <img
                  src="./assets/images/learning_7.jpg"
                  alt="learning"
                />
                <h6
                  className="text-dark-primary"
                  style={{ marginBottom: '8px' }}
                >
                  Big 4 Auditor Financial Analyst
                </h6>
                <p className="text-dark-secondary">
                  Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                </p>
                <div className="author">
                  <div className="avatar">
                    <img
                      src="./assets/images/author_7.png"
                      alt=""
                    />
                  </div>
                  <div className="author-title">
                    <p className="name text-dark-primary">Jenna Ortega</p>
                    <p className="job text-dark-secondary">
                      Senior Accountant di <span>Gojek</span>
                    </p>
                  </div>
                </div>
                <div className="rating-price">
                  <div className="wrapper-star">
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_half.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                  </div>
                  <p className="rating text-dark-secondary">3.5 (86)</p>
                  <h4 className="price text-main-primary">Rp 300K</h4>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-learning">
                <img
                  src="./assets/images/learning_8.jpg"
                  alt="learning"
                />
                <h6
                  className="text-dark-primary"
                  style={{ marginBottom: '8px' }}
                >
                  Big 4 Auditor Financial Analyst
                </h6>
                <p className="text-dark-secondary">
                  Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                </p>
                <div className="author">
                  <div className="avatar">
                    <img
                      src="./assets/images/author_8.png"
                      alt=""
                    />
                  </div>
                  <div className="author-title">
                    <p className="name text-dark-primary">Jenna Ortega</p>
                    <p className="job text-dark-secondary">
                      Senior Accountant di <span>Gojek</span>
                    </p>
                  </div>
                </div>
                <div className="rating-price">
                  <div className="wrapper-star">
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_half.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                  </div>
                  <p className="rating text-dark-secondary">3.5 (86)</p>
                  <h4 className="price text-main-primary">Rp 300K</h4>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="card-learning">
                <img
                  src="./assets/images/learning_9.jpg"
                  alt="learning"
                />
                <h6
                  className="text-dark-primary"
                  style={{ marginBottom: '8px' }}
                >
                  Big 4 Auditor Financial Analyst
                </h6>
                <p className="text-dark-secondary">
                  Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                </p>
                <div className="author">
                  <div className="avatar">
                    <img
                      src="./assets/images/author_9.png"
                      alt=""
                    />
                  </div>
                  <div className="author-title">
                    <p className="name text-dark-primary">Jenna Ortega</p>
                    <p className="job text-dark-secondary">
                      Senior Accountant di <span>Gojek</span>
                    </p>
                  </div>
                </div>
                <div className="rating-price">
                  <div className="wrapper-star">
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_fill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_half.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                    <img
                      src="./assets/images/star_unfill.png"
                      alt=""
                    />
                  </div>
                  <p className="rating text-dark-secondary">3.5 (86)</p>
                  <h4 className="price text-main-primary">Rp 300K</h4>
                </div>
              </div>
            </a>
          </div>
        </section>
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
