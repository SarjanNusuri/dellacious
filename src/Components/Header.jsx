import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setDropdownOpen(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="home" className="hero-bg relative text-white pt-6 pb-20 md:pb-32 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/image/dellacious.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* NAVBAR */}
      <nav className="container mx-auto px-6 relative z-20 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
          <img src="/image/logo.png" alt="DellaCious Logo" className="h-16 w-auto md:h-24 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <a href="#home" className="hover:text-yellow-500 transition">
            Home
          </a>
          <a href="#products" className="hover:text-yellow-500 transition">
            Products
          </a>
          <a href="#about" className="hover:text-yellow-500 transition">
            About
          </a>
          <a href="#menu" className="hover:text-yellow-500 transition">
            Menu
          </a>
          <a href="#gallery" className="hover:text-yellow-500 transition">
            Gallery
          </a>
        </div>

        {/* Cart Icon */}
        <div className="text-2xl hidden md:block">
          <i className="fas fa-shopping-cart"></i>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white relative z-30">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute z-50 right-6 top-20 bg-gradient-to-r from-amber-950 to-black text-white rounded-lg shadow-sm shadow-white w-48 py-3 md:hidden backdrop-blur-sm">
          <a onClick={() => setOpen(false)} href="#home" className="block px-4 py-2 hover:text-yellow-500">
            Home
          </a>
          <a onClick={() => setOpen(false)} href="#products" className="block px-4 py-2 hover:text-yellow-500">
            Products
          </a>
          <a onClick={() => setOpen(false)} href="#about" className="block px-4 py-2 hover:text-yellow-500">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#menu" className="block px-4 py-2 hover:text-yellow-500">
            Menu
          </a>
          <a onClick={() => setOpen(false)} href="#gallery" className="block px-4 py-2 hover:text-yellow-500">
            Gallery
          </a>
        </div>
      )}

      {/* HERO CONTENT */}
      <div className="container mx-auto px-6 relative z-10 mt-20 md:mt-32 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-serif leading-tight">
          Enjoy Your Life <br /> With Coffee
        </h1>

        <p className="mt-4 text-xl font-light max-w-lg mx-auto md:mx-0">A simple coffee shop with the best roasted coffee beans.</p>

        {/* P E S A N  S E K A R A N G  +  D R O P D O W N */}
        {/* BUTTON AREA */}
        <div className="relative inline-block mt-8">
          {/* Jika dropdown belum dibuka, tampilkan tombol utama */}
          {!dropdownOpen && (
            <button
              onClick={() => setDropdownOpen(true)}
              className="px-8 py-3 bg-yellow-500 text-brown-dark font-semibold text-lg 
                       rounded hover:bg-yellow-600 transition flex items-center gap-2"
            >
              Pesan Sekarang
            </button>
          )}

          {/* Jika dropdown dibuka, tombol utama diganti dengan 2 tombol */}
          {dropdownOpen && (
            <div className="flex flex-col gap-3 animate-fadeIn">
              <a
                href="https://shopee.co.id/universal-link/now-food/shop/22207497?deep_and_deferred=1&shareChannel=copy_link"
                target="_blank"
                className="px-3 py-3 rounded-lg bg-orange-500 text-white font-semibold 
                          hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                ShopeeFood
              </a>

              <a
                href="https://r.grab.com/g/6-20251210_220201_1907C4EE05034E70BC3459F32DBE378D_MEXMPS-6-C22CFAWDA2XVKE"
                target="_blank"
                className="px-3 py-3 rounded-lg bg-green-500 text-white font-semibold 
                          hover:bg-green-600 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                GoFood
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
