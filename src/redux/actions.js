import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  TOGGLE_BLOCK_BUTTONS,
} from "./types";
export function increment() {
  return { type: INCREMENT };
}
export function decrement() {
  return { type: DECREMENT };
}
export function asyncIncrement() {
  return (dispatch) => {
    dispatch(toggleBlockButtons("block"));
    setTimeout(() => {
      dispatch(increment());
      dispatch(toggleBlockButtons());
    }, 5000);
  };
}

export function toggleBlockButtons(typeOfToggle) {
  return { type: TOGGLE_BLOCK_BUTTONS, payload: typeOfToggle };
}

export function changeTheme(newTheme) {
  return { type: CHANGE_THEME, payload: newTheme };
}
