import { INCREMENT, DECREMENT } from "./types";
export function rootReducer(state, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
}
// https://youtu.be/YdYyYMFPa44?t=2964
// работа с асинхронностью в Redux
