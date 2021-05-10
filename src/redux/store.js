import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
