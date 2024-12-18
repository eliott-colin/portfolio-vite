  import React from 'react';
  import styled from 'styled-components';

  
  const HobbyContainer = styled.div `
  width:500px;
  height:500px;
  display:grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colonnes de taille égale */
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
  width:80%;
  height:20%;
  display:flex;
  justify-content: center;
  align-items: center;
  top:0px;
  border-radius:30px;
  transform: translateY(-100%);
  background-color: rgba(255,255,255,0.26);
  text-align: center;
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
    { title: 'Jeux Vidéo', image: '../src/assets/turntable.gif' },
    { title: 'Sports', image: '../src/assets/snowboard.gif' },
    { title: 'Développement', image: '../src/assets/pacman.gif' },
    { title: 'Musique', image: '../src/assets/cat.gif' },
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
