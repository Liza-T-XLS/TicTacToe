// == Imports

import React from 'react';

import './playerForm.scss';

// == Component

const PlayerForm = () => (
  <form className="playerForm">
    <label htmlFor="playerName">
      <p className="instructions">Enter your name</p>
      <input className="playerNameInput" type="text" name="playerName" />
    </label>
  </form>
);

// Export

export default PlayerForm;
