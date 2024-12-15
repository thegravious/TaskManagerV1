"use client";

import React, { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskContext from "@/app/context/TaskContex";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import Button from "../components/Button/Button";

const DisplayAllTask = () => {
  const [LoadMore , setLoadMore] = React.useState(6)
  const { GetTask } = useContext(TaskContext);

  const [task, setTask] = useState([]);

  const fetchTasks = async () => {
    try {
      const resp = await GetTask();
      if (resp?.status === true) {
        setTask(resp.data);
      } else {
        setTask([])
      }
    } catch (error) {
      toast.error("An error occurred while fetching tasks.");
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);
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

      <div className="flex flex-wrap items-center justify-center gap-4">
        {task.slice(0,LoadMore).map((data, index) => (
          <DisplayCard key={index} task={data} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button
        buttonColor="primary"
        buttonType="button"
        buttonText="Load More"
        operation={() => setLoadMore(LoadMore + 6)}
        />
      </div>
    </>
  );
};

export default DisplayAllTask;
