// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './playerInfo.scss';

import PlayerForm from 'src/containers/PlayerInfo/PlayerForm';
import cross from 'src/assets/cross.svg';
import circle from 'src/assets/circle.svg';

// ==  Component

const PlayerInfo = ({
  id,
  playerTitle,
  playerName,
  markForm,
  turnCount,
  ready,
  victory,
}) => {
  let mark;

  if (markForm === 'cross') {
    mark = cross;
  }
  else if (markForm === 'circle') {
    mark = circle;
  }

  // Determines which player's turn it is (a message is displayed to inform the player accordingly)
  // If the turnCount is even and the player's id is not, it means that it is player#1's turn to play
  // If the turnCount is odd and the player's id is even, it means that it is player#2's turn to play
  let playerTurn;

  if ((((turnCount % 2) === 0) && (id % 2 !== 0))
   || (((turnCount % 2) !== 0) && (id % 2 === 0))) {
    playerTurn = true;
  }
  else {
    playerTurn = false;
  }

  const cssClassName = classNames(markForm, { bounce: playerTurn && ready && !victory && turnCount !== 9 });

  const cssClassName2 = classNames(markForm + id, { colored: playerTurn && ready && !victory });

  return (
    <div className="playerInfo">
      <p className="playerNumber">{playerTitle}</p>
      <PlayerForm id={id} />
      <div className="playerMark">
        <img src={mark} alt={markForm} className={cssClassName} />
        {ready && !victory
        && <div className="turnNotice">{ready && playerTurn && !victory && turnCount !== 9 && <p><span className={cssClassName2}>{playerName}</span>, it's your turn to play!</p>}</div>}
      </div>
    </div>
  );
};

// == PropTypes

PlayerInfo.propTypes = {
  id: PropTypes.string.isRequired,
  playerTitle: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  markForm: PropTypes.string.isRequired,
  turnCount: PropTypes.number.isRequired,
  ready: PropTypes.bool.isRequired,
  victory: PropTypes.bool.isRequired,
};

// == Export

export default PlayerInfo;
