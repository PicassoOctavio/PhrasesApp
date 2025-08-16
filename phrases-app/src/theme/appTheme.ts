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
      secondary: "#555555",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "background-color 0.3s ease",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#8ca8db", // Un poco más oscuro para hover
          },
        },
        containedSecondary: {
          "&:hover": {
            backgroundColor: "#eaaed8", // Rosa más intenso en hover
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            backgroundColor: "rgba(255,255,255,0.9)",
          },
        },
      },
    },
  },
});

export default theme;
