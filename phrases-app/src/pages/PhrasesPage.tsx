import { Container } from "@mui/material";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { CardsGrid } from "../components/CardsGrid/CardsGrid";
import { useState } from "react";

export const PhrasesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container>
      <SearchBar setSearchTerm={setSearchTerm} />
      <CardsGrid searchText={searchTerm} />
    </Container>
  );
};
