import { motion } from "framer-motion";
import styled from "styled-components";

const SlideIn = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  transform-origin: bottom;
  z-index: 1000;
`;

const SlideOut = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  transform-origin: top;
  z-index: 1000;
`;

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <SlideIn
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
      />

      <SlideOut
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
      />
    </>
  );
};

export default transition;
