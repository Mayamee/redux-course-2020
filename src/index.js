import "./styles.css";
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { decrement, increment, asyncIncrement } from "./redux/actions";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const themeBtn = document.getElementById("theme");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
//init
let store = createStore(rootReducer, 0);

//init
window.store = store;

addBtn.addEventListener("click", () => {
  store.dispatch(increment);
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

store.subscribe(() => console.log(store.getState()));
store.subscribe(() => (counter.innerText = store.getState()));
store.dispatch({ type: "__INIT__" });
