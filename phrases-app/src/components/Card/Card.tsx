import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

import "./Card.css";

interface CardProps {
  id: number;
  description: string;
}

export const Card = ({ id, description }: CardProps) => {
  const handleDelete = () => {
    console.log({ id });
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
