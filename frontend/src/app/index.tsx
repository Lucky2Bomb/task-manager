import Routing from "@/pages";
import { CssBaseline } from "@mui/material";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = (): JSX.Element => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Routing />
    </QueryClientProvider>
  </React.StrictMode>
);
