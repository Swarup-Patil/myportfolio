import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


const WorkImage = styled.img`
  height: 500px;
  object-fit: cover;
  width: 100%;
  transition: transform 0.4s ease;

  @media ${(props) => props.theme.MediaQueries.sm} {
    height: 395px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    height: 295px;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  height: 500px;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 1rem;
  transition: transform 0.4s ease;

  @media ${(props) => props.theme.MediaQueries.sm} {
    height: 395px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    height: 295px;
    margin-top: 50px;
  }
`;

const StyledWorkTag = styled(motion.a)`
  position: relative;
  cursor: pointer;

  &:hover ${WorkImage} {
    transform: scale(1.1);
  }

  &:hover ${ImageWrapper} {
    transform: scale(0.99);
  }
`;

const ViewOverlay = styled.div`
  position: absolute;
  background-color: rgba(255, 165, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  font-size: 12px;
  pointer-events: none;
  z-index: 10;
  transform: translate(-50%, -50%);
  @media ${(props) => props.theme.MediaQueries.sm} {
    display: none;
  }
`;

const WorkTitle = styled.h2`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.graphik};
  color: ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 14px;
    line-height: 18px;
  }
`;

const Viewbutton = styled.a`
  display: none;
  position: relative;

  @media ${(props) => props.theme.MediaQueries.sm} {
    display: inline;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    font-family: ${(props) => props.theme.fonts.caslon};
    color: ${(props) => props.theme.colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
    transition: width 0.3s ease-in-out;
  }
`;

const WorkServices = styled.h3`
  font-size: 16px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.grey};
  line-height: 1.3;
  font-family: ${(props) => props.theme.fonts.graphik};

  @media ${(props) => props.theme.MediaQueries.sm} {
    margin-bottom: 10px;
  }

  @media ${(props) => props.theme.MediaQueries.xs} {
    font-size: 11px;
  }
`;

const IconLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;

  @media ${(props) => props.theme.MediaQueries.sm} {
    width: 20px;
    height: 20px;
  }
`;

const Arrow = styled.svg`
  width: 15px;
  fill: ${(props) => props.theme.colors.background} !important;
  height: auto;
  margin-top: 5px;
`;

const WorkCard = ({ imageSrc, title, description, icons, link }) => {
  const coordsRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    coordsRef.current = {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(() => {
      setCoords({ ...coordsRef.current });
    });
  };

  const handleMouseEnter = () => setShowOverlay(true);
  const handleMouseLeave = () => setShowOverlay(false);

  return (
    <StyledWorkTag
      href={link}
      target="_blank"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ImageWrapper>
        <WorkImage src={require(`../../image/${imageSrc}`)} />
      </ImageWrapper>
      <WorkTitle>{title}</WorkTitle>
      <WorkServices>{description}</WorkServices>
      <WorkServices>
        {icons.map((icon, index) => (
          <IconLogo key={index} src={icon} />
        ))} 
      </WorkServices>
      <Viewbutton>View Project</Viewbutton>
      {showOverlay && (
        <ViewOverlay style={{ left: `${coords.x}px`, top: `${coords.y}px` }}>
          view project{" "}
          <Arrow viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z" />
          </Arrow>
        </ViewOverlay>
      )}
    </StyledWorkTag>
  );
};

export default WorkCard;
