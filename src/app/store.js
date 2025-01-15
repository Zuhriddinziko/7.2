import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import themeSlice from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["user.user"], // Ignore specific paths
        ignoredActions: ["user/login", "user/authReadyAct"], // Ignore specific actions
      },
    }),
});
