// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './app.scss';

import Header from 'src/containers/Header';
import PlayerInfo from 'src/containers/PlayerInfo';
import Message from 'src/containers/Message';
import Grid from 'src/containers/Grid';
import StartButton from 'src/containers/StartButton';
import Footer from 'src/components/Footer';
import About from 'src/components/About';
import NotFound from 'src/components/NotFound';

// == Component

const App = ({ players, checkReady }) => {
  // Checks if both players are ready (if they have both entered their names,
  // if not, cannot begin to play)
  useEffect(() => {
    checkReady();
  }, [players]);

  return (
    <div className="app">
      <Helmet>
        <title>TicTacToe | Home</title>
      </Helmet>
      <Header />
      <main>
        <Switch>
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
          <Route>
            <NotFound />
          </Route>
        </Switch>
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
