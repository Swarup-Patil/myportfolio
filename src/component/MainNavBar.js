import React, { useState } from "react";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.caslon};
  color: ${(props) => props.theme.colors.primary};
  padding: 40px 50px;
`;

const SubNav = styled.ul`
  display: flex;
  align-items: center;
`;

const NavList = styled.li`
  font-size: ${(props) => (props.Logo ? "30px" : "20px")};
  margin-right: 30px;
  font-weight: ${(props) => (props.Logo ? "600" : "200")};
  cursor: pointer;
  z-index: ${(props) => (props.above ? "5" : "0")};
  display: flex;
  align-items: center;
  transition: color 0.3s ease-in-out;
  transition-delay: 0.3s;

  color: ${(props) =>
    props.Logo
      ? props.isOpen
        ? props.theme.colors.background
        : props.theme.colors.primary
      : props.theme.colors.primary};
`;

const Boldheader = styled.span`
  font-weight: 600;
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
`;

const SlideMenu = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0%" : "-100%")};
  z-index: 1;
  transition: right 0.5s ease-in-out;
`;

const NavbarInner = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  font-family: ${(props) => props.theme.fonts.graphik};
  color: ${(props) => props.theme.colors.background};
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

const Column = styled.div`
  width: 50%;
  height: 50%;
`;

const NavListDiv = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: ${(props) => (props.end ? "flex-end" : "flex-start")};
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.background};
  margin-bottom: 30px;
`;

const NavTags = styled.li`
  font-size: ${(props) => {
    if (props.large) return "110px";
    else if (props.mid) return "32px";
    else return "20px";
  }};
  position: relative;
  font-weight: ${(props) => (props.large ? "500" : "200")};
  margin-bottom: ${(props) => (props.large ? "20px" : "0")};
  margin-right: 20px;
  margin-top: ${(props) => (props.small ? "30px" : "0")};
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.background};
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Subtag = styled.li`
  font-size: 20px;
  margin-top: 30px;
  font-weight: 200;
`;

const SubtagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: fadeIn 0.5s ease-in-out;
  margin-top: 0px;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ServiceWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const MainNavBar = () => {
  const [showServices, setShowServices] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar>
        <SubNav>
          <NavList Logo above isOpen={isOpen}>
            Swarup Patil
          </NavList>
        </SubNav>
        <SubNav>
          <NavList>
            &lt;<Boldheader>Developer</Boldheader>/&gt;
          </NavList>
          <NavList above>
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
          </NavList>
        </SubNav>
      </Navbar>

      <SlideMenu isOpen={isOpen}>
        <NavbarInner>
          <NavWrapper>
            <Column>
              <NavListDiv>
                <ServiceWrapper
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <NavTags large>Services</NavTags>
                </ServiceWrapper>
                <NavTags large>Portfolio</NavTags>
                <NavTags large>About</NavTags>
              </NavListDiv>
              <NavListDiv row>
                <NavTags mid>Github</NavTags>
                <NavTags mid>LinkedIn</NavTags>
                <NavTags mid>Mail</NavTags>
              </NavListDiv>
            </Column>
            <Column>
              <NavListDiv end>
                {showServices && (
                  <SubtagWrapper>
                    <Subtag>Backend Development</Subtag>
                    <Subtag>Frontend Development</Subtag>
                    <Subtag>Database Design & Optimization</Subtag>
                    <Subtag>Authentication & Authorization</Subtag>
                    <Subtag>DevOps & Deployment</Subtag>
                  </SubtagWrapper>
                )}
              </NavListDiv>
            </Column>
          </NavWrapper>
        </NavbarInner>
      </SlideMenu>
    </>
  );
};

export default MainNavBar;
