import type { ChangeEvent } from "react";
import {
  Container,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";

import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

const formField = {
  search: "",
};

interface SearchBarProps {
  setSearchTerm: (value: string) => void;
}

export const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  const { search, onInputChange } = useForm(formField);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    onInputChange(event);
    setSearchTerm(value);
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

      <Link to="/crear" className="create-link">
        <Typography>Crear una frase</Typography>
      </Link>
    </Container>
  );
};
