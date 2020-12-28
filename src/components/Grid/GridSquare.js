// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import cross from 'src/assets/cross.svg';
import circle from 'src/assets/circle.svg';

// == Component

const GridSquare = ({
  id,
  markForm,
  changeMarkForm,
  ready,
  clickedStatus,
  checkWin,
  victory,
  win,
  sendMessage,
  turnCount,
}) => {
  const crossMark = cross;
  const circleMark = circle;

  const gridSquareOnClickHandler = () => {
    if (!ready) {
      sendMessage('Both players\' names must be entered for the game to begin');
    }
    else if (ready && !clickedStatus && !victory && turnCount !== 9) {
      sendMessage('Let\'s play!');
      changeMarkForm(id);
      checkWin(markForm);
    }
    else if (ready && clickedStatus && !victory) {
      if (turnCount !== 9) {
        sendMessage('This spot has already been called');
      }
      else if (turnCount === 9) {
        sendMessage('The game is over');
      }
    }
  };

  if (markForm === 'cross') {
    const cssClassName = classNames('cross', { winning: win });
    return (
      <div className="item" onClick={gridSquareOnClickHandler}>
        <img src={crossMark} alt={markForm} className={cssClassName} />
      </div>
    );
  }
  if (markForm === 'circle') {
    const cssClassName = classNames('circle', { winning: win });
    return (
      <div className="item" onClick={gridSquareOnClickHandler}>
        <img src={circleMark} alt={markForm} className={cssClassName} />
      </div>
    );
  }
  return (
    <div className="item" onClick={gridSquareOnClickHandler} />
  );
};

// == PropTypes

GridSquare.propTypes = {
  id: PropTypes.number.isRequired,
  markForm: PropTypes.string,
  changeMarkForm: PropTypes.func.isRequired,
  ready: PropTypes.bool.isRequired,
  clickedStatus: PropTypes.bool.isRequired,
  checkWin: PropTypes.func.isRequired,
  victory: PropTypes.bool.isRequired,
  win: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
  turnCount: PropTypes.number.isRequired,
};

GridSquare.defaultProps = {
  markForm: '',
};

// == Export

export default GridSquare;
