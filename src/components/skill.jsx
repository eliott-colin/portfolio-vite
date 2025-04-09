import React from 'react';
import styled from 'styled-components';

const skills = [
  { name: 'Figma', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/figma.png?raw=true' },
  { name: 'HTML', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/html.png?raw=true' },
  { name: 'js', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/js.png?raw=true' },
  { name: 'CSS', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/css.png?raw=true' },
  { name: 'React', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/react.png?raw=true' },
  { name: 'PHP', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/php.png?raw=true' },
];

const ClassName = styled.div`
  display: flex;
  margin-bottom: 32px;
  margin-top: 32px;
`;

const SkillContainers = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px;
  background: #060D12;
  margin: auto;
  border-radius: 12px;
  box-shadow: inset 0px -20px 80px rgba(255, 255, 255, 0.12);
`;

const SkillContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const StyledImage = styled.img`
  height: 125px;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`;
const Overlay = styled.div`
  position: absolute;
  width: 15%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5px;
  border-radius: 22px;
  transform: translateY(858%) translateX(-3%);
  background-color: rgba(255, 255, 255, 0.26);
  text-align: center;
  opacity: 0.5;
  transition: 0.3s ease-in-out;
`;

const Skills = () => {
  return (
    <ClassName>
      <SkillContainers>
      {skills.map((skill, index) => (
        <SkillContainer key={index}>
          <StyledImage src={skill.image} alt={skill.name} />
        </SkillContainer>
      ))}
      <Overlay>
          <h2 style={{ color: 'white', textAlign: 'center' }}>Skills</h2>
        </Overlay>
      </SkillContainers>
    </ClassName>
  );
};

export default Skills;
