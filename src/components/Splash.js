import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { up } from 'styled-breakpoints';
import breakpoints from '../styles/breakpoints';
import LoadingMessage from './library/LoadingMessage';
import Buzzphrase from './library/Buzzphrase';
import Modelphrase from './library/Modelphrase';
import SplashButtons from './library/SplashButtons';
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
          <SplashButtons />
        </MainContainer>
      </SplashContainer>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={breakpoints}>
      <LoadingMessage />
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
