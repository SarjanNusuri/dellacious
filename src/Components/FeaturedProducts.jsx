import { useState } from "react";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: { en: "Es Kopi Alex", id: "Es Kopi Alex" },
    description: {
      en: "Creamy espresso with milk over ice",
      id: "Espresso krimi dengan susu di atas es",
    },
    price: "Rp 30.000",
    rating: 4.8,
    image: "/image/eskopialex.WEBP",
    tag: { en: "Bestseller", id: "Terlaris" },
  },
  {
    id: 2,
    name: { en: "Es Kopi Begal", id: "Es Kopi Begal" },
    description: {
      en: "Handcrafted with perfect foam art",
      id: "Dibuat dengan seni foam yang sempurna",
    },
    price: "Rp 30.000",
    rating: 4.9,
    image: "/image/eskopibegal.WEBP",
    tag: { en: "Popular", id: "Populer" },
  },
  {
    id: 3,
    name: { en: "Americano", id: "Americano" },
    description: {
      en: "Rich and bold espresso shot",
      id: "Espresso kaya rasa dan bold",
    },
    price: "Rp 22.000",
    rating: 4.7,
    image: "/image/americano.jpg",
    tag: { en: "Classic", id: "Klasik" },
  },
];

const TEXTS = {
  sectionLabel: { en: "Our Menu", id: "Menu Kami" },
  title: { en: "Featured Products", id: "Produk Unggulan" },
  description: {
    en: "Discover our most loved beverages, crafted to perfection",
    id: "Temukan minuman favorit kami, dibuat dengan sempurna",
  },
  reviews: { en: "(250+ reviews)", id: "(250+ ulasan)" },
};

export function FeaturedProducts({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
            <span className="text-amber-900">{TEXTS.sectionLabel[lang]}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">{TEXTS.title[lang]}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{TEXTS.description[lang]}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-80 overflow-hidden cursor-pointer">
                <img src={product.image} alt={product.name[lang]} onClick={() => openModal(product.image)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                {/* Tag */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-amber-900 text-white rounded-full text-sm">{product.tag[lang]}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="text-gray-900">{product.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">{TEXTS.reviews[lang]}</span>
                </div>

                <h3 className="text-2xl text-gray-900 mb-2">{product.name[lang]}</h3>
                <p className="text-gray-600 mb-4">{product.description[lang]}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl text-amber-900">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== MODAL IMAGE ===================== */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button onClick={closeModal} className="absolute top-2 right-2 bg-black/50 text-white px-3 py-2 rounded-full text-lg md:text-xl">
              ✕
            </button>

            {/* Main Image */}
            <img src={currentImage} className="w-full max-h-[80vh] object-contain rounded-xl" />
          </div>
        </div>
      )}
    </section>
  );
}
