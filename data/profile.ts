import { Language } from "./translations";

export const PROFILE = {
  name: "Bianca Artola",
  email: "bian.artola@hotmail.com",
  github: "https://github.com/BiancaArtola",
  linkedin: "https://www.linkedin.com/in/bianca-artola/",
  siteUrl: "https://portfolio-beta-ten-19.vercel.app",
  location: "Bahía Blanca, Argentina",
} as const;

/** Ruta pública del CV en PDF para cada idioma. */
export const CV_FILES: Record<Language, string> = {
  en: "/cv-en.pdf",
  es: "/cv-es.pdf",
};

export interface EducationEntry {
  institution: string;
  title: Record<Language, string>;
  from: string;
  to: string;
}

export const education: EducationEntry[] = [
  {
    institution: "Universidad Nacional del Sur",
    title: {
      en: "Systems Engineering",
      es: "Ingeniería en Sistemas de Información",
    },
    from: "2015",
    to: "2020",
  },
  {
    institution: 'Escuela Superior de Comercio "Prudencio Cornejo"',
    title: { en: "Informatics bachelor", es: "Bachiller en informática" },
    from: "2012",
    to: "2014",
  },
];
