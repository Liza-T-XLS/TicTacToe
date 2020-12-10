// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './grid.scss';

import GridSquare from 'src/containers/Grid/GridSquare';

// == Component

const Grid = ({ grid }) => (
  <div className="container">
    {grid.map((gridSquare) => (
      <GridSquare key={gridSquare.id} id={gridSquare.id} />
    ))}
  </div>
);

// PropTypes

Grid.propTypes = {
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export

export default Grid;
