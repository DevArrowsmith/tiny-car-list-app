import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bool } from 'prop-types';

export const StyledMenu = styled.nav`
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
  margin: 0 30px 10px 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

const FilterSectionHead = styled.div`
  height: fit-content;
  width: calc(100% - 15px);
  padding: 0 0 5px 15px;
  background: rgba(33, 33, 33, 0.8);
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
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
  return (
    <StyledMenu open={open}>
      <FilterSection>
        <FilterSectionHead>
          <SectionText>Price</SectionText>
        </FilterSectionHead>
        <FilterSectionBody>
          <SectionText>Sort Ascending</SectionText>
          <SectionText>Sort Descending</SectionText>
        </FilterSectionBody>
      </FilterSection>

      <FilterSection>
        <FilterSectionHead>
          <SectionText>Make</SectionText>
        </FilterSectionHead>
        <FilterSectionBody>
          <MultiInsert>
            <FilterColumn>
              <SectionText>Chroma</SectionText>
              <SectionText>Coffeeshop</SectionText>
              <SectionText>Kawaii</SectionText>
            </FilterColumn>
            <FilterColumn>
              <SectionText>Rockstone</SectionText>
              <SectionText>Stansa</SectionText>
              <SectionText>Vista</SectionText>
            </FilterColumn>
          </MultiInsert>
        </FilterSectionBody>
      </FilterSection>

      <FilterSection>
        <FilterSectionHead>
          <SectionText>Location</SectionText>
        </FilterSectionHead>
        <FilterSectionBody>
          <MultiInsert>
            <FilterColumn>
              <SectionText>Belfast</SectionText>
              <SectionText>Birmingham</SectionText>
              <SectionText>Bristol</SectionText>
              <SectionText>Edinburgh</SectionText>
              <SectionText>Glasgow</SectionText>
              <SectionText>Leeds</SectionText>
              <SectionText>Lecister</SectionText>
            </FilterColumn>
            <FilterColumn>
              <SectionText>Liverpool</SectionText>
              <SectionText>London</SectionText>
              <SectionText>Manchester</SectionText>
              <SectionText>Newcastle</SectionText>
              <SectionText>Sheffield</SectionText>
              <SectionText>York</SectionText>
            </FilterColumn>
          </MultiInsert>
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
