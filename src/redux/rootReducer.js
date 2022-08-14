export function rootReducer(state, action) {
  if (action.type === "add") {
    return state + 1;
  } else if (action.type === "sub") {
    return state - 1;
  }
  return state;
}
