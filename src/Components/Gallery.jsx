import { Instagram } from "lucide-react";

export function Gallery() {
  const images = [
    { id: 1, url: "/image/signature.jpg", alt: "Image 1", area: "1 / 1 / 3 / 3" },
    { id: 2, url: "/image/galeri1.jpg", alt: "Image 2", area: "3 / 1 / 4 / 2" },
    { id: 3, url: "/image/galeri.jpg", alt: "Image 3", area: "3 / 2 / 4 / 3" },
    { id: 4, url: "/image/galeri2.jpg", alt: "Image 4", area: "1 / 3 / 2 / 4" },
    { id: 5, url: "/image/galeri3.jpg", alt: "Image 5", area: "1 / 4 / 2 / 5" },
    { id: 6, url: "/image/galeri8.jpg", alt: "Image 6", area: "2 / 3 / 4 / 5" },
    { id: 7, url: "/image/galeri5.jpg", alt: "Image 7", area: "4 / 1 / 6 / 4" },
    { id: 8, url: "/image/galeri4.jpg", alt: "Image 8", area: "1 / 5 / 4 / 6" },
    { id: 9, url: "/image/galeri6.jpg", alt: "Image 9", area: "4 / 4 / 6 / 6" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
            <span className="text-amber-900 font-semibold">Gallery</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">Moments at Coppie</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">A glimpse into our coffee culture and community</p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(5, minmax(100px, auto))",
          }}
        >
          {images.map((img) => (
            <div key={img.id} className="relative overflow-hidden rounded-xl" style={{ gridArea: img.area }}>
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Instagram */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Follow us on Instagram for more updates</p>
          <a
            href="https://www.instagram.com/dellaciouscoffee_?igsh=cTNhcHY1eHptNnY4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            dellacious coffee
          </a>
        </div>
      </div>
    </section>
  );
}
