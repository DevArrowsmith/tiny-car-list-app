import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingMessage from './library/LoadingMessage';
import Buzzphrase from './library/Buzzphrase';
import FeaturedCar from './library/FeaturedCar';
import Modelphrase from './library/Modelphrase';
import SplashButtons from './library/SplashButtons';
import road1 from '../assets/images/roads/road1.png';

const SplashContainer = styled.div`
  min-height: calc(100vh - 60px);
  margin: 60px 0 0 0;
  background-image: url(${road1});
  background-position: bottom;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const MainContainer = styled.div`
  min-height: calc(100vh - 60px);
  width: 100%;
  max-width: 360px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 360px) {
    min-height: calc(100vh - 60px - 5vh);
    min-width: 360px;
    padding: 5vh 0 0 0;
  }

  @media (min-width: 460px) {
    min-height: calc(100vh - 60px - 10vh);
    min-width: 360px;
    padding: 10vh 0 0 0;
  }

  @media (min-width: 768px) {
    min-width: 480px;
  }
`;

const Splash = ({ selectedListing, buzzState }) => {
  return selectedListing ? (
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
  ) : (
    <LoadingMessage />
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
