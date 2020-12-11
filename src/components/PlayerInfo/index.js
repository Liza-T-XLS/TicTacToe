// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './playerInfo.scss';

import PlayerForm from 'src/containers/PlayerForm';

// ==  Component

const PlayerInfo = ({ id, player }) => (
  <div className="playerInfo">
    <p className="playerNumber">{player}</p>
    <PlayerForm id={id} />
  </div>
);

// == PropTypes

PlayerInfo.propTypes = {
  id: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
};

// == Export

export default PlayerInfo;
