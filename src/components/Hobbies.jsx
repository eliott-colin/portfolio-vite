import styled from 'styled-components';

const HobbyContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
`;

const HobbyCard = styled.li`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 30px;
  overflow: hidden;
  background: rgb(65, 62, 62);
`;

const HobbyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.75;
  transition: opacity 0.3s ease, transform 0.3s ease;
  ${HobbyCard}:hover & {
    opacity: 1;
    transform: scale(1.04);
  }
`;

const HobbyTitle = styled.h3`
  position: absolute;
  left: 50%;
  bottom: 8px;
  transform: translateX(-50%);
  width: 90%;
  margin: 0;
  padding: 8px 4px;
  border-radius: 22px;
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  color: white;
  text-align: center;
  font-size: 1.05rem;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const hobbies = [
  { title: 'Développement', image: '/assets/development.gif' },
  { title: 'Sports', image: '/assets/snowboard.gif' },
  { title: 'Jeux vidéo', image: '/assets/pacman.gif' },
  { title: 'Musique', image: '/assets/turntable.gif' },
];

const Hobbies = () => (
  <HobbyContainer>
    {hobbies.map((hobby) => (
      <HobbyCard key={hobby.title}>
        <HobbyImage src={hobby.image} alt="" loading="lazy" />
        <HobbyTitle>{hobby.title}</HobbyTitle>
      </HobbyCard>
    ))}
  </HobbyContainer>
);

export default Hobbies;
