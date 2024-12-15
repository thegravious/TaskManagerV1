import React from "react";
import TaskContext from "./TaskContex";
import axios from "axios";

interface TaskProviderType {
  children: React.ReactNode;
}

const TaskProvider: React.FC<TaskProviderType> = ({ children }) => {
  // Add Task
  const AddTask = async ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    try {
      const resp = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          title: title,
          body: description,
          userId: 1,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (resp.status === 201) {
        return {
          status: true,
          message: "Inserted Successfully",
        };
      } else {
        return {
          status: false,
          message: "Insert Failed",
        };
      }
    } catch (error: unknown) {
      return {
        status: false,
        message: error instanceof Error ? error.message : "An error occurred",
      };
    }
  };

  // Update Task
  const UpdateTask = async ({
    taskId,
    title,
    completed
  }: {
    taskId: number;
    title: string;
    completed : boolean
  }) => {
    try {
      const resp = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${taskId}`,
        {
          title: title,
          userId: taskId,
          completed
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (resp.status === 200) {
        return {
          status: true,
          message: "Task Updated Successfully",
        };
      } else {
        return {
          status: false,
          message: "Update Failed",
        };
      }
    } catch (error: unknown) {
      return {
        status: false,
        message: error instanceof Error ? error.message : "An error occurred",
      };
    }
  };

  // Get All Tasks
  const GetTask = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`
      );
      if (response.status === 200) {
        return {
          status: true,
          data: response.data,
          message: "Records found",
        };
      } else {
        return {
          status: false,
          data: [],
          message: "Something went wrong",
        };
      }
    } catch (error: unknown) {
      return {
        status: false,
        data: [],
        message: error instanceof Error ? error.message : "An error occurred",
      };
    }
  };

  // Get Single Task
  const GetSingleTask = async ({ userTaskId }: { userTaskId: number }) => {
    console.log(userTaskId)
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${userTaskId}`
      );
      if (response.status === 200) {
        return {
          status: true,
          data: response.data,
          message: "Record found",
        };
      } else {
        return {
          status: false,
          data: null,
          message: "Something went wrong",
        };
      }
    } catch (error: unknown) {
      return {
        status: false,
        data: null,
        message: error instanceof Error ? error.message : "An error occurred",
      };
    }
  };

  return (
    <TaskContext.Provider
      value={{ AddTask, UpdateTask, GetTask, GetSingleTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
