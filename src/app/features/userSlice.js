import { createSlice } from "@reduxjs/toolkit";
const initialState = { user: null, authReady: false, isPanding: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state, { payload }) => {
      state.user = null;
    },
    authReadyAct: (state) => {
      state.authReady = true;
    },
    setIsPanding: (state, { payload }) => {
      state.isPanding = payload;
    },
  },
});

export const { login, logout, authReadyAct, setIsPanding } = userSlice.actions;
export default userSlice.reducer;
