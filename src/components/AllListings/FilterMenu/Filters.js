import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bool } from 'prop-types';

export const StyledMenu = styled.form`
  position: absolute;
  z-index: 3;
  top: 60px;
  right: 0;
  height: calc(100vh - 120px - 10px);
  width: 260px;
  padding: 0 0 10px 0;
  background: rgba(0, 0, 0, 0.9);
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

const FilterSection = styled.div`
  height: fit-content;
  width: 200px;
  padding: 0;
  margin: 0 30px 10px 0;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #212121;
  border-radius: 10px;
`;

const FilterSectionHead = styled.label`
  height: fit-content;
  width: calc(100% - 15px);
  padding: 8px 0 5px 15px;
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-size: 1.1em;
  color: white;
  background: #212121;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const FilterSectionBody = styled.select`
  height: fit-content;
  width: 100%;
  padding: 5px 0 5px 15px;
  margin: 0;
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-size: 1.1em;
  color: white;
  background: black;
  border: 1px solid #212121;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const MultiInsert = styled.div`
  height: fit-content;
  width: 100%;
  background: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const FilterColumn = styled.div`
  height: fit-content;
  width: 50%;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SectionText = styled.span`
  height: fit-content;
  padding: 8px 0 0 0;
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-size: 1.1em;
  color: white;
`;

const Filters = ({ open }) => {
  const initialState = {
    filters: {
      price: '',
      make: 'all',
      location: 'all',
    },
  };

  const [filterState, setFilterState] = useState(initialState.filters);

  const handleFilterChange = (event) => {
    setFilterState({
      ...filterState,
      [event.target.name]: event.target.value,
    });
    console.log(filterState);
  };

  return (
    <StyledMenu open={open}>
      <FilterSection>
        <FilterSectionHead htmlFor="price">Price</FilterSectionHead>
        <FilterSectionBody
          id="price"
          name="price"
          value={filterState.price}
          onChange={handleFilterChange}
          required
        >
          <option value="ascending">Sort Ascending</option>
          <option value="descending">Sort Descending</option>
          <option value="none">Don&apos;t Sort</option>
        </FilterSectionBody>
      </FilterSection>

      <FilterSection>
        <FilterSectionHead htmlFor="make">Make</FilterSectionHead>
        <select
          id="make"
          name="make"
          value={filterState.make}
          onChange={handleFilterChange}
          required
        >
          <option value="all">All Makes</option>
          <option value="chroma">Chroma</option>
          <option value="coffeeshop">Coffeeshop</option>
          <option value="kawaii">Kawaii</option>
          <option value="rockstone">Rockstone</option>
          <option value="stansa">Stansa</option>
          <option value="vista">Vista</option>
        </select>
      </FilterSection>

      <FilterSection>
        <FilterSectionHead htmlFor="location">Location</FilterSectionHead>
        <select
          id="location"
          name="location"
          value={filterState.location}
          onChange={handleFilterChange}
          required
        >
          <option value="all">All Locations</option>
          <option value="belfast">Belfast</option>
          <option value="birmingham">Birmingham</option>
          <option value="bristol">Bristol</option>
          <option value="edinburgh">Edinburgh</option>
          <option value="glasgow">Glasgow</option>
          <option value="leeds">Leeds</option>
          <option value="lecister">Lecister</option>
          <option value="liverpool">Liverpool</option>
          <option value="london">London</option>
          <option value="manchester">Manchester</option>
          <option value="newcastle">Newcastle</option>
          <option value="sheffield">Sheffield</option>
          <option value="york">York</option>
        </select>
      </FilterSection>

      <FilterSection>
        <FilterSectionHead>
          <SectionText>Price</SectionText>
        </FilterSectionHead>
        <FilterSectionBody />
      </FilterSection>
    </StyledMenu>
  );
};

Filters.propTypes = {
  open: bool.isRequired,
};

export default Filters;
