import React from 'react';
import PropTypes, { bool } from 'prop-types';
import styled from 'styled-components';

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
  max-height: 200px;
  overflow: scroll;
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

const Filters = ({ open, filterState, setFilterState }) => {
  const handleFilterChange = (event) => {
    setFilterState({
      ...filterState,
      [event.target.name]: event.target.value,
    });
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
        </FilterSectionBody>
      </FilterSection>

      <FilterSection>
        <FilterSectionHead htmlFor="make">Make</FilterSectionHead>
        <FilterSectionBody
          id="make"
          name="make"
          value={filterState.make}
          onChange={handleFilterChange}
          required
        >
          <option value="all">All Makes</option>
          <option value="Chroma">Chroma</option>
          <option value="Coffeeshop">Coffeeshop</option>
          <option value="Kawaii">Kawaii</option>
          <option value="Rockstone">Rockstone</option>
          <option value="Stansa">Stansa</option>
          <option value="Vista">Vista</option>
        </FilterSectionBody>
      </FilterSection>

      <FilterSection>
        <FilterSectionHead htmlFor="location">Location</FilterSectionHead>
        <FilterSectionBody
          id="location"
          name="location"
          value={filterState.location}
          onChange={handleFilterChange}
          required
        >
          <option value="all">All Locations</option>
          <option value="Belfast">Belfast</option>
          <option value="Birmingham">Birmingham</option>
          <option value="Bristol">Bristol</option>
          <option value="Edinburgh">Edinburgh</option>
          <option value="Glasgow">Glasgow</option>
          <option value="Leeds">Leeds</option>
          <option value="Lecister">Lecister</option>
          <option value="Liverpool">Liverpool</option>
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Newcastle">Newcastle</option>
          <option value="Sheffield">Sheffield</option>
          <option value="York">York</option>
        </FilterSectionBody>
      </FilterSection>
    </StyledMenu>
  );
};

Filters.propTypes = {
  open: bool.isRequired,
  filterState: PropTypes.shape({
    make: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  setFilterState: PropTypes.func.isRequired,
};

export default Filters;
