import { useState } from 'react';
import { LogOut, Menu, X } from 'lucide-react';
import Divider from '../../atoms/Divider';
import Item from './item';

export default function Navbar(props) {
  const { isUseList = true } = props;

  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-lg bg-primary-background border-y border-border md:shadow-none">
      <nav className="container flex items-center justify-between">
        <a href="#">
          <img
            className="logo w-[152px] h-[42px] md:w-[237px] md:h-14"
            src="/images/logo.png"
            alt="logo"
          />
        </a>

        {isUseList && (
          <>
            {/* Desktop Menu */}
            <div className="flex items-center gap-9 invisible md:visible">
              <a
                href="#"
                className="font-medium text-dark-secondary"
              >
                Kategori
              </a>
              <div className="md:relative">
                <img
                  src="/images/avatar_icon.png"
                  className="w-11 h-11 rounded-[10px] mr-2"
                  onClick={() => setOpen(!open)}
                />
                {open && (
                  <div className=" block absolute top-14 bg-primary-background right-0 border-b border-border rounded-b-sm md:shadow-2xl">
                    <div className="">
                      <Item href="/#">Profil Saya</Item>
                      <Item href="/#">Kelas Saya</Item>
                      <Item href="/#">Pesanan Saya</Item>
                      <Item href="/login">
                        <div className="inline-flex items-center gap-1 text-tertiary">
                          Keluar <LogOut size={24} />
                        </div>
                      </Item>
                      <Divider margin="mt-2 mb-1" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {open && (
              <div className="md:hidden block absolute top-14 bg-primary-background left-0 w-full border-b border-border rounded-b-sm">
                <div className="">
                  <Item href="/#">Kategori</Item>
                  <Item href="/#">Profil Saya</Item>
                  <Item href="/#">Kelas Saya</Item>
                  <Item href="/#">Pesanan Saya</Item>
                  <Item href="/login">
                    <div className="inline-flex items-center gap-1 text-tertiary">
                      Keluar <LogOut size={24} />
                    </div>
                  </Item>
                  <Divider margin="mt-2 mb-1" />
                </div>
              </div>
            )}
          </>
        )}
      </nav>
    </header>
  );
}
