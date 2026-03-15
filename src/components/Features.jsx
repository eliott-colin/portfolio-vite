import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #2c2c2c;
  color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 300px;
  z-index: 1000;
  animation: ${slideIn} 0.4s ease-out;
  font-family: sans-serif;
`;

const NotificationTitle = styled.strong`
  display: block;
  margin-bottom: 6px;
`;

const NotificationText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #ccc;
`;

const FeatureNotification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <NotificationContainer>
      <NotificationTitle>🚧 En cours de développement</NotificationTitle>
      <NotificationText>
        Cette fonctionnalité n'est pas encore prête, mais elle arrive très bientôt ⏳
      </NotificationText>
    </NotificationContainer>
  );
};

export default FeatureNotification;
