import { Stack } from "@mui/material";
import TaskCard from "./TaskCard";
import { ReactNode } from "react";

interface TaskColumnProps {
  title: string;
  children: ReactNode;
}

const TaskColumn = ({ title, children }: TaskColumnProps) => {
  return (
    <Stack direction="column" spacing={2} sx={{ p: 2 }}>
      {children}
      <h2>{title}</h2>
      <TaskCard />
    </Stack>
  );
};

export default TaskColumn;
