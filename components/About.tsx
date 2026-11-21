import { Badge } from "farol-ui";
import { spokenLanguages } from "../data/languages";
import CareerList from "./CareerList";
import CodeCard from "./CodeCard";
import { useLanguage } from "./LanguageContext";

const About = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="about-container">
      <h2>{t.about.title}</h2>
      <div className="flex-about">
        <div className="about-text">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="about-img">
          <CodeCard />
        </div>
      </div>

      <h3 className="about-subtitle">{t.about.careerTitle}</h3>
      <CareerList />

      <h3 className="about-subtitle">{t.about.leadershipTitle}</h3>
      <ul className="leadership-list">
        {t.about.leadershipItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="about-subtitle">{t.about.languagesTitle}</h3>
      <ul className="skills-chips">
        {spokenLanguages.map((spoken) => (
          <li key={spoken.id}>
            <Badge>
              {spoken.names[language]} · {spoken.levels[language]}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
