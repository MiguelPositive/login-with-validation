import React from "react";

const Input = ({ placeholder, user }) => {
  return (
    <div id="container-input" className="relative">
      <input
        type={user ? "text" : "password"}
        placeholder={placeholder}
        className="w-full h-[2rem] focus:outline-none rounded-md bg-white/90 pl-3 pr-8"
      />

      <div className="absolute right-2 top-1">
        <i
          className={
            user ? "bi bi-person-circle" : "bi bi-eye-fill cursor-pointer"
          }
        ></i>
      </div>
    </div>
  );
};

export default Input;
