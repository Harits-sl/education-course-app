import List from '../../atoms/List';
import ListCategory from '../../molecules/ListCategory';
import CardLearning from '../CardLearning';

export default function VideoCollection() {
  const dataLearning = [
    {
      imgUrl: '/images/learning_1.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      authorUrl: '/images/author_1.png',
      authorName: 'Jenna Ortega',
      authorJob: 'Senior Accountant',
      authorCompany: 'Gojek',
      rating: 3.5,
      totalReview: 86,
      price: 300000,
    },
    {
      imgUrl: '/images/learning_2.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      authorUrl: '/images/author_2.png',
      authorName: 'Jenna Ortega',
      authorJob: 'Senior Accountant',
      authorCompany: 'Gojek',
      rating: 3.5,
      totalReview: 86,
      price: 300000,
    },
    {
      imgUrl: '/images/learning_3.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      authorUrl: '/images/author_3.png',
      authorName: 'Jenna Ortega',
      authorJob: 'Senior Accountant',
      authorCompany: 'Gojek',
      rating: 3.5,
      totalReview: 86,
      price: 300000,
    },
    {
      imgUrl: '/images/learning_4.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      authorUrl: '/images/author_4.png',
      authorName: 'Jenna Ortega',
      authorJob: 'Senior Accountant',
      authorCompany: 'Gojek',
      rating: 3.5,
      totalReview: 86,
      price: 300000,
    },
    {
      imgUrl: '/images/learning_5.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      authorUrl: '/images/author_5.png',
      authorName: 'Jenna Ortega',
      authorJob: 'Senior Accountant',
      authorCompany: 'Gojek',
      rating: 3.5,
      totalReview: 86,
      price: 300000,
    },
    {
      imgUrl: '/images/learning_6.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      authorUrl: '/images/author_6.png',
      authorName: 'Jenna Ortega',
      authorJob: 'Senior Accountant',
      authorCompany: 'Gojek',
      rating: 3.5,
      totalReview: 86,
      price: 300000,
    },
    {
      imgUrl: '/images/learning_7.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      authorUrl: '/images/author_7.png',
      authorName: 'Jenna Ortega',
      authorJob: 'Senior Accountant',
      authorCompany: 'Gojek',
      rating: 3.5,
      totalReview: 86,
      price: 300000,
    },
    {
      imgUrl: '/images/learning_8.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      authorUrl: '/images/author_8.png',
      authorName: 'Jenna Ortega',
      authorJob: 'Senior Accountant',
      authorCompany: 'Gojek',
      rating: 3.5,
      totalReview: 86,
      price: 300000,
    },
    {
      imgUrl: '/images/learning_9.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      authorUrl: '/images/author_9.png',
      authorName: 'Jenna Ortega',
      authorJob: 'Senior Accountant',
      authorCompany: 'Gojek',
      rating: 3.5,
      totalReview: 86,
      price: 300000,
    },
  ];

  return (
    <section id="collection">
      <div className="container leading-[110%]">
        <h3 className="font-poppins font-semibold  text-2xl text-dark-primary">Koleksi Video Pembelajaran Unggulan</h3>
        <p className="mt-2.5 text-dark-secondary font-medium tracking-[0.2px]">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>
      <div className="category">
        <ListCategory>
          <List
            margin="ml-5 sm:ml-0"
            href="/#"
            isActive
          >
            Semua Kelas
          </List>
          <List href="/#">Pemasaran</List>
          <List href="/#">Desain</List>
          <List href="/#">Pengembangan Diri</List>
          <List
            margin="mr-5 sm:mr-0"
            href="/#"
          >
            Bisnis
          </List>
        </ListCategory>
      </div>
      <div
        id="learning"
        className="container grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-6 md:gap-y-8"
      >
        {dataLearning.map((data, index) => {
          return (
            <CardLearning
              key={index}
              imgUrl={data.imgUrl}
              title={data.title}
              desc={data.desc}
              authorUrl={data.authorUrl}
              authorName={data.authorName}
              authorJob={data.authorJob}
              authorCompany={data.authorCompany}
              rating={data.rating}
              totalReview={data.totalReview}
              price={data.price}
            />
          );
        })}
      </div>
    </section>
  );
}
