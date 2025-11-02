export default function Navbar() {
  return (
    <header className="shadow-lg bg-primary-background border-y border-border md:shadow-none">
      <nav className=" container m-auto px-6 py-4 flex items-center justify-between">
        <a href="#">
          <img
            className="logo w-[152px] h-[42px] md:w-[237px] md:h-14"
            src="/images/logo.png"
            alt="logo"
          />
        </a>
        <div className="nav-list invisible">
          <a
            href="#"
            className="nav-item"
          >
            Kategori
          </a>
          <a
            href="#"
            className="profile"
          >
            <img
              src="./assets/images/avatar_icon.png"
              alt=""
            />
          </a>
        </div>
        <div className="hamburger hidden">&#9776;</div>
      </nav>
    </header>
  );
}
