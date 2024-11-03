import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  // console.log(data);
  return (
    <div
      id="taskList"
      className="py-5 mt-10 w-full h-[50%] flex justify-start gap-5 flex-nowrap overflow-x-auto"
    >
      {data?.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.NewTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
