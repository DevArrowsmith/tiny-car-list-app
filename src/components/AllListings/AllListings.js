import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardGenerator from './CardGenerator';
import FilterMenu from './FilterMenu/FilterMenu';

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

const Header = styled.div`
  position: fixed;
  top: 60px;
  left: 0px;
  height: 60px;
  width: 100vw;
  background: black;
  border-bottom: 1px solid #454545;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.span`
  height: 60px;
  margin: 0 0 0 20px;
  border-bottom: 1px solid #454545;
  font-family: 'Contrail One', cursive;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const AllListings = ({ listings }) => {
  return (
    <AllListingsContainer>
      <Header>
        <HeaderText>Listings</HeaderText>
        <FilterMenu>Search</FilterMenu>
      </Header>

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
