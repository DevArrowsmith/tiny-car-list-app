import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 260px;
  height: 460px;
  margin: 10px;
  background: black;
  border: 1px solid #212121;
  border-radius: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
`;

const ImageFrame = styled.div`
  height: 260px;
  width: 260px;
  background: url('./images/FrameRed.png');
  background-size: contain;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  div {
    height: 220px;
    width: 220px;
    background: url('./images/mockCarImages/testcar{props => props.imgref}.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const TextFrame = styled.span`
  font-family: 'Contrail One', cursive;
  font-size: 1.5em;
  font-weight: bold;
`;

const Card = ({ imgref, make, model, year, price, city, email }) => {

  return (
    <CardContainer>
      <ImageFrame>
        <div imgref={imgref} />
      </ImageFrame>
      <TextFrame>
        {make} {model} {year}
      </TextFrame>
      <TextFrame>
        £
{price}
      </TextFrame>
      <TextFrame>
{city}, UK</TextFrame>
      <TextFrame> Contact Seller</TextFrame>
    </CardContainer>
  );
};

export default Card;
