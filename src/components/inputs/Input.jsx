import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Input = ({ placeholder, user, action }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [logoEye, setLogoEye] = useState("bi bi-eye-slash-fill");
  const [typeText, setTypeText] = useState(true);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (showPassword) {
      setLogoEye("bi bi-eye-fill");
      setTypeText(false);
    } else {
      setLogoEye("bi bi-eye-slash-fill");
      setTypeText(true);
    }
  }, [showPassword]);

  return (
    <div id="container-input" className="relative">
      <input
        type={typeText ? "text" : "password"}
        placeholder={placeholder}
        className="w-full h-[2rem] focus:outline-none rounded-md bg-white/90 pl-3 pr-8"
        onChange={action}
      />

      <div
        className="absolute right-2 top-1"
        onClick={user ? null : handleClickShowPassword}
      >
        <i
          className={
            user
              ? "bi bi-person-circle text-[#272542]"
              : `${logoEye} cursor-pointer text-[#272542]`
          }
        ></i>
      </div>
    </div>
  );
};

export default Input;
