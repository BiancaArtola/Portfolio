import { Language } from "./translations";

type Localized<T> = Record<Language, T>;

export interface CaseStudy {
  problem: Localized<string>;
  role: Localized<string>;
  solution: Localized<string>;
  decisions: Localized<string[]>;
  /** Solo se muestra si hay algo honesto para decir. */
  improve?: Localized<string[]>;
}

export interface Project {
  slug: string;
  title: string;
  summary: Localized<string>;
  stack: string[];
  caseStudy: CaseStudy;
  /** Capturas en /public/images/projects; vacío si no hay material aprobado. */
  screenshots: { src: string; alt: Localized<string> }[];
  /** Sin link cuando el repositorio es privado. */
  gitHubLink?: string;
}

export const projectData: Project[] = [
  {
    slug: "facturador-rcel",
    title: "Facturador RCEL",
    summary: {
      en: "Chrome extension that loads invoices into Argentina's tax portal from screenshots, PDFs and Excel files.",
      es: "Extensión de Chrome que carga facturas en el portal de ARCA a partir de capturas, PDF y archivos Excel.",
    },
    stack: ["React", "TypeScript", "WXT", "Vitest", "Playwright"],
    caseStudy: {
      problem: {
        en: "An accounting studio issues invoices for several clients. In the tax portal each invoice is loaded by hand, one screen at a time, which is slow and easy to get wrong.",
        es: "Un estudio contable factura para varios clientes. En el portal de ARCA cada factura se carga a mano, pantalla por pantalla, lo que es lento y propenso a errores.",
      },
      role: {
        en: "I designed and built it end to end: interface, automation and tests.",
        es: "La diseñé y la construí de punta a punta: interfaz, automatización y tests.",
      },
      solution: {
        en: "A React panel reads payments from screenshots (OCR), PDFs, Excel files or bank statements, builds a batch of invoices and lets the user review it. A content script then fills in the portal forms inside the session the user already opened.",
        es: "Un panel en React lee cobros desde capturas (OCR), PDF, Excel o extractos bancarios, arma un lote de facturas y permite revisarlo. Luego un content script completa los formularios del portal dentro de la sesión que el usuario ya abrió.",
      },
      decisions: {
        en: [
          "It never touches the login or the tax password. It only works inside a session that is already authenticated.",
          "Pure logic (parsing, billing rules, formatting) lives in small tested modules, separate from the DOM and browser APIs.",
          "Each issuer has its own profile and data. The content script stops if the logged-in account does not match the batch.",
          "Unit tests with Vitest and end-to-end tests with Playwright against the real extension.",
        ],
        es: [
          "Nunca toca el login ni la clave fiscal. Solo trabaja dentro de una sesión ya autenticada.",
          "La lógica pura (lectura, reglas de facturación, formato) vive en módulos chicos y testeados, separados del DOM y de las APIs del navegador.",
          "Cada emisor tiene su propio perfil y sus datos. El content script se detiene si la cuenta con sesión iniciada no coincide con el lote.",
          "Tests unitarios con Vitest y end-to-end con Playwright sobre la extensión real.",
        ],
      },
      improve: {
        en: [
          "The automation against the live portal is checked by hand. I would add a way to detect screen changes earlier.",
        ],
        es: [
          "La automatización contra el portal real se verifica a mano. Agregaría una forma de detectar antes los cambios en las pantallas.",
        ],
      },
    },
    screenshots: [],
  },
  {
    slug: "miplata",
    title: "MiPlata",
    summary: {
      en: "Personal finance app that tracks expenses in pesos and dollars, with monthly exchange rates and Excel/CSV import.",
      es: "App de finanzas personales que registra gastos en pesos y dólares, con cotizaciones por mes e importación desde Excel/CSV.",
    },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "Vitest",
    ],
    caseStudy: {
      problem: {
        en: "Tracking personal spending in Argentina means mixing pesos and dollars, with an exchange rate that changes every month.",
        es: "Llevar los gastos personales en Argentina implica mezclar pesos y dólares, con una cotización que cambia cada mes.",
      },
      role: {
        en: "Personal project that I designed and built.",
        es: "Proyecto personal que diseñé y construí.",
      },
      solution: {
        en: "An app to record movements, fixed costs and categories in ARS and USD. Rates are stored per month, and a guided importer loads Excel or CSV files with any column layout.",
        es: "Una app para registrar movimientos, gastos fijos y categorías en ARS y USD. Las cotizaciones se guardan por mes y un importador guiado carga archivos Excel o CSV con cualquier formato de columnas.",
      },
      decisions: {
        en: [
          "Exchange rates keep their source (suggested or manual). A suggested rate is only saved after the user confirms it.",
          "The importer lets the user map the columns of any file, and undoing an import removes only its movements.",
          "Database migrations are applied manually: the app never runs them.",
        ],
        es: [
          "Las cotizaciones guardan su fuente (sugerida o manual). Una cotización sugerida solo se guarda cuando el usuario la confirma.",
          "El importador permite asignar las columnas de cualquier archivo, y deshacer una importación elimina solo sus movimientos.",
          "Las migraciones de base de datos se aplican a mano: la app nunca las ejecuta.",
        ],
      },
    },
    screenshots: [],
  },
  {
    slug: "court-booking-app",
    title: "Court booking app",
    summary: {
      en: "Mobile app to rent sports courts in Bahía Blanca, built as my systems engineering final project.",
      es: "App móvil para alquilar canchas deportivas en Bahía Blanca, desarrollada como proyecto final de la carrera.",
    },
    stack: ["Ionic", "Angular", "Firebase"],
    gitHubLink: "https://github.com/BiancaArtola/finalproject",
    caseStudy: {
      problem: {
        en: "Booking a court in the city depended on calls and messages, with no clear view of what was available.",
        es: "Reservar una cancha en la ciudad dependía de llamadas y mensajes, sin una vista clara de la disponibilidad.",
      },
      role: {
        en: "I developed the app with Ionic, Angular and Firebase, and a companion website to load the data.",
        es: "Desarrollé la app con Ionic, Angular y Firebase, y un sitio complementario para cargar los datos.",
      },
      solution: {
        en: "Users pick a sport, see the available courts and book them in a few steps after signing in.",
        es: "El usuario elige un deporte, ve las canchas disponibles y las reserva en pocos pasos después de iniciar sesión.",
      },
      decisions: {
        en: [
          "The goal was user-centered design: anyone should be able to book without help.",
          "A separate website loads courts and schedules into the database, so the app stays focused on booking.",
        ],
        es: [
          "El objetivo fue un diseño centrado en el usuario: cualquier persona debería poder reservar sin ayuda.",
          "Un sitio aparte carga canchas y horarios en la base de datos, así la app se enfoca en reservar.",
        ],
      },
    },
    screenshots: [],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projectData.find((project) => project.slug === slug);
