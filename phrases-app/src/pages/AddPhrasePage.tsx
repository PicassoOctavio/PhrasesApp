import {
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { validatePhrase } from "../helpers/validator";

export const AddPhrasePage = () => {
  const { phrase, onInputChange } = useForm({ phrase: "" });
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validatePhrase(phrase)) {
      setError(true);
      return;
    }

    setError(false);
    console.log(phrase);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 900,
        height: 700,
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
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
