import React, { useState, useEffect } from 'react';
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
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const AllListings = ({ listings }) => {
  const initialState = {
    filters: {
      make: 'all',
      location: 'all',
      price: 'ascending',
    },
  };

  const [filterState, setFilterState] = useState(initialState.filters);
  const [filteredListings, setFilteredListings] = useState(listings);

  const filterListings = () => {
    const sortPrice =
      filterState.price === 'ascending'
        ? listings.slice().sort((a, b) => a.price - b.price)
        : listings.slice().sort((a, b) => b.price - a.price);

    const makeFilter =
      filterState.location === 'all'
        ? sortPrice
        : sortPrice.filter((listing) => listing.make === filterState.make);

    const locationFilter =
      filterState.location === 'all'
        ? makeFilter
        : makeFilter.filter((listing) => listing.city === filterState.location);

    const finalList = locationFilter;

    setFilteredListings(finalList);
  };

  useEffect(() => {
    filterListings();
  }, [filterState]);

  return (
    <AllListingsContainer>
      <Header>
        <HeaderText>Listings</HeaderText>
        <FilterMenu
          filterState={filterState}
          setFilterState={setFilterState}
          filterListings={filterListings}
        >
          Search
        </FilterMenu>
      </Header>

      <CardGenerator listings={listings} filteredListings={filteredListings} />
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
