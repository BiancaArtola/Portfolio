export const LANGUAGES = ["en", "es"] as const;
export type Language = (typeof LANGUAGES)[number];

export interface Translations {
  siteTitle: string;
  siteDescription: string;
  nav: {
    projects: string;
    about: string;
    skills: string;
    contact: string;
    cv: string;
  };
  hero: {
    role: string;
    tagline: string;
    viewProjects: string;
    downloadCv: string;
    imageAlt: string;
  };
  projects: {
    title: string;
    viewCaseStudy: string;
    privateRepo: string;
    viewCode: string;
    backToProjects: string;
  };
  caseStudy: {
    problem: string;
    role: string;
    solution: string;
    decisions: string;
    stack: string;
    improve: string;
    images: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    careerTitle: string;
    present: string;
    languagesTitle: string;
    leadershipTitle: string;
    leadershipItems: string[];
  };
  skills: { title: string };
  contact: {
    title: string;
    text: string;
    button: string;
    downloadCv: string;
  };
  cv: {
    profile: string;
    experience: string;
    skills: string;
    education: string;
    languages: string;
    contact: string;
    profileItems: { label: string; text: string }[];
  };
  language: { switchTo: string; label: string };
  theme: { toLight: string; toDark: string };
}

export const translations: Record<Language, Translations> = {
  en: {
    siteTitle: "Bianca Artola | Frontend Engineer",
    siteDescription:
      "Bianca Artola is a frontend engineer with 6+ years of experience in React, Vue.js and TypeScript, based in Bahía Blanca, Argentina.",
    nav: {
      projects: "Projects",
      about: "About",
      skills: "Skills",
      contact: "Contact",
      cv: "CV",
    },
    hero: {
      role: "Frontend engineer",
      tagline:
        "I build web interfaces with React, Vue.js and TypeScript, and I automate repetitive work with Claude.",
      viewProjects: "View projects",
      downloadCv: "Download CV",
      imageAlt: "Bianca Artola",
    },
    projects: {
      title: "Projects",
      viewCaseStudy: "Read the case study",
      privateRepo: "Private repository",
      viewCode: "View code",
      backToProjects: "Back to projects",
    },
    caseStudy: {
      problem: "The problem",
      role: "My role",
      solution: "The solution",
      decisions: "Key decisions",
      stack: "Stack",
      improve: "What I would improve",
      images: "Screenshots",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm a systems engineer from Universidad Nacional del Sur, based in Bahía Blanca, Argentina, with 6+ years of experience in front-end development.",
        "At Dialpad I work mainly with Vue.js, TypeScript and Pinia.",
        "Outside work I build tools that automate repetitive workflows, and I use Claude every day.",
      ],
      careerTitle: "Experience",
      present: "Present",
      languagesTitle: "Languages",
      leadershipTitle: "Beyond code",
      leadershipItems: [
        "I mentor teammates through code review.",
        "I lead features from idea to rollout, releasing them gradually behind experiments.",
        "I write contribution guides and shared Claude skills for the team.",
      ],
    },
    skills: { title: "Skills" },
    contact: {
      title: "Contact",
      text: "You can write to me about a role, a project or a question.",
      button: "Send an email",
      downloadCv: "Download CV",
    },
    cv: {
      profile: "Profile",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      contact: "Contact",
      profileItems: [
        { label: "Experience", text: "6+ years in front-end development." },
        { label: "Focus", text: "React, Vue.js and TypeScript." },
        { label: "Teamwork", text: "Mentoring and code review." },
        {
          label: "AI",
          text: "Claude every day to automate repetitive workflows.",
        },
      ],
    },
    language: { switchTo: "Español", label: "Cambiar a español" },
    theme: { toLight: "Switch to light mode", toDark: "Switch to dark mode" },
  },
  es: {
    siteTitle: "Bianca Artola | Ingeniera Frontend",
    siteDescription:
      "Bianca Artola es ingeniera frontend con más de 6 años de experiencia en React, Vue.js y TypeScript, y vive en Bahía Blanca, Argentina.",
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
      skills: "Tecnologías",
      contact: "Contacto",
      cv: "CV",
    },
    hero: {
      role: "Ingeniera frontend",
      tagline:
        "Construyo interfaces web con React, Vue.js y TypeScript, y automatizo trabajo repetitivo con Claude.",
      viewProjects: "Ver proyectos",
      downloadCv: "Descargar CV",
      imageAlt: "Bianca Artola",
    },
    projects: {
      title: "Proyectos",
      viewCaseStudy: "Leer el caso de estudio",
      privateRepo: "Repositorio privado",
      viewCode: "Ver código",
      backToProjects: "Volver a proyectos",
    },
    caseStudy: {
      problem: "El problema",
      role: "Mi rol",
      solution: "La solución",
      decisions: "Decisiones clave",
      stack: "Tecnologías",
      improve: "Qué mejoraría",
      images: "Capturas",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy ingeniera en sistemas de la Universidad Nacional del Sur, vivo en Bahía Blanca, Argentina, y tengo más de 6 años de experiencia en desarrollo front-end.",
        "En Dialpad trabajo principalmente con Vue.js, TypeScript y Pinia.",
        "Fuera del trabajo creo herramientas que automatizan flujos repetitivos, y uso Claude todos los días.",
      ],
      careerTitle: "Experiencia",
      present: "Actualidad",
      languagesTitle: "Idiomas",
      leadershipTitle: "Más allá del código",
      leadershipItems: [
        "Mentoreo a compañeros a través del code review.",
        "Lidero features desde la idea hasta el despliegue y las libero de a poco detrás de experimentos.",
        "Escribo guías de contribución y skills de Claude compartidas para el equipo.",
      ],
    },
    skills: { title: "Tecnologías" },
    contact: {
      title: "Contacto",
      text: "Podés escribirme por un puesto, un proyecto o una consulta.",
      button: "Enviar un mail",
      downloadCv: "Descargar CV",
    },
    cv: {
      profile: "Perfil",
      experience: "Experiencia",
      skills: "Tecnologías",
      education: "Educación",
      languages: "Idiomas",
      contact: "Contacto",
      profileItems: [
        {
          label: "Experiencia",
          text: "Más de 6 años en desarrollo front-end.",
        },
        { label: "Enfoque", text: "React, Vue.js y TypeScript." },
        { label: "Equipo", text: "Mentoreo y code review." },
        {
          label: "IA",
          text: "Uso Claude todos los días para automatizar flujos repetitivos.",
        },
      ],
    },
    language: { switchTo: "English", label: "Switch to English" },
    theme: { toLight: "Cambiar a modo claro", toDark: "Cambiar a modo oscuro" },
  },
};
