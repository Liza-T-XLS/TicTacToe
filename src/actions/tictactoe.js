// == action types

export const SAVE_PLAYER_NAME = 'SAVE_PLAYER_NAME';
export const DISPLAY_PLAYER_NAME = 'DISPLAY_PLAYER_NAME';
export const EDIT_PLAYER_NAME = 'EDIT_PLAYER_NAME';
export const CHANGE_MARK_FORM = 'CHANGE_MARK_FORM';

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
