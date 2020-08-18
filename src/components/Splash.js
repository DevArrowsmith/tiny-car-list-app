import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { up } from 'styled-breakpoints';
import { Link } from 'react-router-dom';
import breakpoints from '../styles/breakpoints';
import BuzzPhrase from './BuzzPhrase';
import ModelPhrase from './ModelPhrase';

const SplashContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const MainContainer = styled.div`
  height: 520px;
  min-height: 520px;
  width: 100%;
  max-width: 360px;
  margin: 60px 0 0 0;
  padding: 20px 0 0 0;
  background-image: url(${(props) => props.imgurl}),
    url('./images/FrameRed.png');
  background-size: 85%, 90%;
  background-position: center 44%, center 35%;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  ${up('sm')} {
    width: 360px;
  }
`;

const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;
  max-width: 360px;
  margin: 20px 20px;
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

const Splash = ({ selectedListing, buzzState }) => {
  return selectedListing ? (
    <ThemeProvider theme={breakpoints}>
      <SplashContainer>
        <MainContainer
          imgurl={`https://res.cloudinary.com/gummicode/image/upload/tinycarlist/${selectedListing.imgref}.png`}
        >
          <BuzzPhrase buzzState={buzzState} />
          <ModelPhrase
            make={selectedListing.make}
            model={selectedListing.model}
          />
        </MainContainer>
        <ButtonContainer>
          <NavButton to="/Listing">View listing!</NavButton>
          <NavButton to="/AllListings">All Cars</NavButton>
        </ButtonContainer>
      </SplashContainer>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={breakpoints}>
      <loadingMessage>Loading...</loadingMessage>
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
