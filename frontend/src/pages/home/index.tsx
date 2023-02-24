import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import Layout from "@/widget/layout";
import { type Task } from "@/shared/api/models";
import { useTaskModalStore } from "@/widget/change-task-modal/model";
import TaskModal from "@/widget/change-task-modal/ui";
import { useQuery } from "react-query";
import { axiosInstance } from "@/shared/api/base";
import { ListOfTasks } from "@/features/task/ui";

function Home(): JSX.Element {
  const state = useTaskModalStore();

  const { isLoading, data } = useQuery(
    "tasks",
    async () =>
      await axiosInstance<{ data: Task[] }>("/task", {
        method: "GET",
      }).then((res) => res.data.data),
  );

  const handleSelectTask = (task: Task): void => {
    state.selectTask(task);
    state.setMode("edit");
    state.setOpen(true);
  };

  const handleAddTask = (): void => {
    state.resetTask();
    state.setMode("create");
    state.setOpen(true);
  };

  return (
    <Layout>
      <Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddTask}
        >
          add task
        </Button>
      </Box>

      <ListOfTasks
        loading={isLoading}
        selectTask={handleSelectTask}
        tasks={data}
      />

      <TaskModal />
    </Layout>
  );
}

export default Home;
