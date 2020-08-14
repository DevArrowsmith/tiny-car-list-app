import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bool } from 'prop-types';

export const StyledMenu = styled.nav`
  position: absolute;
  z-index: 2;
  top: 60px;
  right: 0;
  height: calc(100vh - 60px - 40px);
  width: 260px;
  padding: 20px 0;
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
  font-family: 'Contrail One';
  font-size: 1.8em;
  color: white;
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

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Navlink to="/">Home</Navlink>
      <Navlink to="/AllListings">View Listings</Navlink>
      <Navlink to="/NewListing">Sell A Car</Navlink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
