import { useLanguage } from "./LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="contact-container">
      <h2>{t.contact.title}</h2>
      <p>{t.contact.text}</p>
      <a href="mailto:bian.artola@hotmail.com" className="cta-btn">
        {t.contact.button}
      </a>
    </div>
  );
};

export default Contact;
