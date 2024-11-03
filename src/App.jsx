import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData?.employees);

  // This code: To prevent the case where user reload the website, then they are not redirected to login page again
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    // console.log(loggedInUser) // object with role : employee / admin
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);
  // :

  const handleLogin = (email, password) => {
    // userData contains employee array and admin object as AuthContext returns admin and employee object
    if (userData) {
      const admin = userData.admin;
      if (admin?.email === email && admin?.password === password) {
        setUser("admin");
        setLoggedInUserData(admin);
      } else {
        alert("Invalid Credentials");
      }
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
    } else if (userData) {
      const employee = userData?.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
      } else {
        alert("Invalid Credentials");
      }
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
