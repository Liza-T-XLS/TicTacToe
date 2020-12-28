import {
  SAVE_PLAYER_NAME,
  DISPLAY_PLAYER_NAME,
  EDIT_PLAYER_NAME,
  CHANGE_MARK_FORM,
  RESET_GAME,
  CHECK_WIN,
  SEND_MESSAGE,
  CHECK_READY,
} from '../actions/tictactoe';

const initialState = {
  players: [
    {
      id: 1,
      name: '',
      displayName: false,
    },
    {
      id: 2,
      name: '',
      displayName: false,
    },
  ],
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
  ready: false,
  turnCount: 0,
  victory: false,
  message: 'Let\'s play!',
};

const tictactoeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PLAYER_NAME: {
      const newPlayers = [
        ...state.players,
      ];
      const newPlayer = {
        ...state.players[action.id - 1],
        name: action.newValue,
      };
      newPlayers[action.id - 1] = newPlayer;
      return {
        ...state,
        players: newPlayers,
      };
    }
    case DISPLAY_PLAYER_NAME: {
      const newPlayers = [
        ...state.players,
      ];
      const newPlayer = {
        ...state.players[action.id - 1],
        displayName: true,
        name: state.players[action.id - 1].name.replace(/\s+/g, ''),
      };
      newPlayers[action.id - 1] = newPlayer;
      return {
        ...state,
        players: newPlayers,
      };
    }
    case EDIT_PLAYER_NAME: {
      const newPlayers = [
        ...state.players,
      ];
      const newPlayer = {
        ...state.players[action.id - 1],
        displayName: false,
      };
      newPlayers[action.id - 1] = newPlayer;
      return {
        ...state,
        players: newPlayers,
      };
    }
    case CHECK_READY: {
      const playersReady = state.players.filter((player) => (
        player.displayName === true)).length;
      if (playersReady > 1) {
        return {
          ...state,
          ready: true,
          message: 'Let\'s play!',
        };
      }
      return {
        ...state,
        ready: false,
      };
    }
    case SEND_MESSAGE:
      return {
        ...state,
        message: action.content,
      };
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
      const newGridSquare = {
        ...state.grid[action.id - 1],
        form: shape,
        clicked: true,
      };
      newGrid[action.id - 1] = newGridSquare;

      return {
        ...state,
        turnCount: state.turnCount + 1,
        grid: newGrid,
      };
    }
    case CHECK_WIN:
      // case
      // o o o
      // - - -
      // - - -
      if (state.grid[0].form === 'circle' && state.grid[1].form === 'circle' && state.grid[2].form === 'circle') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare0 = {
          ...state.grid[0],
          win: true,
        };
        newGrid[0] = newGridSquare0;

        const newGridSquare1 = {
          ...state.grid[1],
          win: true,
        };
        newGrid[1] = newGridSquare1;

        const newGridSquare2 = {
          ...state.grid[2],
          win: true,
        };
        newGrid[2] = newGridSquare2;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[1].name} has won!`,
        };
      }

      // case
      // x x x
      // - - -
      // - - -
      if (state.grid[0].form === 'cross' && state.grid[1].form === 'cross' && state.grid[2].form === 'cross') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare0 = {
          ...state.grid[0],
          win: true,
        };
        newGrid[0] = newGridSquare0;

        const newGridSquare1 = {
          ...state.grid[1],
          win: true,
        };
        newGrid[1] = newGridSquare1;

        const newGridSquare2 = {
          ...state.grid[2],
          win: true,
        };
        newGrid[2] = newGridSquare2;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[0].name} has won!`,
        };
      }

      // case
      // - - -
      // o o o
      // - - -
      if (state.grid[3].form === 'circle' && state.grid[4].form === 'circle' && state.grid[5].form === 'circle') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare3 = {
          ...state.grid[3],
          win: true,
        };
        newGrid[3] = newGridSquare3;

        const newGridSquare4 = {
          ...state.grid[4],
          win: true,
        };
        newGrid[4] = newGridSquare4;

        const newGridSquare5 = {
          ...state.grid[5],
          win: true,
        };
        newGrid[5] = newGridSquare5;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[1].name} has won!`,
        };
      }

      // case
      // - - -
      // x x x
      // - - -
      if (state.grid[3].form === 'cross' && state.grid[4].form === 'cross' && state.grid[5].form === 'cross') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare3 = {
          ...state.grid[3],
          win: true,
        };
        newGrid[3] = newGridSquare3;

        const newGridSquare4 = {
          ...state.grid[4],
          win: true,
        };
        newGrid[4] = newGridSquare4;

        const newGridSquare5 = {
          ...state.grid[5],
          win: true,
        };
        newGrid[5] = newGridSquare5;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[0].name} has won!`,
        };
      }

      // case
      // - - -
      // - - -
      // o o o
      if (state.grid[6].form === 'circle' && state.grid[7].form === 'circle' && state.grid[8].form === 'circle') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare6 = {
          ...state.grid[6],
          win: true,
        };
        newGrid[6] = newGridSquare6;

        const newGridSquare7 = {
          ...state.grid[7],
          win: true,
        };
        newGrid[7] = newGridSquare7;

        const newGridSquare8 = {
          ...state.grid[8],
          win: true,
        };
        newGrid[8] = newGridSquare8;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[1].name} has won!`,
        };
      }

      // case
      // - - -
      // - - -
      // x x x
      if (state.grid[6].form === 'cross' && state.grid[7].form === 'cross' && state.grid[8].form === 'cross') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare6 = {
          ...state.grid[6],
          win: true,
        };
        newGrid[6] = newGridSquare6;

        const newGridSquare7 = {
          ...state.grid[7],
          win: true,
        };
        newGrid[7] = newGridSquare7;

        const newGridSquare8 = {
          ...state.grid[8],
          win: true,
        };
        newGrid[8] = newGridSquare8;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[0].name} has won!`,
        };
      }

      // case
      // o - -
      // o - -
      // o - -
      if (state.grid[0].form === 'circle' && state.grid[3].form === 'circle' && state.grid[6].form === 'circle') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare0 = {
          ...state.grid[0],
          win: true,
        };
        newGrid[0] = newGridSquare0;

        const newGridSquare3 = {
          ...state.grid[3],
          win: true,
        };
        newGrid[3] = newGridSquare3;

        const newGridSquare6 = {
          ...state.grid[6],
          win: true,
        };
        newGrid[6] = newGridSquare6;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[1].name} has won!`,
        };
      }

      // case
      // x - -
      // x - -
      // x - -
      if (state.grid[0].form === 'cross' && state.grid[3].form === 'cross' && state.grid[6].form === 'cross') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare0 = {
          ...state.grid[0],
          win: true,
        };
        newGrid[0] = newGridSquare0;

        const newGridSquare3 = {
          ...state.grid[3],
          win: true,
        };
        newGrid[3] = newGridSquare3;

        const newGridSquare6 = {
          ...state.grid[6],
          win: true,
        };
        newGrid[6] = newGridSquare6;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[0].name} has won!`,
        };
      }

      // case
      // - o -
      // - o -
      // - o -
      if (state.grid[1].form === 'circle' && state.grid[4].form === 'circle' && state.grid[7].form === 'circle') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare1 = {
          ...state.grid[1],
          win: true,
        };
        newGrid[1] = newGridSquare1;

        const newGridSquare4 = {
          ...state.grid[4],
          win: true,
        };
        newGrid[4] = newGridSquare4;

        const newGridSquare7 = {
          ...state.grid[7],
          win: true,
        };
        newGrid[7] = newGridSquare7;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[1].name} has won!`,
        };
      }

      // case
      // - x -
      // - x -
      // - x -
      if (state.grid[1].form === 'cross' && state.grid[4].form === 'cross' && state.grid[7].form === 'cross') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare1 = {
          ...state.grid[1],
          win: true,
        };
        newGrid[1] = newGridSquare1;

        const newGridSquare4 = {
          ...state.grid[4],
          win: true,
        };
        newGrid[4] = newGridSquare4;

        const newGridSquare7 = {
          ...state.grid[7],
          win: true,
        };
        newGrid[7] = newGridSquare7;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[0].name} has won!`,
        };
      }

      // case
      // - - o
      // - - o
      // - - o
      if (state.grid[2].form === 'circle' && state.grid[5].form === 'circle' && state.grid[8].form === 'circle') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare2 = {
          ...state.grid[2],
          win: true,
        };
        newGrid[2] = newGridSquare2;

        const newGridSquare5 = {
          ...state.grid[5],
          win: true,
        };
        newGrid[5] = newGridSquare5;

        const newGridSquare8 = {
          ...state.grid[8],
          win: true,
        };
        newGrid[8] = newGridSquare8;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[1].name} has won!`,
        };
      }

      // case
      // - - x
      // - - x
      // - - x
      if (state.grid[2].form === 'cross' && state.grid[5].form === 'cross' && state.grid[8].form === 'cross') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare2 = {
          ...state.grid[2],
          win: true,
        };
        newGrid[2] = newGridSquare2;

        const newGridSquare5 = {
          ...state.grid[5],
          win: true,
        };
        newGrid[5] = newGridSquare5;

        const newGridSquare8 = {
          ...state.grid[8],
          win: true,
        };
        newGrid[8] = newGridSquare8;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[0].name} has won!`,
        };
      }

      // case
      // o - -
      // - o -
      // - - o
      if (state.grid[0].form === 'circle' && state.grid[4].form === 'circle' && state.grid[8].form === 'circle') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare0 = {
          ...state.grid[0],
          win: true,
        };
        newGrid[0] = newGridSquare0;

        const newGridSquare4 = {
          ...state.grid[4],
          win: true,
        };
        newGrid[4] = newGridSquare4;

        const newGridSquare8 = {
          ...state.grid[8],
          win: true,
        };
        newGrid[8] = newGridSquare8;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[1].name} has won!`,
        };
      }

      // case
      // x - -
      // - x -
      // - - x
      if (state.grid[0].form === 'cross' && state.grid[4].form === 'cross' && state.grid[8].form === 'cross') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare0 = {
          ...state.grid[0],
          win: true,
        };
        newGrid[0] = newGridSquare0;

        const newGridSquare4 = {
          ...state.grid[4],
          win: true,
        };
        newGrid[4] = newGridSquare4;

        const newGridSquare8 = {
          ...state.grid[8],
          win: true,
        };
        newGrid[8] = newGridSquare8;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[0].name} has won!`,
        };
      }

      // case
      // - - o
      // - o -
      // o - -
      if (state.grid[2].form === 'circle' && state.grid[4].form === 'circle' && state.grid[6].form === 'circle') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare2 = {
          ...state.grid[2],
          win: true,
        };
        newGrid[2] = newGridSquare2;

        const newGridSquare4 = {
          ...state.grid[4],
          win: true,
        };
        newGrid[4] = newGridSquare4;

        const newGridSquare6 = {
          ...state.grid[6],
          win: true,
        };
        newGrid[6] = newGridSquare6;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[1].name} has won!`,
        };
      }

      // case
      // - - x
      // - x -
      // x - -
      if (state.grid[2].form === 'cross' && state.grid[4].form === 'cross' && state.grid[6].form === 'cross') {
        const newGrid = [
          ...state.grid,
        ];

        const newGridSquare2 = {
          ...state.grid[2],
          win: true,
        };
        newGrid[2] = newGridSquare2;

        const newGridSquare4 = {
          ...state.grid[4],
          win: true,
        };
        newGrid[4] = newGridSquare4;

        const newGridSquare6 = {
          ...state.grid[6],
          win: true,
        };
        newGrid[6] = newGridSquare6;

        return {
          ...state,
          grid: newGrid,
          victory: true,
          message: `${state.players[0].name} has won!`,
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
        message: 'Let\'s play!',
      };
    default: return state;
  }
};

export default tictactoeReducer;
