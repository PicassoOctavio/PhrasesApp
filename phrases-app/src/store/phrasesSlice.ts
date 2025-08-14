import { createSlice } from "@reduxjs/toolkit";
import { mockedData } from "../data/mockedData";

export const phrasesSlice = createSlice({
  name: "phrases",
  initialState: {
    allPhrases: mockedData,
    phrases: mockedData,
    isLoading: true,
  },
  reducers: {
    addNewPhrase: (state, { payload }) => {
      state.phrases.push(payload);
    },
    deletePhrase: (state, { payload }) => {
      state.phrases = state.phrases.filter((phrase) => phrase.id !== payload);
    },
    getFilteredPhrases: (state, { payload }) => {
      const searchTerm = payload.trim().toLowerCase();

      if (searchTerm === "") {
        // si no hay búsqueda, mostrar todo
        state.phrases = state.allPhrases;
      } else {
        state.phrases = state.allPhrases.filter((p) =>
          p.description.toLowerCase().includes(searchTerm)
        );
      }
    },
  },
});

export const { addNewPhrase, deletePhrase, getFilteredPhrases } =
  phrasesSlice.actions;
