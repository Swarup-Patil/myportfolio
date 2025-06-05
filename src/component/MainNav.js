import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./burgerbutton";
import NavbarSection from "./navbar";

const MainNav = () => {
  const [value, setValue] = useState(false);

  const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.graphik};
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

    color: ${(props) =>
      props.Logo
        ? props.value
          ? props.theme.colors.background
          : props.theme.colors.primary
        : props.theme.colors.primary};
  `;

  const Boldheader = styled.span`
    font-weight: 600;
  `;

  return (
    <>
      <Navbar>
        <SubNav>
          <NavList Logo above value={value}>
            Swarup Patil
          </NavList>
        </SubNav>
        <SubNav>
          <NavList>
            &lt;<Boldheader>Developer</Boldheader>/&gt;
          </NavList>
          <NavList above>
            <BurgerButton value={value} setValue={setValue} />
          </NavList>
        </SubNav>
      </Navbar>
      <NavbarSection Open={value} />
    </>
  );
};

export default MainNav;
