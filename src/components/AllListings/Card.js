import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 260px;
  height: fit-content;
  margin: 10px;
  background: black;
  border: 1px solid #212121;
  border-radius: 20px;
  display: flex;
  flex-flow: column wrap;
  justify-content: start;
  align-items: center;
`;

const ImageFrame = styled.div`
  height: 260px;
  width: 260px;
  margin: 0 0 20px 0;
  background: url(./images/FrameRed.png);
  background-size: contain;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const CarImage = styled.div`
  height: 220px;
  width: 220px;
  background: url(${(props) => props.imgurl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const TextFrame = styled.span`
  font-family: 'Contrail One', cursive;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const ContactButton = styled.a`
  text-decoration: none;
  height: 40px;
  width: 140px;
  margin: 20px 0 25px 0;
  padding: 0 10px;
  font-size: 1.5em;
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

const Card = ({ listingData }) => {
  const { imgref, make, model, year, price, city, email } = listingData;

  const imgurl = `https://res.cloudinary.com/gummicode/image/upload/tinycarlist/${imgref}.png`;

  return (
    <CardContainer>
      <ImageFrame>
        <CarImage imgurl={imgurl} />
      </ImageFrame>
      <TextFrame> {`${make} ${model} ${year}`} </TextFrame>
      <TextFrame> {`£${price}`} </TextFrame>
      <TextFrame> {`${city}, UK`} </TextFrame>
      <ContactButton href={`mailto:${email}`} target="_blank">
        Contact Seller
      </ContactButton>
    </CardContainer>
  );
};

Card.propTypes = {
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

export default Card;
