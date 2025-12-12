import { useState } from "react";
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

  // ------- Carousel State -------
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeCarousel = () => setOpen(false);

  const next = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

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
          {images.map((img, i) => (
            <div key={img.id} className="relative overflow-hidden rounded-xl cursor-pointer" style={{ gridArea: img.area }} onClick={() => openCarousel(i)}>
              <img src={img.url} alt={img.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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

      {/* ---------------- CAROUSEL MODAL ---------------- */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeCarousel}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* CLOSE BUTTON */}
            <button onClick={closeCarousel} className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-xl md:text-2xl">
              ✕
            </button>

            {/* Main Image */}
            <img src={images[currentIndex].url} loading="lazy" className="w-full max-h-[75vh] object-contain rounded-xl" />

            {/* Prev */}
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl">
              ❮
            </button>

            {/* Next */}
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl">
              ❯
            </button>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-4 overflow-x-auto justify-center">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  src={img.url}
                  loading="lazy"
                  onClick={() => setCurrentIndex(i)}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${i === currentIndex ? "border-amber-500" : "border-transparent opacity-60"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
