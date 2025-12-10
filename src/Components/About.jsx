import { Coffee, Award, Heart, Users } from "lucide-react";
// Hapus karena tidak dipakai
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const FEATURES = [
  {
    icon: Coffee,
    title: "Premium Beans",
    description: "Sourced from the finest coffee plantations across Indonesia",
  },
  {
    icon: Award,
    title: "Expert Baristas",
    description: "Trained professionals ensuring every cup is perfect",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every drink is crafted with passion and care",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections one cup at a time",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0aW5nfGVufDF8fHx8MTc2NTI1OTc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee beans roasting"
                className="w-full h-[600px] object-cover"
              />

              {/* Overlay Stats */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                {[
                  { value: "1", label: "Outlets" },
                  { value: "100+", label: "Customers" },
                  { value: "5", label: "Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-3xl text-amber-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4 ">
              <span className="text-amber-900 font-medium ">Our Story</span>
            </div>

            <h2 className="text-4xl sm:text-5xl text-gray-900 font-semibold leading-tight mb-6">Brewing Excellence Since Day One</h2>

            <p className="text-lg text-gray-600 mb-6">
              At Coppie, we believe that great coffee starts with great beans. We source only the finest Arabica and Robusta beans from local Indonesian farmers, ensuring quality and sustainability in every cup.
            </p>

            <p className="text-lg text-gray-600 mb-12">Our passion is to create memorable coffee experiences that bring people together. From our signature blends to innovative seasonal specials, every drink tells a story.</p>

            {/* Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 font-medium mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
