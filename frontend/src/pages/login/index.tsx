import { LoginForm } from "@/features/login";
import { LoginButton } from "@/features/login/login-button";
import Layout from "@/widget/layout";
import { Container } from "@mui/material";
import React from "react";

function Login(): JSX.Element {
  return (
    <Layout>
      <Container maxWidth="xs">
        <LoginForm />
        <LoginButton />
      </Container>
    </Layout>
  );
}

export default Login;
