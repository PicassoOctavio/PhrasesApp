import { Container } from "@mui/material";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { CardsGrid } from "../components/CardsGrid/CardsGrid";
import { useState } from "react";
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";

export const PhrasesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ErrorBoundary onReset={() => setSearchTerm("")}>
        <CardsGrid searchText={searchTerm} />
      </ErrorBoundary>
    </Container>
  );
};
