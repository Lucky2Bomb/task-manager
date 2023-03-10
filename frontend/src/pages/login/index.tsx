import { LoginForm } from "@/features/login";
import { LoginButton } from "@/features/login/login-button";
import Layout from "@/widget/layout";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

function LoginPage(): JSX.Element {
  return (
    <Layout>
      <Container maxWidth="xs">
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h3" fontWeight={800} textAlign="center">
            Sign in
          </Typography>

          <LoginForm />
          <LoginButton />
        </Box>
      </Container>
    </Layout>
  );
}

export default LoginPage;
