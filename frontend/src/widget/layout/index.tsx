import React from "react";
import Header from "../header";
import { Box } from "@mui/material";
import GlobalLoader from "@/entities/global-loader/ui";

interface Props {
  children: any;
  header?: string;
}

function Layout({ children, header }: Props) {
  return (
    <Header header={header}>
      <GlobalLoader />
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        {children}
      </Box>
    </Header>
  );
}

export default Layout;
