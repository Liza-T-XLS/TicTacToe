// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './playerForm.scss';
import editPen from 'src/assets/edit-pen.svg';

// == Component

const PlayerForm = ({
  id,
  playerName,
  savePlayerName,
  displayPlayerName,
  displayStatus,
  editPlayerName,
}) => {
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    savePlayerName(id, e.target.value);
    console.log(displayStatus);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (playerName.length > 1) {
      console.log('name ' + id + ' submitted');
      displayPlayerName(id);
    }
  };

  const onClickHandler = (e) => {
    console.log('edit ' + id + ' name');
    editPlayerName(id);
  };

  return (
    <>
      {!displayStatus && (
        <form className="playerForm" onSubmit={onSubmitHandler}>
          <label htmlFor="playerName">
            <p className="instructions">Enter your name</p>
            <input className="playerNameInput" type="text" name="playerName" value={playerName} onChange={onChangeHandler} minLength="2" />
          </label>
        </form>
      )}
      {displayStatus && (
        <div className="playerNameDisplay">
          <p>{playerName}</p>
          <button className="editButton" type="button" onClick={onClickHandler}>
            <img className="editPenImg" src={editPen} alt="" />
          </button>
        </div>
      )}
    </>
  );
};

// == PropTypes

PlayerForm.propTypes = {
  id: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  savePlayerName: PropTypes.func.isRequired,
  displayPlayerName: PropTypes.func.isRequired,
  displayStatus: PropTypes.bool.isRequired,
  editPlayerName: PropTypes.func.isRequired,
};

// == Export

export default PlayerForm;
