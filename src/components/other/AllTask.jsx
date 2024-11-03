import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  // const authData = useContext(AuthContext);
  // console.log(authData?.employees);

  const [userData] = useContext(AuthContext);
  // console.log(userData?.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-10  rounded">
      <div className="bg-red-400 mb-2 py-2 px-4 rounded flex justify-between text-center font-semibold text-lg">
        <h2 className="w-1/5 ">Employee Name</h2>
        <h3 className="w-1/5 ">New Task</h3>
        <h5 className="w-1/5 ">Acive Task</h5>
        <h5 className="w-1/5 ">Completed</h5>
        <h5 className="w-1/5 ">Failed</h5>
      </div>

      <div className=" overflow-auto">
        {userData?.employees.map(function (e, idx) {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 rounded flex justify-between font-medium text-center"
            >
              <h2 className="w-1/5">{e.first_name}</h2>
              <h3 className="w-1/5 text-yellow-600">{e.taskNumbers.newTask}</h3>
              <h5 className="w-1/5 text-blue-600">{e.taskNumbers.active}</h5>
              <h5 className="w-1/5 text-white">{e.taskNumbers.completed}</h5>
              <h5 className="w-1/5 text-red-600">{e.taskNumbers.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
