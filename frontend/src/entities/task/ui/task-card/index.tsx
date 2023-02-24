import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { toTimeString } from "@/shared/utils";
import { type Task } from "@/shared/api/models";

interface Props {
  task: Task;
  onClick?: () => void;
}

export const TaskCard = ({ task, onClick }: Props): JSX.Element => {
  dayjs.extend(relativeTime);
  return (
    <Card sx={{ cursor: "pointer" }} onClick={onClick}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {task.name}
        </Typography>
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
      </CardContent>
    </Card>
  );
};
