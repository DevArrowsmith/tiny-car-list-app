import React from 'react';
import styled from 'styled-components';

const AllListingsContainer = styled.div`
  height: calc(100vh - 60px - 20px);
  width: 100vw;
  margin: 60px 0 0 0;
  padding: 20px 0 0 0;
  background: blue;
`;

const AllListings = () => {
  return <AllListingsContainer />;
};

export default AllListings;
