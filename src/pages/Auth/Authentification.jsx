"use client";
import React from "react";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";

const Authentification = () => {
  const [state, setState] = React.useState("login");
  return (
    <div className="flex justify-center">
      {state === "login" ? (
        <Login setState={setState} />
      ) : (
        <Signup setState={setState} />
      )}
    </div>
  );
};

export default Authentification;
