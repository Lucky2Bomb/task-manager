import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SelectParty = (): JSX.Element => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel htmlFor="party-select">select party</InputLabel>
      <Select defaultValue={3} id="party-select" label="Party">
        <MenuItem value={1}>Party 1</MenuItem>
        <MenuItem value={2}>Party 2</MenuItem>
        <MenuItem value={3}>Party 3</MenuItem>
        <MenuItem value={4}>Party 4</MenuItem>
      </Select>
    </FormControl>
  );
};
