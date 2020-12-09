// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import cross from 'src/assets/cross.svg';
import circle from 'src/assets/circle.svg';

// == Component

const GridSquare = ({ id, markForm, changeMarkForm, clickedStatus }) => {
  const crossMark = cross;
  const circleMark = circle;

  const gridSquareOnClickHandler = () => {
    console.log('square clicked ' + id);
    if (!clickedStatus) {
      changeMarkForm(id);
    }
    else {
      console.log('TODO: this spot has already been called');
    }
  };

  if (markForm === 'cross') {
    return (
      <div className="item" onClick={gridSquareOnClickHandler}>
        <img src={crossMark} alt={markForm} className={markForm} />
      </div>
    );
  }
  if (markForm === 'circle') {
    return (
      <div className="item" onClick={gridSquareOnClickHandler}>
        <img src={circleMark} alt={markForm} className={markForm} />
      </div>
    );
  }
  return (
    <div className="item" onClick={gridSquareOnClickHandler}>
      {/* <img src={circleMark} alt={markForm} className={markForm} /> */}
    </div>
  );
};

// == PropTypes

GridSquare.propTypes = {
  id: PropTypes.number.isRequired,
  markForm: PropTypes.string,
  changeMarkForm: PropTypes.func.isRequired,
  clickedStatus: PropTypes.bool.isRequired,
};

GridSquare.defaultProps = {
  markForm: '',
};

// == Export

export default GridSquare;
