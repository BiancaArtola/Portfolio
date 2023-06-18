import Image from "next/image";

const About = () => (
  <div className="about-container">
    <h2>About Me</h2>
    <div className="flex-about">
      <div className="about-text">
        <p>
          I&apos;m Bianca, a passionate System Engineer specializing in
          front-end development. Graduating from Universidad Nacional del Sur in
          2020, I have since dedicated myself to creating captivating user
          experiences through my expertise in React, NextJS, Typescript,
          JavaScript, Material UI, and styled components. With a diverse
          portfolio ranging from simple websites to complex enterprise
          applications, I continuously seek opportunities to expand my knowledge
          and skills in the ever-evolving tech landscape.
        </p>
        <p>
          During my career, I&apos;ve held two significant positions. At
          Cooperativa Obrera, I developed a mobile app using Ionic, Angular, and
          JavaScript, gaining valuable insights into mobile app development and
          honing my front-end skills. Currently, at Teladoc Health for the past
          three years, my focus has been on React while also delving into
          technologies like Relay for GraphQL, Axios for REST endpoints, state
          management with Mobx, and various styling solutions. With a commitment
          to growth and excellence, I thrive on collaborating with professionals
          and embracing innovative solutions to deliver exceptional results.
        </p>
      </div>
      <div className="about-img">
        <Image
          src="/images/about.png"
          className="profile-img"
          width={300}
          height={500}
          alt={""}
        />
      </div>
    </div>
  </div>
);

export default About;
