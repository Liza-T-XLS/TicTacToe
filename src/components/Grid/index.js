// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './grid.scss';

import GridSquare from 'src/containers/Grid/GridSquare';

// == Component

const Grid = ({ grid, turnCount, victory, sendMessage }) => {
  useEffect(() => {
    if (turnCount === 9 && !victory) {
      sendMessage('It\'s a tie!');
    }
  }, [grid]);

  return (
    <div className="container">
      {grid.map((gridSquare) => (
        <GridSquare key={gridSquare.id} id={gridSquare.id} />
      ))}
    </div>
  );
};

// PropTypes

Grid.propTypes = {
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  turnCount: PropTypes.number.isRequired,
  victory: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

// == Export

export default Grid;
