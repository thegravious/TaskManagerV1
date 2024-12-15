"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DisplayCard from "../components/DisplayCard";
import Button from "../components/Button";
import useTaskContext from "../context/useTaskContext";
import { UserType } from "../context";

const DisplayAllTask = () => {
  const [loadMore , setLoadMore] = useState(6)
  const { getTask } = useTaskContext();

  const [task, setTask] = useState<UserType[]>([]);

  const fetchTasks = async () => {
    try {
      const resp = await getTask();
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
        {task.slice(0,loadMore).map((data, index) => (
          <DisplayCard key={index} task={data} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button
        buttonColor="primary"
        buttonType="button"
        buttonText="Load More"
        operation={() => setLoadMore(prev =>{
          return prev + 6
        })}
        />
      </div>
    </>
  );
};

export default DisplayAllTask;
