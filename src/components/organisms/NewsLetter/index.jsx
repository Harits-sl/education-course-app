import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

export default function NewsLetter() {
  return (
    <section
      id="banner-newsletter"
      className="container"
    >
      <div className="px-5 lg:px-35 flex flex-col items-center justify-center h-[400px] bg-[linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(/images/banner-newsletter.jpg)] bg-cover md:bg-size-[100%_200%] bg-center md:bg-position-[center_-160px] rounded-[10px]">
        <div className="mb-10">
          <p className="text-base text-center font-medium leading-[140%] tracking-[0.2px] text-light-secondary mb-1">
            NEWSLETTER
          </p>
          <h3 className="font-poppins font-semibold text-2xl text-center leading-[110%] text-light-primary mb-2.5">
            Mau Belajar Lebih Banyak?
          </h3>
          <p className="leading-[140%] tracking-[0.2px] text-center text-base-background">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik
            hariesok.id
          </p>
        </div>
        <form className="flex flex-col w-full gap-4 md:flex-row md:bg-primary-background md:rounded-[10px] md:pl-8 md:p-2">
          <Input
            type="email"
            name="email"
            placeholder="Masukan Emailmu"
            className="placeholder:text-dark-secondary text-center md:text-start bg-primary-background py-2.5"
            height="h-10 md:h-12"
            rounded="rounded-[10px]"
          />
          <Button
            secondary
            contained
            type="submit"
            padding="py-2.5 px-1.5 md:px-6.5"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
