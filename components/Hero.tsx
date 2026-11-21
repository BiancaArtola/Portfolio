import { ButtonLink, buttonClassName } from "farol-ui";
import Image from "next/image";
import Link from "next/link";
import { CV_FILES, PROFILE } from "../data/profile";
import Icon from "./Icon";
import { useLanguage } from "./LanguageContext";

const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <section className="hero-container">
      <Image
        src="/images/profile.jpeg"
        className="profile-img"
        key="image-key-profile"
        width={400}
        height={400}
        alt={t.hero.imageAlt}
        priority
      />
      <div className="hero-text">
        <h1>{PROFILE.name}</h1>
        <p className="hero-role">{t.hero.role} · React · Vue.js · TypeScript</p>
        <p className="hero-tagline">{t.hero.tagline}</p>
        <div className="hero-actions">
          <Link href="/#projects" className={buttonClassName()}>
            {t.hero.viewProjects}
          </Link>
          <ButtonLink href={CV_FILES[language]} download variant="secondary">
            <Icon name="download" size={16} />
            {t.hero.downloadCv}
          </ButtonLink>
        </div>
        <div className="social-icons">
          <a
            href={PROFILE.github}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size={24} />
          </a>
          <a
            href={PROFILE.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
