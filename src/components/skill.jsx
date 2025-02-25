import React from 'react';
import styled from 'styled-components';

const skills = [
  { name: 'Figma', image: '../src/assets/figma.png' },
  { name: 'HTML', image: '../src/assets/html.png' },
  { name: 'js', image: '../src/assets/js.png' },
  { name: 'CSS', image: '../src/assets/css.png' },
  { name: 'React', image: '../src/assets/react.png' },
  { name: 'PHP', image: '../src/assets/php.png' },
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

const Skills = () => {
  return (
    <ClassName>
      <SkillContainers>
      {skills.map((skill, index) => (
        <SkillContainer key={index}>
          <StyledImage src={skill.image} alt={skill.name} />
        </SkillContainer>
      ))}
      </SkillContainers>
    </ClassName>
  );
};

export default Skills;
