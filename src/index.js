import "./styles.css";
import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./redux/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {
  decrement,
  increment,
  asyncIncrement,
  changeTheme,
} from "./redux/actions";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const themeBtn = document.getElementById("theme");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
//init
let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
//init

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});
subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});
themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch(changeTheme(newTheme));
});
asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

store.subscribe(() => {
  const currentState = store.getState();
  counter.innerText = currentState.counter;
  document.body.className = currentState.theme.value;
  addBtn.disabled = currentState.toggleBlockButtons.isBlock;
  subBtn.disabled = currentState.toggleBlockButtons.isBlock;
  themeBtn.disabled = currentState.toggleBlockButtons.isBlock;
});

store.dispatch({ type: "__INIT__" });
