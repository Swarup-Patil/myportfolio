import React from "react";
import styled from "styled-components";
// import BurgerButton from "./burgerbutton";

const Main = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.blue};
  position: fixed;
  top: 0;
  right: ${(props) => (props.Open ? "0%" : "-100%")};
  z-index: 1;
  transition: right 0.5s ease-in-out;
`;

const Navbar = styled.div`
  display: flex;
  position: absolute;
  top: 0%;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.graphik};
  color: ${(props) => props.theme.colors.background};
  padding: 40px 50px;
`;

const SubNav = styled.ul``;

// const NavList = styled.li`
//   font-size: ${(props) => (props.Logo ? "24px" : "20px")};
//   margin-right: 30px;
//   font-weight: ${(props) => (props.Logo ? "600" : "500")};
//   cursor: pointer;
//   display: flex;
//   align-items: center;
// `;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 70%;
  height: 100%;
  margin: 0 auto;
`;

const Subnavwrapper = styled.div`
  width: 50%;
  height: 50%;
`;

const Navlistdiv = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: ${(props) => (props.end ? "flex-end" : "flex-start")};
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.background};
  margin-bottom: 30px;
`;

const Subtag = styled.li`
  font-size: 20px;
  margin-top: 30px;
  font-weight: 200;
`

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

const NavbarSection = ({ Open }) => {
  return (
    <Main Open={Open}>
      <Navbar>
        <SubNav>{/* <NavList Logo>Swarup Patil</NavList> */}</SubNav>
        {/* <SubNav>
          <NavList>
            <BurgerButton />
          </NavList>
        </SubNav> */}
      </Navbar>
      <NavbarWrapper>
        <Subnavwrapper>
          <Navlistdiv>
            <NavTags large>Services</NavTags>
            <NavTags large>Portfolio</NavTags>
            <NavTags large>About</NavTags>
          </Navlistdiv>
          <Navlistdiv row>
            <NavTags mid>Github</NavTags>
            <NavTags mid>linkedin</NavTags>
            <NavTags mid>Mail</NavTags>
          </Navlistdiv>
        </Subnavwrapper>
        <Subnavwrapper>
          <Navlistdiv end>
            <div>
            <Subtag>Backend Development</Subtag>
            <Subtag>Frontend Development</Subtag>
            <Subtag>Database Design & Optimization</Subtag>
            <Subtag>Authentication & Authorization</Subtag>
            <Subtag>DevOps & Deployment</Subtag>
            </div>
          </Navlistdiv>
        </Subnavwrapper>
      </NavbarWrapper>
    </Main>
  );
};

export default NavbarSection;
