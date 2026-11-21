import { Button, useTheme } from "farol-ui";
import Link from "next/link";
import { CV_FILES, PROFILE } from "../data/profile";
import Icon from "./Icon";
import { useLanguage } from "./LanguageContext";

const Navbar = () => {
  const { language, t, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="nav-container">
      <div className="logo">
        <Link href="/">{PROFILE.name}</Link>
      </div>
      <nav className="nav-links" aria-label="Main">
        <Link href="/#projects">{t.nav.projects}</Link>
        <Link href="/#about">{t.nav.about}</Link>
        <Link href="/#skills">{t.nav.skills}</Link>
        <Link href="/#contact">{t.nav.contact}</Link>
        <a href={CV_FILES[language]} download>
          {t.nav.cv}
        </a>
      </nav>
      <div className="nav-actions">
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleTheme}
          aria-label={isDark ? t.theme.toLight : t.theme.toDark}
        >
          <Icon name={isDark ? "sun" : "moon"} size={18} />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleLanguage}
          aria-label={t.language.label}
        >
          <Icon name="language" size={18} /> {t.language.switchTo}
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
