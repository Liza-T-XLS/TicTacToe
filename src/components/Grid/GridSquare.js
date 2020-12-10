// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import cross from 'src/assets/cross.svg';
import circle from 'src/assets/circle.svg';

// == Component

const GridSquare = ({ id, markForm, changeMarkForm, clickedStatus, checkWin, winStatus }) => {
  const crossMark = cross;
  const circleMark = circle;

  const gridSquareOnClickHandler = () => {
    console.log('square clicked ' + id);
    if (!clickedStatus) {
      changeMarkForm(id);
      checkWin(markForm);
    }
    else {
      console.log('TODO: this spot has already been called');
    }
  };
  let cssClassName = classNames(markForm, { winStatus: true });
  if (markForm === 'cross') {
    return (
      <div className="item" onClick={gridSquareOnClickHandler}>
        <img src={crossMark} alt={markForm} className={cssClassName} />
      </div>
    );
  }
  if (markForm === 'circle') {
    return (
      <div className="item" onClick={gridSquareOnClickHandler}>
        <img src={circleMark} alt={markForm} className={cssClassName} />
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
  checkWin: PropTypes.func.isRequired,
  winStatus: PropTypes.bool.isRequired,
};

GridSquare.defaultProps = {
  markForm: '',
};

// == Export

export default GridSquare;
