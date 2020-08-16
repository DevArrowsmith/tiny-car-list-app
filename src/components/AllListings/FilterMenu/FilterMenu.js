import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../../hooks/hooks';
import FilterButton from './FilterButton';
import Filters from './Filters';

const FilterMenuContainer = styled.div`
  height: 60px;
  width: fit-content;
`;

const FilterMenu = ({ filterState, setFilterState }) => {
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
      />
    </FilterMenuContainer>
  );
};

export default FilterMenu;
