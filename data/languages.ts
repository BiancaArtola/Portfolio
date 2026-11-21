import { Language } from "./translations";

export interface SpokenLanguage {
  id: string;
  names: Record<Language, string>;
  levels: Record<Language, string>;
}

export const spokenLanguages: SpokenLanguage[] = [
  {
    id: "es",
    names: { en: "Spanish", es: "Español" },
    levels: { en: "Native", es: "Nativo" },
  },
  {
    id: "en",
    names: { en: "English", es: "Inglés" },
    levels: { en: "Advanced (C1)", es: "Avanzado (C1)" },
  },
];
