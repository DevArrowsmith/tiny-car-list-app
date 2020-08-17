import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StatusMessage = styled.h2`
  color: white;
`;

const CardGenerator = ({ listings, filteredListings }) => {
  if (!listings.length) {
    return <StatusMessage>Loading...</StatusMessage>;
  }
  if (!filteredListings.length) {
    return <StatusMessage>No listings found.</StatusMessage>;
  }
  return filteredListings.map((listing) => {
    return <Card key={listing.imgref} listingData={listing} />;
  });
};

export default CardGenerator;
