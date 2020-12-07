import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import tictactoeReducer from 'src/reducers/tictactoeReducer';

const store = createStore(
  // reducer
  tictactoeReducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
