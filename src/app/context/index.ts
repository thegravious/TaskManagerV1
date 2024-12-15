import { createContext } from "react";

export type UserType = {
  completed: boolean;
  id: number;
  userId: number;
  title: string;
};

interface TaskContextType {
  addTask: (task: { title: string; description: string }) => Promise<{
    status: boolean;
    message: string;
  }>;
  updateTask: (task: {
    taskId: string;
    title: string;
    completed: boolean;
  }) => Promise<{
    status: boolean;
    message: string;
  }>;
  getTask: () => Promise<{
    status: boolean;
    data: UserType[];
    message: string;
  }>;
  getSingleTask: (task: { userTaskId: string }) => Promise<{
    status: boolean;
    data: UserType | null;
    message: string;
  }>;
}

const TaskContext = createContext<TaskContextType | null>(null);

export default TaskContext;