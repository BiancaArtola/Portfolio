import Head from "next/head";
import { PROFILE } from "../data/profile";
import { useLanguage } from "./LanguageContext";

interface SeoHeadProps {
  title?: string;
  description?: string;
  /** Ruta dentro del sitio, por ejemplo "/projects/miplata". */
  path?: string;
}

const SeoHead = ({ title, description, path = "" }: SeoHeadProps) => {
  const { t } = useLanguage();
  const pageTitle = title ?? t.siteTitle;
  const pageDescription = description ?? t.siteDescription;
  const url = `${PROFILE.siteUrl}${path}`;

  // Datos estructurados para buscadores; solo información que ya es pública en LinkedIn.
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: "Frontend Engineer",
    url: PROFILE.siteUrl,
    sameAs: [PROFILE.github, PROFILE.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bahía Blanca",
      addressCountry: "AR",
    },
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={`${PROFILE.siteUrl}/images/profile.jpeg`}
      />
      <meta name="twitter:card" content="summary" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </Head>
  );
};

export default SeoHead;
