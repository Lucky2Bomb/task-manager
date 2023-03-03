import React from "react";
import FormControl from "@mui/material/FormControl";
import { useQuery } from "react-query";
import { axiosInstance } from "@/shared/api/base";
import { type Status } from "@/shared/api/models";
import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import SkeletonList from "@/shared/ui/skeleton-list";

interface Props {
  value: number;
  setValue: (id: number) => void;
}

function RadioStatus({ value, setValue }: Props): JSX.Element {
  const { isLoading, data } = useQuery("statuses-of-task", async () => {
    const res = await axiosInstance<{ results: Status[] }>("/status", {
      method: "GET",
    });
    return res.data.results;
  });

  if (isLoading || typeof data === "undefined") {
    return (
      <Box display="grid" rowGap={2}>
        <SkeletonList count={3} height={30} />
      </Box>
    );
  }

  const items = data.map((item) => (
    <FormControlLabel
      key={`${item.id}_${item.name}`}
      value={item.id}
      label={item.name}
      control={<Radio />}
    />
  ));

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
