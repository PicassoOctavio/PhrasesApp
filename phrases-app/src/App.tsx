import { Container } from "@mui/material";
import { AppRouter } from "./router/Router";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <Container className="app-contianer">
      <AppRouter />

      <Footer />
    </Container>
  );
};
