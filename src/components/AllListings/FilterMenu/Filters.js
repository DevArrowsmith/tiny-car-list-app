import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bool } from 'prop-types';

export const StyledMenu = styled.nav`
  position: absolute;
  z-index: 3;
  top: 60px;
  right: 0;
  height: calc(100vh - 120px - 40px);
  width: 260px;
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.9);
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

const Navlink = styled(Link)`
  width: calc(100% - 40px);
  height: 75px;
  padding: 0 40px 0 0;
  font-family: 'Contrail One', Helvetica, sans-serif;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

const FilterSection = styled.div`
  height: fit-content;
  width: 200px;
  padding: 0;
  margin: 0 30px 0 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

const FilterSectionHead = styled.div`
  height: fit-content;
  width: calc(100% - 15px);
  padding: 0 0 0 15px;
  background: rgba(33, 33, 33, 0.8);
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  span {
    height: fit-content;
    padding: 5px 0;
    font-family: 'Contrail One', Helvetica, sans-serif;
    font-size: 1.3;
    color: white;
  }
`;

const FilterSectionBody = styled.div`
  height: fit-content;
  width: calc(100% - 15px);
  padding: 0 0 5px 15px;
  background: rgba(190, 190, 190, 0.8);
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  span {
    height: fit-content;
    padding: 5px 0 0 0;
    font-family: 'Contrail One', Helvetica, sans-serif;
    font-size: 1.3;
    color: white;
  }
`;

const Filters = ({ open }) => {
  return (
    <StyledMenu open={open}>

      <FilterSection>
        <FilterSectionHead>
          <span>Price</span>
        </FilterSectionHead>
        <FilterSectionBody>
          <span>Sort Ascending</span>
          <span>Sort Descending</span>
        </FilterSectionBody>
      </FilterSection>

      <FilterSection>
        <FilterSectionHead>
          <span>Make</span>
        </FilterSectionHead>
        <FilterSectionBody>
          <span>Sort Ascending</span>
          <span>Sort Descending</span>
        </FilterSectionBody>
      </FilterSection>

      <FilterSection>
        <FilterSectionHead>
          <span>Location</span>
        </FilterSectionHead>
        <FilterSectionBody>
          <span>Sort Ascending</span>
          <span>Sort Descending</span>
        </FilterSectionBody>
      </FilterSection>


      <Navlink to="/">Test</Navlink>
    </StyledMenu>
  );
};

Filters.propTypes = {
  open: bool.isRequired,
};

export default Filters;
