import { createContext, useContext, useEffect, useState } from "react";

export const THEME_STORAGE_KEY = "portfolio-theme";

export const THEMES = ["light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

/**
 * Se ejecuta antes de pintar (inline en _document) para que la página no parpadee
 * con el tema equivocado. Debe mantenerse sincronizado con la lógica de abajo.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => undefined,
});

const readAppliedTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Servidor y primer render del cliente usan "dark"; luego se lee lo que ya aplicó
  // el script inline, así la hidratación no se rompe.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(readAppliedTheme());
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Sin storage no se recuerda la elección, pero el cambio igual funciona.
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
