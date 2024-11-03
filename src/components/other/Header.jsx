import React, { useState, useEffect } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (props.data) {
      console.log(props.data);
      setUsername(props.data.first_name || "Admin");
    }
  }, [props.data]);

  const logOutUser = () => {
    // localStorage.clear();
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{username}👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg px-5 py-2 font-medium"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
