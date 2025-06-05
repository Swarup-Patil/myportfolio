import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0.2s;
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

const BurgerButton = ({ value, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setIsOpen(prev => !prev)
  //   setValue(isOpen)
  //   console.log(value , "parent wala")
  //   console.log(isOpen , "value yeh hai ")
  // }

  const handleClick = () => {
    setIsOpen((prev) => {
      const newIsOpen = !prev;
      setValue(newIsOpen);
      return newIsOpen;
    });
  };

  useEffect(() => {
    setIsOpen(value);
  }, [value]);
  return (
    <BurgerWrapper
      className={isOpen ? "opened" : ""}
      onClick={() => {
        handleClick();
      }}
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
  );
};

export default BurgerButton;
