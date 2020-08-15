import React from 'react';
import Card from './Card';

const CardGenerator = ({ mockListings }) => {
  return mockListings.map((listing) => {
    return <Card listingData={listing} />;
  });
};

export default CardGenerator;
