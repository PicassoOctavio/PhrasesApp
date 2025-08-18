import { Box, Typography } from "@mui/material";

import "./Footer.css";

export const Footer = () => {
  return (
    <Box component="footer" className="footer-container" color="text.secondary">
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} - App de Frases
      </Typography>
    </Box>
  );
};
