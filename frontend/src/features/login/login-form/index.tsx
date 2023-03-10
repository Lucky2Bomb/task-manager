import React from "react";
import { UsernameField } from "./ui/username-field";
import { PasswordField } from "./ui/password-field";

export const LoginForm = () => {
  return (
    <>
      <UsernameField />
      <PasswordField />
    </>
  );
};
