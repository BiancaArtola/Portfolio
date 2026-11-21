import { PROFILE } from "../data/profile";
import Icon from "./Icon";

const Footer = () => (
  <footer>
    <hr />
    <div className="footer-container">
      <p>
        © {new Date().getFullYear()} {PROFILE.name}
      </p>
      <div className="social_icons">
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
  </footer>
);

export default Footer;
