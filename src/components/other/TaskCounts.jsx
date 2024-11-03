import React from "react";

const TaskCounts = ({ data }) => {
  return (
    <div className="flex screen justify-between gap-5 mt-10">
      <div className="px-9 py-6 w-[45%] bg-red-400 rounded-xl">
        <h2 className="text-3xl font-medium">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="px-9 py-6 w-[45%] bg-blue-400 rounded-xl">
        <h2 className="text-3xl font-medium">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>
      <div className="px-9 py-6 w-[45%] bg-green-400 rounded-xl">
        <h2 className="text-3xl font-medium">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-semibold">Accept Task</h3>
      </div>
      <div className="px-9 py-6 w-[45%] bg-yellow-400 rounded-xl">
        <h2 className="text-3xl font-medium">{data.taskNumbers  .failed}</h2>
        <h3 className="text-xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskCounts;
