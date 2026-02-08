import LWSLogo from "./assets/react.svg";

const Header = () => {
  return (
    <>
      <nav className="py-6 md:py-8 fixed top-0 w-full bg-[#191D26]! z-50">
        <div className="container mx-auto flex items-center  gap-x-3">
          <a href="/">
            <img className="h-11.25 " src={LWSLogo} alt="Lws" />
          </a>
          <h1 className="font-semibold text-[23px]">Fahad</h1>
        </div>
      </nav>
    </>
  );
};

export default Header;
