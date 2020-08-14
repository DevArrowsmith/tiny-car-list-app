import React from 'react';
import styled from 'styled-components';

const AllListingsContainer = styled.div`
  height: calc(100vh - 60px - 20px);
  width: 100vw;
  margin: 60px 0 0 0;
  padding: 20px 0 0 0;
  background: blue;
`;

const Header = styled.span`
  position: fixed;
  top: 60px;
  left: 0px;
  padding: 0 0 0 20px;
  height: 60px;
  width: calc(100vw - 20px);
  background: black;
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
    </AllListingsContainer>
  );
};

export default AllListings;
