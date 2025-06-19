import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

const Navbar = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.caslon};
  color: ${(props) => props.theme.colors.primary};
  padding: 40px 50px;

  @media ${(props) => props.theme.MediaQueries.sm} {
    padding: 20px 30px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    padding: 20px 10px;
  }
`;

const SubNav = styled.ul`
  display: flex;
  align-items: center;
`;

const NavList = styled.li`
  font-size: 30px;
  margin-right: 30px;
  font-weight: 600;
  cursor: pointer;
  z-index: 5;
  transition: color 0.3s ease-in-out;
  transition-delay: 0.3s;

  color: ${(props) =>
    props.Logo
      ? props.isOpen
        ? props.theme.colors.background
        : props.theme.colors.primary
      : props.theme.colors.primary};

  @media ${(props) => props.theme.MediaQueries.sm} {
    font-size: 24px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 22px;
    margin-right: 0;
  }
`;

const NavItem = styled(Link)`
  font-size: 16px;
  margin-right: 30px;
  font-weight: 200;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 40%;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    transform: translateX(0);
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${(props) => props.theme.colors.primary};
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    display: none;
  }
`;

const BurgerWrapper = styled.button`
  background-color: transparent;
  z-index: 5;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  margin-left: 5px;
  width: 35px;
  height: 35px;
  display: none;

  svg {
    width: 100%;
    height: 100%;
  }

  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 0.3s ease-in-out;
    transition-delay: 0.3s;
  }

  .line1 {
    stroke-dasharray: 60 207;
  }

  .line2 {
    stroke-dasharray: 60 60;
  }

  .line3 {
    stroke-dasharray: 60 207;
  }

  &.opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke: white;
  }

  &.opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke: white;
  }

  &.opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke: white;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    display: block;
  }
`;

const SlideMenu = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0%" : "-100%")};
  z-index: 2;
  transition: right 0.5s ease-in-out;
`;

const NavbarInner = styled.div`
  width: 100%;
  height: 100vh;
  /* position: absolute; */
  top: 0;
  font-family: ${(props) => props.theme.fonts.caslon};
  color: ${(props) => props.theme.colors.background};
`;

const NavWrapper = styled.div`
  width: 70%;
  height: 100%;
  margin: 100px auto 10px;
`;

const NavListDiv = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.background};
  margin-bottom: 30px;
`;

const NavTags = styled(Link)`
  width: fit-content;
  font-size: 45px;
  position: relative;
  font-weight: 500;
  margin-bottom: 40px;
  margin-right: 20px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${(props) => props.theme.colors.background};
  }
`;

const NavNumber = styled.p`
  position: absolute;
  color: ${(props) => props.theme.colors.grey};
  font-size: 12px;
  top: -5px;
  left: -20px;
`;

const SubFooter = styled.div`
  display: flex;
`;

const FooterContent = styled.p`
  font-size: 12px;
  position: relative;
  color: ${(props) =>
    props.Heading ? props.theme.colors.background : props.theme.colors.grey};
  margin-top: ${(props) => (props.Heading ? "20px" : "5px")};
  cursor: ${(props) => (props.Heading ? "default" : "pointer")};
  margin-right: 10px;
`;

const MainNavBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <Navbar>
        <SubNav>
          <NavList Logo above isOpen={isOpen}>
            Swarup Patil
          </NavList>
        </SubNav>
        <SubNav>
          <NavItem to="/" active={isActive("/")}>
            Home
          </NavItem>
          <NavItem to="/portfolio" active={isActive("/portfolio")}>
            Work
          </NavItem>
          <NavItem to="/about" active={isActive("/about")}>
            About
          </NavItem>
          <BurgerWrapper
            className={isOpen ? "opened" : ""}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Main Menu"
            aria-expanded={isOpen}
          >
            <svg viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </BurgerWrapper>
        </SubNav>
      </Navbar>

      <SlideMenu isOpen={isOpen}>
        <NavbarInner>
          <NavWrapper>
            <NavListDiv>
              <NavTags to="/" active={isActive("/")}>
                Home <NavNumber>01</NavNumber>
              </NavTags>
              <NavTags to="/portfolio" active={isActive("/portfolio")}>
                Portfolio <NavNumber>02</NavNumber>
              </NavTags>
              <NavTags to="/about" active={isActive("/about")}>
                About <NavNumber>03</NavNumber>
              </NavTags>
            </NavListDiv>
            <FooterContent Heading>Cotact —</FooterContent>
            <FooterContent>swaruppatil@gmail.com</FooterContent>
            <FooterContent>+91 7208877440</FooterContent>
            <FooterContent Heading>Socials</FooterContent>
            <SubFooter>
              <FooterContent underline>linkedin</FooterContent>
              <FooterContent underline>Instagram</FooterContent>
            </SubFooter>
          </NavWrapper>
        </NavbarInner>
      </SlideMenu>
    </>
  );
};

export default MainNavBar;
