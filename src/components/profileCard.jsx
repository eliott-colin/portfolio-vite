import React from 'react';
import styled from 'styled-components';

const links = [
  { title: 'github', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/github.png?raw=true' , socials:'https://github.com/eliott-colin' },
  { title: 'discord', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/discord.png?raw=true' , socials:'https://discord.com/users/1222249495031578818' },
  { title: 'linkedin', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/linkedin.png?raw=true' , socials:'https://www.linkedin.com/in/eliott-colin/' },
  { title: 'mail', image: 'https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/mail.png?raw=true' , socials:'mailto:eliott.colin.pro@gmail.com' },
];

const ContainerProfileCard = styled.div`
  display: flex;
  @media (max-width: 768px) {
  margin-top: 30px;
  display: block;
  }
  align-items: center;
  background: #060D12;
  //0d0d0d
  color: white;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  box-shadow: inset 0px -20px 80px rgba(255, 255, 255, 0.12);
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 20%;
  margin-right: 20px;
  object-fit: cover;
`;

const ProfileDetails = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

const Role = styled.p`
  margin: 5px 0;
  color: #bbbbbb;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const LinksImage = styled.img`
  height: 30px;
  width: 30px;
  background-color: rgba(14, 165, 233, 0.10);
  padding : 5px;
  border-radius: 12px;
  transition: 0.3s ease-in-out;
  &:hover {
    scale: 1.2;
    transition: 0.3s ease-in-out;
  }
`;

const Links = styled.a`
  text-decoration: none;
`;

const ProfileCard = () => {
  return (
    <ContainerProfileCard>
      <ProfileImage src="https://github.com/eliott-colin/portfolio-vite/blob/main/src/assets/fav.png?raw=true" alt="Eliott Colin" />
      <ProfileDetails>
        <Name>Eliott COLIN</Name>
        <Role>Développeur</Role>
        <SocialIcons>
          {links.map((link, index, socials) => (
            <Links key={index} href={link.socials}>
              <LinksImage src={link.image} alt={link.title} />
            </Links>
          ))}
        </SocialIcons>
      </ProfileDetails>
    </ContainerProfileCard>
  );
};

export default ProfileCard;
