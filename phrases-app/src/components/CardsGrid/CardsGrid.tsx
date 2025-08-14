import { Box } from "@mui/material";
import { Card } from "../Card/Card";
import { mockedData } from "../../data/mockedData";

import "./CardsGrid.css";

export const CardsGrid = () => {
  return (
    <Box className="cards-grid">
      {mockedData.map((item) => (
        <Card key={item.id} id={item.id} description={item.description} />
      ))}
    </Box>
  );
};
