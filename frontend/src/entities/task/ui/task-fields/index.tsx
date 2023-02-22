import { Task } from '@/share/api/models';
import { useInput } from '@/share/hooks';
import { Grid, TextField } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';

interface Props {
    task: Task;
    setTask?: (task: Task) => void;
}

function TaskFields({ task, setTask = (task) => {} }: Props) {
    const name = useInput(task.name);
    const description = useInput(task.description ?? "");
    const duration = useInput(task.duration ?? "");
    const deadline = useInput(task.deadline ? dayjs(task.deadline).format("YYYY-MM-DDTHH:mm") : "");

    useEffect(() => {
        setTimeout(() => {
            setTask({
                ...task,
                name: name.input.value,
                description: description.input.value,
                duration: +duration.input.value,
                deadline: new Date(deadline.input.value),
            });
        }, 500);
    }, [
        name.input.value, 
        description.input.value,
        duration.input.value, 
        deadline.input.value
    ]);

    return (
        <Grid container spacing={2} pb={2}>

            <Grid item xs={12}>
                <TextField
                    id="name"
                    label="name"
                    type="text"
                    {...name.input}
                    fullWidth
                />
            </Grid>

            <Grid item xs={12} sm={12}>
                <TextField
                    id="description"
                    label="description"
                    type="text"
                    {...description.input}
                    fullWidth
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    id="duration"
                    label="duration"
                    type="number"
                    {...duration.input}
                    fullWidth
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    id="deadline"
                    label="deadline"
                    type="datetime-local"
                    {...deadline.input}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
}

export default TaskFields;