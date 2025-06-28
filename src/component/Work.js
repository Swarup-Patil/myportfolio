// Work.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import WorkCard from "./commonComponent/WorkCard";
// import Pnc from "../image/pnc.png";
import projects from "../data/Project.json";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  column-gap: 45px;
  row-gap: 80px;
  display: grid;
  max-width: 970px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 100px;

  @media ${(props) => props.theme.MediaQueries.xs} {
    row-gap: 50px;
  }
`;

const MoreWorkDiv = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  /* margin-top: 30px; */
`;

const MoreWork = styled(Link)`
  font-size: 40px;
  font-weight: 200;
  font-family: ${(props) => props.theme.fonts.caslon};
  color: ${(props) => props.theme.colors.primary} !important;
  position: relative;
  display: inline-block;
  margin-left: auto;
  cursor: pointer;
  margin: 10px 0;

  @media ${(props) => props.theme.MediaQueries.sm} {
    font-size: 35px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 24px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Work = () => {
  return (
    <MainContainer>
      {projects.slice(0, 4).map((project, index) => (
        <WorkCard
          key={index}
          imageSrc={project.imageSrc}
          title={project.title}
          description={project.description}
          icons={project.icons}
          link={project.link}
        />
      ))}

      <MoreWorkDiv
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <MoreWork to="/portfolio">More Works</MoreWork>
      </MoreWorkDiv>
    </MainContainer>
  );
};

export default Work;
