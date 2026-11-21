import { Badge } from "farol-ui";
import { getSkillLabel, skillGroups } from "../data/skills";
import { useLanguage } from "./LanguageContext";

const Skills = () => {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="skills-container">
      <h2>{t.skills.title}</h2>
      {skillGroups.map((group) => (
        <div className="skills-group" key={group.id}>
          <h3>{group.labels[language]}</h3>
          <ul className="skills-chips">
            {group.items.map((item) => {
              const label = getSkillLabel(item, language);
              return (
                <li key={label}>
                  <Badge>{label}</Badge>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
