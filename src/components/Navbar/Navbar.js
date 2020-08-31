import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

  @media (min-width: 768px) {
    width: calc(100vw - 15px);
    padding: 0 15px 0 0;
  }
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
  font-family: 'Contrail One', Helvetica, sans-serif;
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
