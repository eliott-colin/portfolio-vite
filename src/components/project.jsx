import React, { useState } from 'react';
import styled from 'styled-components';

const ContainerProject = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: #1e1e1e;
  color: white;
  max-width: 600px;
  margin: auto;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const ProjectInfo = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  margin: 4px 0 0;
  font-size: 1rem;
  opacity: 0.8;
`;

const images = [
  "../src/assets/calao.png",
  "../src/assets/humadentaire.png",
  "../src/assets/unimeet.png"
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <ContainerProject>
      <Carousel>
        <PrevButton onClick={prevImage}>❮</PrevButton>
        <ProjectImage src={images[currentIndex]} alt="Project Preview" />
        <NextButton onClick={nextImage}>❯</NextButton>
      </Carousel>
      <ProjectInfo>
        <ProjectTitle>Calao Studio</ProjectTitle>
        <ProjectDescription>
          Développement d'un site internet pour un salon de tatouage. Situé à Bordeaux.
        </ProjectDescription>
      </ProjectInfo>
    </ContainerProject>
  );
};

export default Project;
