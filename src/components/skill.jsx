import React from 'react';

const skills = [
  { name: 'Figma', icon: 'path/to/figma-icon.png' },
  { name: 'HTML', icon: 'path/to/html-icon.png' },
  { name: 'CSS', icon: 'path/to/css-icon.png' },
  { name: 'React JS', icon: 'path/to/react-icon.png' },
  { name: 'PHP', icon: 'path/to/php-icon.png' },
];

const NavHeader = styled.nav`
  display: flex;
`;

const Skills = () => {
  return (
    <ClassName>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <img src={skill.icon} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      ))}
    </ClassName>
  );
};

export default Skills;
