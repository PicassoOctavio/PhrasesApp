import type { ChangeEvent } from "react";
import {
  Container,
  TextField,
  Typography,
  Link,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";

import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { getFilteredPhrases } from "../../store/phrasesSlice";

const formField = {
  search: "",
};
export const SearchBar = () => {
  const { search, onInputChange } = useForm(formField);
  const dispatch = useDispatch();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event);
    dispatch(getFilteredPhrases(search));
  };

  return (
    <Container className="searchbar-content">
      <TextField
        name="search"
        value={search}
        onChange={handleSearch}
        variant="outlined"
        type="text"
        label="Buscar"
        placeholder="Buscar por palabras"
        fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          },
        }}
      />

      <Link href="/crear" className="create-link">
        <Typography>Crear una frase</Typography>
      </Link>
    </Container>
  );
};
