import { createSlice } from "@reduxjs/toolkit";

const initialState: stateType = {
  theme: "Light",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default calculatorSlice.reducer;
