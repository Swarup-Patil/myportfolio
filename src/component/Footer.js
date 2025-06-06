import React from "react";
import styled from "styled-components";

const FooterSection = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  /* height: 50vh; */
  color: ${(props) => props.theme.colors.background};
`;

const FooterWrapper = styled.div`
  padding: 50px 0;
  max-width: 900px;
  margin: 0 auto;
`;

const FooterHeader = styled.h1`
  font-family: ${(props) => props.theme.fonts.caslon};
  font-size: 80px;
  font-weight: 100;
`;

const FooterMail = styled.a`
  /* margin-left: 20px; */
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

const ContactDiv = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 20px 0;
`;

const ContactTag = styled.a`
  font-family: ${(props) => props.theme.fonts.caslon};
  font-size: 24px;
  margin-right: 30px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.background};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>
        <FooterHeader>
          I'm always interested about cool stuff. Are you minding a project?
          <FooterMail href="mailto:swarupaa619yes@gmail.com">
            Let's talk.
          </FooterMail>
        </FooterHeader>
        <ContactDiv>
          <ContactTag>linkedin</ContactTag>
          <ContactTag>Github</ContactTag>
          <ContactTag>Instagram</ContactTag>
        </ContactDiv>
      </FooterWrapper>
    </FooterSection>
  );
};

export default Footer;
