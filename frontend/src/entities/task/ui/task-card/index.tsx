import { toTimeString } from '@/share/utils';
import { Box, Card, CardContent, CardProps, Typography } from '@mui/material';
import React from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Task } from '@/share/api/models';


interface Props extends CardProps {
    task: Task;
}

export const TaskCard = ({ task, ...props }: Props) => {
    dayjs.extend(relativeTime);
    return (
        <Card {...props} sx={{ width: "100%", p: 1 }}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {task.name}
                </Typography>
                <Typography variant="subtitle2" color="gray" pb={1} display="flex" justifyContent="space-between">
                    <Box component="span">{dayjs(task.deadline).fromNow()}</Box>
                    <Box component="span">{toTimeString(task.duration)}</Box>
                </Typography>
                <Typography variant="subtitle1" color="text">
                    {task.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
