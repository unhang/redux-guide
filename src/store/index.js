import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: counterSlice.reducer,
  auth: authSlice.reducer
});

export default store;

export * from "./counterSlice";

// or you can define multiple reducer like this
// const store = configureStore({
//   reducers: {
//     auth: authSlice.reducer,
//     user: userSlice.reducer
//   }
// });
