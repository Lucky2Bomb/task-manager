import { type Task } from "@/shared/api/models";
import { Box, Typography } from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { toTimeString } from "@/shared/utils";
import { BasicModal } from "@/shared/ui";

interface Props {
  task: Task;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const TaskCardModal = ({ task, open, setOpen }: Props): JSX.Element => {
  dayjs.extend(relativeTime);
  return (
    <BasicModal open={open} setOpen={setOpen} title={task.name}>
      <Typography
        variant="subtitle2"
        color="gray"
        pb={1}
        display="flex"
        justifyContent="space-between"
      >
        <Box component="span">{dayjs(task.deadline).fromNow()}</Box>
        <Box component="span">{toTimeString(task.duration)}</Box>
      </Typography>
      <Typography variant="subtitle1" color="text">
        {task.description}
      </Typography>
    </BasicModal>
  );
};
