import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  email: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true
      state.email = action.payload.email
    },
    logout(state) {
      return (state.isAuthenticated = false);
    }
  }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
