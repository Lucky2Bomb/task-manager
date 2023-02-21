import React from 'react';
import Header from '../header';
import { Box, Grid } from '@mui/material';

interface Props {
    children: any;
    header?: string;
}

function Layout({ children, header }: Props) {
    return (
        <Header header={header}>
            <Box display="flex" flexDirection="column" gap={2} p={2}>
                {children}
            </Box>
        </Header>
    );
}

export default Layout;