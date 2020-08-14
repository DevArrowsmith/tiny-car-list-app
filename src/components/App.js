import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Splash from './Splash';
import Listing from './Listing';
import AllListings from './AllListings/AllListings';
import NewListing from './NewListing';

const App = () => {
  return ( 
  <Router>
    <GlobalStyles />
    <Navbar />
    <Switch>
      <Route exact path="/" 
        component={() => (
          <Splash />
        )}
      />
      <Route exact path="/Listing" 
        component={() => (
          <Listing />
        )}
      />
      <Route exact path="/AllListings" 
        component={() => (
          <AllListings />
        )}
      />
      <Route exact path="/NewListing" 
        component={() => (
          <NewListing />
        )}
      />
    </Switch>
  </Router>
  )
};

export default App;
