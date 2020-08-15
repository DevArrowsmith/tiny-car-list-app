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

  const [selectedState, setSelectedState] = useState(0);

  const setSelected = (data) => {
    const selectedIndex = Math.floor(Math.random() * data.length);
    setSelectedState(selectedIndex);
  };

  const setListings = async () => {
    const res = await getListings();
    await setListingsState(res.data);
    await setSelected(res.data);
  };

  useEffect(() => {
    setListings();
  }, []);

  const ConsoleLog = ({ children }) => {
    console.log(children);
    return false;
  };

  return (
    <Router>
      <ConsoleLog>{listingsState}</ConsoleLog>
      <ConsoleLog>{selectedState}</ConsoleLog>
      <ConsoleLog>{listingsState[selectedState]}</ConsoleLog>
      <GlobalStyles />

      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Splash selectedListing={listingsState[selectedState]} />
          )}
        />
        <Route
          exact
          path="/Listing"
          component={() => (
            <Listing selectedListing={listingsState[selectedState]} />
          )}
        />
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
