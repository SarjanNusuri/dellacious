import { Coffee, Award, Heart, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Coffee,
    title: { en: "Premium Beans", id: "Biji Kopi Premium" },
    description: {
      en: "Sourced from the finest coffee plantations across Indonesia",
      id: "Diambil dari perkebunan kopi terbaik di seluruh Indonesia",
    },
  },
  {
    icon: Award,
    title: { en: "Expert Baristas", id: "Barista Ahli" },
    description: {
      en: "Trained professionals ensuring every cup is perfect",
      id: "Profesional terlatih untuk setiap cangkir yang sempurna",
    },
  },
  {
    icon: Heart,
    title: { en: "Made with Love", id: "Dibuat dengan Cinta" },
    description: {
      en: "Every drink is crafted with passion and care",
      id: "Setiap minuman dibuat dengan penuh cinta dan perhatian",
    },
  },
  {
    icon: Users,
    title: { en: "Community", id: "Komunitas" },
    description: {
      en: "Building connections one cup at a time",
      id: "Membangun koneksi satu cangkir kopi sekaligus",
    },
  },
];

const STATISTICS = [
  { value: "1", label: { en: "Outlets", id: "Outlet" } },
  { value: "100+", label: { en: "Customers", id: "Pelanggan" } },
  { value: "5", label: { en: "Rating", id: "Rating" } },
];

const TEXTS = {
  sectionLabel: { en: "Our Story", id: "Cerita Kami" },
  title: {
    en: "Brewing Excellence Since Day One",
    id: "Menyajikan Kopi Berkualitas Sejak Hari Pertama",
  },
  paragraph1: {
    en: "Dellacious Coffee began in 2016 with the owner's drive to share knowledge about coffee and his craft. The brand name comes from the owner's own name combined with the word Dellacious. The name had been used since 2010 as a personal pseudonym before becoming the identity of the business.",
    id: "Dellacious Coffee dimulai pada tahun 2016 karena keinginan pemilik untuk berbagi pengetahuan tentang kopi dan profesinya. Nama merek ini berasal dari nama pemilik yang digabung dengan kata Dellacious. Nama tersebut sudah digunakan sejak 2010 sebagai nama samaran sebelum menjadi identitas usaha.",
  },

  paragraph2: {
    en: "The journey brought many challenges. The business went through high and low periods, including moments of almost giving up during the COVID-19 pandemic. The team also had to move their sales location several times, including spending three years operating in an area surrounded by traditional markets.Dellacious Coffee continued to grow with support from Bank Indonesia as part of its SME program. This support helped improve productivity and strengthened the business, allowing it to stand and continue operating until today.",
    id: "Perjalanan ini penuh tantangan. Usaha ini melewati masa naik turun, termasuk hampir menyerah saat pandemi COVID-19. Tim juga harus beberapa kali pindah lokasi penjualan, termasuk tiga tahun beroperasi di area yang dikelilingi pasar tradisional.Dellacious Coffee terus berkembang dengan dukungan dari Bank Indonesia melalui program UMKM. Dukungan ini membantu meningkatkan produktivitas dan memperkuat usaha sehingga tetap bertahan dan beroperasi hingga sekarang.",
  },
};

export function About({ lang }) {
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
                {STATISTICS.map((stat) => (
                  <div key={stat.label.en} className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-3xl text-amber-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label[lang]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4 ">
              <span className="text-amber-900 font-medium">{TEXTS.sectionLabel[lang]}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl text-gray-900 font-semibold leading-tight mb-6">{TEXTS.title[lang]}</h2>

            <p className="text-lg text-gray-600 mb-6">{TEXTS.paragraph1[lang]}</p>

            <p className="text-lg text-gray-600 mb-12">{TEXTS.paragraph2[lang]}</p>

            {/* Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title.en} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 font-medium mb-1">{title[lang]}</h3>
                    <p className="text-gray-600 text-sm">{description[lang]}</p>
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
