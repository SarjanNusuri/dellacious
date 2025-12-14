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
      <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-2">
        <button
          onClick={() => toggleLang("id")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full shadow transition
      ${lang === "id" ? "bg-red-600 text-white" : "bg-gray-800 text-white hover:scale-105"}`}
        >
          🇮🇩 ID
        </button>

        <button
          onClick={() => toggleLang("en")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full shadow transition
      ${lang === "en" ? "bg-blue-600 text-white" : "bg-gray-800 text-white hover:scale-105"}`}
        >
          🇬🇧 EN
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
