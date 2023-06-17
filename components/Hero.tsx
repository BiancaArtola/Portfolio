import Image from "next/image";

const Hero = () => (
  <div className="hero-container">
    <Image
      src="/images/profile.jpeg"
      className="profile-img"
      key="image-key-profile"
      width={1000}
      height={1000}
      alt="Bianca's personal headshot"
    />
    <div className="hero-text">
      <h1>Hey, I&nbsp;m Bianca 👋</h1>
      <p>
        I&nbsp;m a software developer based in Bahia Blanca, Argentina. I
        specialize in front-end development.
      </p>
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

export default Hero;
