import React from 'react';
import styled from 'styled-components';
import Buzzphrase from './Buzzphrase.js';

const SplashContainer = styled.div`
  height: calc(100vh - 60px - 20px);
  width: 100vw;
  margin: 60px 0 0 0;
  padding: 20px 0 0 0;
  background: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;;
  align-items: center;
`;

const ImageFrame = styled.div`
  height: 340px;
  width: 340px;
  margin: 45px 0 0 0;
  background: url('./images/frame-1-brush-teal.png');
  background-size: contain;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const AnnounceContainer = styled.div`
  position: absolute;
  height: 140px;
  width: calc(100vw - 30px);
  margin: 350px 0 0 230px;
  background: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FontOne = styled.span`
font-family: 'Lato';
font-size: 2.2em;
color: white;
`;

const FontTwo = styled.span`
margin: 0 0 0 20px;
font-family: 'Contrail One';
font-size: 2.2em;
color: white;
`;

const ButtonContainer = styled.div`
background: blue;
  height: 40px;
  width: 100vw; 
  margin: 110px 20px 0 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;

  span {
    background: yellow;
    border-radius: 10px;
  height: 40px;
  width: 40vw;
  color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  }
`;

const Splash = () => {
  return (
    <SplashContainer>
      <Buzzphrase />
      <ImageFrame/>
      <AnnounceContainer>
        <FontOne>the</FontOne>
        <FontTwo>Cinnamaroll</FontTwo>
        <FontTwo>Matcha</FontTwo>
      </AnnounceContainer>
      <ButtonContainer>
        <span>View listing!</span>
        <span>All Cars</span>
      </ButtonContainer>
    </SplashContainer>
  );
};

export default Splash;


