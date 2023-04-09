import React from "react";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import { store } from "../context/ContextApp";
import { useContext } from "react";
import { users } from "../data/data";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    handleChangeUser,
    handleChangePassword,
    showValues,
    user,
    password,
    setIsAdmin,
  } = useContext(store);

  const navigate = useNavigate();

  const validateRole = () => {
    let userFiltered = users.find((iterator) => {
      return user == iterator.user;
    });

    console.log(userFiltered);

    if (userFiltered.role == "admin") {
      console.log("es un administrador");
      navigate("/admin");
      setIsAdmin(true);
    } else {
      console.log("es un usuario normal");
      navigate("/normaluser");
    }
  };

  const validateCredentials = () => {
    let userExist = false;

    users.forEach((iterator) => {
      if (iterator.user == user && iterator.password == password) {
        userExist = true;
      }
    });

    if (userExist) {
      console.log("credenciales validas");

      validateRole();
    } else {
      console.log("credenciales invalidas");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[85%]  bg-[#272542] rounded-2xl shadow-md shadow-[#272542] relative  450px:w-[calc(23rem+0.5em)]  1367px:w-[calc(28rem+0.5em)]">
        <div className="w-[100px] h-[100px] bg-logo-cica bg-cover absolute left-[30%] -top-[15%] 350px:left-[35%] 1367px:left-[38%]"></div>

        <div id="elements" className="p-[10%]  450px:p-[15%] ">
          <div className="mt-[30%] 400px:mt-[17%]">
            <Input
              placeholder={"Usuario"}
              user={true}
              action={handleChangeUser}
            />
          </div>

          <div className="mt-[15%]">
            <Input
              placeholder={"Contraseña"}
              user={false}
              action={handleChangePassword}
            />
          </div>

          <div className="mt-[10%]">
            <a href="#" className="text-gray-400 underline">
              Olvide mi contraseña
            </a>

            <div className="flex justify-center items-center mt-[12%] 350px:mt-[10%]">
              <Button action={validateCredentials} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
