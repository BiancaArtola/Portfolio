import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { useLanguage } from "@/components/LanguageContext";
import SeoHead from "@/components/SeoHead";
import { getProject, projectData } from "@/data/projects";

interface ProjectPageProps {
  slug: string;
}

const ProjectPage = ({ slug }: ProjectPageProps) => {
  const { language, t } = useLanguage();
  const project = getProject(slug);

  if (!project) {
    return null;
  }

  const { caseStudy } = project;

  return (
    <article className="case-study">
      <SeoHead
        title={`${project.title} | ${t.siteTitle}`}
        description={project.summary[language]}
        path={`/projects/${project.slug}`}
      />
      <Link href="/#projects" className="text-link">
        <Icon name="arrow-left" size={16} /> {t.projects.backToProjects}
      </Link>
      <h1>{project.title}</h1>
      <p className="case-study-summary">{project.summary[language]}</p>
      <p className="project-stack">{project.stack.join(" · ")}</p>
      <p className="case-study-links">
        {project.gitHubLink ? (
          <a
            href={project.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size={18} /> {t.projects.viewCode}
          </a>
        ) : (
          <span className="project-private">
            <Icon name="lock" size={16} /> {t.projects.privateRepo}
          </span>
        )}
      </p>

      <h2>{t.caseStudy.problem}</h2>
      <p>{caseStudy.problem[language]}</p>

      <h2>{t.caseStudy.role}</h2>
      <p>{caseStudy.role[language]}</p>

      <h2>{t.caseStudy.solution}</h2>
      <p>{caseStudy.solution[language]}</p>

      <h2>{t.caseStudy.decisions}</h2>
      <ul className="leadership-list">
        {caseStudy.decisions[language].map((decision) => (
          <li key={decision}>{decision}</li>
        ))}
      </ul>

      {caseStudy.improve && (
        <>
          <h2>{t.caseStudy.improve}</h2>
          <ul className="leadership-list">
            {caseStudy.improve[language].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {project.screenshots.length > 0 && (
        <>
          <h2>{t.caseStudy.images}</h2>
          <div className="case-study-images">
            {project.screenshots.map((screenshot) => (
              <Image
                key={screenshot.src}
                src={screenshot.src}
                alt={screenshot.alt[language]}
                width={1200}
                height={750}
                loading="lazy"
              />
            ))}
          </div>
        </>
      )}
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projectData.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = async (
  context
) => ({ props: { slug: String(context.params?.slug) } });

export default ProjectPage;
