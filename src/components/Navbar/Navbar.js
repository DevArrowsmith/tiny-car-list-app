import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import BurgerMenu from './BurgerMenu/BurgerMenu';

const NavbarContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
  background: #212121;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const NavSection = styled.div`
  height: 100%;
  margin: 0 10px 0 15px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const NavHeader = styled(Link)`
  text-decoration: none;
  font-family: 'Contrail One', cursive;
  font-size: 1.5em;
  font-weight: bold;
  color: white;

  &:visited {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <NavSection>
      <NavHeader to="/">TinyCarList</NavHeader>
    </NavSection>
    <NavSection>
      <BurgerMenu />
    </NavSection>
  </NavbarContainer>
);

export default Navbar;
