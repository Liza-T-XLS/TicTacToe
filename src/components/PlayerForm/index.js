// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './playerForm.scss';

// == Component

const PlayerForm = ({ id, playerName, savePlayerName, displayPlayerName, displayStatus }) => {
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    savePlayerName(id, e.target.value);
    console.log(displayStatus);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('name ' + id + ' submitted');
    displayPlayerName(id);
  };

  return (
    <>
      {!displayStatus && (
        <form className="playerForm" onSubmit={onSubmitHandler}>
          <label htmlFor="playerName">
            <p className="instructions">Enter your name</p>
            <input className="playerNameInput" type="text" name="playerName" value={playerName} onChange={onChangeHandler} />
          </label>
        </form>
      )}
      {displayStatus && (
        <div className="playerNameDisplay">
          {playerName}
        </div>
      )}
    </>
  );
};

// == PropTypes

PlayerForm.propTypes = {
  id: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  savePlayerName: PropTypes.func.isRequired,
  displayPlayerName: PropTypes.func.isRequired,
  displayStatus: PropTypes.bool.isRequired,
};

// == Export

export default PlayerForm;
