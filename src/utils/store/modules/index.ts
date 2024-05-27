import { combineReducers } from "@reduxjs/toolkit/react";
import toastReducer from "./toast";

const rootReducer = combineReducers({
  toast: toastReducer,
});

export default rootReducer;
