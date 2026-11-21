import { ButtonLink } from "farol-ui";
import { CV_FILES, PROFILE } from "../data/profile";
import Icon from "./Icon";
import { useLanguage } from "./LanguageContext";

const Contact = () => {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="contact-container">
      <h2>{t.contact.title}</h2>
      <p>{t.contact.text}</p>
      <p className="contact-email">
        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
      </p>
      <div className="hero-actions">
        <ButtonLink href={`mailto:${PROFILE.email}`}>
          <Icon name="mail" size={16} />
          {t.contact.button}
        </ButtonLink>
        <ButtonLink href={CV_FILES[language]} download variant="secondary">
          <Icon name="download" size={16} />
          {t.contact.downloadCv}
        </ButtonLink>
      </div>
    </section>
  );
};

export default Contact;
