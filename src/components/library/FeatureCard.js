import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import framePurple from '../../assets/images/FramePurple.png';
import framePurpleSmall from '../../assets/images/FramePurpleSmall.png';

const FeatureCardImage = styled.div`
  height: 79.5vw;
  max-height: calc(360px * 0.795);
  width: 100vw;
  max-width: 360px;
  border-radius: 20px;
  background-image: url(${framePurple});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    max-height: 320px;
    max-width: 320px;
    background-image: url(${framePurpleSmall});
    border-radius: 0 20px 20px 0;
  }

  img {
    width: 95%;

    @media (min-width: 768px) {
      width: 100%;
    }
  }
`;

const FeatureCardContainer = styled.div`
  min-height: calc(100vh - 120px);
  width: 100vw;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    min-height: auto;
    width: auto;
    margin: 60px 0 0 0;
    border-radius: 20px;
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .feature-text {
    margin: 10px 0 0 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;

    @media (min-width: 768px) {
      max-width: calc (768px - 320px - 80px);
      margin: 10px 0 0 30px;
    }
  }

  h2 {
    font-size: 1.8em;
    margin: 10px;

    @media (min-width: 768px) {
      margin: 10px 20px 10px 0;
    }
  }

  span {
    font-size: 1.7em;
    margin: 3px 0 0 0;

    @media (min-width: 768px) {
      margin: 0 20px 0 0;
    }
  }

  .button-container {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    @media (min-width: 768px) {
      width: calc (100% - 20px);
      margin: 0 20px 0 0;
      justify-content: flex-start;
    }
  }

  a {
    text-decoration: none;
    height: 50px;
    width: 180px;
    margin: 20px 0 25px 0;
    padding: 0 10px;
    color: black;
    font-size: 1.7em;
    font-weight: bold;
    background: whitesmoke;
    border-radius: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    &:visited {
      color: black;
      text-decoration: none;
    }

    &:active {
      color: black;
      text-decoration: none;
    }

    &:hover {
      color: black;
      text-decoration: none;
    }
  }
`;

const FeatureCard = ({ listingData }) => {
  const { imgref, make, model, year, price, city, email } = listingData;

  const imgurl = `https://res.cloudinary.com/gummicode/image/upload/tinycarlist/${imgref}.png`;

  return (
    <FeatureCardContainer>
      <FeatureCardImage>
        <img src={imgurl} alt="Featured car." />
      </FeatureCardImage>
      <div className="feature-text">
        <h2>
          {make}
          &nbsp;
          {model}
        </h2>
        <span>
          Year:&nbsp;
          {year}
        </span>
        <span>
          Location:&nbsp;
          {city}
        </span>
        <span>
          Price: £
{price}
        </span>
        <div className="button-container">
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            Contact Seller!
          </a>
        </div>
      </div>
    </FeatureCardContainer>
  );
};

FeatureCard.propTypes = {
  listingData: PropTypes.shape({
    imgref: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeatureCard;

// At a certain screen size the card will become flex-flow: row nowrap.
// The text will appear to one side, and the image will appear at the other side,
// like a flashcard.
