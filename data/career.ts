import { Language } from "./translations";

export interface CareerEntry {
  company: string;
  role: string;
  from: string;
  /** null significa que el puesto sigue vigente. */
  to: string | null;
  stack: string;
}

// Puestos y fechas salen del perfil de LinkedIn; solo el rol de la cooperativa cambia con el idioma.
const COOPERATIVA_ROLE: Record<Language, string> = {
  en: "Mobile Developer",
  es: "Desarrolladora móvil",
};

export const getCareer = (language: Language): CareerEntry[] => [
  { company: "Dialpad", role: "Software Engineer III", from: "2024", to: null, stack: "Vue.js · TypeScript · Claude" },
  { company: "Dialpad", role: "Software Engineer II", from: "2023", to: "2025", stack: "Vue.js" },
  { company: "Teladoc Health", role: "Software Engineer II", from: "2022", to: "2023", stack: "React · Relay · MobX" },
  { company: "Teladoc Health", role: "Software Engineer", from: "2020", to: "2022", stack: "React · GraphQL · REST" },
  { company: "Cooperativa Obrera", role: COOPERATIVA_ROLE[language], from: "2019", to: "2019", stack: "Ionic · Angular" },
];
