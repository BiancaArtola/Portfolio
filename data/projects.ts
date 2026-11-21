import { Language } from "./translations";

export interface Project {
  id: number;
  title: string;
  description: Record<Language, string>;
  stack: string[];
  /** Sin link cuando el repositorio es privado. */
  gitHubLink?: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Facturador RCEL",
    description: {
      en: "Chrome extension that automates issuing invoices on Argentina's tax portal (ARCA). It reads payments from screenshots (OCR), PDFs or Excel files, builds a batch and loads it screen by screen, with multi-issuer profiles. Unit and end-to-end tested.",
      es: "Extensión de Chrome que automatiza la emisión de facturas en el portal de ARCA. Lee cobros desde capturas (OCR), PDF o Excel, arma un lote y lo carga pantalla por pantalla, con perfiles de varios emisores. Probada con tests unitarios y end-to-end.",
    },
    stack: ["React", "TypeScript", "WXT", "Vitest", "Playwright"],
  },
  {
    id: 2,
    title: "MiPlata",
    description: {
      en: "Personal finance app to track expenses, fixed costs and categories in ARS and USD, with exchange rates by month and Excel/CSV import.",
      es: "App de finanzas personales para registrar gastos, gastos fijos y categorías en ARS y USD, con cotizaciones por mes e importación desde Excel/CSV.",
    },
    stack: ["React", "TypeScript", "Vite", "Supabase"],
  },
  {
    id: 3,
    title: "Final Project: Search for a court",
    description: {
      en: "Mobile app for renting sports courts in Bahía Blanca, focused on user-centered design. Includes a companion website to load data.",
      es: "App móvil para alquilar canchas deportivas en Bahía Blanca, con foco en el diseño centrado en el usuario. Incluye un sitio complementario para cargar datos.",
    },
    stack: ["Ionic", "Angular", "Firebase"],
    gitHubLink: "https://github.com/BiancaArtola/finalproject",
  },
];
