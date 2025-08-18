import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#cbbff5", // Lila claro
      main: "#a6c1ee", // Azul suave del gradiente
      dark: "#7a92ba",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffd6f1", // Rosa pastel suave
      main: "#fbc2eb", // Rosa del gradiente
      dark: "#c890b8",
      contrastText: "#4a4a4a",
    },
    background: {
      default: "#fafafa", // Fondo general
      paper: "rgba(255,255,255,0.8)", // Cards translúcidas
    },
    text: {
      primary: "#000000ff",
      secondary: "#ffffffff",
    },
  },
});

export default theme;
