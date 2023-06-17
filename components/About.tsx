import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            Hey, I&nbsp;m Bianca, a System Engineer with a focus on front-end
            development. I graduated from the Universidad Nacional del Sur in
            2020 and I&nbsp;m currently based in the city of Bahia Blanca. At 26
            years old, I have a genuine passion for creating captivating user
            experiences through front-end development. I&nbsp;ve cultivated my
            skills in various technologies, including React, NextJS, Typescript,
            JavaScript, Material UI, styled components, and more. What drives me
            is the opportunity to continually challenge myself and explore
            innovative solutions. I thrive on collaborating with fellow
            professionals, bringing fresh perspectives to the table, and
            striving for excellence in every project.
          </p>
          <p>
            Throughout my career, I&nbsp;ve had the opportunity to work on a
            diverse range of projects, spanning from simple static websites to
            complex enterprise-level applications. With a strong passion for
            continuous learning and growth, I have acquired extensive experience
            working with various development tools and frameworks, including
            React, Angular, Vue.js, Node.js, and Laravel. I&nbsp;m always eager
            to explore new technologies and consistently seek out opportunities
            to enhance my skills and expand my knowledge. I have had the
            privilege of working in two significant positions during my career.
            I started my journey at Cooperativa Obrera, where I initially took
            on a part-time role. During this time, I had the opportunity to
            develop a mobile app using technologies such as Ionic, Angular,
            JavaScript, and others. This experience allowed me to gain valuable
            insights into mobile app development and further honed my front-end
            skills. Currently, I am working at Teladoc Health, where I have been
            a part of the team for the past three years. This role has provided
            me with extensive exposure to a wide range of technologies. While my
            primary focus is on React, I have also gained proficiency in a
            multitude of complementary technologies that contribute to building
            a robust front-end stack. I have worked on projects using a
            microservices approach. I also had the ability to gain valuable
            experience in managing different backend technologies on the front.
            For example, I have utilized Relay for GraphQL queries and leveraged
            Axios for consuming REST endpoints. Additionally, I have explored
            state management technologies such as Mobx, and I have employed
            various styling solutions like styled-components, emotion, and
            Material UI styles.
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
};

export default About;
