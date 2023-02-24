import RadioStatus from "@/entities/status/ui/radio-status/ui";
import { TaskFields } from "@/entities/task/ui";
import { BasicModal } from "@/shared/ui";
import { Box, Button } from "@mui/material";
import React from "react";
import { useTaskModalStore } from "./model";

function TaskModal() {
  const { open, setOpen, task, selectTask, mode } = useTaskModalStore();

  return (
    <BasicModal open={open} setOpen={setOpen} title={`${mode} task`}>
      <Box display="flex" flexDirection="column" gap={2} pt={1}>
        <Box>
          <TaskFields task={task} setTask={selectTask} />
        </Box>
        <Box>
          <RadioStatus
            setValue={(id) => {
              selectTask({ ...task, status_id: id });
            }}
            value={task.status_id}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <Button variant="contained">{mode}</Button>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            cancel
          </Button>
        </Box>
      </Box>
    </BasicModal>
  );
}

export default TaskModal;
