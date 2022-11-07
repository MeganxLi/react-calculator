import { createSlice } from "@reduxjs/toolkit";

const initialState: stateType = {
  darkTheme: false,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
  extraReducers: {},
});

export const { changeTheme } = calculatorSlice.actions;
export default calculatorSlice.reducer;
