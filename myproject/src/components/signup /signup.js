import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/signup", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="wrapper-signup">
        <div className="container-signup">
          <div className="card">
            <div className="card-title">
              {" "}
              <h1>CREATE ACCOUNT</h1>
              <span>Already have an account?</span>
              <a href="/login"> Sign In</a>
            </div>

            <div className="main-signup">
              <form className="form-signup" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="input-field"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                  ></input>
                  {errors.firstName && <span className="errors">* {errors.firstName.message}</span>}

                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="input-field"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                  ></input>
                  {errors.lastName && <span className="errors">* {errors.lastName.message}</span>}

                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="input-field"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "please enter a valid email",
                      },
                    })}
                  ></input>
                  {errors.email && <span className="errors">* {errors.email.message}</span>}

                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="input-field"
                    {...register("password", {
                      required: "password is required",
                    })}
                  ></input>
                  {errors.password && <span className="errors">* {errors.password.message}</span>}
                  <input
                    type="submit"
                    className="signup-button"
                    value="Signup"
                  ></input>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
