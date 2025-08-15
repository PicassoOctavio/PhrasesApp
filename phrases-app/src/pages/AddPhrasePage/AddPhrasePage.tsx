import {
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { validatePhrase } from "../../helpers/validator";
import { useDispatch } from "react-redux";
import { addNewPhrase } from "../../store/phrasesSlice";
import { Link, useNavigate } from "react-router";

export const AddPhrasePage = () => {
  const { phrase, onInputChange } = useForm({ phrase: "" });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validatePhrase(phrase)) {
      setError(true);
      return;
    }

    setError(false);

    dispatch(
      addNewPhrase({
        id: crypto.randomUUID(),
        description: phrase,
      })
    );
    navigate("/");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 900,
        height: 700,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        minHeight: "100vh",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 1,
          paddingRight: 4,
          borderRadius: 5,
          "&:hover": {
            backgroundColor: "#e7e7e7",
          },
        }}
      >
        <ArrowBack />
        <Typography variant="h5">Volver</Typography>
      </Link>
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          width: "100%",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Crear tu propia frase
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            name="phrase"
            value={phrase}
            onChange={onInputChange}
            fullWidth
            placeholder="¿Qué te inspira?"
            multiline
            rows={5}
            error={error}
            helperText={
              error ? "La frase no puede superar los 200 caracteres" : ""
            }
          />
          <Button type="submit" variant="contained" size="large">
            Crear
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
