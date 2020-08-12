import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 60px;
	width: 100vw;
	background: black;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;

	div {
		height: 100%;
		margin: 0 30px 0 30px;
		background: none;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;
	}
`;

const NavHeader = styled.span`
	color: white;
	font-weight: bold;
	font-family: 'Contrail One', cursive;
`;

const NavLink = styled.span`
margin: 0 0 0 20px;	
color: white;
`;

const Navbar = () => {
	return (
		<NavbarContainer>
			<div>
				<NavHeader>TinyCarList</NavHeader>
			</div>
			<div>
				<NavLink>Link 1</NavLink>
				<NavLink>Link 2</NavLink>
				<NavLink>Link 3</NavLink>
			</div>

		</NavbarContainer>
	);
};

export default Navbar;