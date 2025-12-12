import { useState, useEffect } from "react";

// Categories per language
const CATEGORIES = {
  en: ["All", "Coffee", "Non-Coffee"],
  id: ["Semua", "Kopi", "Non-Kopi"],
};

// Map English ↔ Indonesia
const CATEGORY_MAP = {
  en: { All: "Semua", Coffee: "Kopi", "Non-Coffee": "Non-Kopi" },
  id: { Semua: "All", Kopi: "Coffee", "Non-Kopi": "Non-Coffee" },
};

// Static texts per language
const TEXTS = {
  sectionLabel: { en: "Full Menu", id: "Menu Lengkap" },
  title: { en: "Our Complete Menu", id: "Menu Lengkap Kami" },
  description: {
    en: "Explore our wide selection of beverages and treats",
    id: "Jelajahi berbagai minuman dan camilan kami",
  },
};

// Menu items with multi-language support
const menuItems = [
  {
    id: 1,
    name: { en: "Mocho Pistacio", id: "Mocho Pistacio" },
    category: { en: "Coffee", id: "Kopi" },
    price: "Rp 28.000",
    description: { en: "Bold espresso with Es", id: "Espresso bold dengan es" },
    image: "/image/mochapistacio.jpg",
  },
  {
    id: 2,
    name: { en: "Es Kopi Magang", id: "Es Kopi Magang" },
    category: { en: "Coffee", id: "Kopi" },
    price: "Rp 30.000",
    description: {
      en: "Espresso with steamed milk foam",
      id: "Espresso dengan busa susu panas",
    },
    image: "/image/eskopimagang.jpeg",
  },
  {
    id: 3,
    name: { en: "Kopi Laut", id: "Kopi Laut" },
    category: { en: "Coffee", id: "Kopi" },
    price: "Rp 35.000",
    description: { en: "Sweet caramel meets espresso", id: "Karamel manis bertemu espresso" },
    image: "/image/kopilaut.jpg",
  },
  {
    id: 4,
    name: { en: "Choco Pistachio", id: "Choco Pistachio" },
    category: { en: "Coffee", id: "Kopi" },
    price: "Rp 30.000",
    description: { en: "Chocolate and espresso blend", id: "Campuran cokelat dan espresso" },
    image: "/image/chocopistachio.jpg",
  },
  {
    id: 5,
    name: { en: "Pure Matcha", id: "Pure Matcha" },
    category: { en: "Non-Coffee", id: "Non-Kopi" },
    price: "Rp 34.000",
    description: { en: "Premium Japanese matcha", id: "Matcha Jepang premium" },
    image: "/image/puremaca.jpg",
  },
  {
    id: 6,
    name: { en: "Saronde Island", id: "Saronde Island" },
    category: { en: "Non-Coffee", id: "Non-Kopi" },
    price: "Rp 35.000",
    description: { en: "Rich Belgian chocolate", id: "Cokelat Belgia kaya rasa" },
    image: "/image/sarondeisland.jpg",
  },
];

// Fungsi untuk translate kategori dari bahasa lama ke bahasa baru
function translateCategory(category, fromLang, toLang) {
  // Map ke English dulu
  const englishCategory = CATEGORY_MAP[fromLang][category] || category;
  // Map ke bahasa baru
  return Object.entries(CATEGORY_MAP[toLang]).find(([key, val]) => key === englishCategory || val === englishCategory)?.[0] || CATEGORIES[toLang][0];
}

export function Menu({ lang }) {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[lang][0]);
  const [prevLang, setPrevLang] = useState(lang);

  // Ketika bahasa berubah, tetap pertahankan kategori aktif
  useEffect(() => {
    if (prevLang !== lang) {
      setActiveCategory((prev) => translateCategory(prev, prevLang, lang));
      setPrevLang(lang);
    }
  }, [lang]);

  const filteredItems = activeCategory === CATEGORIES[lang][0] ? menuItems : menuItems.filter((item) => item.category[lang] === activeCategory);

  // Carousel state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCarousel = () => setIsOpen(false);

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
      setFade(false);
    }, 200);
  };

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 200);
  };

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => nextSlide(), 3500);
    return () => clearInterval(interval);
  }, [isOpen, currentIndex]);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
            <span className="text-amber-900">{TEXTS.sectionLabel[lang]}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">{TEXTS.title[lang]}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{TEXTS.description[lang]}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES[lang].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full transition-all ${activeCategory === category ? "bg-amber-900 text-white" : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 shadow-sm">
              <img src={item.image} alt={item.name[lang]} onClick={() => openCarousel(index)} className="w-full h-48 object-contain rounded-xl mb-4 cursor-pointer" />
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-xl text-gray-900 mb-1">{item.name[lang]}</h3>
                  <p className="text-gray-600 text-sm">{item.description[lang]}</p>
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-sm ml-3">{item.category[lang]}</span>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-xl text-amber-900">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeCarousel}>
          <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeCarousel} className="absolute top-2 right-2 bg-black/50 text-white px-3 py-2 rounded-full text-lg md:text-xl">
              ✕
            </button>
            <img src={filteredItems[currentIndex].image} className={`w-full max-h-[75vh] object-contain rounded-xl transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`} />
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ❮
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ❯
            </button>
            <div className="flex gap-3 mt-4 overflow-x-auto justify-center">
              {filteredItems.map((item, index) => (
                <img
                  loading="lazy"
                  key={item.id}
                  src={item.image}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${currentIndex === index ? "border-amber-500" : "border-transparent opacity-70"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
