import { SAVE_PLAYER_NAME, DISPLAY_PLAYER_NAME, EDIT_PLAYER_NAME, CHANGE_MARK_FORM, RESET_GAME } from 'src/actions/tictactoe';

const initialState = {
  playerName1: '',
  playerName2: '',
  displayPlayerName1: false,
  displayPlayerName2: false,
  gridSquare1: {
    form: '',
    clicked: false,
  },
  gridSquare2: {
    form: '',
    clicked: false,
  },
  gridSquare3: {
    form: '',
    clicked: false,
  },
  gridSquare4: {
    form: '',
    clicked: false,
  },
  gridSquare5: {
    form: '',
    clicked: false,
  },
  gridSquare6: {
    form: '',
    clicked: false,
  },
  gridSquare7: {
    form: '',
    clicked: false,
  },
  gridSquare8: {
    form: '',
    clicked: false,
  },
  gridSquare9: {
    form: '',
    clicked: false,
  },
  turnCount: 0,
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
    case CHANGE_MARK_FORM: {
      let shape;
      if ((state.turnCount % 2) === 0) {
        shape = 'cross';
      }
      else {
        shape = 'circle';
      }
      const gridSquare = 'gridSquare' + action.id;
      const newGridSquare = {
        form: shape,
        clicked: true,
      };
      return {
        ...state,
        turnCount: state.turnCount+1,
        [gridSquare]: newGridSquare,
      };
    }
    case RESET_GAME:
      return {
        ...state,
        gridSquare1: {
          form: '',
          clicked: false,
        },
        gridSquare2: {
          form: '',
          clicked: false,
        },
        gridSquare3: {
          form: '',
          clicked: false,
        },
        gridSquare4: {
          form: '',
          clicked: false,
        },
        gridSquare5: {
          form: '',
          clicked: false,
        },
        gridSquare6: {
          form: '',
          clicked: false,
        },
        gridSquare7: {
          form: '',
          clicked: false,
        },
        gridSquare8: {
          form: '',
          clicked: false,
        },
        gridSquare9: {
          form: '',
          clicked: false,
        },
      };
    default: return state;
  }
};

export default tictactoeReducer;
