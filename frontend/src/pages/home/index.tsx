import Header from '@/widget/header';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

function Home() {
    return (
        <Header>
            <Button variant="contained" startIcon={<AddIcon />}>
                add task
            </Button>
        </Header>
    );
}

export default Home;