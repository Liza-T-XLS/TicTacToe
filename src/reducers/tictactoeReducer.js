import { SAVE_PLAYER_NAME, DISPLAY_PLAYER_NAME, EDIT_PLAYER_NAME, CHANGE_MARK_FORM, RESET_GAME, CHECK_WIN } from 'src/actions/tictactoe';

const initialState = {
  playerName1: '',
  playerName2: '',
  displayPlayerName1: false,
  displayPlayerName2: false,
  startButtonMessage: 'Reset Game',
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
  victory: false,
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
    case CHECK_WIN:
      if ((state.gridSquare1.form === 'circle' && state.gridSquare2.form === 'circle' && state.gridSquare3.form === 'circle')
      || (state.gridSquare1.form === 'cross' && state.gridSquare2.form === 'cross' && state.gridSquare3.form === 'cross')
      || (state.gridSquare4.form === 'circle' && state.gridSquare5.form === 'circle' && state.gridSquare6.form === 'circle')
      || (state.gridSquare4.form === 'cross' && state.gridSquare5.form === 'cross' && state.gridSquare6.form === 'cross')
      || (state.gridSquare7.form === 'circle' && state.gridSquare8.form === 'circle' && state.gridSquare9.form === 'circle')
      || (state.gridSquare7.form === 'cross' && state.gridSquare8.form === 'cross' && state.gridSquare9.form === 'cross')
      || (state.gridSquare1.form === 'circle' && state.gridSquare4.form === 'circle' && state.gridSquare7.form === 'circle')
      || (state.gridSquare1.form === 'cross' && state.gridSquare4.form === 'cross' && state.gridSquare7.form === 'cross')
      || (state.gridSquare2.form === 'circle' && state.gridSquare5.form === 'circle' && state.gridSquare8.form === 'circle')
      || (state.gridSquare2.form === 'cross' && state.gridSquare5.form === 'cross' && state.gridSquare8.form === 'cross')
      || (state.gridSquare3.form === 'circle' && state.gridSquare6.form === 'circle' && state.gridSquare9.form === 'circle')
      || (state.gridSquare3.form === 'cross' && state.gridSquare6.form === 'cross' && state.gridSquare9.form === 'cross')
      || (state.gridSquare1.form === 'circle' && state.gridSquare5.form === 'circle' && state.gridSquare9.form === 'circle')
      || (state.gridSquare1.form === 'cross' && state.gridSquare5.form === 'cross' && state.gridSquare9.form === 'cross')
      || (state.gridSquare3.form === 'circle' && state.gridSquare5.form === 'circle' && state.gridSquare7.form === 'circle')
      || (state.gridSquare3.form === 'cross' && state.gridSquare5.form === 'cross' && state.gridSquare7.form === 'cross')) {
        return {
          ...state,
          victory: true,
        };
      }
      return {
        ...state,
      };
    case RESET_GAME:
      return {
        ...state,
        startButtonMessage: 'Reset Game',
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
        victory: false,
      };
    default: return state;
  }
};

export default tictactoeReducer;
