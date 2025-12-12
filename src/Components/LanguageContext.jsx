import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("id"); // id / en

  const translations = {
    id: {
      whatsapp_label: "Chat via WhatsApp",
      whatsapp_title: "Hubungi kami lewat WhatsApp",
      menu_title: "Menu Lengkap Kami",
      menu_subtitle: "Jelajahi pilihan minuman kami",
    },
    en: {
      whatsapp_label: "Chat via WhatsApp",
      whatsapp_title: "Contact us via WhatsApp",
      menu_title: "Our Complete Menu",
      menu_subtitle: "Explore our beverages selection",
    },
  };

  const t = (key) => translations[lang][key] || key;

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
