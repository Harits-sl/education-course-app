import Divider from '../../atoms/Divider';
import List from '../../atoms/List';
import ListFooter from '../../molecules/ListFooter';

export default function Footer() {
  return (
    <footer className="bg-primary-background border border-border lg:mt-12">
      <div className="container lg:py-15">
        <div className="lg:flex">
          <div className="lg:flex-1">
            <a href="#">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-42.5 h-9 md:w-51 md:h-14"
              />
            </a>
            <div className="text-dark-primary leading-[140%] tracking-[0.2px] my-4">
              <p className="font-bold">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
              <p className="my-2">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
              <p>+62-877-7123-1234</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-2 lg:flex-row lg:items-start lg:justify-end lg:gap-12">
            <ListFooter title="Kategori">
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Digital & Teknologi
              </List>
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Pemasaran
              </List>
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Manajemen Bisnis
              </List>
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Pengembangan Diri
              </List>
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Desain
              </List>
            </ListFooter>
            <ListFooter title="Perusahaan">
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Tentang Kami
              </List>
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                FAQ
              </List>
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Kebijakan Privasi
              </List>
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Ketentuan Layanan
              </List>
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Bantuan
              </List>
            </ListFooter>
            <ListFooter title="Komunitas">
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Tips Sukses
              </List>
              <List
                margin="m-0"
                padding="p-0"
                href="/#"
              >
                Blog
              </List>
            </ListFooter>
          </div>
        </div>
        <Divider margin="mt-4 mb-4 lg:mt-13 md:mb-5 " />
        <div className="flex flex-col gap-3 md:flex-row-reverse md:justify-between md:items-center">
          <div className="flex gap-4">
            <a href="#">
              <img
                src="/icons/linkedin_icon.png"
                alt="linkedin"
                width={35}
              />
            </a>
            <a href="#">
              <img
                src="/icons/facebook_icon.png"
                alt="facebook"
                width={35}
              />
            </a>
            <a href="#">
              <img
                src="/icons/instagram_icon.png"
                alt="instagram"
                width={35}
              />
            </a>
            <a href="#">
              <img
                src="/icons/twitter_icon.png"
                alt="twitter"
                width={35}
              />
            </a>
          </div>
          <p className="font-dm-sans font-medium text-base text-dark-secondary leading-[140%] tracking[0.2px]">
            @2023 Gerobak Sayur All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
