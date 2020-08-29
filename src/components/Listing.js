import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderBar from './library/HeaderBar';
import Card from './AllListings/Card';
import road4 from '../assets/images/roads/road4.png';

const ListingContainer = styled.div`
  min-height: calc(100vh - 60px);
  margin: 60px 0 0 0;
  background-image: url(${road4});
  background-position: bottom;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const LoadingMessage = styled.h1`
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-size: 1.4em;
  font-weight: bold;
  color: white;
`;

const Listing = ({ selectedListing }) => {
  const loadingCondition = () => {
    return selectedListing ? (
      <>
        <ListingContainer>
          <Card listingData={selectedListing} />
        </ListingContainer>
      </>
    ) : (
      <LoadingMessage>Loading...</LoadingMessage>
    );
  };
  return (
    <>
      <HeaderBar>
        <span>Featured Listing</span>
      </HeaderBar>
      {loadingCondition()}
    </>
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
