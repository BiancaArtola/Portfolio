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
        <a href={`mailto:${PROFILE.email}`} className="cta-btn">
          <Icon name="mail" size={16} /> {t.contact.button}
        </a>
        <a href={CV_FILES[language]} download className="cta-btn secondary">
          <Icon name="download" size={16} /> {t.contact.downloadCv}
        </a>
      </div>
    </section>
  );
};

export default Contact;
