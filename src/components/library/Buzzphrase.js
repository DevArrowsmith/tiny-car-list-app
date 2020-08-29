import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BuzzContainer = styled.div`
  width: calc(100% - 30px);
  margin: 0 0 5px 20px;
  background: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FontOne = styled.span`
  font-family: 'Lato';
  font-size: 1.8em;
  color: white;
`;

const FontTwo = styled.span`
  margin: 0 0 0 20px;
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-size: 1.8em;
  color: white;
`;

const BuzzPhrase = ({ buzzState }) => {
  return (
    <BuzzContainer>
      <FontOne>{buzzState[0]}</FontOne>
      <FontTwo>{buzzState[1]}</FontTwo>
    </BuzzContainer>
  );
};

BuzzPhrase.propTypes = {
  buzzState: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default BuzzPhrase;
