import { useLoginStore } from "@/features/login/model";
import { useInputState } from "@/shared/hooks/useInputState";
import { TextField, type TextFieldProps } from "@mui/material";
import React from "react";

export const UsernameField = ({
  type = "text",
  placeholder = "username",
  fullWidth = true,
  ...props
}: TextFieldProps) => {
  const { username, setUsername } = useLoginStore();
  const { input } = useInputState(username, setUsername);
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      fullWidth={fullWidth}
      {...props}
      {...input}
    />
  );
};
