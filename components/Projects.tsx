import { Card } from "farol-ui";
import Link from "next/link";
import { projectData } from "../data/projects";
import Icon from "./Icon";
import { useLanguage } from "./LanguageContext";

const Projects = () => {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="projects-container">
      <h2>{t.projects.title}</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            footer={
              <div className="project-links">
                <Link href={`/projects/${project.slug}`} className="text-link">
                  {t.projects.viewCaseStudy}{" "}
                  <Icon name="arrow-right" size={16} />
                </Link>
                {project.gitHubLink ? (
                  <a
                    href={project.gitHubLink}
                    aria-label={`${t.projects.viewCode}: ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" size={18} />
                  </a>
                ) : (
                  <span
                    className="project-private"
                    title={t.projects.privateRepo}
                    role="img"
                    aria-label={t.projects.privateRepo}
                  >
                    <Icon name="lock" size={16} />
                  </span>
                )}
              </div>
            }
          >
            <p>{project.summary[language]}</p>
            <p className="project-stack">{project.stack.join(" · ")}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
