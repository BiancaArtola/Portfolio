export const LANGUAGES = ["en", "es"] as const;
export type Language = (typeof LANGUAGES)[number];

export interface Translations {
  siteTitle: string;
  siteDescription: string;
  hero: { greeting: string; intro: string; imageAlt: string };
  about: {
    title: string;
    paragraphs: string[];
    careerTitle: string;
    present: string;
  };
  skills: { title: string };
  projects: { title: string; viewCode: string; privateRepo: string };
  contact: { title: string; text: string; button: string };
  language: { switchTo: string; label: string };
}

export const translations: Record<Language, Translations> = {
  en: {
    siteTitle: "Bianca Artola | Frontend Engineer",
    siteDescription:
      "Portfolio of Bianca Artola, frontend engineer specialized in React, Vue.js and TypeScript.",
    hero: {
      greeting: "Hey, I'm Bianca 👋",
      intro:
        "I'm a Software Engineer III at Dialpad based in Bahía Blanca, Argentina. I build web interfaces with React, Vue.js and TypeScript, and I use AI agents like Claude every day to automate my workflows.",
      imageAlt: "Bianca's personal headshot",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm Bianca, a systems engineer (Universidad Nacional del Sur) specialized in front-end development. I have 6+ years of experience building everything from mobile apps to complex enterprise products, with a focus on UI quality, testing and design systems (Storybook).",
        "I'm currently a Software Engineer III at Dialpad, an AI-powered customer intelligence platform, working mainly with Vue.js. Before that I spent three years at Teladoc Health building React applications with GraphQL (Relay), REST and MobX.",
        "I use AI as part of my daily work: I rely heavily on Claude (agents, skills and automated workflows), and I also use ChatGPT and Gemini. I like turning repetitive processes into automations and keeping the code well tested.",
      ],
      careerTitle: "Career",
      present: "Present",
    },
    skills: { title: "Skills" },
    projects: {
      title: "Projects",
      viewCode: "View code",
      privateRepo: "Private repository",
    },
    contact: {
      title: "Get In Touch",
      text: "If you want us to work together or have any questions, my inbox is always open.",
      button: "Say Hello",
    },
    language: { switchTo: "Español", label: "Cambiar a español" },
  },
  es: {
    siteTitle: "Bianca Artola | Ingeniera Frontend",
    siteDescription:
      "Portfolio de Bianca Artola, ingeniera frontend especializada en React, Vue.js y TypeScript.",
    hero: {
      greeting: "¡Hola, soy Bianca! 👋",
      intro:
        "Soy Software Engineer III en Dialpad y vivo en Bahía Blanca, Argentina. Construyo interfaces web con React, Vue.js y TypeScript, y uso agentes de IA como Claude todos los días para automatizar mis flujos de trabajo.",
      imageAlt: "Foto de perfil de Bianca",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy Bianca, ingeniera en sistemas (Universidad Nacional del Sur) especializada en desarrollo front-end. Tengo más de 6 años de experiencia construyendo desde apps móviles hasta productos empresariales complejos, con foco en la calidad de la interfaz, el testing y los sistemas de diseño (Storybook).",
        "Actualmente soy Software Engineer III en Dialpad, una plataforma de inteligencia de clientes basada en IA, y trabajo principalmente con Vue.js. Antes pasé tres años en Teladoc Health desarrollando aplicaciones React con GraphQL (Relay), REST y MobX.",
        "Uso la IA como parte de mi trabajo diario: me apoyo mucho en Claude (agentes, skills y flujos automatizados) y también uso ChatGPT y Gemini. Me gusta convertir procesos repetitivos en automatizaciones y mantener el código bien testeado.",
      ],
      careerTitle: "Trayectoria",
      present: "Actualidad",
    },
    skills: { title: "Tecnologías" },
    projects: {
      title: "Proyectos",
      viewCode: "Ver código",
      privateRepo: "Repositorio privado",
    },
    contact: {
      title: "Contacto",
      text: "Si querés que trabajemos juntos o tenés alguna consulta, mi bandeja de entrada siempre está abierta.",
      button: "Escribime",
    },
    language: { switchTo: "English", label: "Switch to English" },
  },
};
