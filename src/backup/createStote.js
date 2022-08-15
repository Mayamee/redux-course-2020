export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: "__INIT__" });
  // state меняется через reducer
  const subscribers = [];
  // subscribers - массив подписчиков
  return {
    //action - действие action - объект со свойством type
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((callback) => callback());
    },
    subscribe(callback) {
      // callback - функция, которая будет вызвана при dispatch
      subscribers.push(callback);
    },
    // возвращает текущее состояние
    getState() {
      return state;
    },
  };
}
