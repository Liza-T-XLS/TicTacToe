// ==  Imports

import React from 'react';
import PropTypes from 'prop-types';

import './startButton.scss';

// == Component

const StartButton = ({ startButtonMessage, resetGame }) => {
  const startButtonOnClickHandler = () => {
    console.log('startButton clicked');
    resetGame();
  };

  return (
    <button type="button" className="startButton" onClick={startButtonOnClickHandler}>{startButtonMessage}</button>
  );
};

// PropTypes

StartButton.propTypes = {
  startButtonMessage: PropTypes.string.isRequired,
  resetGame: PropTypes.func.isRequired,
};

// == Export

export default StartButton;
