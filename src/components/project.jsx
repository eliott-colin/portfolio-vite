import React from 'react';
import styled from 'styled-components';

const ContainerProject = styled.div`
border: 1px solid rgba(255, 255, 255, 0.12);
display:flex;
`;

const Project = () => {
  return (
    <ContainerProject>
      <img src="/path/to/your-photo.jpg" alt="Eliott Colin" />
      <p>Calao Studio</p>
      {/*icones rs*/}
    </ContainerProject>
  );
};

export default Project;
