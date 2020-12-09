// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './grid.scss';

import GridSquare from 'src/containers/Grid/GridSquare';

// == Component

const Grid = () => (
  <div className="container">
    {Array(9).fill(null).map((value, index) => (
      <GridSquare key={index+1} id={index+1} />
    ))}
  </div>
);

// PropTypes

// == Export

export default Grid;
