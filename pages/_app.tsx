import type { AppProps } from "next/app";
import "../styles/global.css";
import Layout from "../components/Layout";
import { LanguageProvider } from "../components/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
