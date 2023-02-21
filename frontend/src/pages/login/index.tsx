import { Container, TextField } from '@mui/material';
import React from 'react';

function Login() {
    return (
        <Container>
            <TextField type="text" placeholder="login" />
            <TextField type="password" placeholder="password" />
        </Container>
    );
}

export default Login;