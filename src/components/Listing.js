import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './AllListings/Card';

const ListingContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  margin: 60px 0 0 0;
  padding: 0;
  background: red;
`;

const LoadingMessage = styled.h1`
  font-family: 'Contrail One', cursive;
  font-size: 1.4em;
  font-weight: bold;
  color: white;
`;

const Listing = ({ selectedListing }) => {
  return selectedListing ? (
    <ListingContainer>
      <Card listingData={selectedListing} />
    </ListingContainer>
  ) : (
    <LoadingMessage>Loading...</LoadingMessage>
  );
};

Listing.propTypes = {
  selectedListing: PropTypes.shape({
    imgref: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Listing;
