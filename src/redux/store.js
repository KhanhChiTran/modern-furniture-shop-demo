import { createStore } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

export const store = createStore(todos, ["Use Redux"]);
