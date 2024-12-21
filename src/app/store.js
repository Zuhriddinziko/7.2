import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["user.user"], // Ignore specific paths
        ignoredActions: ["user/login", "user/authReadyAct"], // Ignore specific actions
      },
    }),
});
