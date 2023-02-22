import { Task } from "@/share/api/models";
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

interface TaskEditModalState {
    open: boolean;
    setOpen: (value: boolean) => void;
    task: Task;
    selectTask: (newTask: Task) => void;
}

export const useTaskEditModalStore = create<TaskEditModalState>()(
    devtools(
        persist(
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
                setOpen: (value) => set((state) => {
                    return { open: value };
                }),
                selectTask: (newTask) => set((state) => {
                    return { task: newTask };
                })
            }),
            {
                name: "task-edit-modal-state",
            }
        )
    )
)
