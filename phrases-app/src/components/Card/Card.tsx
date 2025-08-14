import { useDispatch } from "react-redux";
import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { deletePhrase } from "../../store/phrasesSlice";

import "./Card.css";

interface CardProps {
  id: number;
  description: string;
}

export const Card = ({ id, description }: CardProps) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePhrase(id));
  };

  return (
    <Box className="card">
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "black",
          width: 2,
          height: 2,
          "&:hover": {
            bgcolor: "white",
            width: 2,
            height: 2,
            borderRadius: 100,
          },
        }}
        onClick={handleDelete}
      >
        <Close />
      </IconButton>
      <Typography variant="h6">{description}</Typography>
    </Box>
  );
};
