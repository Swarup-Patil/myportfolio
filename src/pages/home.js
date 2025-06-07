import React from "react";
import styled from "styled-components";

import MainNavBar from "../component/MainNavBar";
import Accordion from "../component/Accordian";
import Footer from "../component/Footer";

const Home = () => {
  const Container = styled.div``;

  const HeroSection = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${(props) => props.theme.fonts.caslon};
    margin: 0 auto;
    max-width: 1200px;
  `;

  const Header = styled.h1`
    font-size: 50px;
    font-weight: 200;
    line-height: 60px;
  `;

  const DownloadButton = styled.div`
    margin-top: 30px;
  `;

  const Downloadtag = styled.a`
    font-size: 50px;
    font-weight: 200;
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

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

  const Section = styled.div`
    margin: 50px auto;
    max-width: 1440px;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: flex-end;
    flex-direction: column;
  `;

  const YearsDiv = styled.div`
    max-width: 900px;
  `;

  const SectionHeader = styled.h1`
    font-size: 60px;
    font-weight: 200;
    margin-bottom: ${(props) => (props.Work ? "10px" : "50px")};
    font-family: ${(props) => props.theme.fonts.caslon};
  `;

  const Sectionpara = styled.p`
    font-family: ${(props) => props.theme.fonts.graphik};
    font-size: ${(props) => (props.Work ? "24px" : "28px")};
    margin-bottom: ${(props) => (props.Work ? "30px" : "0")};
    line-height: 35px;
  `;

  const WorkSection = styled.div`
    margin: 100px auto;
    max-width: 1440px;
  `;

  const Workhr = styled.hr``;

  const Workspan = styled.span`
    font-size: 35px;
    margin-right: 40px;
  `;

  const WorkTag = styled.a`
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover p {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const WorkTitle = styled.h3`
    font-family: ${(props) => props.theme.fonts.caslon};
    font-size: 55px;
    font-weight: 100;
  `;

  const Workpara = styled.p`
    font-family: ${(props) => props.theme.fonts.graphik};
    font-size: 16px;
    max-width: 35%;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  `;

  const MoreWorkDiv = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  const MoreWork = styled.a`
    font-size: 50px;
    font-weight: 200;
    font-family: ${(props) => props.theme.fonts.caslon};
    position: relative;
    display: inline-block;
    margin-left: auto;
    cursor: pointer;
    margin: 10px 0;

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

  const ServiceSection = styled.section`
    background-color: ${(props) => props.theme.colors.grey};
    padding: 50px 0;
  `;

  const ServiceWrapper = styled.div`
    max-width: 1440px;
    margin: 50px auto;
    display: flex;
  `;

  const ServiceDiv = styled.div`
    width: ${(props) => (props.Title ? "40%" : "60%")};
  `;

  const ServiceHeader = styled.h1`
    font-family: ${(props) => props.theme.fonts.caslon};
    font-size: 55px;
    font-weight: 100;
    color: ${(props) => props.theme.colors.background};
  `;
  return (
    <>
      <MainNavBar/>
      <Container>
        <HeroSection>
          <Header>
            Full Stack &lt;Developer /&gt; based in Mumbai,India.
            I have worked on a wide range of front-end projects with a focus on
            crafting seamless user experiences with Clean , Elegant and
            Efficient code
          </Header>
          <DownloadButton>
            <Downloadtag>Curriculum vitae</Downloadtag>
          </DownloadButton>
        </HeroSection>
        <Section>
          <YearsDiv>
            <SectionHeader>Over The Years</SectionHeader>
            <Sectionpara>
              My journey as a developer has taken shape through hands-on
              learning and real-world experience. It all began with building my
              college portal—an ambitious project that sparked my passion for
              both frontend and backend development. That early initiative laid
              the foundation for my skills, which I’ve since sharpened while
              working at Jio, where I contributed to scalable backend systems,
              microservices, Kubernetes deployments, and collaborated on
              frontend features to enhance user experience. Each step has
              deepened my understanding of full stack development and
              strengthened my drive to create clean, functional, and
              user-focused applications.
            </Sectionpara>
          </YearsDiv>
        </Section>
        <WorkSection>
          <SectionHeader Work>Code Spells & Webcraft</SectionHeader>
          <Sectionpara Work>
            A few of the web things I’ve launched—summoned with JavaScript and
            backend potions—without breaking the internet (most of the time).
          </Sectionpara>
          <Workhr />
          <WorkTag>
            <WorkTitle>
              <Workspan>01.</Workspan> Jio Knowledge Base
            </WorkTitle>
            <Workpara>
              Backend-Development/Database Design/Kubernetes deployment
            </Workpara>
          </WorkTag>
          <Workhr />
          <WorkTag>
            <WorkTitle>
              <Workspan>02.</Workspan> Jio Automation Portal
            </WorkTitle>
            <Workpara>
              Backend-Development/Database Design/Kubernetes deployment
            </Workpara>
          </WorkTag>
          <Workhr />
          <WorkTag>
            <WorkTitle>
              <Workspan>03.</Workspan> Student Portal
            </WorkTitle>
            <Workpara>
              Backend-Development/Database Design/Kubernetes deployment
            </Workpara>
          </WorkTag>
          <Workhr />
          <MoreWorkDiv>
            <MoreWork>More Work</MoreWork>
          </MoreWorkDiv>
        </WorkSection>
        <ServiceSection>
          <ServiceWrapper>
            <ServiceDiv Title>
              <ServiceHeader>My Services</ServiceHeader>
            </ServiceDiv>
            <ServiceDiv>
              <Accordion number="01" title="BACKEND DEVELOPMENT">
                I love building solid backend systems that actually scale.
                Whether it’s designing REST APIs or structuring clean backend
                logic, I enjoy writing the code that keeps everything quietly
                running.
              </Accordion>

              <Accordion number="02" title="FRONTEND DEVELOPMENT">
                Clean, responsive, and easy-to-use interfaces are my thing. I
                like making frontend experiences that not only look good but
                feel intuitive—whether it’s a dashboard or a full-on portal.
              </Accordion>

              <Accordion number="03" title="FULL STACK DEVELOPMENT">
                Taking a project from scratch to something people can use?
                That’s my sweet spot. I enjoy owning both the frontend and
                backend, making sure everything plays nicely together.
              </Accordion>

              <Accordion number="04" title="DEPLOYMENT & SERVER MANAGEMENT">
                I deploy my projects directly to servers using PM2, and I’ve
                worked with Docker and Kubernetes for containerization and
                scaling. Haven’t gone deep into CI/CD yet, but I like getting
                things live reliably.
              </Accordion>

              <Accordion number="05" title="DATABASE DESIGN & INTEGRATION">
                I’ve worked with MySQL, MongoDB, and a bit of everything in
                between. Designing schemas and making data flow cleanly is
                something I genuinely enjoy.
              </Accordion>

              <Accordion number="06" title="AUTHENTICATION & AUTHORIZATION">
                Auth is one of my favorite areas to work on. I’ve implemented
                secure flows using JWT, sessions, cookies, Google Sign-In,
                Microsoft login—you name it, I’ve probably wired it up.
              </Accordion>
            </ServiceDiv>
          </ServiceWrapper>
        </ServiceSection>
        <Footer Header="I'm always interested about cool stuff. Are you minding a project?"/>
      </Container>
    </>
  );
};

export default Home;
