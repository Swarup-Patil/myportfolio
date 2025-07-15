import React from "react";
import styled from "styled-components";
import transition from "../Transition";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import NavBar from "../component/NavBar";
import CustomCursor from "../component/commonComponent/CustomCursor";
import Footer from "../component/Footer";

import Me from "../image/me.webp";
import webteam from "../image/webteam.webp";
import hoodie from "../image/hoodie.webp";
import jio from "../image/jio.webp";
import tea from "../image/tea.webp";

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px 100px 20px;
  @media ${(props) => props.theme.MediaQueries.sm} {
    padding: 0 20px 50px 20px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    padding: 0 20px 0px 20px;
  }
`;

const AboutFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.End ? "0" : "150px")};

  @media ${(props) => props.theme.MediaQueries.sm} {
    margin-bottom: ${(props) => (props.End ? "0" : "100px")};
  }
  @media ${(props) => props.theme.MediaQueries.xs} {
    margin-bottom: ${(props) => (props.End ? "0" : "50px")};
    flex-direction: ${(props) => (props.Column ? "column-reverse" : "column")};
  }
`;

const AboutHeader = styled.h1`
  font-size: 55px;
  font-weight: 200;
  font-family: ${(props) => props.theme.fonts.caslon};

  @media ${(props) => props.theme.MediaQueries.sm} {
    font-size: 30px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 20px;
  }
`;

const MeImage = styled(motion.img)`
  height: 500px;
  width: auto;
  margin-left: 30px;
  object-fit: cover;

  @media ${(props) => props.theme.MediaQueries.sm} {
    height: 400px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    margin-left: 0;
    margin-top: 30px;
    width: 100%;
  }
`;

const TechImage = styled.img`
  width: 550px;
  height: auto;
  margin-right: 30px;

  @media ${(props) => props.theme.MediaQueries.sm} {
    width: 350px;
    margin-right: 0px;
  }
  @media ${(props) => props.theme.MediaQueries.xs} {
    margin-top: 20px;
    width: 100%;
  }
`;

const Quote = styled.div`
  font-size: 55px;
  max-width: 1000px;
  margin: 50px auto 100px;
  font-family: ${(props) => props.theme.fonts.caslon};
  @media ${(props) => props.theme.MediaQueries.sm} {
    font-size: 30px;
    max-width: 500px;
    margin: 50px auto 100px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 20px;
    margin: 50px auto 50px;
  }
`;

const AboutSubHeader = styled(motion.h2)`
  font-size: 35px;
  max-width: 800px;
  margin: 30px 0;
  font-family: ${(props) => props.theme.fonts.caslon};

  @media ${(props) => props.theme.MediaQueries.sm} {
    font-size: 20px;
    margin: 20px 0;
    max-width: 500px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 16px;
  }
`;

const AboutPara = styled(motion.p)`
  font-size: 20px;
  max-width: 800px;
  margin-top: 30px;
  line-height: 30px;

  @media ${(props) => props.theme.MediaQueries.sm} {
    font-size: 16px;
    margin-top: 15px;
    max-width: 500px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 12px;
    line-height: 20px;
  }
`;

const TeaImage = styled.img`
  width: 400px;
  height: auto;
  margin-right: 50px;

  @media ${(props) => props.theme.MediaQueries.sm} {
    width: 300px;
    margin-right: 20px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    width: 100%;
    margin-right: 0;
  }
`;

const JioDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const About = () => {
  return (
    <>
      <CustomCursor />
      <NavBar />
      <AboutContainer>
        <AboutFlex>
          <div>
            <AboutHeader>
              console.log("
              <TypeAnimation sequence={[1000, "Swarup Patil"]} />
              ");
            </AboutHeader>
            <AboutSubHeader
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.75 }}
            >
              Obsessed with JavaScript, performance, and second cups of tea.
            </AboutSubHeader>

            <AboutPara
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              I started this journey back in 11th grade, when I wrote my first
              C++ program and realized how much I enjoyed solving problems with
              code. That first line? <br />
              <br />
              cout &lt;&lt;"Hello World"; <br />
              <br />
              That line might’ve been small, but it opened a door I’ve been
              exploring ever since.
            </AboutPara>
          </div>
          <MeImage
            src={Me}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.25 }}
          />
        </AboutFlex>
        <AboutFlex Column>
          <div>
            <TechImage src={webteam} />
            <TechImage src={hoodie} />
          </div>
          <div>
            <AboutPara>
              In college, I found my footing in the Technical Team—drawn by
              hands-on learning and the opportunity to build real things. I
              joined their Web GDP program where I picked up the fundamentals of
              web development: HTML, CSS, and REST APIs with Express.js. That’s
              where my journey into full-stack development truly began.
            </AboutPara>
            <AboutPara>
              Soon, I was part of a four-member team working to rebuild our
              college’s outdated student portal using the MERN stack. Over six
              months, we tackled everything—from user authentication and backend
              logic to frontend integration and deployment. Six months,
              countless bugs, and one-too-many all-nighters later, the portal
              went live… and actually worked.
            </AboutPara>
            <AboutPara>
              That experience didn’t just improve my coding—it taught me how to
              build production-ready systems from the ground up.
            </AboutPara>
          </div>
        </AboutFlex>
        <Quote>
          “You can never understand everything. But, you should push yourself to
          understand the system.”
        </Quote>
        <AboutPara>
          This is one of my favourite quotes (by Ryan Dahl, Creator of Node.js)
          That quote sticks with me. I don’t aim to master everything—but if
          something’s part of the system, I’ll figure out how it works.
        </AboutPara>
        <AboutFlex>
          <JioDiv>
            <img src={jio} style={{ margin: "50px 0" }} alt="jio" />
            <AboutPara>
              After graduation, I joined Jio as part of the DevOps team, but
              early on, my manager recognized my strength in development and
              gave me the opportunity to lead two major internal tools: a
              centralized Knowledge Base for managing SOPs and workflows, and an
              Automation Portal for streamlining sanity testing and database
              logging. While contributing to deployments, I also got hands-on
              with Docker and Kubernetes, and collaborated with teams to
              understand the backbone of scalable infrastructure.
            </AboutPara>
          </JioDiv>
        </AboutFlex>
        <AboutFlex End>
          <TeaImage src={tea} />
          <div>
            <AboutPara>
              When I’m not debugging code, I’m probably watching Real Madrid
              (Cristiano Ronaldo fan till I die), locking down sites in Valorant
              as a Cypher main, or brewing yet another cup of tea pretending
              it’s “for productivity.” <br />
              <br />
            </AboutPara>
            <Quote>
              Football gives me passion, games give me edge, and tea… well, tea
              gives me life.
            </Quote>
          </div>
        </AboutFlex>
      </AboutContainer>
      <Footer Header="Got code, chaos, or chai on your mind? Same here" />
    </>
  );
};

export default transition(About);
