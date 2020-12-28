import { expect } from 'chai';

import reducer from '../src/reducers/tictactoeReducer';

describe('global reducer', () => {
  it('is a function', () => {
    expect(reducer).to.be.a('function');
  });
  it('check initial state', () => {
    const expectedInitialState = {
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
    expect(reducer()).to.deep.equal(expectedInitialState);
  });
});
