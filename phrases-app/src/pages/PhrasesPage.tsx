import { Container } from "@mui/material";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { CardsGrid } from "../components/CardsGrid/CardsGrid";

export const PhrasesPage = () => {
  return (
    <Container>
      <SearchBar />
      <CardsGrid />
    </Container>
  );
};
