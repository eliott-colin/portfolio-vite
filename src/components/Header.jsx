import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavHeader = styled.nav`
  padding-top: 48px;
  @media (max-width: 768px) {
    padding-top: 16px;
  }
`;

const UlHeader = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  gap: 10px;
`;

const LiHeader = styled.li`
  flex: 1;
  display: flex;
`;

const StyledLink = styled(NavLink)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background-color: #1b1919;
  box-shadow: inset 0px -10px 80px rgba(255, 255, 255, 0.12);
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: transparent;
    box-shadow: none;
  }

  &.active {
    background-color: transparent;
    box-shadow: none;
    border-color: rgba(100, 108, 255, 0.7);
  }

  @media (max-width: 768px) {
    height: 48px;
    font-size: 16px;
  }
`;

const navItems = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => (
  <NavHeader aria-label="Navigation principale">
    <UlHeader>
      {navItems.map((item) => (
        <LiHeader key={item.to}>
          <StyledLink to={item.to} end={item.end}>
            {item.label}
          </StyledLink>
        </LiHeader>
      ))}
    </UlHeader>
  </NavHeader>
);

export default Header;
