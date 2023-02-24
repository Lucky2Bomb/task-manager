import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

function GlobalLoader(): JSX.Element {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      p={0}
      m={0}
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="10000"
    >
      <Box
        sx={{
          opacity: 0.5,
          bgcolor: "white",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      ></Box>
      <CircularProgress />
    </Box>
  );
}

export default GlobalLoader;
