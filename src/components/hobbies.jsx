  import React from 'react';
  import styled from 'styled-components';

  
  const HobbyContainer = styled.div `
  width:500px;
  height:500px;
  display:grid;
  gap:15px;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr);
  `;
  
  
  const HobbyCard = styled.div`
    width:220px;
    height:220px;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius:30px;
    overflow:hidden
  `;
  const HobbyImage = styled.img`;
    height:100%;
  
  `;
  const HobbyH3 = styled.h3`
  position:relative;
  bottom:0px;
  border-radius:30px;
  opacity:1;
  `

  const HobbyH3Container = styled.span`
  position:relative;
  width:95%;
  height:25%;
  display:flex;
  justify-content: center;
  align-items: center;
  top:-5px;
  border-radius:22px;
  transform: translateY(-100%);
  background-color: rgba(255,255,255,0.26);
  text-align: center;
  opacity:0.5;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity:1;
    transition: 0.3s ease-in-out;
  }
  `

  const Overlay = styled.div`
  top:0;
  bottom:0;
  width: 100%;
  height: 100%; 
  opacity:26%;
  background: rgb(65, 62, 62);
`;

  const hobby = [
    { title: 'Développement', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/cat.gif?raw=true' },
    { title: 'Sports', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/snowboard.gif?raw=true' },
    { title: 'Jeux Vidéo', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/pacman.gif?raw=true' },
    { title: 'Musique', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/turntable.gif?raw=true' },
  ];

  const hobbies = () => {
    return (
      <HobbyContainer>
        {hobby.map((hobby, index) => (
          <HobbyCard>
              <Overlay>
              <HobbyImage src={hobby.image} alt={hobby.title} />
              </Overlay>
              <HobbyH3Container>
                <HobbyH3>{hobby.title}</HobbyH3>
              </HobbyH3Container>
          </HobbyCard>
        ))}
      </HobbyContainer>
    );
  };

  export default hobbies;
