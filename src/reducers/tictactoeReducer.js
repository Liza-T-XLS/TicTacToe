import { SAVE_PLAYER_NAME, DISPLAY_PLAYER_NAME, EDIT_PLAYER_NAME } from 'src/actions/tictactoe';

const initialState = {
  playerName1: '',
  playerName2: '',
  displayPlayerName1: false,
  displayPlayerName2: false,
  gridSquare1: 'cross',
  gridSquare2: 'cross',
  gridSquare3: 'cross',
  gridSquare4: 'cross',
  gridSquare5: 'cross',
  gridSquare6: 'cross',
  gridSquare7: 'cross',
  gridSquare8: 'cross',
  gridSquare9: 'circle',
};

const tictactoeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PLAYER_NAME: {
      const playerName = 'playerName' + action.id;
      return {
        ...state,
        [playerName]: action.newValue,
      };
    }
    case DISPLAY_PLAYER_NAME: {
      const displayPlayerName = 'displayPlayerName' + action.id;
      return {
        ...state,
        [displayPlayerName]: true,
      };
    }
    case EDIT_PLAYER_NAME: {
      const displayPlayerName = 'displayPlayerName' + action.id;
      return {
        ...state,
        [displayPlayerName]: false,
      };
    }
    default: return state;
  }
};

export default tictactoeReducer;
