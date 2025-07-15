import styled from "styled-components";
import transition from "../Transition";

import NavBar from "../component/NavBar";
import CustomCursor from "../component/commonComponent/CustomCursor";
import Footer from "../component/Footer";
import WorkCard from "../component/commonComponent/WorkCard";

import projects from "../data/Project.json";

const WorkContainer = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  padding: 0 20px;
`;

const WorkHeader = styled.h1`
  font-size: 80px;
  font-weight: 200;
  margin: 50px 0 40px;
  font-family: ${(props) => props.theme.fonts.caslon};
  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 55px;
  }
`;

const WorkGrid = styled.div`
  column-gap: 40px;
  row-gap: 80px;
  display: grid;
  /* max-width: 900px; */
  margin: 0 auto;
  margin-bottom: 100px;
    grid-template-columns: repeat(2, 1fr);

  @media ${(props) => props.theme.MediaQueries.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Work = () => {
  return (
    <>
      <CustomCursor />
      <NavBar />
      <WorkContainer>
        <WorkHeader>My Works</WorkHeader>
        <WorkGrid>
          {projects.map((project, index) => (
            <WorkCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              icons={project.icons}
              link={project.link}
            />
          ))}
        </WorkGrid>
      </WorkContainer>
      <Footer Header="Web apps, weird ideas, or wild ambitions — I’m in,"/>
    </>
  );
};

export default transition(Work);
