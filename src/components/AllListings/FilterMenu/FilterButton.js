import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const StyledFilterButton = styled.button`
  height: 60px;
  width: 100px;
  padding: 0 20px 0 20px;
  background-color: black;
  background-image: url('./images/FlagBlack.png');
  background-size: 120px;
  background-position-x: -10px;
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const FilterButton = ({ filterOpen, setFilterOpen }) => {
  return (
    <StyledFilterButton
      open={filterOpen}
      onClick={() => setFilterOpen(!filterOpen)}
    >
      Search
    </StyledFilterButton>
  );
};

FilterButton.propTypes = {
  filterOpen: bool.isRequired,
  setFilterOpen: func.isRequired,
};
export default FilterButton;
