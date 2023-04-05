import React from "react";
import Input from "../inputs/Input";
import Button from "../buttons/Button";

const Login = () => {
  return (
    <div className="w-[85%] h-[50%] bg-[#272542] rounded-2xl shadow-md shadow-[#272542] relative 370px:h-[52%] 450px:w-[calc(23rem+0.5em)]  1367px:w-[calc(28rem+0.5em)]">
      <div className="w-[100px] h-[100px] bg-logo-cica bg-cover absolute left-[30%] -top-[15%] 350px:left-[35%] 1367px:left-[38%]"></div>

      <div id="elements" className="p-[10%] 450px:p-[15%]">
        <div className="mt-[30%] 400px:mt-[17%]">
          <Input placeholder={"Usuario"} user={true} />
        </div>

        <div className="mt-[15%]">
          <Input placeholder={"Contraseña"} user={false} />
        </div>

        <div className="mt-[10%]">
          <a href="#" className="text-gray-400 underline">
            Olvide mi contraseña
          </a>

          <div className="flex justify-center items-center mt-[12%] 350px:mt-[8%]">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
