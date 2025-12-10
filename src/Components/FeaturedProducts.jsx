import { Star } from "lucide-react";
// Hapus karena tidak digunakan
// import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: "Es Kopi Alex",
    description: "Creamy espresso with milk over ice",
    price: "Rp 30.000",
    rating: 4.8,
    image: "/image/eskopialex.WEBP",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Es Kopi Begal",
    description: "Handcrafted with perfect foam art ",
    price: "Rp 30.000",
    rating: 4.9,
    image: "/image/eskopibegal.WEBP",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Americano",
    description: "Rich and bold espresso shot",
    price: "Rp 22.000",
    rating: 4.7,
    image: "/image/americano.jpg",
    tag: "Classic",
  },
];

export function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
            <span className="text-amber-900">Our Menu</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover our most loved beverages, crafted to perfection</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                {/* Tag */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-amber-900 text-white rounded-full text-sm">{product.tag}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="text-gray-900">{product.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">(250+ reviews)</span>
                </div>

                <h3 className="text-2xl text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl text-amber-900">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
