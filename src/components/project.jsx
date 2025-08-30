import React, { useState } from 'react';
import styled from 'styled-components';

const ContainerProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  @media (max-width: 600px) {
    padding: 0px;
    padding-top: 20px;
    }
  border-radius: 8px;
  color: white;
  height: 100%;
  width: 100%;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
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
  margin : 2px;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 13, 18, 0.75);
  width: 400px;
  padding: 8px;
  border-radius: 30px;
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

const LinksImages = [
  { title: 'Calao', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/calao.png?raw=true' , links:'https://calaostudio.fr/',description:'Développement d’un site internet pour un salon de tatouage. Situé à Bordeaux' },
  { title: 'Mood-Sense', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/moodsense.png?raw=true' , links:'https://eliott-colin.github.io/Mood-sense/', description:'Développement d’un site internet pour un projet de fin d’études. Application de gestion de l’humeur.' },
  { title: 'Pokédex', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/pokedex.png?raw=true' , links:'https://eliott-colin.github.io/cours/D%C3%A9veloppement-front-deconto/PokedexV1/index.html' , description:'Développement d’un site internet pour un projet de cours. Application de gestion de pokémons.' },
  { title: 'Clickemon', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/image.png?raw=true' , links:'https://clickemon.netlify.app/', description:"Développement d'un jeu type clicker."  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % LinksImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + LinksImages.length) % LinksImages.length);
  };

  //<a href={LinksImages[currentIndex].links} target="_blank" rel="noopener noreferrer">
  return (
    <ContainerProject>
      <Carousel style={{ backgroundImage: `url(${LinksImages[currentIndex].image})` , borderRadius: '20px', backgroundSize: 'cover', backgroundPosition: 'center' , backgroundRepeat: 'no-repeat'}}>  
        <PrevButton onClick={prevImage}>❮</PrevButton>
        <NextButton onClick={nextImage}>❯</NextButton>
        <ProjectInfo> 
          <a href={LinksImages[currentIndex].links} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}> 
            <ProjectTitle>{LinksImages[currentIndex].title}</ProjectTitle>
            <ProjectDescription>
              {LinksImages[currentIndex].description}
            </ProjectDescription>
          </a>
        </ProjectInfo>
      </Carousel>
    </ContainerProject>
  );
};

export default Project;
