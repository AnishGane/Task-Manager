import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border-2 border-emerald-200 rounded-xl">
        <form
          className="flex flex-col items-center justify-center p-20"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            required
            className="border-2 border-emerald-600  text-lg font-medium outline-none bg-transparent py-2 px-6 rounded-full placeholder:text-gray-400"
            value={email}
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            className="border-2 border-emerald-600  text-lg font-medium outline-none bg-transparent py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="w-full cursor-pointer bg-emerald-600 py-2 px-8 text-xl text-white border-0 outline-none rounded-full mt-7">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
