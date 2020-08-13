import React from 'react';
import styled from 'styled-components';
import Buzzphrase from './Buzzphrase.js';

const SplashContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  margin: 60px 0 0 0;
  background: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;;
  align-items: center;
`;

const ImageFrame = styled.div`
  height: 340px;
  width: 340px;
  margin: 56px;
  background: url('./images/frame-1-brush-teal.png');
  background-size: contain;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Splash = () => {
  return (
    <SplashContainer>
      <Buzzphrase />
      <ImageFrame/>
    </SplashContainer>
  );
};

export default Splash;


