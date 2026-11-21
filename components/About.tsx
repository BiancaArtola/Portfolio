import Image from "next/image";
import { getCareer } from "../data/career";
import { useLanguage } from "./LanguageContext";

const About = () => {
  const { language, t } = useLanguage();
  const career = getCareer(language);

  return (
    <div className="about-container">
      <h2>{t.about.title}</h2>
      <div className="flex-about">
        <div className="about-text">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="about-img">
          <Image
            src="/images/about.png"
            className="profile-img"
            width={300}
            height={500}
            alt=""
          />
        </div>
      </div>
      <h3 className="career-title">{t.about.careerTitle}</h3>
      <ul className="career-list">
        {career.map((entry) => (
          <li key={`${entry.company}-${entry.role}`} className="career-item">
            <span className="career-years">
              {entry.from} – {entry.to ?? t.about.present}
            </span>
            <span className="career-role">
              {entry.role} · {entry.company}
            </span>
            <span className="career-stack">{entry.stack}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
