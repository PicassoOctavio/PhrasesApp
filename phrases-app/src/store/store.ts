import { configureStore } from "@reduxjs/toolkit";
import { phrasesSlice } from "./phrasesSlice";

export const store = configureStore({
  reducer: {
    phrases: phrasesSlice.reducer,
  },
});
