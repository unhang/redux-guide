import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      console.log(action);
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const counterReducer = counterSlice.reducer;
const counterActions = counterSlice.actions;
// export const { increase, increment, decrement, toggleCounter } = counterSlice.actions;
// or
// export const counterActions = counterSlice.actions;

export { counterReducer, counterActions };
