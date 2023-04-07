import React from "react";
import { useState } from "react";

const Input = ({ placeholder, user, action }) => {
  return (
    <div id="container-input" className="relative">
      <input
        type={user ? "text" : "password"}
        placeholder={placeholder}
        className="w-full h-[2rem] focus:outline-none rounded-md bg-white/90 pl-3 pr-8"
        onChange={action}
      />

      <div className="absolute right-2 top-1">
        <i
          className={
            user
              ? "bi bi-person-circle text-[#272542]"
              : "bi bi-eye-slash-fill cursor-pointer text-[#272542]"
          }
        ></i>
      </div>
    </div>
  );
};

export default Input;
