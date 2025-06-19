import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import transition from "../Transition";

import MainNavBar from "../component/MainNavBar";
import Footer from "../component/Footer";
import Work from "../component/Work";

import Ocean from "../video/ocean.mp4";

const Home = () => {
  const Container = styled.div``;

  const HeroSection = styled.div`
    height: 82vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${(props) => props.theme.fonts.caslon};
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1200px;

    @media ${(props) => props.theme.MediaQueries.sm} {
      max-width: 600px;
    }

    @media ${(props) => props.theme.MediaQueries.xs} {
      max-width: 350px;
    }
  `;

  const Header = styled(motion.h1)`
    font-size: 35px;
    max-width: 950px;
    font-weight: 200;
    line-height: 45px;

    @media ${(props) => props.theme.MediaQueries.sm} {
      font-size: 25px;
      line-height: 35px;
    }

    @media ${(props) => props.theme.MediaQueries.xs} {
      font-size: 20px;
      line-height: 35px;
    }
  `;

  const Boldheader = styled.span`
    font-weight: 600;
  `;

  const DownloadButton = styled(motion.div)`
    margin-top: 30px;
    @media ${(props) => props.theme.MediaQueries.sm} {
      margin-top: 20px;
    }
  `;

  const Downloadtag = styled.a`
    font-size: 30px;
    font-weight: 200;
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    margin-right: 30px;
    color: ${(props) => props.theme.colors.primary} !important;

    &::after {
      content: ${(props) => (props.underline ? '""' : "none")};
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme.colors.primary};
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: ${(props) => (props.underline ? "100%" : "0")};
    }

    &::before {
      content: ${(props) => (props.fadeLine ? '""' : "none")};
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 40%;
      left: 0;
      background-color: ${(props) => props.theme.colors.primary};
      transform: translateX(0);
      transition: width 0.4s ease;
    }

    &:hover::before {
      width: ${(props) => (props.fadeLine ? "0%" : "100%")};
    }

    @media ${(props) => props.theme.MediaQueries.sm} {
      font-size: 25px;
    }

    @media ${(props) => props.theme.MediaQueries.xs} {
      font-size: 20px;
    }
  `;

  const OverSectionWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    color: ${(props) => props.theme.colors.background};
    padding: 0 20px;
  `;

  const VideoBackground = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    filter: brightness(0.3);
  `;

  const Section = styled.div`
    margin: 50px auto;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: flex-end;
    flex-direction: column;
    position: relative;
    z-index: 1;

    @media ${(props) => props.theme.MediaQueries.sm} {
      margin: 30px auto;
      align-items: center;
    }

    @media ${(props) => props.theme.MediaQueries.xs} {
      margin: 20px auto;
    }
  `;

  const YearsDiv = styled.div`
    max-width: 900px;

    @media ${(props) => props.theme.MediaQueries.sm} {
      max-width: 600px;
    }

    @media ${(props) => props.theme.MediaQueries.xs} {
      max-width: 350px;
    }
  `;

  const SectionHeader = styled(motion.h1)`
    font-size: 60px;
    font-weight: 200;
    margin-bottom: 50px;
    font-family: ${(props) => props.theme.fonts.caslon};

    @media ${(props) => props.theme.MediaQueries.sm} {
      font-size: 50px;
      margin-bottom: 30px;
    }

    @media ${(props) => props.theme.MediaQueries.xs} {
      font-size: 25px;
    }
  `;

  const SectionSpan = styled.span`
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: 40%;
      left: 0;
      background-color: ${(props) => props.theme.colors.background};
    }
  `;

  const Sectionpara = styled(motion.p)`
    font-family: ${(props) => props.theme.fonts.graphik};
    font-size: 22px;
    line-height: 35px;

    @media ${(props) => props.theme.MediaQueries.sm} {
      font-size: 20px;
      line-height: 28px;
    }

    @media ${(props) => props.theme.MediaQueries.xs} {
      font-size: 16px;
      line-height: 25px;
    }
  `;

  return (
    <>
      <MainNavBar />
      <Container>
        <HeroSection>
          <Header
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            Full Stack &lt;<Boldheader>Developer</Boldheader>/&gt; based in
            Mumbai,India. I have worked on a wide range of projects with a focus
            on crafting seamless user experiences with Clean , Elegant and
            Efficient code
          </Header>
          <DownloadButton
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Downloadtag underline href="https://drive.google.com/file/d/1Lt240OUP-IWacEMgu8e2qMHaKTVU3O30/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Get Resume</Downloadtag>
            <Downloadtag fadeLine href="mailto:swarupaa619yes@gmail.com">Lets' Talk</Downloadtag>
          </DownloadButton>
        </HeroSection>

        <OverSectionWrapper>
          <VideoBackground autoPlay muted loop playsInline>
            <source src={Ocean} type="video/mp4" />
          </VideoBackground>
          <Section>
            <YearsDiv>
              <SectionHeader
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Over The <SectionSpan>Bugs</SectionSpan> Years
              </SectionHeader>
              <Sectionpara
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                My journey as a &lt;Developer/&gt; has taken shape through
                hands-on learning and real-world experience. It all began with
                building my college portal—an ambitious project that sparked my
                passion for both frontend and backend development. That early
                initiative laid the foundation for my skills, which I’ve since
                sharpened while working at Jio, where I contributed to scalable
                backend systems, internal tools , Kubernetes deployments, and
                collaborated on frontend features to enhance user experience.
                Each step has deepened my understanding of full stack
                development and strengthened my drive to create clean,
                functional, and user-focused applications.
              </Sectionpara>
            </YearsDiv>
          </Section>
        </OverSectionWrapper>

        <Work />

        <Footer Header="I'm always interested about cool stuff. Are you minding a project?" />
      </Container>
    </>
  );
};

export default transition(Home);
