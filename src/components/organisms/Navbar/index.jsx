import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Divider from '../../atoms/Divider';

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
              <a
                href="#"
                className="flex items-center font-medium text-dark-secondary mt-2"
              >
                <img
                  src="/images/avatar_icon.png"
                  className="w-11 h-11 rounded-[10px] mr-2"
                />
              </a>
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
              <div className="md:hidden block absolute top-18 bg-primary-background left-0 w-full border-b border-border">
                <div className="container">
                  <a
                    href="#"
                    className="font-medium text-dark-secondary"
                  >
                    Kategori
                  </a>
                  <Divider margin="my-2" />
                  <a
                    href="#"
                    className="flex items-center font-medium text-dark-secondary mt-2"
                  >
                    <img
                      src="/images/avatar_icon.png"
                      className="w-11 h-11 rounded-[10px] mr-2"
                    />
                    Profile
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </nav>
    </header>
  );
}
