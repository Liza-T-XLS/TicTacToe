import React from 'react';

const PlayerForm = () => (
  <form className="playerForm">
    <label htmlFor="playerName">Enter your name<br />
      <input className="playerNameInput" type="text" name="playerName" />
    </label>
  </form>
);

export default PlayerForm;
