import { createContext, useContext, useEffect, useState } from "react";
import { Language, Translations, translations } from "../data/translations";

const STORAGE_KEY = "portfolio-language";

interface LanguageContextValue {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  t: translations.en,
  toggleLanguage: () => undefined,
});

const readSavedLanguage = (): Language | null => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "es" ? saved : null;
  } catch {
    // localStorage puede estar bloqueado (modo privado); se ignora.
    return null;
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Se arranca en inglés tanto en servidor como en cliente para no romper la hidratación;
  // el idioma guardado o el del navegador se aplica después de montar.
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = readSavedLanguage();
    if (saved) {
      setLanguage(saved);
    } else if (navigator.language.toLowerCase().startsWith("es")) {
      setLanguage("es");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    const nextLanguage: Language = language === "en" ? "es" : "en";
    setLanguage(nextLanguage);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // Sin storage no se recuerda la elección, pero el cambio igual funciona.
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, t: translations[language], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
