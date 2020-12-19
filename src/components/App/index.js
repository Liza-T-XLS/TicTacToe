// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import './app.scss';

import Header from 'src/components/Header';
import PlayerInfo from 'src/containers/PlayerInfo';
import Message from 'src/containers/Message';
import Grid from 'src/containers/Grid';
import StartButton from 'src/containers/StartButton';
import Footer from 'src/components/Footer';
import About from 'src/components/About';

// == Component

const App = ({ players, checkReady }) => {
  useEffect(() => {
    console.log('ready?');
    checkReady();
  }, [players]);

  return (
    <div className="app">
      <Header />
      <main>
        <Route
          path="/"
          exact
        >
          <PlayerInfo id="1" playerTitle="Player One" markForm="cross" />
          <div className="grid">
            <Message />
            <Grid />
            <StartButton />
          </div>
          <PlayerInfo id="2" playerTitle="Player Two" markForm="circle" />
        </Route>
        <Route
          path="/about"
          exact
        >
          <About />
        </Route>
      </main>
      <Footer />
    </div>
  );
};

// == PropTypes

App.propTypes = {
  players: PropTypes.array.isRequired,
  checkReady: PropTypes.func.isRequired,
};

// == Export

export default App;
