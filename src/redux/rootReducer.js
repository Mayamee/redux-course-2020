import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  TOGGLE_BLOCK_BUTTONS,
} from "./types";
import { combineReducers } from "redux";
function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
}

const initialThemeState = {
  value: "light",
};

function themeReducer(state = initialThemeState, action) {
  if (action.type === CHANGE_THEME) {
    return { ...state, value: action.payload };
  }
  return state;
}
const initialToggleState = {
  isBlock: false,
  clickCounter: 0,
};
function toggleBlockButtonsReducer(state = initialToggleState, action) {
  if (action.type === TOGGLE_BLOCK_BUTTONS) {
    const { clickCounter } = state;
    if (action.payload === "block") {
      return { ...state, isBlock: true, clickCounter: clickCounter + 1 };
    } else {
      return {
        ...state,
        isBlock: clickCounter - 1 !== 0,
        clickCounter: clickCounter - 1,
      };
    }
  }
  return state;
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  toggleBlockButtons: toggleBlockButtonsReducer,
});
