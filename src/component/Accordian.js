import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionSection = styled.div`
  color: ${(props) => props.theme.colors.background};
  padding: 50px;
  border-top: 1px solid ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 200;
  cursor: pointer;
`;

const AccordionNumber = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.colors.background};
`;

const AccordionTitle = styled.div`
  margin-left: 30px;
`;

const AccordionIcon = styled.div`
  font-size: 24px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

const AccordionContent = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? '30px 0' : '0')};
  margin-left: 56.5px;
`;

const AccordionText = styled.p`
  color: ${(props) => props.theme.colors.background};
  font-size: 20px;
  line-height: 30px;
`;

const Accordion = ({ number, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionSection>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AccordionNumber>{number}</AccordionNumber>
          <AccordionTitle>{title}</AccordionTitle>
        </div>
        <AccordionIcon isOpen={isOpen}>⌃</AccordionIcon>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>
        <AccordionText>{children}</AccordionText>
      </AccordionContent>
    </AccordionSection>
  );
};

export default Accordion;
