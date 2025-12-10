import { useState } from "react";

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
  // {
  //   id: 7,
  //   name: "Croissant",
  //   category: "Pastries",
  //   price: "Rp 25.000",
  //   description: "Buttery French pastry",
  //   image: "https://source.unsplash.com/400x300/?croissant,pastry",
  // },
  // {
  //   id: 8,
  //   name: "Chocolate Muffin",
  //   category: "Pastries",
  //   price: "Rp 28.000",
  //   description: "Moist chocolate delight",
  //   image: "https://source.unsplash.com/400x300/?chocolatemuffin",
  // },
  // {
  //   id: 9,
  //   name: "Blueberry Scone",
  //   category: "Pastries",
  //   price: "Rp 30.000",
  //   description: "Fresh baked with blueberries",
  //   image: "https://source.unsplash.com/400x300/?blueberry,scone",
  // },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" ? menuItems : menuItems.filter((item) => item.category === activeCategory);

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
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 shadow-sm">
              {/* Gambar */}
              <img src={item.image} alt={item.name} className="w-full h-48 object-contain rounded-xl mb-4" />

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
    </section>
  );
}
