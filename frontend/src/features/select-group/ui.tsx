import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function SelectGroup() {
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="grouped-select">select group</InputLabel>
            <Select defaultValue={3} id="grouped-select" label="Grouping">
                <MenuItem value={1}>Group 1</MenuItem>
                <MenuItem value={2}>Group 2</MenuItem>
                <MenuItem value={3}>Group 3</MenuItem>
                <MenuItem value={4}>Group 4</MenuItem>
            </Select>
        </FormControl>
    );
}