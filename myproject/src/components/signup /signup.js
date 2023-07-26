import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import {
  StyleButton,
  StyleCard,
  StyleCardTitle,
  StyleCardTitleH1,
  StyleError,
  StyleForm,
  StyleInput,
  StyleMain,
  StyledContainer,
  StyledWrapper,
} from "./signup.styled";

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
      <StyledWrapper>
        <StyledContainer>
          <StyleCard>
            <StyleCardTitle>
              {" "}
              <StyleCardTitleH1>CREATE ACCOUNT</StyleCardTitleH1>
              <span>Already have an account?</span>
              <a href="/login"> Sign In</a>
            </StyleCardTitle>

            <StyleMain>
              <StyleForm onSubmit={handleSubmit(onSubmit)}>
                <StyleInput
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                ></StyleInput>
                {errors.firstName && (
                  <StyleError>* {errors.firstName.message}</StyleError>
                )}

                <StyleInput
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                ></StyleInput>
                {errors.lastName && (
                  <StyleError>* {errors.lastName.message}</StyleError>
                )}

                <StyleInput
                  type="text"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "please enter a valid email",
                    },
                  })}
                ></StyleInput>
                {errors.email && (
                  <StyleError>* {errors.email.message}</StyleError>
                )}

                <StyleInput
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                ></StyleInput>
                {errors.password && (
                  <StyleError>* {errors.password.message}</StyleError>
                )}
                <StyleButton type="submit">Signup</StyleButton>
              </StyleForm>
            </StyleMain>
          </StyleCard>
        </StyledContainer>
      </StyledWrapper>
    </>
  );
};

export default Signup;
