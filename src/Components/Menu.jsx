import { useState, useEffect } from "react";

const categories = ["All", "Coffee", "Non-Coffee"];

const menuItems = [
  {
    id: 1,
    name: "Mocho Pistacio",
    category: "Coffee",
    price: "Rp 28.000",
    description: "Bold espresso with Es",
    image: "/image/mochapistacio.jpg",
  },
  {
    id: 2,
    name: "Es Kopi Magang",
    category: "Coffee",
    price: "Rp 30.000",
    description: "Espresso with steamed milk foam",
    image: "/image/eskopimagang.jpeg",
  },
  {
    id: 3,
    name: "Kopi Laut",
    category: "Coffee",
    price: "Rp 35.000",
    description: "Sweet caramel meets espresso",
    image: "/image/kopilaut.jpg",
  },
  {
    id: 4,
    name: "Choco Pistachio",
    category: "Coffee",
    price: "Rp 30.000",
    description: "Chocolate and espresso blend",
    image: "/image/chocopistachio.jpg",
  },
  {
    id: 5,
    name: "Pure Matcha",
    category: "Non-Coffee",
    price: "Rp 34.000",
    description: "Premium Japanese matcha",
    image: "/image/puremaca.jpg",
  },
  {
    id: 6,
    name: "Saronde Island",
    category: "Non-Coffee",
    price: "Rp 35.000",
    description: "Rich Belgian chocolate",
    image: "/image/sarondeisland.jpg",
  },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" ? menuItems : menuItems.filter((item) => item.category === activeCategory);

  // Carousel logic
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

  // AUTO SLIDE
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
            <span className="text-amber-900">Full Menu</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">Our Complete Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our wide selection of beverages and treats</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
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
              <img src={item.image} alt={item.name} onClick={() => openCarousel(index)} className="w-full h-48 object-contain rounded-xl mb-4 cursor-pointer" />

              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-xl text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-sm ml-3">{item.category}</span>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-xl text-amber-900">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== CAROUSEL MODAL ===================== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeCarousel} // klik area luar → close
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()} // klik gambar tidak close
          >
            {/* CLOSE BUTTON (Desktop + Mobile) */}
            <button onClick={closeCarousel} className="absolute top-2 right-2 bg-black/50 text-white px-3 py-2 rounded-full text-lg md:text-xl">
              ✕
            </button>

            {/* Main Image */}
            <img src={filteredItems[currentIndex].image} className={`w-full max-h-[75vh] object-contain rounded-xl transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`} />

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ❮
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ❯
            </button>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 overflow-x-auto justify-center">
              {filteredItems.map((item, index) => (
                <img
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
