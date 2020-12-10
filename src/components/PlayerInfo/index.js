// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './playerInfo.scss';

import PlayerForm from 'src/containers/PlayerForm';

// ==  Component

const PlayerInfo = ({ number, player }) => (
  <div className="playerInfo">
    <p className="playerNumber">{player}</p>
    <PlayerForm id={number} />
  </div>
);

// == PropTypes

PlayerInfo.propTypes = {
  number: PropTypes.number.isRequired,
  player: PropTypes.string.isRequired,
};

// == Export

export default PlayerInfo;
