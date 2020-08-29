import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardGenerator from './CardGenerator';
import FilterMenu from './FilterMenu/FilterMenu';
import HeaderBar from '../library/HeaderBar';
import road2 from '../../assets/images/roads/road2.png';

const AllListingsContainer = styled.div`
  height: fit-content;
  width: calc(100vw - 10px);
  margin: 120px 0 0 0;
  padding: 5px;
  background: url(${road2}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
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
      filterState.make === 'all'
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
      <HeaderBar>
        <span>Listings</span>
        <FilterMenu
          filterState={filterState}
          setFilterState={setFilterState}
          filterListings={filterListings}
        >
          Search
        </FilterMenu>
      </HeaderBar>

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
