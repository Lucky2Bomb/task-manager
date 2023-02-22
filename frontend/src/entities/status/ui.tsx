import { Status } from '@/share/api/models';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

interface Props {
    list: Status[];
    value: Status;
    setValue: (value: Status) => void;
}

function SelectStatus({ list }: Props) {
    return (
        <FormControl fullWidth>
            <Select
                labelId="status-select-label"
                id="status-simple-select"
                label="status"
            >
                {list.map(item => <MenuItem value={item.id}>{item.name}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

export default SelectStatus;