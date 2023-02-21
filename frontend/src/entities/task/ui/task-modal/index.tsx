import { Task } from '@/share/api/models';
import { Box, Typography } from '@mui/material';
import React from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { toTimeString } from '@/share/utils';
import { BasicModal, BasicModalProps } from '@/share/ui';

interface Props extends Task, BasicModalProps {}

function TaskCardModal({ name, deadline, description, duration, open, setOpen }: Props) {
    dayjs.extend(relativeTime);
    return (
        <BasicModal open={open} setOpen={setOpen} title={name}>
            <Typography variant="subtitle2" color="gray" pb={1} display="flex" justifyContent="space-between">
                <Box component="span">{dayjs(deadline).fromNow()}</Box>
                <Box component="span">{toTimeString(duration)}</Box>
            </Typography>
            <Typography variant="subtitle1" color="text">
                {description}
            </Typography>
        </BasicModal>
    );
}

export default TaskCardModal;