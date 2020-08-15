import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardGenerator from './CardGenerator';

const AllListingsContainer = styled.div`
  height: fit-content;
  width: calc(100vw - 10px);
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
  background-image: url('./images/FlagBlack.png');
  background-size: 120px;
  font-family: 'Contrail One', cursive;
  font-size: 1.4em;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AllListings = ({ listings }) => {
  return (
    <AllListingsContainer>
      <Header>Listings</Header>
      <FilterMenu>Search</FilterMenu>
      <CardGenerator listings={listings} />
    </AllListingsContainer>
  );
};

AllListings.propTypes = {
  listings: PropTypes.arrayOf(
    PropTypes.shape({
      imgref: PropTypes.string.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default AllListings;
