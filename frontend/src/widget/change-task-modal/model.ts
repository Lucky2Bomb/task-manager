import { type Task } from "@/shared/api/models";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Mode = "create" | "edit";

interface TaskModalState {
  open: boolean;
  task: Task;
  mode: Mode;
  setOpen: (value: boolean) => void;
  selectTask: (newTask: Task) => void;
  resetTask: () => void;
  setMode: (mode: Mode) => void;
}

export const useTaskModalStore = create<TaskModalState>()(
  devtools(
    (set) => ({
      open: false,
      task: {
        id: -1,
        name: "",
        description: "",
        deadline: new Date(),
        duration: 0,
        party_id: -1,
        status_id: -1,
        user_id: -1,
      },
      mode: "edit",
      setOpen: (open) => {
        set(() => {
          return { open };
        });
      },
      selectTask: (newTask) => {
        set(() => {
          return { task: newTask };
        });
      },
      resetTask: () => {
        set(() => {
          return {
            task: {
              id: -1,
              name: "",
              description: "",
              deadline: new Date(),
              duration: 0,
              party_id: -1,
              status_id: -1,
              user_id: -1,
            },
          };
        });
      },
      setMode: (mode) => {
        set(() => {
          return { mode };
        });
      },
    }),
    {
      name: "task-modal-state",
    },
  ),
);
