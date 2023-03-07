import { useLoginStore } from "@/features/login/model";
import { useInputState } from "@/shared/hooks/useInputState";
import { TextField, type TextFieldProps } from "@mui/material";
import React from "react";

export const PasswordField = ({
  type = "password",
  placeholder = "password",
  fullWidth = true,
  ...props
}: TextFieldProps) => {
  const { password, setPassword } = useLoginStore();
  const { input } = useInputState(password, setPassword);
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
