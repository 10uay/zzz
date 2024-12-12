import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postsSlice from "./post/postsSlice.js";
import themeSlice from "./theme/themeSlice.js";
import userSlice from "./user/userSlice.js";
import { createTransform } from "redux-persist";

// this used to stop persist/REHYDRATE because it changes init values of vars onload
// Custom transform to always return an empty state
const skipRehydrationTransform = createTransform(
  // Transform state on its way to being serialized and persisted.
  (inboundState, key) => inboundState,
  // Transform state being rehydrated
  (outboundState, key) => ({})
);

const rootReducer = combineReducers({
  posts: postsSlice,
  theme: themeSlice,
  user: userSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  transforms: [skipRehydrationTransform], // Apply the custom transform
};

const persistedReducer = persistReducer(persistConfig, rootReducer);





export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
