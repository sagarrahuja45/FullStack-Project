import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./login.css";
//import { useNavigate } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";

const Login = () => {
  //const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/login", data);
      console.log(response.data.userId);
      const userId = response.data.userId;
      if (response.status === 200) {
        console.log("logged in");
        setLoggedIn(true);
        setUserId(userId);
      }
    } catch (err) {
      console.log(err);
    }
  };
console.log(userId);
  return (
    <>
      {!loggedIn ? (
        <>
          <section className="wrapper-login">
            <div className="container-login">
              <div className="card">
                <div className="card-title">
                  <h1>LOGIN</h1>
                </div>

                <div className="main-login">
                  <form
                    className="form-login"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="input-field"
                      {...register("email", { required: "Email is required" })}
                    ></input>
                    {errors.email && (
                      <span className="errors">* {errors.email.message}</span>
                    )}

                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="input-field"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    ></input>
                    {errors.password && (
                      <span className="errors">
                        * {errors.password.message}
                      </span>
                    )}
                    <input
                      type="submit"
                      className="login-button"
                      value="login"
                    ></input>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default Login;
