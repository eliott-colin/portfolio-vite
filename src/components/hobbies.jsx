  import React from 'react';
  import styled from 'styled-components';

  const HobbyCard = styled.div`
    width:220px;
    height:220px;
  `;

  const hobby = [
    { title: 'Jeux Vidéo', image: '../src/assets/cat.gif' },
    { title: 'Sports', image: '../src/assets/snowboard.gif' },
    { title: 'Développement', image: '../src/assets/pacman.gif' },
    { title: 'Musique', image: '../src/assets/turntable.gif' },
  ];

  const hobbies = () => {
    return (
      <div className="hobbies">
        {hobby.map((hobby, index) => (
          <HobbyCard>
            <img src={hobby.image} alt={hobby.title} />
            <h3>{hobby.title}</h3>
          </HobbyCard>
        ))}
      </div>
    );
  };

  export default hobbies;
