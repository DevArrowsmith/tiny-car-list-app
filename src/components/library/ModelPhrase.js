import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModelContainer = styled.div`
  height: fit-content;
  width: calc(100% - 20px);
  padding: 5px 20px 5px 0;
  background: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;

  div{
    display: flex;
    flex-flow: column nowrap;
    justify-conten: flex-start;
    align-items: flex-start;
  }
`;

const FontOne = styled.span`
  font-family: 'Lato';
  font-size: 1.8em;
  color: white;
  @media (min-width: 768px) {
  font-size: 2.8em;
}
  
`;

const FontTwo = styled.span`
  margin: 0 0 0 20px;
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-size: 1.8em;
  color: white;
  @media (min-width: 768px) {
  font-size: 3em;
}
`;

const ModelPhrase = ({ make, model }) => {
  return (
    <ModelContainer>
      <div>
      <FontOne>the</FontOne>
      <FontTwo>{make}</FontTwo>
      <FontTwo>{model}</FontTwo>
      </div>
    </ModelContainer>
  );
};

ModelPhrase.propTypes = {
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default ModelPhrase;
