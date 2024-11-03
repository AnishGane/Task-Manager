import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="bg-red-400 rounded-xl w-[300px] h-full flex-shrink-0 p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm rounded px-3 py-1">
          {data.taskCategory}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl mt-5 font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2 min-h-[60px]">{data.taskDescription}</p>
      <div className="mt-6">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
