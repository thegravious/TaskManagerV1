import Link from "next/link";
import React from "react";

interface TaskProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const DisplayCard: React.FC<TaskProps> = ({ task }) => {
  return (
    <div
      className={`bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 ${task.completed ? "border-green-500 border-l-4" : "border-red-500 border-l-4"}`}>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800">Task ID: {task.id}</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">{task.title}</p>
        <p className={`mt-2 text-sm font-medium ${task.completed ? "text-green-600" : "text-red-600"}`}>{task.completed ? "Completed" : "Pending"}</p>
        <Link
          href={`/UpdateTask/${task.id}`}
          className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 inline-block">View
          </Link>
      </div>
    </div>
  );
};

export default DisplayCard;
