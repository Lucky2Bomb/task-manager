import { TaskCard } from "@/entities/task/ui";
import { type Task } from "@/shared/api/models";
import SkeletonList from "@/shared/ui/skeleton-list";
import React from "react";

interface Props {
  loading?: boolean;
  tasks?: Task[];
  selectTask?: (task: Task) => void;
  skeletonCount?: number;
}

export const ListOfTasks = ({
  loading = false,
  tasks = [],
  selectTask = (task: Task) => {},
  skeletonCount = 3,
}: Props) => {
  if (loading) {
    return <SkeletonList count={skeletonCount} />;
  }

  return (
    <>
      {tasks.map((item) => (
        <TaskCard
          key={`${item.id}_${item.name}`}
          task={item}
          onClick={() => {
            selectTask(item);
          }}
        />
      ))}
    </>
  );
};
