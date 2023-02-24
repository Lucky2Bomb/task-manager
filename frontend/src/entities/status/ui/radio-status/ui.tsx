import React from "react";
import FormControl from "@mui/material/FormControl";
import { useQuery } from "react-query";
import { axiosInstance } from "@/shared/api/base";
import { type Status } from "@/shared/api/models";
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Skeleton,
} from "@mui/material";

interface Props {
  value: number;
  setValue: (id: number) => void;
}

function RadioStatus({ value, setValue }: Props): JSX.Element {
  const { isLoading, data } = useQuery("statuses-of-task", async () => {
    const res = await axiosInstance<{ data: Status[] }>("/status", {
      method: "GET",
    });
    return res.data.data;
  });

  if (isLoading || typeof data === "undefined") {
    return <>is loading...</>;
  }

  const items =
    isLoading || typeof data === "undefined" ? (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    ) : (
      data.map((item) => (
        <FormControlLabel
          key={`${item.id}_${item.name}`}
          value={item.id}
          label={item.name}
          control={<Radio />}
        />
      ))
    );

  return (
    <FormControl sx={{ m: 1 }}>
      <FormLabel id="radio-status-label">Status</FormLabel>
      <RadioGroup
        value={value}
        onChange={(e) => {
          setValue(+e.target.value);
        }}
        aria-labelledby="radio-status-label"
      >
        {items}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioStatus;
