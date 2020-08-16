import React from 'react';
import styled from 'styled-components';

const NewListingContainer = styled.div`
  height: calc(100vh - 60px - 20px);
  width: 100vw;
  margin: 60px 0 0 0;
  padding: 20px 0 0 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const SoonFrame = styled.div`
  height: 325px;
  width: 325px;
  margin: 50px 0 0 0;
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-size: 2.2em;
  color: black;
  background: url('./images/FrameGreen.png');
  background-size: contain;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const NewListing = () => {
  return (
    <NewListingContainer>
      <SoonFrame> Coming Soon! </SoonFrame>
    </NewListingContainer>
  );
};

export default NewListing;
