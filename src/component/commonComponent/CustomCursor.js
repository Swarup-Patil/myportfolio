// CustomCursor.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CustomCursorDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(255, 165, 0, 0.8);
  pointer-events: none;
  z-index: 50;

  @media ${(props) => props.theme.MediaQueries.sm} {
    display: none;
  }
`;

const CustomCursor = ({ variant = "default" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.1,
      },
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "White",
      mixBlendMode: "difference",
    },
  };

  return <CustomCursorDiv variants={variants} animate={variant} />;
};

export default CustomCursor;
