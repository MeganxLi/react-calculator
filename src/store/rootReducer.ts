import { combineReducers } from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorSlice";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export default rootReducer;
