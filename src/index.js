import "./styles.css";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { decrement, increment, asyncIncrement } from "./redux/actions";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const themeBtn = document.getElementById("theme");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
//init
let store = createStore(rootReducer, 42, applyMiddleware(thunk, logger));

//init
window.store = store;

// function logger(state) {
//   return function (next) {
//     return function (action) {
//       console.log("[logger] dispatch action", action);
//       const result = next(action);
//       console.log("[logger] next state", store.getState());
//       return result;
//     };
//   };
// }

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});
subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

store.subscribe(() => (counter.innerText = store.getState()));
store.dispatch({ type: "__INIT__" });
