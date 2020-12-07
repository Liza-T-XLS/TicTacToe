// == Imports

import React from 'react';

import './app.scss';

import Header from 'src/components/Header';
import PlayerForm from 'src/containers/PlayerForm';
import Grid from 'src/components/Grid';
import Footer from 'src/components/Footer';

// == Component

const App = () => (
  <div className="app">
    <Header />
    <main>
      <div className="playerInfo">
        <p className="playerNumber">Player One</p>
        <PlayerForm id="1" />
      </div>
      <Grid />
      <div className="playerInfo">
        <p className="playerNumber">Player Two</p>
        <PlayerForm id="2" />
      </div>
    </main>
    <Footer />
  </div>
);

// == Export

export default App;
