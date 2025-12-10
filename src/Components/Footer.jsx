import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/dellaciouscoffee_?igsh=cTNhcHY1eHptNnY4" },
  { icon: Facebook, href: "https://www.facebook.com/dellaciouscoffee" },
  { icon: Twitter, href: "https://twitter.com/dellaciouscoffee" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-950 to-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">DellaCious Coffee</h3>
            <p className="text-gray-300 mb-6">Crafting the perfect cup of coffee, one brew at a time. Experience premium quality in every sip.</p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <a key={idx} href={href} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Products", "About Us", "Menu", "Gallery"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "")}`} className="text-gray-300 hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {["FAQs", "Delivery Info", "Track Order", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span>
                  Jl. Pattimura, Kompleks Pasar Sentral Kota Gorontalo, Kelurahan Limba U 2, Kecamatan Kota Selatan.
                  <br />
                  Gorontalo, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>+62 822-9157-1120</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>hello@coppie.coffee</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Coppie Coffee. All rights reserved. Made with ❤️ in Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
