import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { TaskCard } from "@/entities/task/ui";
import Layout from "@/widget/layout";
import { type Task } from "@/shared/api/models";
import { useTaskModalStore } from "@/widget/change-task-modal/model";
import TaskModal from "@/widget/change-task-modal/ui";
import { useQuery } from "react-query";
import { axiosInstance } from "@/shared/api/base";

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

  if (isLoading || typeof data === "undefined") {
    return <>is loading...</>;
  }

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

      {data.map((item) => (
        <TaskCard
          key={`${item.id}_${item.name}`}
          task={item}
          onClick={() => {
            handleSelectTask(item);
          }}
        />
      ))}

      <TaskModal />
    </Layout>
  );
}

export default Home;
