import React from 'react';
import styled from 'styled-components';
import FeatureNotification from '../components/features';
import { useState } from 'react';

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
  width: 33%;
  height: 72px;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px -10px 80px rgba(255, 255, 255, 0.12);
  margin-bottom: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0);
    transition: 0.3s ease-in-out;
    box-shadow: none;
  }`;

const AHeader = styled.a`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    color: #ffffff;
    transition: 0.3s ease-in-out;
  }
`;


const header = () => {
  const [showNotif, setShowNotif] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 5000);
  };

  return (
    <>
      <NavHeader>
        <UlHeader>
          <LiHeader><AHeader href="#" onClick={handleClick}>Homepage</AHeader></LiHeader>
          <LiHeader><AHeader href="#" onClick={handleClick}>Projets</AHeader></LiHeader>
          <LiHeader><AHeader href="#" onClick={handleClick}>Compétences</AHeader></LiHeader>
        </UlHeader>
      </NavHeader>

      {showNotif && <FeatureNotification />}
    </>
  );
};

export default header;
