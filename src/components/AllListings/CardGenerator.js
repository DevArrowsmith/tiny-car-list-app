import React from 'react';
import Card from './Card';
import mockListings from '../../assets/mockListings';

const CardGenerator = () => {
  return mockListings.map((listing) => {
    return <Card listingData={listing} />;
  });
};

export default CardGenerator;
