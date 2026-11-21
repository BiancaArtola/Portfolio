import { skillGroups } from "../data/skills";
import { useLanguage } from "./LanguageContext";

const Skills = () => {
  const { language, t } = useLanguage();

  return (
    <div className="skills-container">
      <h2>{t.skills.title}</h2>
      {skillGroups.map((group) => (
        <div className="skills-group" key={group.id}>
          <h3>{group.labels[language]}</h3>
          <ul className="skills-chips">
            {group.items.map((item) => (
              <li className="skill-chip" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
