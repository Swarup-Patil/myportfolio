import React from "react";
import styled from "styled-components";

import MainNavBar from "../component/MainNavBar";
import Footer from "../component/Footer";

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const AboutHeader = styled.h1`
  font-size: 180px;
  font-weight: 200;
  font-family: ${(props) => props.theme.fonts.caslon};
`;

const AboutSubHeader = styled.h2`
  font-size: 35px;
  max-width: 800px;
  margin: 30px 0;
  font-family: ${(props) => props.theme.fonts.caslon};
`;

const AboutPara = styled.p`
  font-size: 24px;
  max-width: 75%;
  margin-top: 30px;
  line-height: 32px;
`;

const About = () => {
  return (
    <>
      <MainNavBar />
      <AboutContainer>
        <AboutHeader>About</AboutHeader>
        <AboutSubHeader>
          I’m Swarup — a developer who likes clean code, solid systems, and
          building things that work.
        </AboutSubHeader>
        <AboutPara>
          I started this journey back in 11th grade, when I wrote my first C++
          program and realized how much I enjoyed solving problems with code.
          That first line? <br />
          cout &lt;&lt;"Hello World"; <br />
          That line might’ve been small, but it opened a door I’ve been
          exploring ever since.
        </AboutPara>
        <AboutPara>
          In college, I found my footing in the Technical Team—drawn by hands-on
          learning and the opportunity to build real things. I joined their Web
          GDP program where I picked up the fundamentals of web development:
          HTML, CSS, and REST APIs with Express.js. That’s where my journey into
          full-stack development truly began.
        </AboutPara>
        <AboutPara>
          Soon, I was part of a four-member team working to rebuild our
          college’s outdated student portal using the MERN stack. Over six
          months, we tackled everything—from user authentication and backend
          logic to frontend integration and deployment. Six months, countless
          bugs, and one-too-many all-nighters later, the portal went live… and
          actually worked.
        </AboutPara>
        <AboutPara>
          That experience didn’t just improve my coding—it taught me how to
          build production-ready systems from the ground up.
        </AboutPara>
        <AboutPara>
          This is one of my favourite quotes (by Ryan Dahl, Creator of Node.js):
        </AboutPara>
        <AboutSubHeader>
          “You can never understand everything. But, you should push yourself to
          understand the system.”
        </AboutSubHeader>
        <AboutPara>
          That quote sticks with me. I don’t aim to master everything—but if
          something’s part of the system, I’ll figure out how it works.
        </AboutPara>
        <AboutPara>
          After graduation, I joined Jio as part of the DevOps team, but early
          on, my manager recognized my strength in development and gave me the
          opportunity to lead two major internal tools: a centralized Knowledge
          Base for managing SOPs and workflows, and an Automation Portal for
          streamlining sanity testing and database logging. While contributing
          to deployments, I also got hands-on with Docker and Kubernetes, and
          collaborated with teams to understand the backbone of scalable
          infrastructure.
        </AboutPara>
        <AboutPara>
          When I’m not debugging code, I’m probably watching Real Madrid
          (Cristiano Ronaldo fan till I die), locking down sites in Valorant as
          a Cypher main, or brewing yet another cup of tea pretending it’s “for
          productivity.” <br />
          <br />
        </AboutPara>
        <AboutSubHeader>
          Football gives me passion, games give me edge, and tea… well, tea
          gives me life.
        </AboutSubHeader>
      </AboutContainer>
      <Footer Header="Got code, chaos, or chai on your mind? Same here" />
    </>
  );
};

export default About;
