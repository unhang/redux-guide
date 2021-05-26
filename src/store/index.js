import { configureStore, createSlice } from "@reduxjs/toolkit";

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

// export const { increase, increment, decrement, toggleCounter } = counterSlice.actions;
// or
export const counterActions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;

// or you can define multiple reducer like this
// const store = configureStore({
//   reducers: {
//     auth: authSlice.reducer,
//     user: userSlice.reducer
//   }
// });
