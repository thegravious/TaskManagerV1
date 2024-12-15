import React from "react";
import axios from "axios";
import TaskContext from "./index";

interface TaskProviderType {
  children: React.ReactNode;
}

const TaskProvider: React.FC<TaskProviderType> = ({ children }) => {
  const addTask = async ({
    title,
    description
  }: {
    title: string;
    description: string;
  }) => {
    try {
      const resp = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          title,
          body: description,
          userId: 1
        },
        {
          headers: {
            "Content-type": "application/json"
          }
        }
      );

      return resp.status === 201
        ? { status: true, message: "Inserted Successfully" }
        : { status: false, message: "Insert Failed" };
    } catch (error: unknown) {
      return {
        status: false,
        message: error instanceof Error ? error.message : "An error occurred"
      };
    }
  };

  const updateTask = async ({
    taskId,
    title,
    completed
  }: {
    taskId: string;
    title: string;
    completed: boolean;
  }) => {
    try {
      const resp = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${taskId}`,
        {
          title,
          userId: taskId,
          completed
        },
        {
          headers: {
            "Content-type": "application/json"
          }
        }
      );

      return resp.status === 200
        ? { status: true, message: "Task Updated Successfully" }
        : { status: false, message: "Update Failed" };
    } catch (error: unknown) {
      return {
        status: false,
        message: error instanceof Error ? error.message : "An error occurred"
      };
    }
  };

  const getTask = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`
      );
      return response.status === 200
        ? { status: true, data: response.data, message: "Records found" }
        : { status: false, data: [], message: "Something went wrong" };
    } catch (error: unknown) {
      return {
        status: false,
        data: [],
        message: error instanceof Error ? error.message : "An error occurred"
      };
    }
  };

  const getSingleTask = async ({ userTaskId }: { userTaskId: string }) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${userTaskId}`
      );
      return response.status === 200
        ? { status: true, data: response.data, message: "Record found" }
        : { status: false, data: null, message: "Something went wrong" };
    } catch (error: unknown) {
      return {
        status: false,
        data: null,
        message: error instanceof Error ? error.message : "An error occurred"
      };
    }
  };

  return (
    <TaskContext.Provider
      value={{ addTask, updateTask, getTask, getSingleTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
