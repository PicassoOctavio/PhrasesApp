import type { ChangeEvent } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Container,
  TextField,
  Typography,
  InputAdornment,
  useTheme,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";

import "./SearchBar.css";

const formField = {
  search: "",
};

interface SearchBarProps {
  setSearchTerm: (value: string) => void;
}

export const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  const { search, onInputChange } = useForm(formField);
  const theme = useTheme();

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
        sx={{
          "& .MuiOutlinedInput-input": {
            backgroundColor: "white", // mantiene fondo blanco
          },
          color: theme.palette.text.primary,
          fontWeight: "bold",
          fontSize: "16px",
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  color: "white",
                }}
              >
                <Search />
              </InputAdornment>
            ),
          },
        }}
      />

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="create-link"
      >
        <Link to="/crear" className="link-button">
          <Typography>Crear una frase</Typography>
        </Link>
      </motion.div>
    </Container>
  );
};
