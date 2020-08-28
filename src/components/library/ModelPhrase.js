import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModelContainer = styled.div`
  height: fit-content;
  width: calc(100% - 150px);
  margin: 230px 0 0 150px;
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
    margin: 0 40px 0 0;
  }
`;

const FontOne = styled.span`
  font-family: 'Lato';
  font-size: 2.2em;
  color: white;
`;

const FontTwo = styled.span`
  margin: 0 0 0 20px;
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-size: 2.2em;
  color: white;
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
