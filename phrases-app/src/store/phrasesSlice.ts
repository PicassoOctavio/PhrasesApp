import { createSlice } from "@reduxjs/toolkit";
import { mockedData } from "../data/mockedData";

export const phrasesSlice = createSlice({
  name: "phrases",
  initialState: {
    phrases: mockedData,
    isLoading: true,
  },
  reducers: {
    addNewPhrase: (state, { payload }) => {
      state.phrases.push(payload);
    },
    deletePhrase: (state, { payload }) => {
      state.phrases.filter((phrase) => phrase.id !== payload.id);
    },
  },
});

export const { addNewPhrase, deletePhrase } = phrasesSlice.actions;
