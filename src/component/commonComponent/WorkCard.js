// WorkCard.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const WorkImage = styled.img`
  height: 500px;
  margin: 0 0 1rem;
  overflow: hidden;
  object-fit: cover;
  position: relative;
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

// const ViewOverlay = styled.div`
//   position: absolute;
//   transform: translate(-50%, -50%);
//   background-color: rgba(255, 165, 0, 0.5);
//   color: white;
//   padding: 35px 30px;
//   border-radius: 50%;
//   font-size: 12px;
//   pointer-events: none;
//   transition: opacity 0.2s ease;
//   z-index: 5;
//   user-select: none;
//   white-space: nowrap;
// `;

const StyledWorkTag = styled(motion.a)`
  cursor: pointer;
  &:hover ${WorkImage} {
    transform: scale(1.1);
  }
  &:hover ${ImageWrapper} {
    transform: scale(0.99);
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
  }
`;

const WorkServices = styled.h3`
  font-size: 16px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.grey};
  line-height: 1.3;
  font-family: ${(props) => props.theme.fonts.graphik};

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

const WorkCard = ({ imageSrc, title, description, icons , link }) => {
  // const [coords, setCoords] = useState({ x: 0, y: 0 });
  // const [showOverlay, setShowOverlay] = useState(false);

  // const handleMouseMove = (e) => {
  //   const bounds = e.currentTarget.getBoundingClientRect();
  //   setCoords({
  //     x: e.clientX - bounds.left,
  //     y: e.clientY - bounds.top,
  //   });
  // };

  return (
    <StyledWorkTag
      href={link}
      target="_blank"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      // onMouseMove={handleMouseMove}
      // onMouseEnter={() => setShowOverlay(true)}
      // onMouseLeave={() => setShowOverlay(false)}
    >
      <ImageWrapper>
        <WorkImage src={require(`../../image/${imageSrc}`)} />
        {/* {showOverlay && (
          <ViewOverlay style={{ top: coords.y, left: coords.x }}>
            View
          </ViewOverlay>
        )} */}
      </ImageWrapper>
      <WorkTitle>{title}</WorkTitle>
      <WorkServices>{description}</WorkServices>
      <WorkServices>
        {icons.map((icon, index) => (
          <IconLogo key={index} src={icon} />
        ))}
      </WorkServices>
    </StyledWorkTag>
  );
};

export default WorkCard;
