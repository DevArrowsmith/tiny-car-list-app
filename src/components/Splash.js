import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { up } from 'styled-breakpoints';
import { Link } from 'react-router-dom';
import breakpoints from '../styles/breakpoints';
import Buzzphrase from './library/Buzzphrase';
import Modelphrase from './library/Modelphrase';
import frameYellow from '../assets/images/FrameYellowB.png';
import road1 from '../assets/images/roads/road1.png';

const SplashContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${road1});
  background-position: bottom;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const MainContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  max-width: 360px;
  margin: 60px 0 0 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  ${up('sm')} {
    width: 360px;
  }
`;

const FeaturedCar = styled.div`
  height: 79.5vw;
  width: 100vw;
  background-color: none;
  background-image: url(${frameYellow});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  img {
    width: 95%;
  }
`;

const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;
  padding: 5px 0 0 0;
  max-width: 360px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

const NavButton = styled(Link)`
  text-decoration: none;
  height: 40px;
  width: 40%;
  max-width: 140px;
  font-size: 1.2em;
  color: black;
  font-family: 'Contrail One', Helvetica, sans-serif;
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

const LoadingMessage = styled.h2`
  width: 100vw;
  margin: 120px 0 0 0;
  padding: 0;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const Splash = ({ selectedListing, buzzState }) => {
  return selectedListing ? (
    <ThemeProvider theme={breakpoints}>
      <SplashContainer>
        <MainContainer>
          <Buzzphrase buzzState={buzzState} />
          <FeaturedCar>
            <img
              src={`https://res.cloudinary.com/gummicode/image/upload/tinycarlist/${selectedListing.imgref}.png`}
              alt="A featured car"
            />
          </FeaturedCar>
          <Modelphrase
            make={selectedListing.make}
            model={selectedListing.model}
          />
          <ButtonContainer>
            <NavButton to="/Listing">View listing!</NavButton>
            <NavButton to="/AllListings">All Cars</NavButton>
          </ButtonContainer>
        </MainContainer>
      </SplashContainer>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={breakpoints}>
      <LoadingMessage>Loading...</LoadingMessage>
    </ThemeProvider>
  );
};

Splash.propTypes = {
  selectedListing: PropTypes.shape({
    imgref: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  buzzState: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Splash;
