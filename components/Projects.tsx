import { projectData } from "../data/projects";
import { useLanguage } from "./LanguageContext";

const Projects = () => {
  const { language, t } = useLanguage();

  return (
    <div className="projects-container">
      <h2>{t.projects.title}</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="fa-regular fa-folder-open folder-icon"></i>
              <div className="small-icons">
                {project.gitHubLink ? (
                  <a
                    href={project.gitHubLink}
                    aria-label={t.projects.viewCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : (
                  <i
                    className="fa-solid fa-lock"
                    title={t.projects.privateRepo}
                    aria-label={t.projects.privateRepo}
                  ></i>
                )}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description[language]}</p>
            <p className="project-stack">{project.stack.join(" · ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
