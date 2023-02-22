import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useQuery } from 'react-query';
import { API_HOST } from '@/share/config';
import { axiosInstance } from '@/share/api/base';
import { Status } from '@/share/api/models';

interface Props {
    value: number;
    setValue: (id: number) => void;
}

function SelectStatus({ value, setValue }: Props) {
    const { isLoading, error, data } = useQuery('listOfStatus', () => axiosInstance<{data: Status[]}>("/status", {
        method: "GET"
    }).then(res => res.data.data));

    if (isLoading || typeof data === "undefined") {
        return <>is loading...</>;
    }

    return (
        <FormControl fullWidth>
            <InputLabel htmlFor="select-status">select status</InputLabel>
            <Select id="select-status" label="Status" value={value} onChange={(e) => setValue(+e.target.value)}>
                {data.map(item => (
                <MenuItem key={`${item.id}_${item.name}`} value={item.id}>
                    {item.name}
                </MenuItem>))}
            </Select>
        </FormControl>
    );
}

export default SelectStatus;