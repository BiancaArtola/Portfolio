import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="hero-container">
      <Image
        src="/images/profile.jpeg"
        className="profile-img"
        key="image-key-profile"
        width={1000}
        height={1000}
        alt={t.hero.imageAlt}
      />
      <div className="hero-text">
        <h1>{t.hero.greeting}</h1>
        <p>{t.hero.intro}</p>
        <div className="social-icons">
          <a
            href="https://github.com/BiancaArtola"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bianca-artola/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
