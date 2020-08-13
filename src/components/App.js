import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Splash from "./Splash";

const App = () => {
	return (
		<>
		<GlobalStyles />
		<Navbar />
		<Splash />
		</>
	);
};

export default App;