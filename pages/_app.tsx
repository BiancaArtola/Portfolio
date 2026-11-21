import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../styles/global.css";
import Layout from "../components/Layout";
import { LanguageProvider } from "../components/LanguageContext";
import { ThemeProvider } from "../components/ThemeContext";

// Next descarga Inter al compilar y la sirve desde el propio sitio (sin pedirla a Google
// en cada visita). Es una fuente variable, así que cubre todos los pesos con un solo archivo.
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className={inter.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
