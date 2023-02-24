import { axiosInstance } from "@/shared/api/base";
import { type Type } from "@/shared/api/models";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";

interface Props {
  value: number;
  setValue: (id: number) => void;
}

function SelectType({ value, setValue }: Props) {
  const { isLoading, data } = useQuery(
    "types-of-thing",
    async () =>
      await axiosInstance<{ data: Type[] }>("/type", {
        method: "GET",
      }).then((res) => res.data.data),
  );

  if (isLoading || typeof data === "undefined") {
    return <>is loading...</>;
  }

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="select-status">select type</InputLabel>
      <Select
        id="select-status"
        label="status"
        value={value}
        onChange={(e) => {
          setValue(+e.target.value);
        }}
      >
        {data.map((item) => (
          <MenuItem key={`${item.id}_${item.name}`} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectType;
