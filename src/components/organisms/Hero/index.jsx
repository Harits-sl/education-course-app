import Button from '../../atoms/Button';

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="container"
      >
        <div className="px-5 flex flex-col items-center justify-center h-[400px] bg-[linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(/images/hero_img.jpg)] bg-cover md:bg-size-[100%_200%] bg-center md:bg-position-[center_-160px] rounded-[10px]">
          <div className="text-light-primary text-center mb-6">
            <h1 className=" text-2xl font-poppins font-bold leading-[110%] ">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className="mt-3 font-medium leading-[140%] tracking-[0.2px]">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak
              hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
            </p>
          </div>
          <Button
            primary
            contained
            fontWeight="regular"
          >
            Temukan Video Course untuk Dipelajari!
          </Button>
        </div>
      </section>
    </>
  );
}
