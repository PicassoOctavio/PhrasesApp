import { useDeferredValue, useEffect, type ChangeEvent } from "react";
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

  const deferredValue = useDeferredValue(search);

  useEffect(() => {
    const idTimer = setTimeout(() => {
      if (deferredValue.length >= 3) {
        setSearchTerm(deferredValue);
      }
    }, 500);

    return () => clearTimeout(idTimer);
  }, [deferredValue, setSearchTerm]);

  return (
    <Container className="searchbar-content">
      <TextField
        name="search"
        value={search}
        onChange={onInputChange}
        variant="outlined"
        type="text"
        label="Buscar"
        placeholder="Buscar por palabras"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-input": {
            backgroundColor: "white",
          },
          color: theme.palette.text.primary,
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
