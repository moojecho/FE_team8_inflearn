import { combineReducers, configureStore } from "@reduxjs/toolkit";
import lecture from "./modules/lectureSlice";
import thunk from "redux-thunk";

const middlewares = [thunk];

const rootReducer = combineReducers({
  lecture,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
