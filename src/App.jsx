import { useState, useEffect } from "react";
import Header from "./Components/Header";
import { About } from "./Components/About";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { Menu } from "./Components/Menu";
import { Gallery } from "./Components/Gallery";
import { Footer } from "./Components/Footer";
import { WhatsAppFloating } from "./Components/WhatsAppFloating";

function App() {
  // State bahasa: "id" untuk Indonesia, "en" untuk English
  const [lang, setLang] = useState("en");

  // Ambil bahasa browser saat load pertama
  useEffect(() => {
    const defaultLang = navigator.language.startsWith("id") ? "id" : "en";
    setLang(defaultLang);
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  };

  return (
    <>
      {/* Tombol ubah bahasa */}
      <div className="fixed top-4 right-4 z-50">
        <button onClick={toggleLang} className="px-4 py-2 bg-amber-900 text-white rounded-full shadow hover:scale-105 transition">
          {lang === "id" ? "Bahasa Indonesia" : "English"}
        </button>
      </div>

      <WhatsAppFloating />
      <Header lang={lang} />
      <FeaturedProducts lang={lang} />
      <About lang={lang} />
      <Menu lang={lang} />
      <Gallery lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

export default App;
