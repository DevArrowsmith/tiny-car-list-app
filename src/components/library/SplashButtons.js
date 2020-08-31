import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;
  padding: 5px 0 20px 0;
  max-width: 360px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    height: auto;
    max-width: 100%;
    padding: 20px 0 30px 0;
  }
`;

const NavButton = styled(Link)`
  text-decoration: none;
  height: 40px;
  width: 40%;
  max-width: 140px;
  font-size: 1.2em;
  color: black;
  font-weight: bold;
  background: whitesmoke;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 60px;
    max-width: 220px;
    font-size: 2em;
  }

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

const SplashButtons = () => {
  return (
    <ButtonContainer>
      <NavButton to="/Listing">View listing!</NavButton>
      <NavButton to="/AllListings">All Cars</NavButton>
    </ButtonContainer>
  );
};

export default SplashButtons;
