import type { FallbackProps } from "react-error-boundary";
import {
  ErrorBoundary as ReactErrorBoundary,
  type ErrorBoundaryProps as ReactErrorBoundaryProps,
} from "react-error-boundary";
import { Button, Container, Typography } from "@mui/material";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" color="error">
        Ocurrió un error inesperado
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {error.message}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={resetErrorBoundary}
        sx={{ mt: 2 }}
      >
        Reintentar
      </Button>
    </Container>
  );
};

type Props = Omit<
  ReactErrorBoundaryProps,
  "fallbackRender" | "FallbackComponent" | "fallback"
> & {
  children: React.ReactNode;
};

export const ErrorBoundary = ({ children, ...props }: Props) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} {...props}>
      {children}
    </ReactErrorBoundary>
  );
};
