import { Language } from "./translations";

type Localized<T> = Record<Language, T>;

export interface CareerRole {
  title: Localized<string>;
  from: string;
  /** null significa que el puesto sigue vigente. */
  to: string | null;
  stack: string;
  /** Alcance del trabajo, sin cifras ni nombres internos de la empresa. */
  highlights: Localized<string[]>;
}

export interface CareerCompany {
  name: string;
  /** Ruta bajo /public; si falta se muestra la inicial de la empresa. */
  logo?: string;
  roles: CareerRole[];
}

const NO_HIGHLIGHTS: Localized<string[]> = { en: [], es: [] };

// Un puesto por empresa dentro de su bloque, como en LinkedIn, para que no parezca
// que hubo un cambio de trabajo en cada ascenso.
export const career: CareerCompany[] = [
  {
    name: "Dialpad",
    logo: "/images/companies/dialpad.jpg",
    roles: [
      {
        title: { en: "Software Engineer III", es: "Software Engineer III" },
        from: "2024",
        to: null,
        stack: "Vue.js · TypeScript · Pinia",
        highlights: NO_HIGHLIGHTS,
      },
      {
        title: { en: "Software Engineer II", es: "Software Engineer II" },
        from: "2023",
        to: "2024",
        stack: "Vue.js",
        highlights: NO_HIGHLIGHTS,
      },
    ],
  },
  {
    name: "Teladoc Health",
    logo: "/images/companies/teladoc-health.jpg",
    roles: [
      {
        title: { en: "Software Engineer II", es: "Software Engineer II" },
        from: "2022",
        to: "2023",
        stack: "React · GraphQL (Relay) · MobX",
        highlights: NO_HIGHLIGHTS,
      },
      {
        title: { en: "Software Engineer", es: "Software Engineer" },
        from: "2020",
        to: "2022",
        stack: "React · GraphQL · REST",
        highlights: NO_HIGHLIGHTS,
      },
    ],
  },
  {
    name: "Cooperativa Obrera",
    logo: "/images/companies/cooperativa-obrera.jpg",
    roles: [
      {
        title: { en: "Mobile Developer", es: "Desarrolladora móvil" },
        from: "2019",
        to: "2019",
        stack: "Ionic · Angular",
        highlights: {
          en: ["Built a mobile app with Ionic and Angular."],
          es: ["Desarrollé una app móvil con Ionic y Angular."],
        },
      },
    ],
  },
];

export const formatYears = (
  from: string,
  to: string | null,
  presentLabel: string
): string => (from === to ? from : `${from} – ${to ?? presentLabel}`);

/** Período total en la empresa: del primer puesto al último (o hasta hoy). */
export const getCompanyYears = (
  company: CareerCompany,
  presentLabel: string
): string => {
  const from = company.roles.reduce(
    (earliest, role) => (role.from < earliest ? role.from : earliest),
    company.roles[0].from
  );
  const isCurrent = company.roles.some((role) => role.to === null);
  const to = isCurrent
    ? null
    : company.roles.reduce(
        (latest, role) => ((role.to ?? "") > latest ? role.to ?? "" : latest),
        ""
      );
  return formatYears(from, to, presentLabel);
};
