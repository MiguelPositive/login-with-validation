import React from "react";
import Input from "../inputs/Input";

const Login = () => {
  return (
    <div className="w-[85%] h-[50%] bg-[#272542] rounded-2xl shadow-md shadow-[#272542] relative 450px:w-[calc(23rem+0.5em)] 1367px:w-[calc(28rem+0.5em)]">
      <div className="w-[100px] h-[100px] bg-logo-cica bg-cover absolute left-[30%] -top-[15%] 350px:left-[35%] 1367px:left-[38%]"></div>

      <div id="elements" className="p-[10%]">
        <div className="mt-[30%]">
          <Input placeholder={"Usuario"} user={true} />
        </div>

        <div className="mt-[15%]">
          <Input placeholder={"Contraseña"} user={false} />
        </div>
      </div>
    </div>
  );
};

export default Login;
