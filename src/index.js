import "./styles.css";
import { createStore } from "./redux/createStote";
import { rootReducer } from "./redux/rootReducer";

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
  store.dispatch({ type: "add" });
});
subBtn.addEventListener("click", () => {
  store.dispatch({ type: "sub" });
});
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
asyncBtn.addEventListener("click", () => {});

store.subscribe(() => console.log(store.getState()));
store.subscribe(() => (counter.innerText = store.getState()));
store.dispatch({ type: "__INIT__" });
