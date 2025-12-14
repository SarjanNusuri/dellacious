import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

function Header({ lang, toggleLang }) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bgIndex, setBgIndex] = useState(0); // index background

  // Daftar gambar background
  const bgImages = ["/image/dellacious.png", "/image/dellacious.png", "/image/dellacious1.jpeg", "/image/dellacious2.jpeg", "/image/dellacious3.jfif", "/image/dellacious5.jfif"];

  // Ganti gambar setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // 5000 ms = 5 detik
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setDropdownOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const texts = {
    heroTitle: {
      en: "Enjoy Your Life <br /> With Coffee",
      id: "Nikmati Hidupmu <br /> Dengan Kopi",
    },
    heroDesc: {
      en: "A simple coffee shop with the best roasted coffee beans.",
      id: "Sebuah kedai kopi sederhana dengan biji kopi terbaik.",
    },
    orderNow: {
      en: "Order Now",
      id: "Pesan Sekarang",
    },
    shopee: {
      en: "ShopeeFood",
      id: "ShopeeFood",
    },
    gofood: {
      en: "GoFood",
      id: "GoFood",
    },
  };

  return (
    <header
      id="home"
      className="hero-bg relative text-white pt-6 pb-20 md:pb-32 overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ backgroundImage: `url('${bgImages[bgIndex]}')` }} // ganti bg otomatis
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* NAVBAR */}
      <nav className="container mx-auto px-6 relative z-20 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/image/logo.png" alt="DellaCious Logo" loading="lazy" className="h-16 w-auto md:h-24 object-contain" />
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <a href="#home" className="hover:text-yellow-500 transition">
            {lang === "en" ? "Home" : "Beranda"}
          </a>
          <a href="#products" className="hover:text-yellow-500 transition">
            {lang === "en" ? "Products" : "Produk"}
          </a>
          <a href="#about" className="hover:text-yellow-500 transition">
            {lang === "en" ? "About" : "Tentang"}
          </a>
          <a href="#menu" className="hover:text-yellow-500 transition">
            {lang === "en" ? "Menu" : "Menu"}
          </a>
          <a href="#gallery" className="hover:text-yellow-500 transition">
            {lang === "en" ? "Gallery" : "Galeri"}
          </a>
        </div>

        <div className="text-2xl hidden md:block">
          <i className="fas fa-shopping-cart"></i>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white relative z-30">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute z-50 right-6 top-20 bg-gradient-to-r from-amber-950 to-black text-white rounded-lg shadow-sm shadow-white w-48 py-3 md:hidden backdrop-blur-sm">
          <a onClick={() => setOpen(false)} href="#home" className="block px-4 py-2 hover:text-yellow-500">
            {lang === "en" ? "Home" : "Beranda"}
          </a>
          <a onClick={() => setOpen(false)} href="#products" className="block px-4 py-2 hover:text-yellow-500">
            {lang === "en" ? "Products" : "Produk"}
          </a>
          <a onClick={() => setOpen(false)} href="#about" className="block px-4 py-2 hover:text-yellow-500">
            {lang === "en" ? "About" : "Tentang"}
          </a>
          <a onClick={() => setOpen(false)} href="#menu" className="block px-4 py-2 hover:text-yellow-500">
            {lang === "en" ? "Menu" : "Menu"}
          </a>
          <a onClick={() => setOpen(false)} href="#gallery" className="block px-4 py-2 hover:text-yellow-500">
            {lang === "en" ? "Gallery" : "Galeri"}
          </a>
        </div>
      )}

      {/* HERO CONTENT */}
      <div className="container mx-auto px-6 relative z-10 mt-20 md:mt-32 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-serif leading-tight" dangerouslySetInnerHTML={{ __html: texts.heroTitle[lang] }}></h1>
        <p className="mt-4 text-xl font-light max-w-lg mx-auto md:mx-0">{texts.heroDesc[lang]}</p>

        <div className="relative inline-block mt-8">
          {!dropdownOpen && (
            <button onClick={() => setDropdownOpen(true)} className="px-8 py-3 bg-yellow-500 text-brown-dark font-semibold text-lg rounded hover:bg-yellow-600 transition flex items-center gap-2">
              {texts.orderNow[lang]}
            </button>
          )}
          {dropdownOpen && (
            <div className="flex flex-col gap-3 animate-fadeIn">
              <a
                href="https://shopee.co.id/universal-link/now-food/shop/22207497"
                target="_blank"
                className="px-3 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> {texts.shopee[lang]}
              </a>
              <a
                href="https://r.grab.com/g/6-20251210_220201_1907C4EE05034E70BC3459F32DBE378D_MEXMPS-6-C22CFAWDA2XVKE"
                target="_blank"
                className="px-3 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> {texts.gofood[lang]}
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
