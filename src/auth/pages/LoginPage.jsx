import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const {handleLogin} = useContext(AuthContext);

  const handleLoginUser = () => {
    handleLogin("Saul Castillo");
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr></hr>
        <button className="btn btn-primary" onClick={handleLoginUser}>
          Login
        </button>
      </div>
    </>
  );
};
