import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import LinksImages from '../data/links.json';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(1.02); }
  to   { opacity: 1; transform: scale(1); }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #060d12;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0px -20px 80px rgba(255, 255, 255, 0.08);
  color: white;
  outline: none;
  &:focus-visible {
    outline: 2px solid #646cff;
    outline-offset: 3px;
  }
  @media (max-width: 1080px) {
    margin-top: 24px;
  }
`;

const Media = styled.a`
  position: relative;
  display: block;
  flex: 1;
  min-height: 180px;
  overflow: hidden;
  background: #0b141b;
  @media (max-width: 1080px) {
    flex: none;
    aspect-ratio: 16 / 9;
    min-height: 0;
    max-height: 340px;
    width: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  animation: ${fadeIn} 0.35s ease;
  transition: transform 0.4s ease;
  ${Media}:hover & {
    transform: scale(1.03);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(6, 13, 18, 0.8);
  backdrop-filter: blur(6px);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #cfd2ff;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 20px 0;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const Counter = styled.span`
  flex-shrink: 0;
  font-size: 0.85rem;
  color: #8a8f98;
  font-variant-numeric: tabular-nums;
`;

const Description = styled.p`
  margin: 0;
  color: #bbbbbb;
  font-size: 0.95rem;
  line-height: 1.5;
  min-height: 3em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 20px 18px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NavButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  color: white;
  font-size: 1.2rem;
  line-height: 1;
  transition: background 0.2s ease, border-color 0.2s ease;
  &:hover {
    background: rgba(100, 108, 255, 0.2);
    border-color: #646cff;
  }
`;

const Dots = styled.div`
  display: flex;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? '28px' : '16px')};
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.25s ease;
  &::before {
    content: '';
    height: 6px;
    width: ${({ $active }) => ($active ? '18px' : '6px')};
    border-radius: 999px;
    background: ${({ $active }) => ($active ? '#646cff' : 'rgba(255, 255, 255, 0.3)')};
    transition: width 0.25s ease, background 0.25s ease;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.9rem;
  font-weight: bold;
  white-space: nowrap;
  a {
    color: #a5aaff;
  }
  a:hover {
    color: white;
  }
  @media (max-width: 480px) {
    .all-projects {
      display: none;
    }
  }
`;

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = LinksImages.length;
  const project = LinksImages[currentIndex];

  const goTo = (index) => setCurrentIndex((index + total) % total);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
    if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
  };

  return (
    <Card aria-roledescription="carrousel" aria-label="Projets à la une" tabIndex={0} onKeyDown={handleKeyDown}>
      <Media href={project.links} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
        <Image key={project.image} src={project.image} alt="" />
        <Badge>Projet à la une</Badge>
      </Media>

      <Body aria-live="polite">
        <TitleRow>
          <Title>{project.title}</Title>
          <Counter>
            {currentIndex + 1} / {total}
          </Counter>
        </TitleRow>
        <Description>{project.description}</Description>
      </Body>

      <Footer>
        <Controls>
          <NavButton type="button" onClick={() => goTo(currentIndex - 1)} aria-label="Projet précédent">
            ‹
          </NavButton>
          <Dots>
            {LinksImages.map((p, i) => (
              <Dot
                key={p.title}
                type="button"
                $active={i === currentIndex}
                aria-label={`Afficher ${p.title}`}
                aria-current={i === currentIndex ? 'true' : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </Dots>
          <NavButton type="button" onClick={() => goTo(currentIndex + 1)} aria-label="Projet suivant">
            ›
          </NavButton>
        </Controls>
        <Actions>
          {project.links && (
            <a href={project.links} target="_blank" rel="noopener noreferrer">
              Voir ↗
            </a>
          )}
          <Link className="all-projects" to="/projects">
            Tous les projets →
          </Link>
        </Actions>
      </Footer>
    </Card>
  );
};

export default Projects;
