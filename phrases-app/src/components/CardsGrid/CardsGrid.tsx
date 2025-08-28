import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Card } from "../Card/Card";
import type { PhraseI } from "../../interfaces/phrasesI";

import "./CardsGrid.css";
import { useMemo } from "react";
import { escapeRegExp } from "../../helpers/validator";

interface CardsGridProps {
  searchText?: string;
}

export const CardsGrid = ({ searchText = "" }: CardsGridProps) => {
  const { phrases } = useSelector((state) => state.phrases);

  const regex = useMemo(() => {
    if (!searchText) return null;
    try {
      return new RegExp(escapeRegExp(searchText), "i");
    } catch {
      return null;
    }
  }, [searchText]);

  const filteredPhrases = useMemo(() => {
    if (!regex) return phrases;
    return phrases.filter((phrase: PhraseI) => regex.test(phrase.description));
  }, [phrases, regex]);

  return (
    <Box className="cards-grid">
      {searchText
        ? filteredPhrases.map((phrase: PhraseI) => (
            <Card
              key={phrase.id}
              id={phrase.id}
              description={phrase.description}
            />
          ))
        : phrases.map((phrase: PhraseI) => (
            <Card
              key={phrase.id}
              id={phrase.id}
              description={phrase.description}
            />
          ))}
    </Box>
  );
};
