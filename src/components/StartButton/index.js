// ==  Imports

import React from 'react';
import PropTypes from 'prop-types';

import './startButton.scss';

// == Component

const StartButton = ({ resetGame }) => {
  const startButtonOnClickHandler = () => {
    console.log('startButton clicked');
    resetGame();
  };

  return (
    <button type="button" className="startButton" onClick={startButtonOnClickHandler}>Start game</button>
  );
};

// PropTypes

StartButton.propTypes = {
  resetGame: PropTypes.func.isRequired,
};

// == Export

export default StartButton;
