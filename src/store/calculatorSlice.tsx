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
        state.history.pop();
      }
      state.history.unshift(action.payload);
    },
    cleanExpression: (state) => {
      state.history = [];
    },
    clickExpressionItem: (state, { payload }) => {
      const temp = current(state.history)[payload];

      state.history.splice(payload, 1);
      state.history.unshift(temp);
    }
  },
  extraReducers: {},
});

export const { changeTheme, saveExpression, cleanExpression, clickExpressionItem } = calculatorSlice.actions;
export default calculatorSlice.reducer;
