import { describe, it, expect } from "vitest";
import {
  phrasesSlice,
  addNewPhrase,
  deletePhrase,
} from "../src/store/phrasesSlice";
import { mockedData } from "../src/data/mockedData";

describe("phrasesSlice reducer", () => {
  it("should return initial state", () => {
    expect(phrasesSlice.reducer(undefined, { type: "unknown" })).toEqual({
      phrases: mockedData,
      isLoading: true,
    });
  });

  it("should add a new phrase", () => {
    const newPhrase = { id: "123", description: "Nueva frase" };
    const state = phrasesSlice.reducer(
      { phrases: [], isLoading: false },
      addNewPhrase(newPhrase)
    );
    expect(state.phrases[0]).toEqual(newPhrase);
  });

  it("should delete a phrase", () => {
    const initial = {
      phrases: [{ id: "abc", description: "Hola" }],
      isLoading: false,
    };
    const state = phrasesSlice.reducer(initial, deletePhrase("abc"));
    expect(state.phrases).toHaveLength(0);
  });
});
