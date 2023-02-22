import { Task } from '@/share/api/models';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { toTimeString } from '@/share/utils';
import { BasicModal, BasicModalProps } from '@/share/ui';

interface Props extends BasicModalProps {
    task: Task;
}

function TaskCardModal({ task, open, setOpen }: Props) {
    dayjs.extend(relativeTime);
    return (
        <BasicModal open={open} setOpen={setOpen} title={task.name}>
            <Typography variant="subtitle2" color="gray" pb={1} display="flex" justifyContent="space-between">
                <Box component="span">{dayjs(task.deadline).fromNow()}</Box>
                <Box component="span">{toTimeString(task.duration)}</Box>
            </Typography>
            <Typography variant="subtitle1" color="text">
                {task.description}
            </Typography>
            <Box display="flex" pt={2}>
                <Button variant="contained">edit</Button>
            </Box>
        </BasicModal>
    );
}

export default TaskCardModal;