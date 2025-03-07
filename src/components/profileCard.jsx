import React from 'react';
import styled from 'styled-components';

const ContainerProfileCard = styled.div`
border: 1px solid rgba(255, 255, 255, 0.12);
`;

const ProfileCard = () => {
  return (
    <ContainerProfileCard>
      <img src="/path/to/your-photo.jpg" alt="Eliott Colin" />
      <h2>Eliott COLIN</h2>
      <p>Développeur</p>
      {/*icones rs*/}
    </ContainerProfileCard>
  );
};

export default ProfileCard;
