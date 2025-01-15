import React from 'react';
import styled from 'styled-components';

const NavHeader = styled.nav`
  color: red;
  font-size: 20px;
  padding-top: 5%;
`;
const UlHeader = styled.li`
  display:flex;
  gap:10px;
`;
const LiHeader = styled.li`
  display:flex;
  background-color:#1B1919;
  border-radius:12px;
  gap:10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  width: 33%;
  height: 72px;
  justify-content: center;
  align-items: center;`;



const header = () => {
  return (
    <NavHeader>
      <UlHeader>
        <LiHeader><a href="#homepage">Homepage</a></LiHeader>
        <LiHeader><a href="#projects">Projets</a></LiHeader>
        <LiHeader><a href="#skills">Compétences</a></LiHeader>
      </UlHeader>
    </NavHeader>
  );
};

export default header;


