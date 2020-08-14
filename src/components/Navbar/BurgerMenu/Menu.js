import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bool } from 'prop-types';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

const Navlink = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;

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
