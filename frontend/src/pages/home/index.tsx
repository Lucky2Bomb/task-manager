import { Box, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { TaskCard } from '@/entities/task/ui';
import Layout from '@/widget/layout';
import { Task } from '@/share/api/models';
import TaskCardModal from '@/entities/task/ui/task-modal';

const task: Task = {
    id: 1,
    name: "title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime omnis iste qui quidem commodi molestias modi quia reprehenderit beatae quod totam vero natus a, sit animi iure deserunt facilis.",
    duration: 600,
    deadline: new Date(new Date().setHours(new Date().getHours() + 16)),
    party_id: -1,
    status_id: -1,
    user_id: -1,
};

function Home() {
    const [open, setOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleSelect = (task: Task) => {
        setSelectedTask(task);
        setOpen(true);
    }

    return (
        <Layout>
            <Box>
                <Button variant="contained" startIcon={<AddIcon />}>
                    add task
                </Button>
            </Box>
            <TaskCard task={task} onClick={() => handleSelect(task)} />
            <TaskCard task={task} />
            <TaskCard task={task} />
            <TaskCard task={task} />
            <TaskCard task={task} />
            <TaskCardModal task={task} setOpen={setOpen} open={open} />
        </Layout>
    );
}

export default Home;