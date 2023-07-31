import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
} from "./login.styled";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/login", data);
      const { token } = response.data;
      localStorage.setItem("token", token);
      if (response.status === 200 && token) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <StyledWrapper>
        <StyledContainer>
          <StyleCard>
            <StyleCardTitle>
              <StyleCardTitleH1>Login</StyleCardTitleH1>
            </StyleCardTitle>

            <StyleMain>
              <StyleForm onSubmit={handleSubmit(onSubmit)}>
                <StyleInput
                  type="text"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
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
                <StyleButton type="submit">Login</StyleButton>
              </StyleForm>
            </StyleMain>
          </StyleCard>
        </StyledContainer>
      </StyledWrapper>
    </>
  );
};

export default Login;
