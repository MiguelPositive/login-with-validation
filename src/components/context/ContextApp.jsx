import React from "react";
import { createContext, useState } from "react";
import { users } from "../data/data";

export const store = createContext();

const ContextApp = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUser = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const showValues = () => {
    alert(`usuario: ${user} passowrd: ${password}`);
  };

  return (
    <store.Provider
      value={{
        handleChangeUser,
        handleChangePassword,
        showValues,
        user,
        password,
      }}
    >
      {props.children}
    </store.Provider>
  );
};

export default ContextApp;
