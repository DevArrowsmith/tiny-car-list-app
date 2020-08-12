import React from 'react';
import styled from 'styled-components';
import buzzwords from '../assets/buzzwords';


const FontOne = styled.span`
color: red;
`;

const FontTwo = styled.span`
color: blue;
`;

const Buzzphrase = () => {

  
const buzzOne = buzzwords.buzzOne[Math.floor(Math.random() * buzzwords.buzzOne.length)];
const buzzTwo= buzzwords.buzzTwo[Math.floor(Math.random() * buzzwords.buzzTwo.length)];
console.log(`${buzzOne} ${buzzTwo}`);


  return (
    <>
  <FontOne>{buzzOne}</FontOne>
  <FontTwo>{buzzTwo}</FontTwo>
  </>
  );
};


export default Buzzphrase;


