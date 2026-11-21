import Link from "next/link";
import { useLanguage } from "./LanguageContext";

const Navbar = () => {
  const { t, toggleLanguage } = useLanguage();

  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Bianca Artola</Link>
      </div>
      <button
        type="button"
        className="language-toggle"
        onClick={toggleLanguage}
        aria-label={t.language.label}
      >
        <i className="fa-solid fa-language"></i> {t.language.switchTo}
      </button>
    </div>
  );
};

export default Navbar;
