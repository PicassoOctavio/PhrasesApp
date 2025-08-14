import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Card } from "../Card/Card";
import type { PhraseI } from "../../interfaces/phrasesI";

import "./CardsGrid.css";

export const CardsGrid = () => {
  const { phrases } = useSelector((state) => state.phrases);
  return (
    <Box className="cards-grid">
      {phrases.map((phrase: PhraseI) => (
        <Card key={phrase.id} id={phrase.id} description={phrase.description} />
      ))}
    </Box>
  );
};
