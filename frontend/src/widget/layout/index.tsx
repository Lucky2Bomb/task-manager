import React, { useMemo } from "react";
import Header from "../header";
import { Box } from "@mui/material";
import GlobalLoader from "@/entities/global-loader/ui";
import { useGlobalLoadingStore } from "@/entities/global-loader/model";

interface Props {
  children: any;
  header?: string;
}

function Layout({ children, header }: Props) {
  const { loading } = useGlobalLoadingStore();

  useMemo(() => {
    // axiosInstance.interceptors.request.use((config) => {
    //   startLoading();
    //   return config;
    // });
    // axiosInstance.interceptors.response.use((config) => {
    //   stopLoading();
    //   return config;
    // });
  }, []);

  return (
    <Header header={header}>
      {loading !== 0 ? <GlobalLoader /> : null}
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        {children}
      </Box>
    </Header>
  );
}

export default Layout;
