import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import framePurple from '../../assets/images/FramePurple.png';

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

  img {
    width: 95%;
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

  h2 {
    font-size: 1.8em;
    margin: 10px;
  }

  .feature-text {
    margin: 10px 0 0 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  span {
    font-size: 1.6em;
    margin: 3px 0 0 0;
  }

  .button-container {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  a {
    text-decoration: none;
    height: 50px;
    width: 180px;
    margin: 20px 0 25px 0;
    padding: 0 10px;
    color: black;
    font-size: 1.6em;
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
      <h2>
        {make}
        &nbsp;
        {model}
      </h2>
      <FeatureCardImage>
        <img src={imgurl} alt="Featured car." />
      </FeatureCardImage>
      <div className="feature-text">
        <span>
          Year:&nbsp;
          {year}
        </span>
        <span>
          Location:&nbsp;
          {city}
        </span>
        <span>
          Price: £{price}
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
