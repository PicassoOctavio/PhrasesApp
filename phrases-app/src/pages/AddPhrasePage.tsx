import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useForm } from "../hooks/useForm";
import { validatePhrase } from "../helpers/validator";
import { addNewPhrase } from "../store/phrasesSlice";
import theme from "../theme/appTheme";

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

    dispatch(
      addNewPhrase({
        id: crypto.randomUUID(),
        description: phrase,
      })
    );

    setError(false);
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
        marginTop: 10,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={{
          padding: 5,
          marginBottom: 20,
        }}
      >
        <Link
          to="/"
          className="back-button"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 1,
            paddingRight: 4,
            borderRadius: 5,
          }}
        >
          <ArrowBack
            sx={{ color: theme.palette.text.secondary, marginRight: 1 }}
          />
          <Typography variant="h5" color="text.secondary">
            Volver
          </Typography>
        </Link>
      </motion.div>

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
            aria-label="add-input"
            value={phrase}
            onChange={onInputChange}
            fullWidth
            placeholder="¿Qué te inspira?"
            multiline
            rows={5}
            error={error}
            helperText={
              error
                ? "La frase debe tener más de 5 caracteres y menos de 200 caracteres."
                : ""
            }
          />
          <motion.div whileHover={{ scale: 1.11 }} whileTap={{ scale: 0.8 }}>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Crear
            </Button>
          </motion.div>
        </Box>
      </Paper>
    </Container>
  );
};
