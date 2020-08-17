import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useOnClickOutside from '../../../hooks/hooks';
import FilterButton from './FilterButton';
import Filters from './Filters';

const FilterMenuContainer = styled.div`
  height: 60px;
  width: fit-content;
`;

const FilterMenu = ({ filterState, setFilterState, filterListings }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setFilterOpen(false));

  return (
    <FilterMenuContainer ref={node}>
      <FilterButton filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
      <Filters
        open={filterOpen}
        filterState={filterState}
        setFilterState={setFilterState}
        filterListings={filterListings}
      />
    </FilterMenuContainer>
  );
};

FilterMenu.propTypes = {
  filterState: PropTypes.shape({
    make: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  setFilterState: PropTypes.func.isRequired,
  filterListings: PropTypes.func.isRequired,
};

export default FilterMenu;
