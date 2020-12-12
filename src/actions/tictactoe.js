// == action types

export const SAVE_PLAYER_NAME = 'SAVE_PLAYER_NAME';
export const DISPLAY_PLAYER_NAME = 'DISPLAY_PLAYER_NAME';
export const EDIT_PLAYER_NAME = 'EDIT_PLAYER_NAME';
export const CHANGE_MARK_FORM = 'CHANGE_MARK_FORM';
export const RESET_GAME = 'RESET_GAME';
export const CHECK_WIN = 'CHECK_WIN';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHECK_READY = 'CHECK_READY';

// == action creators

export const savePlayerName = (id, newValue) => ({
  type: SAVE_PLAYER_NAME,
  id,
  newValue,
});

export const displayPlayerName = (id) => ({
  type: DISPLAY_PLAYER_NAME,
  id,
});

export const editPlayerName = (id) => ({
  type: EDIT_PLAYER_NAME,
  id,
});

export const changeMarkForm = (id) => ({
  type: CHANGE_MARK_FORM,
  id,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const checkWin = (move) => ({
  type: CHECK_WIN,
  move,
});

export const sendMessage = (content) => ({
  type: SEND_MESSAGE,
  content,
});

export const checkReady = () => ({
  type: CHECK_READY,
});
