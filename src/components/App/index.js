// == Imports

import React, { useEffect } from 'react';

import './app.scss';

import Header from 'src/components/Header';
// import PlayerForm from 'src/containers/PlayerForm';
import PlayerInfo from 'src/components/PlayerInfo';
import Message from 'src/containers/Message';
import Grid from 'src/containers/Grid';
import StartButton from 'src/containers/StartButton';
import Footer from 'src/components/Footer';

// == Component

const App = () => {
  useEffect(() => {
    console.log('ready?');
  });

  return (
    <div className="app">
      <Header />
      <main>
        <PlayerInfo id="1" player="Player One" />
        <div className="grid">
          <Message />
          <Grid />
          <StartButton />
        </div>
        <PlayerInfo id="2" player="Player Two" />
      </main>
      <Footer />
    </div>
  );
};
// == Export

export default App;
