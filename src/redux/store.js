import { combineReducers, configureStore } from "@reduxjs/toolkit";
import lecture from "./modules/lectureSlice";
import thunk from "redux-thunk";
import user from "./modules/user";

const middlewares = [thunk];

const rootReducer = combineReducers({
  lecture,
  user,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
