import React from 'react';
import styled from 'styled-components';
import Buzzphrase from './Buzzphrase';

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
  background: url('./images/frame3R.png');
  background-size: contain;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

 div {
  height:120px;
  width: 260px;
  background: url('./images/testcar1.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
 } 
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
  height: 40px;
  width: 100vw; 
  margin: 110px 20px 0 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;

  span {
  height: 40px;
  width: 40vw;
  font-size: 1.2em;
  color: black;
  font-family: 'Contrail One', sans-serif; 
  font-weight: bold;
  background: whitesmoke;
    border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  }
`;

const Splash = () => (
  <SplashContainer>
    <Buzzphrase />
    <ImageFrame>
      <div />
    </ImageFrame>
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

export default Splash;
