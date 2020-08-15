import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar/Navbar';
import Splash from './Splash';
import Listing from './Listing';
import AllListings from './AllListings/AllListings';
import NewListing from './NewListing';
import getListings from '../controllers/listingsController';

const App = () => {

  const [listingsState, setListingsState] = useState([]);

  const setListings = async () => {
    const res = await getListings();
    console.log(res);
    console.log(res.data);
    setListingsState(res.data);
  };

  useEffect(() => {
    setListings();
  },[]);


  return (
    <Router>
      <GlobalStyles />

      <Switch>
        <Route exact path="/" component={() => <Splash />} />
        <Route exact path="/Listing" component={() => <Listing />} />
        <Route
          exact
          path="/AllListings"
          component={() => <AllListings listings={listingsState} />}
        />
        <Route exact path="/NewListing" component={() => <NewListing />} />
      </Switch>
      <Navbar />
    </Router>
  );
};

export default App;
