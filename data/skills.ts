import { Language } from "./translations";

export interface SkillGroup {
  id: string;
  labels: Record<Language, string>;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    labels: { en: "Frontend", es: "Frontend" },
    items: ["React", "Vue.js", "TypeScript", "JavaScript", "Next.js", "HTML", "CSS", "Material UI", "styled-components", "Tailwind CSS", "Storybook"],
  },
  {
    id: "data",
    labels: { en: "Data & state", es: "Datos y estado" },
    items: ["GraphQL (Relay)", "REST (Axios)", "MobX", "Supabase"],
  },
  {
    id: "quality",
    labels: { en: "Testing & tooling", es: "Testing y herramientas" },
    items: ["Jest", "Vitest", "Playwright", "ESLint", "Vite", "Git / GitHub", "Postman", "Figma"],
  },
  {
    id: "mobile",
    labels: { en: "Mobile", es: "Mobile" },
    items: ["Ionic", "Angular", "Android"],
  },
  {
    id: "ai",
    labels: { en: "AI & automation", es: "IA y automatización" },
    items: ["Claude (Claude Code, agents, skills)", "ChatGPT", "Gemini", "Workflow automation"],
  },
];
