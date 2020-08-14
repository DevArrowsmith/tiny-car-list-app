import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const AllListingsContainer = styled.div`
  height: fit-content;;
  width:  calc(100vw - 10px);
  margin: 120px 0 0 0;
  padding: 5px;
  background: black;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;

const Header = styled.span`
  position: fixed;
  top: 60px;
  left: 0px;
  padding: 0 0 0 20px;
  height: 60px;
  width: calc(100vw - 20px);
  background: black;
  border-bottom: 1px solid #454545;
  font-family: 'Contrail One', cursive;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
`;

// FilterMenu will be a menu that loads from the left of the screen.
const FilterMenu = styled.span`
  position: fixed;
  top: 60px;
  right: 0px;
  height: calc(60px - 20px);
  width: 100px;
  padding: 10px 10px;
  background-image: url("./images/FlagBla.png");
  background-size: 120px;
  font-family: 'Contrail One', cursive;
  font-size: 1.4em;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AllListings = () => {
  return (
    <AllListingsContainer>
      <Header>Listings</Header>
      <FilterMenu>Search ></FilterMenu>
      <Card />
      <Card />
    </AllListingsContainer>
  );
};

export default AllListings;
