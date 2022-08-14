import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from "./types";
export function rootReducer(state, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else if (action.type === ASYNC_INCREMENT) {
    // вызов асинхронной функции и возврат результата
    setTimeout(() => {
      return state + 1;
    }, 2000);
  }
  return state;
}
// https://youtu.be/YdYyYMFPa44?t=2964
// борьба с асинхронностью в Redux
