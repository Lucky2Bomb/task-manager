import { axiosInstance } from "@/shared/api/base";
import { routes } from "@/shared/config/routes";
import { useKeydownEvent } from "@/shared/hooks/useKeydownEvent";
import { Button, type ButtonProps, CircularProgress } from "@mui/material";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../model";

export const LoginButton = ({
  startIcon = <CircularProgress color="inherit" size="20px" />,
  variant = "contained",
  fullWidth = true,
  ...props
}: ButtonProps) => {
  const navigate = useNavigate();
  const { username, password } = useLoginStore();
  const { isLoading, mutate } = useMutation({
    mutationFn: async () => {
      await axiosInstance<{
        user: {
          id: number;
          username: string;
        };
        token: string;
      }>("/login", {
        method: "POST",
        data: {
          username,
          password,
        },
      })
        .then((res) => {
          localStorage.setItem("access", res.data.token);
          return res.data;
        })
        .then(() => {
          navigate(routes.LOGIN);
        });
    },
  });

  const onKeydownEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      mutate();
    }
  };

  useKeydownEvent(onKeydownEnter);

  return (
    <Button
      startIcon={isLoading ? startIcon : null}
      variant={variant}
      fullWidth={fullWidth}
      {...props}
      onClick={() => {
        mutate();
      }}
      disabled={username.length < 3 || password.length < 3}
    >
      login
    </Button>
  );
};
