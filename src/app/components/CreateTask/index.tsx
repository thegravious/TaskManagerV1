"use client";
import React , {useState} from "react";
import Button from "../Button";
import Inputfeild from "../InputField";
import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTaskContext from "@/app/context/useTaskContext";


const CreateTask = () => {
  const { addTask } = useTaskContext();

  const [userTask, setUserTask] = useState({
    taskTitle: "",
    taskDescription: "",
  });

  const SubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resp = await addTask({
        title: userTask.taskTitle,
        description: userTask.taskDescription,
      });


      if (resp.status == true) {
        toast.success("Task Instered Successfully");
        setUserTask({
          taskTitle: "",
          taskDescription: "",
        });
      } else {
        toast.warn("task add failed.");
      }
    } catch (error) {
      return {
        status: false,
        message: error,
      };
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
        <section className="w-1/2 max-w-4xl bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-4xl text-center font-bold text-gray-700 capitalize mb-6">
            Add Task
          </h2>
          <form onSubmit={SubmitHandle}>
            <div className="space-y-6">
              <div>
                <Inputfeild
                  placeholderType="Enter Task"
                  inputValue={userTask.taskTitle}
                  inputType="text"
                  operation={(e) => {
                    setUserTask({ ...userTask, taskTitle: e.target.value });
                  }}
                />
              </div>
              <div>
                <Inputfeild
                  placeholderType="Enter Description"
                  inputValue={userTask.taskDescription}
                  inputType="text"
                  operation={(e) => {
                    setUserTask({...userTask,taskDescription: e.target.value,});
                  }}
                />
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                buttonText="Submit"
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

export default CreateTask;
