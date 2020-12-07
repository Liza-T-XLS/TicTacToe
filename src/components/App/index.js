// == Import npm
import React from 'react';

// == Import

import './app.scss';
import Header from 'src/components/Header';
import PlayerForm from 'src/components/PlayerForm';
import Grid from 'src/components/Grid';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <main>
      <div className="playerOne">
        <p>Player One</p>
        <PlayerForm />
      </div>
      <Grid />
      <div className="playerTwo">
        <p>Player Two</p>
        <PlayerForm />
      </div>
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
