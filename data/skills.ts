import { Language } from "./translations";

/** Los nombres de tecnologías no se traducen; las descripciones sí. */
export type SkillItem = string | Record<Language, string>;

export interface SkillGroup {
  id: string;
  labels: Record<Language, string>;
  items: SkillItem[];
}

export const getSkillLabel = (item: SkillItem, language: Language): string =>
  typeof item === "string" ? item : item[language];

export const skillGroups: SkillGroup[] = [
  {
    id: "core",
    labels: { en: "Core", es: "Principales" },
    items: [
      "React",
      "Vue.js (2 & 3)",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Next.js",
    ],
  },
  {
    id: "ecosystem",
    labels: { en: "Frameworks & data", es: "Frameworks y datos" },
    items: [
      "Pinia",
      "Vuex",
      "MobX",
      "Material UI",
      "Tailwind CSS",
      "Storybook",
      "GraphQL (Relay)",
      "REST (Axios)",
      "OpenAPI",
      "SQL",
      "Supabase",
      "Ionic",
      "Angular",
    ],
  },
  {
    id: "workflow",
    labels: { en: "Testing & workflow", es: "Testing y forma de trabajo" },
    items: [
      "Jest",
      "Vitest",
      "Playwright",
      "ESLint",
      "Git / GitHub",
      "JIRA",
      "Postman",
      { en: "Agile methodologies", es: "Metodologías ágiles" },
      { en: "Microservices", es: "Microservicios" },
      { en: "Feature flags & experiments", es: "Feature flags y experimentos" },
    ],
  },
  {
    id: "ai-design",
    labels: { en: "AI & design", es: "IA y diseño" },
    items: [
      {
        en: "Claude (Claude Code, agents, skills)",
        es: "Claude (Claude Code, agentes, skills)",
      },
      "ChatGPT",
      "Gemini",
      "Figma",
      "Figma Make",
      "Claude Design",
    ],
  },
];
