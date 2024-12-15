"use client";

import React, { useEffect, useContext, useState } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskContext from "@/app/context/TaskContex";
import { useParams } from "next/navigation";

const UpdateTask = () => {
  const params = useParams();
  const userTaskId = params.UpdateTaskID;
  const { GetSingleTask, UpdateTask } = useContext(TaskContext);

  const [userTask, setUserTask] = useState({
    taskTitle: "",
    completed: false,
  });

  // Fetch single task details
  const fetchTaskDetails = async () => {
    try {
      const resp = await GetSingleTask({ userTaskId });
      if (resp?.status === true) {
        const { title, completed } = resp.data;
        setUserTask({
          taskTitle: title || "",
          completed: completed,
        });
      } else {
        toast.warn("Failed to fetch task details.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the task.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTaskDetails();
  }, []);

  // Handle task update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resp = await UpdateTask({
        taskId: userTaskId,
        title: userTask.taskTitle,
        completed: userTask.completed,
      });

      if (resp.status === true) {
        toast.success("Task updated successfully!");
      } else {
        toast.warn("Failed to update task.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the task.");
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="flex items-center justify-center min-h-[85vh]">
        <section className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-4xl text-center font-bold text-gray-700 capitalize mb-6">
            Update Task
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <InputField
                  placeholderType="Enter Task"
                  inputValue={userTask.taskTitle}
                  inputType="text"
                  operation={(e) =>
                    setUserTask({ ...userTask, taskTitle: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <div className="flex mt-10 justify-center">
                <select
                  value={userTask.completed ? 1 : 0}
                  onChange={(e) => {
                    setUserTask({...userTask,completed: e.target.value === "1",});}
                  }
                  className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value={0}>Pending</option>
                  <option value={1}>Completed</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                buttonText="Update"
                buttonType="submit"
                buttonColor="primary"
              />
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default UpdateTask;
