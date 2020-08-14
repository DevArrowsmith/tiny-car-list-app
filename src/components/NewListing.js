import React from 'react';
import styled from 'styled-components';

const NewListingContainer = styled.div`
  height: calc(100vh - 60px - 20px);
  width: 100vw;
  margin: 60px 0 0 0;
  padding: 20px 0 0 0;
  background: green;
`;

const NewListing = () => {
  return <NewListingContainer />;
};

export default NewListing;
