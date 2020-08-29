import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.h2`
  width: 100vw;
  margin: 120px 0 0 0;
  padding: 0;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const LoadingMessage = () => {
  return <StyledMessage>Loading...</StyledMessage>;
};

export default LoadingMessage;
