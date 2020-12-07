// == action types

export const SAVE_PLAYER_NAME = 'SAVE_PLAYER_NAME';
export const DISPLAY_PLAYER_NAME = 'DISPLAY_PLAYER_NAME';

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
