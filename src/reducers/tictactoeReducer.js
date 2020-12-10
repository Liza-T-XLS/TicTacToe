import { SAVE_PLAYER_NAME, DISPLAY_PLAYER_NAME, EDIT_PLAYER_NAME, CHANGE_MARK_FORM, RESET_GAME, CHECK_WIN } from 'src/actions/tictactoe';

const initialState = {
  playerName1: '',
  playerName2: '',
  displayPlayerName1: false,
  displayPlayerName2: false,
  startButtonMessage: 'Reset Game',
  grid: [
    {
      id: 1,
      form: '',
      clicked: false,
      win: false,
    },
    {
      id: 2,
      form: '',
      clicked: false,
      win: false,
    },
    {
      id: 3,
      form: '',
      clicked: false,
      win: false,
    },
    {
      id: 4,
      form: '',
      clicked: false,
      win: false,
    },
    {
      id: 5,
      form: '',
      clicked: false,
      win: false,
    },
    {
      id: 6,
      form: '',
      clicked: false,
      win: false,
    },
    {
      id: 7,
      form: '',
      clicked: false,
      win: false,
    },
    {
      id: 8,
      form: '',
      clicked: false,
      win: false,
    },
    {
      id: 9,
      form: '',
      clicked: false,
      win: false,
    },
  ],
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
      const newGrid = [
        ...state.grid,
      ];
      newGrid[action.id - 1] = {
        id: action.id,
        form: shape,
        clicked: true,
        win: false,
      };
      return {
        ...state,
        turnCount: state.turnCount + 1,
        grid: newGrid,
      };
    }
    case CHECK_WIN:
      if ((state.grid[0].form === 'circle' && state.grid[1].form === 'circle' && state.grid[2].form === 'circle')
      || (state.grid[0].form === 'cross' && state.grid[1].form === 'cross' && state.grid[2].form === 'cross')
      || (state.grid[3].form === 'circle' && state.grid[4].form === 'circle' && state.grid[5].form === 'circle')
      || (state.grid[3].form === 'cross' && state.grid[4].form === 'cross' && state.grid[5].form === 'cross')
      || (state.grid[6].form === 'circle' && state.grid[7].form === 'circle' && state.grid[8].form === 'circle')
      || (state.grid[6].form === 'cross' && state.grid[7].form === 'cross' && state.grid[8].form === 'cross')
      || (state.grid[0].form === 'circle' && state.grid[3].form === 'circle' && state.grid[6].form === 'circle')
      || (state.grid[0].form === 'cross' && state.grid[3].form === 'cross' && state.grid[6].form === 'cross')
      || (state.grid[1].form === 'circle' && state.grid[4].form === 'circle' && state.grid[7].form === 'circle')
      || (state.grid[1].form === 'cross' && state.grid[4].form === 'cross' && state.grid[7].form === 'cross')
      || (state.grid[2].form === 'circle' && state.grid[5].form === 'circle' && state.grid[8].form === 'circle')
      || (state.grid[2].form === 'cross' && state.grid[5].form === 'cross' && state.grid[8].form === 'cross')
      || (state.grid[0].form === 'circle' && state.grid[4].form === 'circle' && state.grid[8].form === 'circle')
      || (state.grid[0].form === 'cross' && state.grid[4].form === 'cross' && state.grid[8].form === 'cross')
      || (state.grid[2].form === 'circle' && state.grid[4].form === 'circle' && state.grid[6].form === 'circle')
      || (state.grid[2].form === 'cross' && state.grid[4].form === 'cross' && state.grid[6].form === 'cross')) {
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
        grid: [
          {
            id: 1,
            form: '',
            clicked: false,
            win: false,
          },
          {
            id: 2,
            form: '',
            clicked: false,
            win: false,
          },
          {
            id: 3,
            form: '',
            clicked: false,
            win: false,
          },
          {
            id: 4,
            form: '',
            clicked: false,
            win: false,
          },
          {
            id: 5,
            form: '',
            clicked: false,
            win: false,
          },
          {
            id: 6,
            form: '',
            clicked: false,
            win: false,
          },
          {
            id: 7,
            form: '',
            clicked: false,
            win: false,
          },
          {
            id: 8,
            form: '',
            clicked: false,
            win: false,
          },
          {
            id: 9,
            form: '',
            clicked: false,
            win: false,
          },
        ],
        turnCount: 0,
        victory: false,
      };
    default: return state;
  }
};

export default tictactoeReducer;
