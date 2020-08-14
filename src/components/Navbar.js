import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavbarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 60px;
	width: 100vw;
	background: #212121;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	   
	div {
		height: 100%;
		margin: 0 15px 0 15px;
		background: none;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;
	}
`;

const NavHeader = styled(Link)`
text-decoration: none;
	color: white;
	font-size: 1.5em;
	font-weight: bold;
	font-family: 'Contrail One', cursive;

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

const NavLink = styled.span`
margin: 0 0 0 20px;
color: white;
`;

const Navbar = () => (
  <NavbarContainer>
    <div>
      <NavHeader to="/">TinyCarList</NavHeader>
    </div>
    <div>
      <NavLink>Link 1</NavLink>
      <NavLink>Link 2</NavLink>
      <NavLink>Link 3</NavLink>
    </div>

  </NavbarContainer>
);

export default Navbar;
