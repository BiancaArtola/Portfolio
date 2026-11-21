import Head from "next/head";
import Image from "next/image";
import CareerList from "@/components/CareerList";
import Icon, { IconName } from "@/components/Icon";
import { useLanguage } from "@/components/LanguageContext";
import SeoHead from "@/components/SeoHead";
import { spokenLanguages } from "@/data/languages";
import { education, PROFILE } from "@/data/profile";
import { getSkillLabel, skillGroups } from "@/data/skills";

const CvHeading = ({
  icon,
  children,
}: {
  icon: IconName;
  children: string;
}) => (
  <h2 className="cv-heading">
    <span className="cv-heading-icon">
      <Icon name={icon} size={16} />
    </span>
    {children}
  </h2>
);

// Hoja A4 con barra lateral (foto, contacto, perfil, educación) y columna principal.
// Lee los mismos datos que el portfolio, así CV y sitio no se desactualizan por separado.
// El contacto incluye solo el mail y las redes públicas, sin teléfono ni datos personales.
const CvPage = () => {
  const { language, t } = useLanguage();

  return (
    <article className="cv-page">
      <SeoHead path="/cv" />
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <aside className="cv-sidebar">
        <Image
          className="cv-photo"
          src="/images/profile.jpeg"
          alt={PROFILE.name}
          width={400}
          height={400}
          priority
        />

        <CvHeading icon="user">{t.cv.contact}</CvHeading>
        <ul className="cv-contact-list">
          <li>{PROFILE.email}</li>
          <li>{PROFILE.linkedin.replace("https://www.", "")}</li>
          <li>{PROFILE.github.replace("https://", "")}</li>
          <li>{PROFILE.location}</li>
        </ul>

        <CvHeading icon="user">{t.cv.profile}</CvHeading>
        <ul className="cv-profile-list">
          {t.cv.profileItems.map((item) => (
            <li key={item.label}>
              <span className="cv-profile-label">{item.label}</span>
              {item.text}
            </li>
          ))}
        </ul>

        <CvHeading icon="graduation">{t.cv.education}</CvHeading>
        <ul className="cv-education">
          {education.map((entry) => (
            <li key={entry.institution}>
              <strong>{entry.institution}</strong>
              <br />
              {entry.title[language]}, {entry.from} – {entry.to}
            </li>
          ))}
        </ul>
      </aside>

      <div className="cv-main">
        <h1 className="cv-name">{PROFILE.name}</h1>
        <p className="cv-title">{t.hero.role}</p>
        <hr className="cv-rule" />

        <CvHeading icon="briefcase">{t.cv.experience}</CvHeading>
        <CareerList showLogos={false} />

        <CvHeading icon="code">{t.cv.skills}</CvHeading>
        <ul className="cv-skills">
          {skillGroups.map((group) => (
            <li key={group.id}>
              <strong>{group.labels[language]}:</strong>{" "}
              {group.items
                .map((item) => getSkillLabel(item, language))
                .join(", ")}
            </li>
          ))}
        </ul>

        <CvHeading icon="book">{t.cv.languages}</CvHeading>
        <ul>
          {spokenLanguages.map((spoken) => (
            <li key={spoken.id}>
              <strong>{spoken.names[language]}</strong>:{" "}
              {spoken.levels[language]}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default CvPage;
