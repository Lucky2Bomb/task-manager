import { axiosInstance } from "@/shared/api/base";
import { Button, type ButtonProps, CircularProgress } from "@mui/material";
import React from "react";
import { useMutation, useQuery } from "react-query";

export const LoginButton = ({
  startIcon = <CircularProgress color="inherit" size="20px" />,
  variant = "contained",
  fullWidth = true,
  ...props
}: ButtonProps) => {
  const { isLoading, data, mutate } = useMutation({
    mutationFn: async () =>
      await axiosInstance<{
        user: {
          id: number;
          username: string;
        };
        token: string;
      }>("/login", {
        method: "POST",
      }).then((res) => res.data),
  });
  return (
    <Button
      startIcon={isLoading ? startIcon : null}
      variant={variant}
      fullWidth={fullWidth}
      {...props}
      onClick={() => {
        mutate();
      }}
    >
      Login
    </Button>
  );
};
