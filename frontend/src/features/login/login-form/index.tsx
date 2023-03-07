import { Box, type BoxProps } from "@mui/material";
import React from "react";
import { UsernameField } from "./ui/username-field";
import { PasswordField } from "./ui/password-field";

export const LoginForm = ({
  width = "100%",
  display = "flex",
  flexDirection = "column",
  gap = 2,
  ...props
}: BoxProps) => {
  return (
    <Box
      width={width}
      display={display}
      flexDirection={flexDirection}
      gap={gap}
      {...props}
    >
      <UsernameField />
      <PasswordField />
    </Box>
  );
};
