import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    // const data = JSON.parse(localStorage.getItem("employees"));
    const data = userData?.employees;
    // console.log(data);
    data.forEach(function (elem) {
      if (assignTo == elem.first_name) {
        elem.tasks.push(newTask);
        // console.log(elem);

        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
      }
    });

    // localStorage.setItem("employees", JSON.stringify(data));
    setUserData(data);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-10 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap items-start justify-between w-full"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-lg text-gray-300 mb-2">Task Title</h3>
            <input
              className="text-sm py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-lg text-gray-300 mb-2">Date</h3>
            <input
              type="date"
              className="text-sm py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-lg text-gray-300 mb-2">Assign To</h3>
            <input
              type="text"
              className="text-sm py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-lg text-gray-300 mb-2">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="text-sm py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-lg text-gray-300 mb-0.5">Description</h3>
          <textarea
            name=""
            rows={10}
            cols={30}
            placeholder="Type here"
            className="w-full h-[17rem] text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            style={{ resize: "none" }}
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded text-lg font-semibold mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
