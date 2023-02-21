import Routing from "@/pages";
import { Button, CssBaseline } from "@mui/material";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

export const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Routing />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
