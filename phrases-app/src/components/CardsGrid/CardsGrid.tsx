import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Card } from "../Card/Card";
import type { PhraseI } from "../../interfaces/phrasesI";

import "./CardsGrid.css";

interface CardsGridProps {
  searchText?: string;
}

export const CardsGrid = ({ searchText = "" }: CardsGridProps) => {
  const { phrases } = useSelector((state) => state.phrases);

  const filteredPhrases = phrases.filter((phrase: PhraseI) =>
    phrase.description.toLowerCase().includes(searchText.toLowerCase())
  );

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
