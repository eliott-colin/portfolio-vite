import React from 'react';
import styled from 'styled-components';

const links = [
  { title: 'GitHub', image: '/assets/github.png', socials: 'https://github.com/eliott-colin' },
  { title: 'Discord', image: '/assets/discord.png', socials: 'https://discord.com/users/1222249495031578818' },
  { title: 'LinkedIn', image: '/assets/linkedin.png', socials: 'https://www.linkedin.com/in/eliott-colin/' },
  { title: 'Mail', image: '/assets/mail.png', socials: 'mailto:eliott.colin.pro@gmail.com' },
];

const ContainerProfileCard = styled.div`
  display: flex;
  @media (max-width: 768px) {
  margin-top: 30px;
  display: block;
  }
  align-items: center;
  background: #060D12;
  color: white;
  border-radius: 10px;
  padding: 20px;
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

const Name = styled.h1`
  margin: 0;
  font-size: 1.4rem;
`;

const Role = styled.p`
  margin: 5px 0;
  color: #bbbbbb;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: start;
`;

const Links = styled.a`
  text-decoration: none;
  border-radius: 12px;
`;

const LinksImage = styled.img`
  display: block;
  height: 30px;
  width: 30px;
  background-color: rgba(14, 165, 233, 0.10);
  padding: 7px;
  border-radius: 12px;
  transition: scale 0.3s ease-in-out;
  ${Links}:hover &,
  ${Links}:focus-visible & {
    scale: 1.15;
  }
`;

const ProfileCard = () => {
  return (
    <ContainerProfileCard>
      <ProfileImage src="/assets/fav.png" alt="Eliott Colin" />
      <ProfileDetails>
        <Name>Eliott COLIN</Name>
        <Role>Développeur web</Role>
        <SocialIcons>
          {links.map((link) => {
            const external = link.socials.startsWith('http');
            return (
              <Links
                key={link.title}
                href={link.socials}
                aria-label={link.title}
                title={link.title}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <LinksImage src={link.image} alt="" />
              </Links>
            );
          })}
        </SocialIcons>
      </ProfileDetails>
    </ContainerProfileCard>
  );
};

export default ProfileCard;
