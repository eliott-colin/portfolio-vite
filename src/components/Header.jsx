import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavHeader = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
  color: red;
  font-size: 20px;
  padding-top: 5%;
`;
const UlHeader = styled.ul`
  list-style: none;
  padding: 0;
  display:flex;
  gap:10px;
`;
const LiHeader = styled.li`
  display:flex;
  background-color: #1B1919;
  border-radius:12px;
  gap:10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  width: 100%;
  height: 72px;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px -10px 80px rgba(255, 255, 255, 0.12);
  margin-bottom: 20px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0);
    transition: 0.3s ease-in-out;
    box-shadow: none;
  }`;

const AHeader = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #ffffff;
    transition: 0.3s ease-in-out;
  }`;

  const DivHeader = styled.div`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    color: #ffffff;
    transition: 0.3s ease-in-out;
  }`;

  const AHeaderActive = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  }`;

  const LiHeaderActive = styled(LiHeader)`
  display:flex;
  border-radius:12px;
  gap:10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  width: 100%;
  height: 72px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: rgba(199, 179, 179, 0);
  box-shadow: none;
  }`;

const Header = ({currentPage}) => {
  return (
    console.log("Header component rendered with currentPage:", currentPage),
    <NavHeader>
      <UlHeader>
        {currentPage == "home" ? (
          <AHeaderActive to="/"><LiHeaderActive><DivHeader>Homepage</DivHeader></LiHeaderActive></AHeaderActive>
        ) : (
          <AHeader to="/Projects"><LiHeader><DivHeader>Projets</DivHeader></LiHeader></AHeader>
        )}
        {currentPage == "projects" ? (
          <AHeaderActive to="/Projects"><LiHeaderActive><DivHeader>Projets</DivHeader></LiHeaderActive></AHeaderActive>
        ) : (
          <AHeader to="/Projects"><LiHeader><DivHeader>Projets</DivHeader></LiHeader></AHeader>
        )}
        {currentPage == "skills" ? (
          <AHeaderActive to="/Skills"><LiHeaderActive><DivHeader>Compétences</DivHeader></LiHeaderActive></AHeaderActive>
        ) : (
          <AHeader to="/Skills"><LiHeader><DivHeader>Compétences</DivHeader></LiHeader></AHeader>
        )}
      </UlHeader>
    </NavHeader>
  );
};

export default Header;
