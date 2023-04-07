import React from "react";

const Button = ({ action }) => {
  return (
    <div
      className="w-3/5 bg-[#000d1386] text-gray-400 rounded-lg flex justify-center items-center p-1 cursor-pointer font-semibold transition-all duration-200 hover:-translate-y-2"
      onClick={action}
    >
      Inicia sesión
    </div>
  );
};

export default Button;
