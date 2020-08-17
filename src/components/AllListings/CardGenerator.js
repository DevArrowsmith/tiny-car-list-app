import React from 'react';
import Card from './Card';

const CardGenerator = ({ filteredListings }) => {
  return filteredListings.map((listing) => {
    return <Card key={listing.imgref} listingData={listing} />;
  });
};

export default CardGenerator;
