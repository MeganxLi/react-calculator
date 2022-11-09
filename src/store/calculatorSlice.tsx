import { createSlice, current } from "@reduxjs/toolkit";

const initialState: stateType = {
  darkTheme: false,
  history: [] as historyType[],
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    saveExpression: (state, action) => {
      // redux current 拷貝
      if (current(state.history).length > 10) {
        state.history.shift();
      }
      state.history.push(action.payload);
    },
  },
  extraReducers: {},
});

export const { changeTheme, saveExpression } = calculatorSlice.actions;
export default calculatorSlice.reducer;
