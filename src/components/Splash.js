import React from 'react';
import { Link } from 'react-router-dom';
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
  justify-content: flex-start;
  align-items: center;
`;

const ImageFrame = styled.div`
  height: 325px;
  width: 325px;
  margin: 50px 0 0 0;
  background: url('./images/FrameRed.png');
  background-size: contain;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
`;

const CarImage = styled.div`
  height: 280px;
  width: 280px;
  background: url(${(props) => props.imgurl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const AnnounceContainer = styled.div`
  position: absolute;
  z-index: 1;
  height: 140px;
  width: 75%;
  margin: 340px 0 0 0px;
  background: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

const FontOne = styled.span`
  font-family: 'Lato';
  font-size: 2.2em;
  color: white;
  width: calc(100% - 80px);
`;

const FontTwo = styled.span`
  margin: 0 0 0 20px;
  font-family: 'Contrail One';
  font-size: 2.2em;
  color: white;
  width: calc(100% - 110px);
`;

const ButtonContainer = styled.div`
  height: 40px;
  width: 100vw;
  margin: 110px 20px 0 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

const NavButton = styled(Link)`
  text-decoration: none;
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

  &:visited {
    background: whitesmoke;
    color: black;
    text-decoration: none;
  }

  &:active {
    background: whitesmoke;
    color: black;
    text-decoration: none;
  }

  &:hover {
    background: whitesmoke;
    color: black;
    text-decoration: none;
  }
`;

const Splash = ({ selectedListing }) => {

  return selectedListing ? (
    <SplashContainer>
      <Buzzphrase />
      <ImageFrame>
        <CarImage imgurl={`https://res.cloudinary.com/gummicode/image/upload/tinycarlist/${selectedListing.imgref}.png`}/>
      </ImageFrame>
      <AnnounceContainer>
        <FontOne>the</FontOne>
        <FontTwo>{selectedListing.make}</FontTwo>
        <FontTwo>{selectedListing.model}</FontTwo>
      </AnnounceContainer>
      <ButtonContainer>
        <NavButton to="/Listing">View listing!</NavButton>
        <NavButton to="/AllListings">All Cars</NavButton>
      </ButtonContainer>
    </SplashContainer>
  ) : (
    <loadingMessage>Loading...</loadingMessage>
  );
};

export default Splash;
