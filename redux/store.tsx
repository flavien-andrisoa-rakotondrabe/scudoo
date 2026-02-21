"use client";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import utilsSlice from "@/redux/slices/utilsSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

const createNoopStorage = (): {
  getItem: () => Promise<null>;
  setItem: () => Promise<null>;
  removeItem: () => Promise<null>;
} => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve(null);
    },
    removeItem() {
      return Promise.resolve(null);
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["utils"],
};

const rootReducer = combineReducers({
  utils: utilsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export default store;
export { persistor };
