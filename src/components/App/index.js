// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './app.scss';

import Header from 'src/components/Header';
// import PlayerForm from 'src/containers/PlayerForm';
import PlayerInfo from 'src/containers/PlayerInfo';
import Message from 'src/containers/Message';
import Grid from 'src/containers/Grid';
import StartButton from 'src/containers/StartButton';
import Footer from 'src/components/Footer';

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
        <PlayerInfo id="1" playerTitle="Player One" markForm="cross" />
        <div className="grid">
          <Message />
          <Grid />
          <StartButton />
        </div>
        <PlayerInfo id="2" playerTitle="Player Two" markForm="circle" />
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
