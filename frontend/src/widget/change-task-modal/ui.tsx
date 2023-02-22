import TaskFields from '@/entities/task/ui/task-fields';
import SelectStatus from '@/features/select-status/ui';
import { BasicModal } from '@/share/ui';
import React from 'react';
import { useTaskEditModalStore } from './model';

function ChangeTaskModal() {
    const { open, setOpen, task, selectTask } = useTaskEditModalStore();

    return (
        <BasicModal open={open} setOpen={setOpen} title={"change task"}>
            <TaskFields task={task} setTask={selectTask} />
            <SelectStatus setValue={(id) => selectTask({...task, status_id: id})} value={task.status_id} />
        </BasicModal>
    );
}

export default ChangeTaskModal;