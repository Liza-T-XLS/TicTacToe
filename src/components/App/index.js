// == Imports

import React from 'react';

import './app.scss';

import Header from 'src/components/Header';
// import PlayerForm from 'src/containers/PlayerForm';
import PlayerInfo from 'src/components/PlayerInfo';
import Grid from 'src/containers/Grid';
import StartButton from 'src/containers/StartButton';
import Footer from 'src/components/Footer';

// == Component

const App = () => (
  <div className="app">
    <Header />
    <main>
      <PlayerInfo number="1" player="Player One" />
      <div className="grid">
        <Grid />
        <StartButton />
      </div>
      <PlayerInfo number="2" player="Player Two" />
    </main>
    <Footer />
  </div>
);

// == Export

export default App;
