import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

// === Motion Variants ===
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FooterSection = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
`;

const FooterWrapper = styled.div`
  padding: 50px 0;
  max-width: 1300px;
  margin: 0 auto;

  @media ${(props) => props.theme.MediaQueries.sm} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    max-width: 300px;
    padding: 30px 0 0;
  }
`;

const FooterHeader = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.caslon};
  font-size: 50px;
  font-weight: 100;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.sm} {
    text-align: left;
    max-width: 500px;
    font-size: 30px;
  }
`;

const FooterContact = styled(motion.div)`
  display: flex;
  margin-top: 80px;
  justify-content: space-between;
  padding: 0 20px;
  @media ${(props) => props.theme.MediaQueries.xs} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    margin-top: 30px;
  }
`;

const SubFooter = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-direction: ${(props) => (props.contact ? "column" : "row")};
`;

const FooterContent = styled.a`
  font-size: 16px;
  position: relative;
  color: ${(props) =>
    props.Heading
      ? props.theme.colors.background
      : props.theme.colors.grey} !important;
  margin: ${(props) => (props.Heading ? "20px 10px 10px 0" : "0 10px 10px 0")} !important;
  cursor: ${(props) => (props.Heading ? "default" : "pointer")};

  &::after {
    content: ${(props) => (props.underline ? '""' : "none")};
    position: absolute;
    width: 0%;
    height: 0.5px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.grey};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: ${(props) => (props.underline ? "100%" : "0")};
  }

  @media ${(props) => props.theme.MediaQueries.sm} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 12px;
    margin-top: ${(props) => (props.Heading ? "20px" : "0")} !important;
  }
`;

const FooterLink = styled(Link)`
  font-size: 16px;
  position: relative;
  color: ${(props) =>
    props.Heading
      ? props.theme.colors.background
      : props.theme.colors.grey} !important;
  margin-right: 10px;
  cursor: pointer;

  &::after {
    content: ${(props) => (props.underline ? '""' : "none")};
    position: absolute;
    width: 0%;
    height: 0.5px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.grey};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: ${(props) => (props.underline ? "100%" : "0")};
  }

  @media ${(props) => props.theme.MediaQueries.sm} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 12px;
  }
`

const FooterMail = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.background} !important;
  position: relative;
  display: inline-block;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 40%;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.background};
    transform: translateX(0);
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 0;
  }
`;

const Footer = ({ Header }) => {
  const headerRef = useRef(null);
  const contactRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isContactInView = useInView(contactRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <FooterSection>
      <FooterWrapper>
        <FooterHeader
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {Header}&nbsp;
          <FooterMail href="mailto:swarupaa619yes@gmail.com">
            Let's talk.
          </FooterMail>
        </FooterHeader>

        <FooterContact
          ref={contactRef}
          variants={containerVariants}
          initial="hidden"
          animate={isContactInView ? "show" : "hidden"}
        >
          <motion.div variants={tagVariants}>
            <FooterContent Heading >Swarup Patil —</FooterContent>
            <SubFooter>
              <FooterLink underline to="/">Home</FooterLink>
              <FooterLink underline to="/portfolio">Work</FooterLink>
              <FooterLink underline to="/about">About</FooterLink>
            </SubFooter>
          </motion.div>
          <motion.div variants={tagVariants}>
            <FooterContent Heading >Cotact —</FooterContent>
            <SubFooter contact>
              <FooterContent href="mailto:swarupaa619yes@gmail.com">swaruppatil@gmail.com</FooterContent>
              <FooterContent href="tel:+917208877440">+91 7208877440</FooterContent>
            </SubFooter>
          </motion.div>
          <motion.div variants={tagVariants}>
            <FooterContent Heading >Socials</FooterContent>
            <SubFooter>
              <FooterContent underline href="https://www.linkedin.com/in/swarup-santosh-patil/" target="_blank">Linkedin</FooterContent>
              <FooterContent underline href="https://github.com/Swarup-Patil" target="_blank">Github</FooterContent>
            </SubFooter>
          </motion.div>
        </FooterContact>
      </FooterWrapper>
    </FooterSection>
  );
};

export default Footer;
