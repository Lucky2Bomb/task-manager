import Routing from "@/pages";
import { SnackbarConfigurator } from "@/shared/ui";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = (): JSX.Element => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={5}>
        <CssBaseline />
        <Routing />
        <SnackbarConfigurator />
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
