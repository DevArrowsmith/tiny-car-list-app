import React from 'react';
import styled from 'styled-components';
import buzzwords from '../assets/buzzwords';

const BuzzContainer = styled.div`
  position: absolute;
  height: 120px;
  width: calc(100vw - 30px);
  margin: 0 0 0 30px;
  background: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FontOne = styled.span`
font-family: 'Lato';
font-size: 2.5em;
color: white;
`;

const FontTwo = styled.span`
margin: 0 0 0 20px;
font-family: 'Contrail One';
font-size: 2.5em;
color: white;
`;

const Buzzphrase = () => {

  
const buzzOne = buzzwords.buzzOne[Math.floor(Math.random() * buzzwords.buzzOne.length)];
const buzzTwo= buzzwords.buzzTwo[Math.floor(Math.random() * buzzwords.buzzTwo.length)];
console.log(`${buzzOne} ${buzzTwo}`);


  return (
    <BuzzContainer>
  <FontOne>{buzzOne}</FontOne>
  <FontTwo>{buzzTwo}</FontTwo>
  </BuzzContainer>
  );
};


export default Buzzphrase;


