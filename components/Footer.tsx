const Footer = () => (
  <>
    <hr />
    <div className="footer-container">
      <p>© {new Date().getFullYear()} Bianca&apos;s Portfolio</p>
      <div className="social_icons">
        <a
          href="https://github.com/biancaartola"
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
  </>
);

export default Footer;
