import { Container } from "@mui/material";
import { AppRouter } from "./router/Router";

export const App = () => {
  return (
    <Container className="app-contianer">
      <AppRouter />
    </Container>
  );
};
