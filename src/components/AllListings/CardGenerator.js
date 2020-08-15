import React from 'react';
import Card from './Card';

const CardGenerator = ({ listings }) => {
  return listings.map((listing) => {
    return <Card key={listing.imgref} listingData={listing} />;
  });
};

export default CardGenerator;
